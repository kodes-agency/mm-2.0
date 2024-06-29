import { Media } from '@/payload-types'
import Image from 'next/image'
import { Button } from '../../../elements/nextElements/Button'
import { getStyle } from '@/functions/styleTheSection';


type ImageText = {
    content: {
      hasTitle?: ('yes' | 'no') | null;
      hasButton?: ('yes' | 'no') | null;
      imagePosition?: ('left' | 'right') | null;
      title?: string | null;
      text: {
        root: {
          type: string;
          children: {
            type: string;
            version: number;
            [k: string]: unknown;
          }[];
          direction: ('ltr' | 'rtl') | null;
          format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
          indent: number;
          version: number;
        };
        [k: string]: unknown;
      };
      text_html?: string | null;
      image: string | Media;
      buttonText?: string | null;
      buttonLink?: string | null;
    };
    style: {
      style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
    };
    id?: string | null;
    blockName?: string | null;
    blockType: 'image-text';
  }

export const ImageText = ({ block }: { block: ImageText }) => {

  return (
        <section className={`${getStyle(block.style.style)} flex flex-col  items-start md:items-center py-20 justify-center px-6 md:px-10`}>
            <div className={`flex max-w-5xl items-center flex-col-reverse ${block.content.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className='w-full md:w-7/12 flex justify-stretch flex-col space-y-6 md:space-y-8'>
                  {block.content.hasTitle === 'yes' && (
                      <h2 className='font-bold text-3xl'>{block.content.title}</h2>
                  )}
                  <div className='flex flex-col space-y-4' dangerouslySetInnerHTML={{__html: block.content.text_html || ''}}></div>
                  {
                    block.content.hasButton === 'yes' && (
                        <Button text={block.content.buttonText || ''} link={block.content.buttonLink || ''}></Button>
                    )
                  }                
                </div>
                <Image
                  // @ts-ignore
                  src={block.content.image.url}
                  // @ts-ignore
                  alt={block.content.image.alt}
                  width="800"
                  height="800"
                  className={`object-cover w-full md:w-5/12 aspect-video pb-10 md:pb-0 md:aspect-square ${block.content.imagePosition === "left" ? "md:pl-12" : "md:pr-12"}`}
                />
            </div>
        </section>  
    )
}
``