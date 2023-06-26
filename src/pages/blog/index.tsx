import {getPostsMetaData} from "../../../lib/getPostsData";
import React, {useRef, useState} from "react";
import Header from "@/components/Header/Header";
import SocialMediaArround from "@/components/Home/SocialMediaArround/SocialMediaArround";
import ListLayout from "@/layouts/ListLayout";
import {siteMetadata} from "@/data/siteMetadata";
import {PageSEO} from "@/components/SEO/SEO";

interface PostData {
    // Define the properties and their types for a post
    tags: any;
    title: string;
    summary: string;
    date: string;
    id: string;
}

interface IndexProps {
    // Define the type of the postsData prop
    postsData: PostData[];
    pagination:any;
    initialDisplayPosts:any
}

export default function BlogIndex({postsData,pagination,initialDisplayPosts}: IndexProps) {
    const homeRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
            <Header sectionsRef={homeRef}/>
            <SocialMediaArround finishedLoading={true}/>
            <ListLayout posts={postsData}  pagination={pagination} initialDisplayPosts={initialDisplayPosts} />
        </>
    )
}

export async function getServerSideProps(context) {
    const page = context.query.page?context.query.page:1; // Access query params from context object
    const POSTS_PER_PAGE = 5
    const postsMetaData = getPostsMetaData();
    const pageNumber = parseInt(page)
    const initialDisplayPosts = postsMetaData.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(postsMetaData.length / POSTS_PER_PAGE),
    }
    return {
        props: {
            postsData: postsMetaData,
            title: 'posts',
            pagination:pagination,
            initialDisplayPosts:initialDisplayPosts
        }
    }
}
