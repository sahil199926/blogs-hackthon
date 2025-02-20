'use client';
import React, { useState } from 'react'
import ContactUsForm from './ContactUsForm';
import Proposal from './ProposalForm';
import FeedbackCard from './FeedbackCard';
import { BriefcaseBusiness, HelpCircle, ImagePlay } from 'lucide-react';

import DotBg from '../common/DotBg';




const Enquires = () => {
  const [isProposalForm,setIsProposalForm]=useState(false);
  const toggleForm=(
    e:React.MouseEvent<HTMLElement>,
    isProposalForm:boolean
  )=>{
    e.preventDefault();
    setIsProposalForm(isProposalForm);
  }
  return (
    <div className="bg-white relative">
       
      <div className="z-0 absolute top-0 md:-top-8 -left-0 hidden md:block">
          <DotBg
            cropWidthStart={500}
            cropWidthEnd={1100}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
      </div>
       
      <div className="z-0 absolute -bottom-64 -right-0 hidden md:block">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={500}
            cropHeightStart={100}
            cropHeightEnd={489}
          />
      </div>
      <div className="z-0 absolute top-0 right-0 block md:hidden">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={400}
            cropHeightStart={0}
            cropHeightEnd={389}
          />
      </div>
      <div className="z-0 absolute top-80 left-0 block md:hidden">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={300}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
      </div>
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10 grid grid-cols-3 gap-4 relative">
        <div id="form-section" className='bg-Primary-Mordor-Blue-Bg-50 col-span-3 md:col-span-2 lg:col-span-2'>
           <h2 onClick={(e) => toggleForm(e, false)} className={`mr-4 py-3 inline-block cursor-pointer text-Display-Semibold-16 md:text-Display-Semibold-20 mx-4 ${!isProposalForm ? 'border-b-2 border-Accent-Orange-950' : ''}`}>Contact Us</h2>
          <h2 onClick={(e) => toggleForm(e, true)} className={`py-3 inline-block cursor-pointer text-Display-Semibold-16 md:text-Display-Semibold-20 ${isProposalForm ? 'border-b-2 border-Accent-Orange-950' : ''}`}>Request for Proposal</h2>
          {!isProposalForm ? <ContactUsForm /> : <Proposal />}
        </div>

        <div id='card-section' className='col-span-3 md:col-span-1 text-center md:text-left'>
          <h3 className='text-Display-Semibold-20 text-black mb-4'>
            Enquires
          </h3>
          <FeedbackCard
            className='mb-4'
            icon={
              <HelpCircle className="text-Accent-Orange-900 w-5 h-5 text-center md:text-left" />
            }
            title='Ask us'
            content='Have a question? Let us help. Reach out to us at'
            copyEmail="info@mordorintelligence.com"
          />
          <FeedbackCard
            className='mb-4'
            icon={
              <ImagePlay className="text-Accent-Orange-900 w-5 h-5" />
            }
            title='Media Relations'
            content='Connect with our PR team at'
            copyEmail="media@mordorintelligence.com"
          />
          <FeedbackCard
            icon={
              <BriefcaseBusiness className="text-Accent-Orange-900 w-5 h-5" />
            }
            title='Work With Us'
            content='Join our team of experts at'
            copyEmail="careers@mordorintelligence.com"
          />
        </div>
      </div>
    </div>
  )
}

export default Enquires