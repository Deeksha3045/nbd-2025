'use client';
import React from 'react';
import "../../public/styles/buttons.scss";
import Link from "next/link";

export default function HomePageBanner() {
  return (
    <div className='padding-120 bg-[#F0F2FA]'>
        <div className="container">
            <h4 className="bold text-center mb-[17px]">A GLOBAL AGENCY</h4>
            <h1 className="page-title text-center mb-[9px]">Transforming fast-growing <br />businesses with an <span className=''>AI-first approach</span></h1>
            <h4 className="grey text-center mt-6">Helping fast growing companies to scale smarter, <br></br>innovate faster, and lead their industries.</h4>
            <div className='flex justify-center mt-10'>
                <Link href="/" className="primary-btn">
                    Let’s connect
                </Link>
            </div>
        </div>
    </div>
  );
}