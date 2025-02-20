import React from 'react'
import DotBg from '../common/DotBg';

const MissonSection = ({
    title,
    slogan,
    coreValues
}:{
    title: string;
    slogan: string;
    coreValues: string[];
}) => {
  return (
    <div className='bg-white relative'>
        <div className="z-0 absolute top-0 right-4 hidden md:block">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={500}
            cropHeightStart={245}
            cropHeightEnd={489} 
          />
      </div>
       <div className="z-0 absolute bottom-2 left-0 hidden md:block">
          <DotBg
            cropWidthStart={300}
            cropWidthEnd={1156}
            cropHeightStart={0}
            cropHeightEnd={150}
          />
      </div>

      <div className="z-0 absolute -top-52 right-0 md:hidden">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={200}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
      </div>

        <div
        className="mx-auto max-w-8xl px-3 py-10 lg:p-10"
        >
            <section className="flex flex-col lg:flex-row items-center justify-between  bg-white text-gray-800">
      {/* Mission Section */}
      <div className="lg:w-1/2 relative">
        <h2 className="text-Display-FullCaps-16 
        md:text-[1.125rem] md:leading-[1.688rem]
        font-medium uppercase text-Neutrals-900 mb-5">
          {title}
        </h2>
        <p className="text-[1rem] leading-[1.5rem] md:text-Display-Semibold-20 font-semibold  text-Neutrals-950 max-w-lg">
          &quot;{slogan}&quot;
        </p>
      </div>

      {/* Core Values Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
        <h3 className="text-Primary-Blue-950 text-Display-Semibold-20 md:text-Display-Semibold-32 mb-4 ml-0 md:ml-14">
          Core Values
        </h3>
        <ul className="space-y-4">
          {coreValues.map((value, index) => (
            <li key={index} className="flex items-center">
              <span className="text-Primary-Blue-950 text-Display-Semibold-20 md:text-Display-Semibold-32 font-semibold mr-4 min-w-11">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-Neutrals-900 bg-Primary-Mordor-Green-Bg-50 p-3 text-Body-Medium-12 md:text-Body-Regular-16 border-l-4 border-Primary-Mordor-Green-Bg-800">
                &quot;{value}&quot;
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
        </div>
    </div>
  )
}

export default MissonSection