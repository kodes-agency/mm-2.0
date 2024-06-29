import Link from 'next/link'
import type { Blog } from '@/payload-types'
import Image from 'next/image'

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className='bg-white border border-black hover:scale-105 hover:ring-2 hover:ring-black transition-all duration-300'>
      <Link href={`/blog/${blog.slug}`}>
        <div className="flex flex-col space-y-4">
            {/* @ts-ignore */}
          <Image src={blog.image.url} alt={blog.image.alt} className="w-full h-60 object-cover" width={320} height={240}/>
          <div className='p-5 space-y-4 flex flex-col'>
            <div className='flex gap-2 flex-wrap'>
                {blog.category.map((category, id) => (
                <p key={id} className="text-xs text-black capitalize bg-light-cyan p-1 rounded-sm whitespace-nowrap">
                    {category.replace(/-/g, ' ')}
                </p>
                ))}
            </div>
            <h3 className='text-black text-xl'>{blog.title}</h3>
            <time className='text-black text-sm' dateTime={new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} >{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</time>
          </div>
        </div>
      </Link>
    </article>
  )
}
