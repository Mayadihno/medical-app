/* eslint-disable react/no-unescaped-entities */
"use client"

import { Pill } from "lucide-react";
import SearchBar from "./SearchBar";
import TextTransitions from "./TextTransitions";
import Link from "next/link";


const Hero = () => {
    const TEXTS = ['Acupunture Doctor', 'Massage Doctor', 'chiropractor', 'Dental Doctor', 'Cosmetic Doctor', 'Speech Therapist', 'Occupational Therapist', 'Acunpuncturist', 'Dietitian Doctor']
    return (
        <div className="relative bg-white pb-[110px] lg:pt-16">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] flex flex-wrap items-center gap-3 text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                <span> Book your</span>
                                <TextTransitions className="text-blue-500 text-4xl capitalize" TEXTS={TEXTS} />
                                <br />
                                <span>Session now</span>
                            </h1>

                            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                Health shouldn't be puzzle, we are cuttin through the B.S to bring you simple, affordable and transparent healthcare.
                            </p>
                            {/* Searchbar here */}
                            <SearchBar />
                            {/* CTA BTNS */}
                            <ul className="flex justify-between space-x-3">
                                <Link href={'/doc'} >
                                    <button className="border text-sm font-medium p-4 border-blue-500 hover:bg-blue-500 hover:text-white"> Need Doctor Urgently</button>
                                </Link>
                                <Link href={'/refill'} className="border flex text-sm font-medium items-center bg-blue-500 hover:border-blue-500 hover:bg-white p-4 hover:text-black text-white">
                                    <Pill className="h-5 w-5 flex-shrink-0 mr-2" />
                                    <span>I Need a Prescription Refill</span>
                                </Link>
                            </ul>
                            <div className="flex py-4 pt-8 gap-4">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="font-bold text-gray-600">600</span>
                                    <span className="text-sm text-gray-600">Active Specialist</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="font-bold text-gray-600">1800</span>
                                    <span className="text-sm text-gray-600">Active Patient</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                                    alt="hero"
                                    className="max-w-full lg:ml-auto"
                                />
                                <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

const SingleImage = ({ href, imgSrc }: { href: string, imgSrc: string }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};


