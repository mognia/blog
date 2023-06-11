import React, {useRef} from "react";
import Header from "@/components/Header/Header";
import SocialMediaArround from "@/components/Home/SocialMediaArround/SocialMediaArround";
import ListLayout from "@/layouts/ListLayout";
import kebabCase from '../../../../lib/utils/kebabCase'
import {getPostsMetaData} from "../../../../lib/getPostsData";

export default function BlogTag({posts, title}) {

    const homeRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Header sectionsRef={homeRef}/>
            <SocialMediaArround finishedLoading={true}/>
            <ListLayout initialDisplayPosts={posts} title={title}/>
        </>
    )
}

export async function getServerSideProps(context) {
    // const page = context.query.page ? context.query.page
    const postsMetaData = getPostsMetaData();
    const filteredBlogPosts = postsMetaData.filter((frontMatter) => {
        const searchContent = frontMatter.tags.map(tag=>tag.split(' ').join('-'))
        console.log(searchContent)
        return searchContent.includes(context.query.tag.toLowerCase())
    });
    // console.log(searchContent)
    return {
        props: {
            posts: filteredBlogPosts,
            title: `#${context.query.tag}`,
        }
    }
}
