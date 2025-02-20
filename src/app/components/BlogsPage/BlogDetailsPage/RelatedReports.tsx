import { IRelatedReportsList } from '@/types'
import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

function RelatedReports({ relatedReport }: { relatedReport: IRelatedReportsList }) {
  return (
    <article className="relative h-full">
      <div className="border h-full md:mb-4 max-w-[320px] md:max-w-full bg-Primary-Mordor-Blue-Bg-100 mr-2">
        <div className="flex flex-col p-[14px] ">
          <div className="mb-2 text-Body-Regular-12 flex col items-center text-Neutrals-800">
            {relatedReport.shortTitle}
          </div>
          <h4 className="mb-3 text-Display-Semibold-14">{relatedReport.title}</h4>
          <div className='flex justify-between text-Body-Medium-12 text-Neutrals-950 bg-white'>
            <div className='flex gap-[3px] items-center'><MapPin className='text-Accent-Orange-950 w-4 h-4' /> <span>{relatedReport.marketSizeData[0].key} {relatedReport.marketSizeData[0].value}</span> </div>
            <div className='flex gap-[3px] items-center'><Calendar className='text-Accent-Orange-950 w-4 h-4' /> <span>{relatedReport.marketSizeData[1].key} {relatedReport.marketSizeData[1].value}</span> </div>
          </div>
          <div
            id="Segregation Line"
            className="mt-[18px] h-[1px] w-full bg-[#65789B]"
          />
          <div className='mt-3'>
            {
              relatedReport.marketSizeData.map((data: { key: string; value: string }, index: number) => {
                if(index<2) return null;
                return (
                  <div key={index} className='text-Neutrals-950'>
                    <span className='text-Body-Medium-12 font-semibold'>{data.key}:</span><br/>
                    <span className='text-Body-Regular-12'>{data.value}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default RelatedReports