import Link from 'next/link'
import kebabCase from '../../lib/utils/kebabCase'

const Tag = ({ text }) => {
    return (
        <Link href={`/tags/${kebabCase(text)}`}>
            <p className="mr-3 text-sm font-medium uppercase text-AAsecondary hover:text-AAError">
                #{text.split(' ').join('-')}
            </p>
        </Link>
    )
}

export default Tag