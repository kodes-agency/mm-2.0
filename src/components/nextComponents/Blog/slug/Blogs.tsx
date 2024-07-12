import { BlogCard } from '@/elements/nextElements/BlogCard'
import { Button } from '@/elements/nextElements/Button'
import { Blog } from '@/payload-types'

export const Blogs = ({ blogs } : { blogs: Blog[] }) => {
    return (
        <>
            {
                blogs && blogs.length > 0 && (
                    <section className="flex flex-col items-center pb-40 px-5 bg-white space-y-10 md:space-y-0">
                        <div className='max-w-4xl flex flex-col space-y-10 items-center'>
                            <h2 className='text-center font-bold text-4xl md:text-5xl lg:text-6xl text-black'>You may also find interesting...</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {
                                    blogs.map((relatedBlog, i) => (
                                        // @ts-ignore
                                        <BlogCard key={i} blog={relatedBlog} blacked/>
                                    ))
                                }
                            </div>
                            <p className='text-center font-bold text-4xl text-black'>or...</p>
                            <Button text="View all blogs" link="/blog" style='bg-dark-purple text-light-purple ring-2 ring-light-purple hover:bg-light-purple hover:text-dark-purple hover:ring-dark-purple transition-all duration-300'/>
                        </div>
                    </section>
                )
            }
        </>
    )
}