import Link from '@/components/MDXcomponents/CustomLink'
import PageTitle from '@/components/MDXcomponents/PageTitle'
import SectionContainer from '@/components/MDXcomponents/SectionContainer'
import { BlogSEO } from '@/components/SEO/SEO'
import Image from '@/components/MDXcomponents/Image'
import Tag from '@/components/Tag'
import {siteMetadata} from '@/data/siteMetadata'
// import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/MDXcomponents/ScrollTopAndComment'
interface PostLayoutInterface {
    frontMatter?:any,
    authorDetails?:any,
    next?:any,
    prev?:any,
    children?:any
}
const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`
// const discussUrl = (slug) =>
//     `https://mobile.twitter.com/search?q=${encodeURIComponent(
//         `${siteMetadata.siteUrl}/blog/${slug}`
//     )}`

const postDateTemplate:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout(props:PostLayoutInterface) {
    const { slug, fileName, date, title, images, tags } = props.frontMatter

    return (
        <>
        <SectionContainer>
            <BlogSEO
                url={`${siteMetadata.siteUrl}/blog/${slug}`}
                // authorDetails={authorDetails}
                {...props.frontMatter}
            />
            <ScrollTopAndComment />
            <article>
                <div className="xl:divide-y xl:divide-gray-700">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-400">
                                        <time dateTime={date}>
                                            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <PageTitle>{title}</PageTitle>
                            </div>
                        </div>
                    </header>
                    <div
                        className="divide-y divide-gray-700 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                        style={{ gridTemplateRows: 'auto 1fr' }}
                    >
                        {/*<dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">*/}
                        {/*    <dt className="sr-only">Authors</dt>*/}
                        {/*    <dd>*/}
                        {/*        <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">*/}
                        {/*            {authorDetails.map((author) => (*/}
                        {/*                <li className="flex items-center space-x-2" key={author.name}>*/}
                        {/*                    {author.avatar && (*/}
                        {/*                        <Image*/}
                        {/*                            src={author.avatar}*/}
                        {/*                            width="38px"*/}
                        {/*                            height="38px"*/}
                        {/*                            alt="avatar"*/}
                        {/*                            className="h-10 w-10 rounded-full"*/}
                        {/*                        />*/}
                        {/*                    )}*/}
                        {/*                    <dl className="whitespace-nowrap text-sm font-medium leading-5">*/}
                        {/*                        <dt className="sr-only">Name</dt>*/}
                        {/*                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>*/}
                        {/*                        <dt className="sr-only">Twitter</dt>*/}
                        {/*                        <dd>*/}
                        {/*                            {author.twitter && (*/}
                        {/*                                <Link*/}
                        {/*                                    href={author.twitter}*/}
                        {/*                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"*/}
                        {/*                                >*/}
                        {/*                                    {author.twitter.replace('https://twitter.com/', '@')}*/}
                        {/*                                </Link>*/}
                        {/*                            )}*/}
                        {/*                        </dd>*/}
                        {/*                    </dl>*/}
                        {/*                </li>*/}
                        {/*            ))}*/}
                        {/*        </ul>*/}
                        {/*    </dd>*/}
                        {/*</dl>*/}
                        <footer>
                            <div className="divide-gray-700 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                {tags && (
                                    <div className="py-4 xl:py-8">
                                        <h2 className="text-xs uppercase tracking-wide text-gray-400 ">
                                            Tags
                                        </h2>
                                        <div className="flex flex-wrap">
                                            {tags.map((tag) => (
                                                <Tag key={tag} text={tag} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {(props.next || props.prev) && (
                                    <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                                        {props.prev && (
                                            <div>
                                                <h2 className="text-xs uppercase tracking-wide text-gray-400">
                                                    Previous Article
                                                </h2>
                                                <div className="text-primary-500 hover:text-primary-400">
                                                    <Link href={`/blog/${props.prev.slug}`}>{props.prev.title}</Link>
                                                </div>
                                            </div>
                                        )}
                                        {props.next && (
                                            <div>
                                                <h2 className="text-xs uppercase tracking-wide text-gray-400">
                                                    Next Article
                                                </h2>
                                                <div className="text-primary-500 hover:text-primary-400">
                                                    <Link href={`/blog/${props.next.slug}`}>{props.next.title}</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="pt-4 xl:pt-8">
                                <Link
                                    href="/blog"
                                    className="text-AAsecondary"
                                >
                                    &larr; Back to the blog
                                </Link>
                            </div>
                        </footer>
                        <div className="divide-y divide-gray-700  xl:col-span-3 xl:row-span-2 xl:pb-0">

                            <div className="prose prose-dark max-w-none pt-10 pb-8 ">{props.children}</div>

                            {/*<div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">*/}
                            {/*    <Link href={discussUrl(slug)} rel="nofollow">*/}
                            {/*        {'Discuss on Twitter'}*/}
                            {/*    </Link>*/}
                            {/*    {` • `}*/}
                            {/*    <Link href={editUrl(fileName)}>{'View on GitHub'}</Link>*/}
                            {/*</div>*/}
                            {/*<Comments frontMatter={frontMatter} />*/}
                        </div>

                    </div>
                </div>
            </article>
        </SectionContainer>

        </>
    )
}
