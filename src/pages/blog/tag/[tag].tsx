import React, {useRef} from "react";
import Header from "@/components/Header/Header";
import SocialMediaArround from "@/components/Home/SocialMediaArround/SocialMediaArround";
import ListLayout from "@/layouts/ListLayout";
import kebabCase from '../../../../lib/utils/kebabCase'
import {getPostsMetaData} from "../../../../lib/getPostsData";
import {siteMetadata} from "@/data/siteMetadata";
import {TagSEO} from "@/components/SEO/SEO";
import {useRouter} from "next/router";
import {GetStaticPaths} from "next";

export default function BlogTag({posts}) {

    const homeRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const title = `#${router.query.tag}`
    const tag = String(router.query.tag)
    const filteredBlogPosts = posts.filter((frontMatter) => {
        const searchContent = frontMatter.tags.map(tag => tag.split(' ').join('-'))
        return searchContent.includes(tag.toLowerCase())
    });
    return (
        <>
            <TagSEO
                title={`${title} - ${siteMetadata.author}`}
                description={`${title} tags - ${siteMetadata.author}`}
            />
            <Header sectionsRef={homeRef}/>
            <SocialMediaArround finishedLoading={true}/>
            <ListLayout initialDisplayPosts={filteredBlogPosts} title={title}/>
        </>
    )
}
export async function getStaticProps() {
    const postsMetaData = getPostsMetaData();
    // console.log(searchContent)
    return {
        props: {
            posts: postsMetaData,
        }
    }
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}