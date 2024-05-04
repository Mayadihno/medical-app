
import { ServiceProp } from "@/config/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ data }: { data: ServiceProp }) => {
    return (
        <Link
            href={`/services/${data.slug}`}
            className=" rounded-md bg-slate-100 hover:bg-slate-300 duration-300 flex gap-4"
        >
            <Image src={data.image} width={1016} height={816} alt={data.title} className="w-1/3 object-cover aspect-video" />
            <div className="flex flex-col w-2/3 text-black py-4">
                <h2>{data.title}</h2>
                <p className="text-[0.6rem] pt-2">983 doctors available</p>
            </div>
        </Link>
    );
};

export default ServiceCard;
