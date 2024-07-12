import Link from 'next/link'
import type { Blog } from "@/payload-types"
import Image from 'next/image'
import { trimStringToLength } from '@/functions/stringTrimmer'

export const Article = ({
    blog,
    id,
    style
}: {
    blog: Blog,
    id: number,
    style?: string
}) => {
  return (
    <article className={`${style} ${id === 0 ? " lg:col-span-2" : ""}`}>
        <Link href={`/blog/${blog.slug}`} className=''>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
                {/* @ts-expect-error */}
                <Image className='object-cover aspect-video w-full lg:aspect-square' src={blog.content.image.url} alt={blog.content.image.alt} width={300} height={300}/>
                <div className={`flex flex-col justify-around h-full lg:col-span-2 pt-4 md:p-4`}>
                    <div className={`${id === 0 ? "space-y-4" : "space-y-2"}`}>
                        <h3 className={` ${id === 0 ? "text-xl lg:text-3xl" : "text-xl lg:text-base"} font-bold`}>{blog.title}</h3>
                        <p className={` ${id === 0 ? "" : "lg:text-sm"}`}>{id === 0 ? blog.content.description : `${trimStringToLength(blog.content.description, 70)}...`}</p>
                    </div>
                    <p className={` pt-2 ${id === 0 ? "" : "lg:text-sm"}`}>{new Date(blog.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: "long"})}</p>
                </div>
            </div>
        </Link>
    </article>
  )
}
