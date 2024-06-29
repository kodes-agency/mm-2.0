import { getStyle } from '@/functions/styleTheSection';
import { Media } from '@/payload-types';
import Image from 'next/image';
  
  type Highlights = {
    content?: {
      title?: string | null;
      highlights?:
        | {
            icon: string | Media;
            title: string;
            text?: string | null;
            id?: string | null;
          }[]
        | null;
    };
    style: {
      style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
    };
    id?: string | null;
    blockName?: string | null;
    blockType: 'highlights';
  }
  
  
  export const Highlights = ({ block }: { block: Highlights }) => {
    return (
      <section className={`${getStyle(block.style.style)} py-20 flex flex-col items-center w-full px-5 md:px-10`}>
        <div className="max-w-5xl space-y-10">
          <h2 className='  text-center text-3xl md:text-4xl'>{block.content?.title}</h2>
          <div className='grid grid-cols-2 md:grid-flow-col md:auto-cols-fr w-full gap-10'>
            {block.content?.highlights?.map((highlight, index) => (
                <div key={index} className="flex flex-col items-center space-y-1 max-w-40">
                    {/* @ts-expect-error */}
                    <Image src={highlight.icon.url} alt={highlight.icon.alt} width={25} height={25}/>
                    <h3 className=' font-bold text-center'>{highlight.title}</h3>
                    <p className=' text-center'>{highlight.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  