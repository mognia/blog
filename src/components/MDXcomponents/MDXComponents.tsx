/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import CustomLink from './CustomLink'
import TOCInline from './TOCInline'
import Pre from './Pre'
import PostLayout from "@/layouts/PostLayout";
import Image from "@/components/MDXcomponents/Image";
export const MDXComponents = {
    Image,
    TOCInline,
    a: CustomLink,
    pre: Pre,
    wrapper: ({ components, layout, ...rest }) => {
        const Layout = require(`./../../layouts/${layout}`).default
        return <PostLayout {...rest} />
    },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

    return (
        <>
        <MDXLayout layout={layout}
                      components={MDXComponents} {...rest} />
        </>
    )
}
