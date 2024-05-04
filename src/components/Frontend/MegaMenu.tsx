"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]
const megaMenu = [
    {
        title: 'Doctors',
        services: [
            {
                slug: 'tele-health',
                title: 'Telehealth',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'video-prescription-refill',
                title: 'Video Prescription refill',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'in-person-doctor-visit',
                title: 'In person Doctor Visit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'uti-consult',
                title: 'UTI Consult',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            }
        ]
    },
    {
        title: 'Top Booked',
        services: [
            {
                slug: 'tele-health',
                title: 'Telehealth',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'video-prescription-refill',
                title: 'Video Prescription refill',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'in-person-doctor-visit',
                title: 'In person Doctor Visit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'uti-consult',
                title: 'UTI Consult',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            }
        ]
    },
    {
        title: 'Specialist',
        services: [
            {
                slug: 'tele-health',
                title: 'Telehealth',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'video-prescription-refill',
                title: 'Video Prescription refill',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'in-person-doctor-visit',
                title: 'In person Doctor Visit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'uti-consult',
                title: 'UTI Consult',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            }
        ]
    },
    {
        title: 'Symptoms',
        services: [
            {
                slug: 'tele-health',
                title: 'Telehealth',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'video-prescription-refill',
                title: 'Video Prescription refill',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'in-person-doctor-visit',
                title: 'In person Doctor Visit',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            },
            {
                slug: 'uti-consult',
                title: 'UTI Consult',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quasi maiores officiis eveniet distinctio blanditiis, provident dolorem voluptatem repellendus rem delectus nesciunt veniam optio iste quia, adipisci cumque. Magni asperiores consequuntur a iusto? Accusamus, voluptate.'
            }
        ]
    }
]
export default function MegaMenu() {
    // const pathname = usePathname();
    // if (pathname === '/login' || '/register') return null;
    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-8">
                {megaMenu.map((item, i) => {
                    return (
                        <NavigationMenuItem key={i}>
                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {item.services.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={`/services/${component.slug}`}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
