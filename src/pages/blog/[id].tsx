import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getAllPostsPath, getPostData } from '../../../lib/getPostsData';

type BlogProps = {
    postMetadata: any;
    postContent: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const components = {
    h1: (props: any) => (
        <h1
            style={{
                fontSize: 'calc(1rem + 1.5vw)',
                color: 'black',
                margin: '1vh 0 1vh 0',
            }}
            {...props}
        />
    ),
    p: (props: any) => (
        <p
            style={{
                fontSize: 'calc(1rem + 0.1vw)',
                color: '#000000e6',
                margin: '0vh 0 1vh 0',
            }}
            {...props}
        />
    ),
};

export default function Blog({ postMetadata, postContent }: BlogProps) {
    return (
        <div>
            <div className="blog-content">
                <MDXRemote {...postContent} components={components} />
            </div>

            <style jsx>{`
        .blog-content {
          display: flex;
          flex: 100%;
          flex-direction: column;
          margin: 1vw 25vw 1vw 25vw;
          width: 50vw;
          max-width: 50vw;
        }
      `}</style>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostsPath();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id);
    const mdxSource = await serialize(postData.content);
    return {
        props: {
            postMetadata: postData.metadata,
            postContent: mdxSource,
            id: params.id,
        },
    };
}