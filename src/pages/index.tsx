import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import {siteMetadata} from "@/data/siteMetadata";
import {PageSEO} from "@/components/SEO/SEO";
export default function Home() {
    const context = useContext(AppContext);
    const aboutRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);



    const meta = {
        title: "Mohamad Ghafarnia - Software Engineer",
        description: `I've been working on Software development for 5 years . Get in touch with me to know more.`,
        image: "/img/fav.svg",
        type: "website",
    };

    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
                <Header sectionsRef={homeRef} />
                <MyName  />
                <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
                {context.sharedState.finishedLoading ? <AboutMe /> : <></>}
                {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
                {/*{context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}*/}
                {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
                {context.sharedState.finishedLoading ? (
                    <Footer githubUrl={"https://github.com/mognia/blog"} hideSocialsInDesktop={true} />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
