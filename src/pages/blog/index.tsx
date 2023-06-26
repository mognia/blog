import {getPostsMetaData} from "../../../lib/getPostsData";
import React, {useEffect, useRef, useState} from "react";
import Header from "@/components/Header/Header";
import SocialMediaArround from "@/components/Home/SocialMediaArround/SocialMediaArround";
import ListLayout from "@/layouts/ListLayout";
import {siteMetadata} from "@/data/siteMetadata";
import {PageSEO} from "@/components/SEO/SEO";
import {useRouter} from "next/router";

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
}

export default function BlogIndex({postsData}: IndexProps) {
    const homeRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const POSTS_PER_PAGE = 5
    const  page  = router.query.page ?router.query.page:1 ;
    const pageNumber = parseInt(String(page))
    const initialDisplayPosts = postsData.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(postsData.length / POSTS_PER_PAGE),
    }
    return (
        <>
            <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
            <Header sectionsRef={homeRef}/>
            <SocialMediaArround finishedLoading={true}/>
            <ListLayout posts={postsData}  pagination={pagination} initialDisplayPosts={initialDisplayPosts} />
        </>
    )
}

export async function getStaticProps() {
    const postsMetaData = getPostsMetaData();
    return {
        props: {
            postsData: postsMetaData,
            title: 'posts',
        }
    }
}
