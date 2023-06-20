import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {bundleMDX} from "mdx-bundler";
import remarkExtractFrontmatter from './mdxLibs/remarkExtractFrontmatter'
import remarkTocHeadings from "./mdxLibs/remark-toc-headings";
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkMath from 'remark-math'
import remarkCodeTitles from './mdxLibs/remark-code-title'
import remarkImgToJsx from './mdxLibs/remark-img-to-jsx'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'

import readingTime from 'reading-time'

// current 'posts' directory
const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extention = '.mdx';

interface ParsedFile {
    id?: string;
    name: string;
    ext: string;
    dir: string;
    base: string;
    root: string;
}

function getAllFilesInDirectory(): ParsedFile[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return path.parse(fileName)
    })
}

export function getMdxFiles(): ParsedFile[] {
    const allFiles = getAllFilesInDirectory();
    return allFiles.filter(parsedFile => parsedFile.ext == mdx_file_extention);
}

export function getAllPostsPath() {
    const allMdxFiles = getMdxFiles();
    return allMdxFiles.map((parsedFile) => {
        return {
            params: {
                id: parsedFile.name
            }
        }
    })
}

export function getPostsMetaData() {
    const allMdxFiles = getMdxFiles();

    const postsMetaData = allMdxFiles.map((parsedFile) => {
        const fullPath = path.join(postsDirectory, parsedFile.base);

        // get MDX metadata and content
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // get metadata, content
        const {data, content} = matter(fileContents);
        let metadata = data;
        metadata['id'] = parsedFile.name;
        return metadata;
    });
    return postsMetaData;
}

const root = process.cwd()
export async function getPostData(id: string) {
const fullPath = path.join(postsDirectory, id + mdx_file_extention);
    const source = fs.existsSync(fullPath)
       && fs.readFileSync(fullPath, 'utf8')
    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get metadata, content
    const {data, content} = matter(fileContents);
    let metadata = data;
    metadata['id'] = id;

    let toc = []

    const {code, frontmatter} = await bundleMDX({
        source,
        // mdx imports can be automatically source from the components directory
        cwd: path.join(root, 'components'),
        mdxOptions(options, frontmatter) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkExtractFrontmatter,
                [remarkTocHeadings, {exportRef: toc}],
                remarkGfm,
                remarkCodeTitles,
                [remarkFootnotes, {inlineNotes: true}],
                remarkMath,
                remarkImgToJsx,
            ]
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeSlug,
                rehypeAutolinkHeadings,
                rehypeKatex,
                [rehypeCitation, {path: path.join(root, 'data')}],
                [rehypePrismPlus, {ignoreMissing: true}],
                rehypePresetMinify,
            ]
            return options
        },
        esbuildOptions: (options) => {
            options.loader = {
                ...options.loader,
                '.ts': 'tsx',
            }
            return options
        },
    })

    return {
        mdxSource: code,
        toc,
        frontMatter: {
            readingTime: readingTime(code),
            slug: id || null,
            fileName: fs.existsSync(fullPath)&&`${metadata.title}.mdx`,
            ...frontmatter,
            date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
        },

    }
}