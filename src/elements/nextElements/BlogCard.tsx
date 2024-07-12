import Link from 'next/link'
import type { Blog } from '@/payload-types'
import Image from 'next/image'

export const BlogCard = ({ blog, blacked }: { blog: Blog, blacked?: boolean }) => {
  return (
    <article className={`${blacked ? "bg-black hover:ring-light-cyan border-light-cyan" : "bg-white hover:ring-black border-black"} border-2 hover:scale-95 hover:ring-2 transition-all duration-300`}>
      <Link href={`/blog/${blog.slug}`}>
        <div className="flex flex-col space-y-4">
            {/* @ts-ignore */}
          <Image src={blog.content.image.url} alt={blog.content.image.alt} className="w-full h-60 object-cover" width={320} height={240}/>
          <div className='p-5 space-y-4 flex flex-col'>
            <div className='flex gap-2 flex-wrap'>
                {blog.content.category.map((category, id) => (
                <p key={id} className={`text-xs text-black capitalize bg-light-cyan p-1 rounded-sm whitespace-nowrap`}>
                    {category.replace(/-/g, ' ')}
                </p>
                ))}
            </div>
            <h3 className={`${blacked ? "text-white" : "text-black"} text-xl`}>{blog.title}</h3>
            <time className={`${blacked ? "text-white" : "text-black"} text-sm`} dateTime={new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} >{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</time>
          </div>
        </div>
      </Link>
    </article>
  )
}
