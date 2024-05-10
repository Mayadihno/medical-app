/* eslint-disable react/no-unescaped-entities */
'use client'
import { FaLinkedin, FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from 'react'
import Link from "next/link";

const Footer = () => {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'join/doctors',
                    name: 'List your Service'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

    const socialLinks = [
        {
            id: 1,
            name: 'Linkedin',
            icon: FaLinkedin,
            link: 'https://medical-app/linkedin',
            color: 'text-blue-600'
        },
        {
            id: 2,
            name: 'Twitter',
            icon: FaXTwitter,
            link: 'https://medical-app/twitter',
            color: 'text-black'
        },
        {
            id: 3,
            name: 'Facebook',
            icon: FaFacebook,
            link: 'https://medical-app/facebook',
            color: 'text-blue-500'
        },
        {
            id: 4,
            name: 'instagram',
            icon: FaInstagramSquare,
            link: 'https://medical-app/instagram',
            color: 'text-yello-500'
        },
        {
            id: 4,
            name: 'youtube',
            icon: FaYoutube,
            link: 'https://medical-app/youtube',
            color: 'text-red-500'
        },
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src="https://www.floatui.com/logo.svg" className="w-32" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="block pt-4 pb-2">
                            Stay up to date
                        </label>
                        <div className="max-w-sm flex items-center p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none h-12"
                            />
                            <button
                                className="p-2.5 h-12 text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"

                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {(new Date).getFullYear()} Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {
                            socialLinks.map((i) => {
                                const Icon = i.icon
                                return (
                                    <div className="" key={i.id}>
                                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                            <Link href={i.link} className={i.color}>
                                                <Icon className="w-6 h-6" />
                                            </Link>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer
