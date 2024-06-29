import { BlogCard } from '@/elements/nextElements/BlogCard'
import { Blog } from '@/payload-types'

export const Archive = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <section className="flex bg-gray flex-col items-center py-20 px-5 md:px-10 justify-center min-h-screen">
      {/* <div className="flex flex-col items-center space-y-4">
        <h3 className="text-white font-bold text-xl">Available categories</h3>
        <div className="max-w-5xl w-full flex justify-center gap-5">
          {Array.from(categories).map((category) => (
            <button
              key={category}
              className="text-black bg-light-cyan py-1 px-3 rounded-md capitalize"
              onClick={() => handleButtonClick(category)}
            >
              {category.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div> */}
      <div className='max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-10'>
        {blogs.map((blog, id) => (
            <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </section>
  )
}
