import React from "react";
import {motion} from "framer-motion";
import Link from 'next/link';

export default function DesktopMenu() {
    return (
        <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
            <motion.div
                initial={{
                    y: -40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}

                className=" text-AAsecondary"

            >
                <Link scroll={false} href="/#aboutSection">
                    &gt; 01. <span
                    className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">About</span>
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    y: -40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}

                className="text-AAsecondary"

            >
                <Link scroll={false} href="/#WhereIhaveWorkedSection">
                    &gt; 02.{" "}
                    <span
                        className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Experience</span>
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    y: -40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}

                className="text-AAsecondary"
            >
                <Link scroll={false} href="/#GetInTouchSection">
                    &gt; 03. <span
                    className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Contact</span>
                </Link>
            </motion.div>
            <motion.div
                initial={{
                    y: -40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    type: "spring",
                    duration: 1.2,
                    delay: 1,
                }}
                className="text-AAsecondary"
            >
                <Link scroll={false} href="/blog">
                    &gt; 04. <span
                    className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Blog</span>
                </Link>
            </motion.div>
            <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
                <motion.button
                    initial={{
                        y: -40,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        duration: 1.2,
                        delay: 1.2,
                    }}
                    // onClick={()=>{router.push("/resume.pdf")}}
                    className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
                >
                    Resume
                </motion.button>
            </a>

        </div>
    );
}
