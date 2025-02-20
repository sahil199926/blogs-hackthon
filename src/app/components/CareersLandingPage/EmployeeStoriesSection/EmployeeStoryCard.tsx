import React from 'react'
import Image from "next/image";
import { IEmployeeStoryCard } from '@/types';

function EmployeeStoryCard({ data }: { data: IEmployeeStoryCard}) {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-Body-Medium-14 text-Neutrals-950 md:text-Display-Semibold-20">
      {`"${data.comment}"`}
      </p>
      <div id="Employee Details" className="flex items-center gap-3">
        <div className="h-[36px] w-[36px] md:h-[50px] md:w-[50px]">
          <Image
            src={data.employeeDetails.image}
            alt="user image"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-Display-Semibold-14 md:text-Display-Semibold-16">
            {data.employeeDetails.name}
          </p>
          <p className="text-Body-Regular-12 md:text-Body-Regular-16 text-Neutrals-900">
            {data.employeeDetails.position}
            {" | "}
            {data.employeeDetails.experience}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeStoryCard