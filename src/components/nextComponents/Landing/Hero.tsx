import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../elements/nextElements/Button'
import { getStyle } from '@/functions/styleTheSection'
import { Logo } from '@/elements/nextElements/SVGs'

type Hero = {
    content: {
      title: string;
      subtitle: string;
      label?: string | null;
      buttonText: string;
      buttonLink: string;
      image: string | Media;
    };
    style: {
      style: 'dark-purple' | 'light-purple' | 'blue' | 'white' | 'black' | 'red' | 'cyan' | 'orange';
    };
    id?: string | null;
    blockName?: string | null;
    blockType: 'hero';
  }

export const Hero = ({ block }: { block: Hero }) => {
  return (
        <section className={`${getStyle(block.style?.style)} flex md:items-center overflow-hidden items-start md:min-h-[90vh] pt-20 pb-20 justify-center px-6 md:px-10`}>
            <div className='max-w-6xl flex flex-col-reverse md:flex-row items-center'>
                <div className='md:w-[50%] xl:w-[45%] flex pt-10 flex-col space-y-3 md:space-y-5'>
                    <p className=' text-lg font-bold uppercase pb-5'>{block.content.label}</p>
                    <h1 className='font-medium text-4xl md:text-5xl pl-2 md:pl-5'>{block.content.title}</h1>
                    <p className='pb-5 text-lg pl-2 md:pl-5'>{block.content.subtitle}</p>
                    <Button text={block.content.buttonText} link={block.content.buttonLink}></Button>
                </div>
                <div className='w-full md:w-[50%] xl:w-[65%] md:pl-10 lg:pl-20 relative'>
                    <Image 
                        src={typeof block.content.image === 'string' ? block.content.image : block.content.image.url ?? ''}
                        alt={typeof block.content.image === 'string' ? '' : block.content.image.alt} 
                        width="1080"
                        height="674"
                        className='w-full h-auto object-cover relative z-10'
                    />
                    <Logo style='absolute opacity-30 -bottom-[15vh] lg:-bottom-[15vh] -right-[15vh] lg:-right-[10vh] min-w-[300px] max-w-[400px]' fill='white'/>
                </div>
            </div>
        </section>  
    )
}
