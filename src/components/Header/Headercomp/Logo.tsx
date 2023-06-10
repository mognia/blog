import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";
export default function Logo() {
  return (
    <>
        <Link href='/'>
        <Image  width={150} height={150} src={"/img/logo.svg"} className={"object-cover rounded-lg"} alt="My Image Not Found" />
        </Link>
    </>
  );
}
