import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {getAllPostsPath, getMdxFiles, getPostData} from '../../../lib/getPostsData';
import {MDXLayoutRenderer} from "@/components/MDXcomponents/MDXComponents";

const DEFAULT_LAYOUT = 'PostLayout'

export default function Blog({ postData, prev, next }) {
    const { mdxSource, toc, frontMatter } = postData
    return (
        <>
            {frontMatter.draft !== true ? (
                <MDXLayoutRenderer
                    layout={frontMatter.layout || DEFAULT_LAYOUT}
                    toc={toc}
                    mdxSource={mdxSource}
                    frontMatter={frontMatter}
                    prev={prev}
                    next={next}
                />
            ) : (
                <div className="mt-24 text-center">
            {/*        <PageTitle>*/}
            {/*            Under Construction{' '}*/}
            {/*            <span role="img" aria-label="roadwork sign">*/}
            {/*  🚧*/}
            {/*</span>*/}
            {/*        </PageTitle>*/}
                </div>
            )}
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostsPath();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const allPosts =getMdxFiles()
    const postIndex = allPosts.findIndex((post) => formatSlug(post.name.replace(' ','-')) === params.id);
    const prev = allPosts[postIndex + 1] || null
    const next = allPosts[postIndex - 1] || null
    const postData = await getPostData(params.id);
    console.log("XXXXXXXXXXXXXXXXXXXX"+postData.mdxSource)
    return {
        props: { postData, prev, next }
    };
}
export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '')
}