import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// types.ts
export type FAQ = {
    qn: string;
    ans: string | React.ReactNode;
};


export default function CustomAccordion({ arr }: { arr: FAQ[] }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                arr.map((item, i) => {
                    return (
                        <AccordionItem key={i} value={item.qn}>
                            <AccordionTrigger>{item.qn}</AccordionTrigger>
                            <AccordionContent>
                                {item.ans}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>
    )
}
