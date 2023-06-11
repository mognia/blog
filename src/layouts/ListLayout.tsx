import {motion} from "framer-motion";
import formatDate from "../../lib/utils/formatDate";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import Link from "next/link";
import Tag from "@/components/Tag";
import React, {useRef, useState} from "react";
import Pagination from "@/components/Pagination/Pagination";

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    });
    const displayPosts =
        initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
    return(
        <>
            <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
                <div className='info-container h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52 '>
                    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                        <motion.div
                            initial={{
                                x: -1000,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                type: "spring",
                                duration: 1.2,
                                delay: 0.3,
                            }}
                            className="text-AAsecondary"
                        >
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                                {/*{title}*/}
                            </h1>
                            <div className="relative max-w-lg">
                                <input
                                    aria-label="Search articles"
                                    type="text"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search articles"
                                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
                                />
                                <svg
                                    className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    </div>
                    {!filteredBlogPosts.length && 'No posts found.'}
                    {displayPosts?.map((metadata) => {
                        return (
                            <>
                                <motion.div
                                    initial={{
                                        y: 100,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        duration: 2.2,
                                        delay: 0.3,
                                    }}
                                    className="text-AAsecondary"
                                >
                                    <li key={metadata.id} className="py-4 my-4 list-none">
                                        <article
                                            className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                            <dl>
                                                <dt className="sr-only">Published on</dt>
                                                <dd className="text-base font-medium leading-6 text-gray-400 flex items-center">
                                                    <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
                                                    <div className="bg-gray-400 h-[0.2px] w-24 ml-4"></div>
                                                </dd>
                                            </dl>
                                            <div className="space-y-3 xl:col-span-3">
                                                <div>
                                                    <h3 className="text-2xl font-bold leading-8 tracking-tight flex items-center">
                                                        <ArrowIcon
                                                            className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"}/>
                                                        <Link href={`/blog/${metadata.title}`}
                                                              className="text-gray-300">
                                                            {metadata.title}
                                                        </Link>

                                                    </h3>
                                                    <div className="flex flex-wrap">
                                                        {metadata.tags?.map((tag) => (
                                                            <Tag key={tag} text={tag}/>
                                                        ))}
                                                    </div>

                                                </div>
                                                <div className="prose max-w-none text-gray-400">
                                                    {metadata.summary}
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                </motion.div>
                                {pagination && pagination.totalPages > 1 && !searchValue && (
                                    <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
                                )}
                            </>
                        )
                    })}
                </div>
                <style jsx>{`
                  .info-container {
                    margin: 0 5% 0 5%;
                  }

                  img {
                    width: 20%;
                    max-width: 20%;
                    height: auto;
                    margin-left: 40%;
                  }

                  .info-description {
                    font-size: 20px;
                  }
                `}</style>
            </div>
        </>
    )
}