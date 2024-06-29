import Link from 'next/link'

export const Button = ({
  text,
  link,
  style
}: {
  text: string
  link: string,
  style?: string
}) => {
  return (
    <Link href={link} className={`${style} uppercase rounded-full p-2 w-fit text-sm font-semibold px-5`}>
      {text}
    </Link>
  )
}
