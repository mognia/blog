import React from "react";
import { motion } from "framer-motion";
import Img from "@/components/smallComp/image/Img";
import Link from "next/link";
export default function Logo() {
  return (
    <>
        <Link href='/'>
        <Img src={"/img/logo.svg"} className={"object-cover rounded-lg"} alt="My Image Not Found" />
        </Link>
    </>
  );
}
