import React from "react";
import { motion } from "framer-motion";
import Img from "@/components/smallComp/image/Img";
export default function Logo() {
  return (
    <>
        <Img src={"/img/logo.svg"} className={"object-cover rounded-lg"} alt="My Image Not Found" />
    </>
  );
}
