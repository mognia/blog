import Image from 'next/image'
import {getPostData, getPostsMetaData} from "../../../lib/getPostsData";
import formatDate from '../../../lib/utils/formatDate'
import Link from "next/link";
import Tag from "@/components/Tag";
import React, {useRef, useState} from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import Header from "@/components/Header/Header";
import SocialMediaArround from "@/components/Home/SocialMediaArround/SocialMediaArround";
import {motion} from "framer-motion";
import Pagination from "@/components/Pagination/Pagination";
import ListLayout from "@/layouts/ListLayout";

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
