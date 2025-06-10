'use client';
import React from 'react';
import "../../public/styles/footer.scss";
import Image from 'next/image';
import Locationarrow from '../../public/images/location-arrow.svg';
import Facebook from '../../public/images/facebook.svg';
import Instagram from '../../public/images/Instagram.svg';
import Twitter from '../../public/images/twitter.svg';
import Dribbel from '../../public/images/Dribbble.svg';
import Youtube from '../../public/images/Youtube.svg';
import Linkedin from '../../public/images/Linkedin.svg';
import Behance from '../../public/images/behance.svg';
import Call from '../../public/images/call.svg';
import Mail from '../../public/images/mail.svg';
import Link from 'next/link';

function Footer() {
    return (
        <>
            <section className='nbd-footer bg-black'>
                <div className="container">
                    <div className='top-footer py-20'>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='w-full lg:w-3/12 '>
                                <h4 className='white mb-8'>Say Hello,</h4>
                                <div className='flex flex-col md:flex-row lg:flex-col gap-4 '>
                                    <Link href={'#'} className='primary-btn border max-w-[240px] border-white !flex !justify-start gap-[14px] !text-sm'>
                                        <Image src={Call} alt='call' />+91- 8267816000
                                    </Link>
                                    <Link href={'#'} className='primary-btn border max-w-[240px] border-white  !flex !justify-start gap-[14px] !text-sm'>
                                        <Image src={Mail} alt='mail' />info@noseberry.com
                                    </Link>

                                </div>
                            </div>
                            <div className='w-full lg:w-6/12 mt-16 lg:mt-0'>
                                <div className="flex flex-col md:flex-row">
                                    <div className='w-full md:w-1/2'>
                                        <p className="secondary-font light-grey mb-8">Services</p>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Product Development</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">AI & ML Solutions</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Cloud Engineering</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Technology Integration</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Digital Marketing</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Brand Building</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Content Creation</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white">Data Science & Engineering</p>
                                        </Link>
                                    </div>
                                    <div className='w-full md:w-1/2 mt-16 lg:mt-0'>
                                        <p className="secondary-font light-grey mb-8">Quicklinks</p>
                                        <Link href={'#'} className='mb-4 flex gap-2'>
                                            <p className="small white">Career</p>
                                            <span className='px-2 py-[3px] text-xs  rounded-2xl bg-white'>Hiring!</span>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white mb-4">Read blog</p>
                                        </Link>
                                        <Link href={'#'}>
                                            <p className="small white">Contact us</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-3/12 mt-16 lg:mt-0'>
                                <div className="flex md:flex-row">
                                    <div className="w-full md:1/2">
                                        <p className="secondary-font light-grey mb-8">We are located in</p>
                                        <p className="white pb-6">TS-1201, Galaxy Blue Sapphire,
                                            Plot No.: C-03 Sector-4
                                            Greater Noida West-201309</p>
                                        <Link href={'#'} className='text-sm text-[#4B22E0] flex '>
                                            Open Google map
                                            <Image src={Locationarrow} alt='Locationarrow' />
                                        </Link>
                                    </div>
                                    <div className="block lg:hidden w-full md:1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="separator"></div>
            <section className="bottom-footer py-20 bg-black">
                <div className="container">
                    <p className="secondary-font light-grey text-center">
                        Follow us on
                    </p>
                    <div className="flex gap-15  justify-center items-center flex-wrap mt-10">
                        <Link href={'#'} className='icon'>
                            <Image src={Linkedin} alt='linkedin' />
                            Linked in
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Facebook} alt='facebook' />
                            Facebook
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Instagram} alt='instagram' />
                            Instagram
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Twitter} alt='twitter' />
                            Twitter
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Behance} alt='behance' />
                            Behance
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Dribbel} alt='dribbbel' />
                            Dribbel
                        </Link>
                        <Link href={'#'} className='icon'>
                            <Image src={Youtube} alt='youtube' />
                            Youtube
                        </Link>
                    </div>
                </div>
            </section>
            <div className='bg-[#585361] py-6'>
                <div className="container">
                    <div className='flex justify-between'>
                        <p className="small white">
                            © 2023Noseberry Digitals.All rights reserved
                        </p>
                        <div className='flex gap-6' >
                            <Link href={'#'}>
                                <p className="small white">
                                    Terms & conditions
                                </p>
                            </Link>
                            <Link href={'#'}>
                                <p className="small white">
                                    Privacy Policy
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
