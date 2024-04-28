import React from "react";
import Tab from "./Tab";
import Sectionheading from "@/shared/Sectionheading";

const Tabs = () => {
    return (
        <section className="pb-12 lg:pb-[90px] lg:pt-[80px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
                            <Sectionheading title=" Top rated online doctors & specialists available now" />
                            <p className="text-base text-body-color dark:text-dark-6">
                                Choose from thousands of providers at every day affordable prices. Book online today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto max-w-6xl">
                    <Tab />
                </div>
            </div>
        </section>
    );
};

export default Tabs;


