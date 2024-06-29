import { Stats } from '@/elements/nextElements/Stats'
import { Service } from '@/payload-types'

let maxPercent = 100

export const Statistics = ({
  service,
  style,
}: {
  service: Service
  style: { highlightColor: string; bgColorFrom: string; bgColorTo: string }
}) => {
  return (
<section
      id="statistics"
      className={`flex bg-white flex-col items-center px-5 md:px-20 py-20 justify-center min-h-screen relative space-y-20`}
    >
      <h2 className='text-black text-4xl md:text-7xl md:text-center max-w-4xl font-bold'>
        Here are the industry numbers that <strong className='font-black' style={{color:style.highlightColor}}>matter:</strong>
      </h2>
      <div className="max-w-5xl flex flex-col items-center space-y-40">
        {service.servicePage.statistics &&
          service.servicePage.statistics.map((statistic, id) => (
            <Stats key={id} id={id} number={statistic.number} color={style.highlightColor} text={statistic.text} />
          ))}
      </div>
    </section>
  )
}
