import { IJobsList } from '@/types'
import { BriefcaseBusiness, Clock4, MapPin } from "lucide-react";

function JobsCard({ jobsList }: { jobsList: Array<{ department: string | undefined, list: IJobsList[] }> }) {

  return (
    <>
      <div className="relative z-20 md:z-[15] mt-10 mb-6 mx-4 md:mt-0 md:mx-0 md:mb-16 p-0 md:px-[88px]">
        {jobsList?.map((objList,index) => (
          <div key={(objList.department ?? 'undefined') + (index + 1)}>
            {objList.department ? <h3 className='mb-4 md:mt-10 text-Display-Semibold-24 text-Neutrals-900'>{objList.department}</h3> : null}
            {
              objList.list?.map(job => (
                <Card key={job._id} job={job} />
              ))
            }
          </div>
        ))}
      </div>
    </>
  )
}

export const Card = ({ job }: { job: IJobsList }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between mb-4 px-4 py-5 md:px-10 md:py-8 bg-Primary-Mordor-Blue-Bg-100">
      <div className="flex flex-col gap-6 md:gap-[18px] text-Neutrals-950">
        <div className="flex flex-col gap-[6px]">
          <p className="hidden md:block text-Body-Regular-14">{job.department}</p>
          <h3 className="text-[18px] leading-7 font-semibold md:text-Display-Semibold-20">{job.position}</h3>
          <p className="md:hidden text-Body-Regular-14">{job.department}</p>
        </div>
        <div className="flex justify-between gap-4 text-Body-Regular-16">
          <p className="flex gap-2"><BriefcaseBusiness className="w-5 h-5 md:w-6 md-h-5 text-Neutrals-950" />{job.experience}</p>
          <p className="flex gap-2"><Clock4 className="w-5 h-5 md:w-6 md-h-5 text-Neutrals-950" />{job.employmentType}</p>
          <p className="flex gap-2"><MapPin className="w-5 h-5 md:w-6 md-h-5 text-Neutrals-950" />{job.location}</p>
        </div>
      </div>
      <div className="flex flex-row-reverse md:flex-col justify-between items-center md:justify-center gap-[10px]">
        <button className="px-4 py-[11px] text-Body-Medium-16 bg-Primary-Blue-950 text-Neutrals-white">View Position</button>
        <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-800">Posted {job.postedAt}</p>
      </div>
    </div>
  )
}

export default JobsCard
