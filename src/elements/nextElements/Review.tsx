export const ReviewCard = ({
  text,
  style,
  name,
  title,
}: {
  text: string
  style: string
  name?: string
  title?: string
}) => {
  return (
    <article className={`p-10 lg:p-20 flex flex-col items-center`}>
      {title && <h3 className=" text-center text-lg font-bold">{title}</h3>}
      <div className='relative'>
        <h4 className=' text-5xl font-bold opacity-50 absolute z-10 -top-8 -left-8'>“</h4>
        <p className=" text-center w-full">{text}</p>
        <h4 className=' text-5xl font-bold opacity-50 absolute z-10 -bottom-8 -right-8'>”</h4>
      </div>
      {name && <h4 className=" text-center font-semibold pt-2 opacity-70">{name}</h4>}
    </article>
  )
}
