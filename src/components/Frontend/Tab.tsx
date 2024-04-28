/* eslint-disable react/no-unescaped-entities */
"use client"
import { Tabs } from "flowbite-react";
import ServiceList from "./Services/ServiceList";
import LinkCards from "./Doctors/LinkCards";
import { Activity, Microscope, Stethoscope, Syringe } from "lucide-react";
const services = [
    {
        id: 1,
        title: 'Telehealth',
        image: '/info-visual.webp',
        slig: 'telehealth'
    },
    {
        id: 2,
        title: 'Video Prescription refill',
        image: '/info-visual.webp',
        slig: 'prescription-refill'
    },
    {
        id: 3,
        title: 'In Person doctor visit',
        image: '/info-visual.webp',
        slig: 'doctor-visit'
    },
    {
        id: 4,
        title: 'UTI Consult',
        image: '/info-visual.webp',
        slig: 'uti-consult'
    },
    {
        id: 5,
        title: 'ED Consult',
        image: '/info-visual.webp',
        slig: 'ed-consult'
    },
    {
        id: 6,
        title: 'Mental health Consult',
        image: '/info-visual.webp',
        slig: 'mental-health-consult'
    },
    {
        id: 7,
        title: 'Urgent care visit',
        image: '/info-visual.webp',
        slig: 'urgent-care-visit'
    },
]
export default function Tab() {
    const tabs = [
        {
            id: 1,
            title: "Popular Services",
            content: [],
            icons: Microscope,
            component: <ServiceList services={services} />,
        },
        {
            id: 2,
            title: "Doctors",
            icons: Stethoscope,
            component: <LinkCards />,
            content: []
        },
        {
            id: 3,
            icons: Activity,
            title: "Specilist",
            component: <LinkCards className="bg-blue-900" />,
            content: []
        },
        {
            id: 4,
            icons: Syringe,
            component: <LinkCards className="bg-purple-950" />,
            title: "Symptoms",
            content: []
        }
    ]
    return (
        <Tabs aria-label="Tabs with underline" style="underline">
            {
                tabs.map((i) => (
                    <Tabs.Item key={i.id} active={false} title={i.title} icon={i.icons}>
                        {i.component}
                    </Tabs.Item>
                ))
            }
        </Tabs>
    );
}
