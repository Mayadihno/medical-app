/* eslint-disable react/no-unescaped-entities */
import CustomAccordion, { FAQ } from '@/shared/CustomAccordion'
import CustomButton from '@/shared/CustomButton'
import Pricing from '@/shared/Pricing'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const features = [
        {
            id: 1,
            text: 'Sesame brings patients to you'
        },
        {
            id: 2,
            text: 'Seamless e-prescribing experience'
        },
        {
            id: 3,
            text: 'Integrated clinical note-taking'
        },


    ]
    const steps = [
        {
            id: 1,
            title: 'List your practice',
            text: 'It’s free to join with no membership fees or time commitments.'
        },
        {
            id: 2,
            text: 'We help you tailor your offerings to attract new patients and build your practice.',
            title: 'Create competitive offerings'
        },
        {
            id: 3,
            text: 'Patients can book appointments with you minutes after your profile goes live.',
            title: 'Start seeing patients'
        },


    ]

    const card = [
        {
            id: 1,
            title: 'Begin your journey',
            description: ' Start a new application to join our network of healthcare providers',
            link: '/',
            linkTitle: 'Start new application'
        },
        {
            id: 2,
            title: 'Resume Application',
            description: 'Pick up from where you left off and continue your onboarding process. Shedule for physical approval',
            link: '/',
            linkTitle: 'Resume Application'
        },
        {
            id: 3,
            title: 'Shecdule a visit',
            description: 'Arrange a time for physical approval to finalize your application ',
            link: '/',
            linkTitle: 'Start new application'
        },
        {
            id: 4,
            title: 'Track your progress',
            description: ' Monitor the status of your application and approvals in real time',
            link: '/',
            linkTitle: 'Track Progress'
        },
    ]
    const faqs: FAQ[] = [
        {
            qn: 'How can i sign up on this website?',
            ans: (
                <div>
                    <p>You can sign up by just clicking the sign up button below</p>
                    <CustomButton title='sign up here' href={'/register?role=DOCTOR'} className='bg-blue-400 rounded-[1px] h-10 mt-4 hover:bg-blue-800 font-medium text-sm' />
                </div>
            )
        },
        {
            qn: 'What are the symptoms of influenza?',
            ans: 'Symptoms of influenza include fever, cough, sore throat, body aches, and fatigue.'
        },
        {
            qn: 'How can I prevent the flu?',
            ans: 'You can prevent the flu by getting vaccinated, practicing good hand hygiene, and avoiding close contact with sick individuals.'
        },
        {
            qn: 'What is diabetes?',
            ans: 'Diabetes is a chronic condition that affects the body’s ability to regulate blood sugar levels.'
        },
        {
            qn: 'What causes high blood pressure?',
            ans: 'High blood pressure can be caused by factors such as genetics, diet, lack of physical activity, and stress.'
        },
        {
            qn: 'How is asthma treated?',
            ans: 'Asthma is typically treated with inhalers that deliver medication to the lungs to help reduce inflammation and open up airways.'
        },
        {
            qn: 'What is the difference between type 1 and type 2 diabetes?',
            ans: 'Type 1 diabetes is an autoimmune condition where the body’s immune system attacks the cells in the pancreas that produce insulin. Type 2 diabetes is a metabolic disorder where the body becomes resistant to insulin or doesn’t produce enough insulin.'
        },
        {
            qn: 'What are the risk factors for heart disease?',
            ans: 'Risk factors for heart disease include high blood pressure, high cholesterol, smoking, obesity, diabetes, and a sedentary lifestyle.'
        },
        {
            qn: 'How often should I get a check-up?',
            ans: 'It is recommended to get a check-up with your healthcare provider at least once a year, or more frequently if you have specific health concerns.'
        },
        {
            qn: 'What is the recommended amount of physical activity?',
            ans: 'Adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity aerobic activity per week, along with muscle-strengthening activities on two or more days per week.'
        }
    ];

    return (
        <div className=' min-h-screen mt-[100px]'>
            <section className='py-12 px-4'>
                <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 space-x-10">
                    <div className="">
                        <h2 className='md:text-5xl text-2xl'>
                            Build a thriving
                            <span className='text-blue-600 font-semibold'> direct-pay</span> practice with Medical App.
                        </h2>
                        <p className='py-4 text-base font-[400]'>Welcome to Medical App!

                            At Medical App, we're dedicated to revolutionizing the way you manage your health. Our platform offers a seamless experience tailored to your unique needs. From tracking your fitness progress to connecting with healthcare professionals, we're here to empower you every step of the way.

                            Explore our user-friendly interface, personalized recommendations, and extensive range of services. Whether you're monitoring your symptoms or seeking expert advice, Medical App is your trusted partner in health.

                            Join us today and embark on a journey to a healthier, happier you! </p>
                        <CustomButton title='List your Service' href='#' className='bg-blue-600 w-full rounded-[1px] h-14 hover:bg-blue-800 font-semibold text-3xl' />
                        <div className="py-5">
                            {
                                features.map((i) => (
                                    <div className="py-3" key={i.id}>
                                        <p className='flex items-center'>
                                            <Check className='w-5 h-5 mr-2 flex-shrink-0 text-blue-500' />
                                            <span className='text-2xl font-medium'>{i.text}</span>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <Image src={'https://images.ctfassets.net/1clcztbbevpp/7i4NYw8WPqigQ62VLRCWq3/2571bcae2b5bf6e0d5906356c22a740c/ManScrubsMask_Web.jpg?w=1500&fm=webp'} width={416} height={535} alt='' className='w-full' />
                </div>
            </section>
            <section className='py-12 px-4'>
                <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 space-x-10">
                    <Image src='/login-image.jpg' width={416} height={716} alt='' className='w-full' />
                    <div className="">
                        <h2 className='md:text-5xl text-2xl'>
                            Join Sesame to increase your
                            <span className='text-blue-600 font-semibold'> revenue </span> today.
                        </h2>
                        <div className="py-5">
                            {
                                steps.map((i) => (
                                    <div className="py-3" key={i.id}>
                                        <p className='flex items-center'>
                                            <Check className='w-5 h-5 mr-2 flex-shrink-0 text-blue-500' />
                                            <div className="flex flex-col">
                                                <h5 className='text-xl font-medium'>{i.title}</h5>
                                                <h6 className='text-sm font-[400]'>{i.text}</h6>
                                            </div>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 pt-10">
                    {
                        card.map((i) => (
                            <div key={i.id} className=" bg-blue-900 p-6 rounded-lg shadow-2xl text-center">
                                <h3 className=' text-2xl font-semibold text-white'>{i.title}</h3>
                                <p className=' text-base text-gray-400 py-4 h-24'>
                                    {i.description}
                                </p>
                                <CustomButton title={i.linkTitle} href={i.link} className='bg-blue-600 rounded-[1px] h-14 mt-4 hover:bg-blue-800 font-medium text-xl' />
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='py-12 px-4'>
                <div className="">
                    <Pricing />
                </div>
            </section>
            <section className='py-12 px-4'>
                <div className=" max-w-2xl mx-auto ">
                    <CustomAccordion arr={faqs} />
                </div>
            </section>
        </div>
    )
}

export default page