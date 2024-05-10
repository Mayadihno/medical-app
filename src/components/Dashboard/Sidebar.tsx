'use client'
import Link from "next/link";
import React from "react";
import {
    Bell,
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";




export default function Sidebar() {
    const pathname = usePathname()

    const links = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icons: Home
        },
        {
            name: 'Orders',
            link: '/dashboard/orders',
            icons: ShoppingCart,
            badgeCount: 6
        },
        {
            name: 'Product',
            link: '/dashboard/product',
            icons: Package
        },
        {
            name: 'Customers',
            link: '/dashboard/customers',
            icons: Users
        },
        {
            name: 'Settings',
            link: '/dashboard/settings',
            icons: Settings
        },
        {
            name: 'Analytics',
            link: '/dashboard/analytics',
            icons: LineChart
        },

    ]

    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="">Acme Inc</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {
                            links.map((item, i) => {
                                const Icon = item.icons
                                return (
                                    <Link
                                        href={item.link}
                                        key={i}
                                        className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                            pathname === item.link ? ' bg-muted text-primary' : ''
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.name}
                                        {item.badgeCount && (
                                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                                {item.badgeCount}
                                            </Badge>
                                        )}
                                    </Link>
                                )
                            })
                        }
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Button size="sm" className="w-full">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}