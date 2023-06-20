import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {getAllPostsPath, getMdxFiles, getPostData} from '../../../lib/getPostsData';
import {MDXLayoutRenderer} from "@/components/MDXcomponents/MDXComponents";
import Header from "@/components/Header/Header";
import React, {useRef} from "react";

const DEFAULT_LAYOUT = 'PostLayout'

export default function Blog({ postData, prev, next }) {
    const { mdxSource, toc, frontMatter } = postData;
    const homeRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Header sectionsRef={homeRef}/>
            <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
                <div className='info-container h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-28  '>
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
                </div>
            </div>
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
    return {
        props: { postData, prev, next }
    };
}
export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '')
}