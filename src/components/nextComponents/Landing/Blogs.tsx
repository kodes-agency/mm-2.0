import type { Blog } from "@/payload-types"
import { Article } from "@/elements/nextElements/Blog"
import { getStyle } from "@/functions/styleTheSection";

type Blogs = {
  content: {
    blogs: (string | Blog)[];
  };
  style: {
    style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'blog';
}


export const Blogs = ({ block }: { block: Blogs }) => {
  return (
    <section className={`${getStyle(block.style?.style)} py-20 flex flex-col items-center w-full px-10 md:px-10`}>
      <div className="max-w-5xl flex flex-col space-y-20">
        <h2 className="text-5xl md:text-6xl text-center font-bold font-serif">The Morph Chronicles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* @ts-expect-error */}
          {block.content.blogs.map((blog: Blog, id) => (
            <Article key={blog.id} blog={blog} id={id}/>
          ))}
        </div>
      </div>
    </section>
  )
}