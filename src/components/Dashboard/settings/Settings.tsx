
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralSettings from "./GeneralSettings"



export default function Settings() {
    const tabs = [
        {
            label: 'General',
            value: 'general',
            component: <GeneralSettings />
        },
        {
            label: 'Security',
            value: 'security',
            component: <></>
        },
        {
            label: 'Integrations',
            value: 'integrations',
            component: <></>
        },
        {
            label: 'Support',
            value: 'support',
            component: <></>
        },
        {
            label: 'Organizations',
            value: 'organizations',
            component: <></>
        },
        {
            label: 'Advanced',
            value: 'advanced',
            component: <></>
        },

    ]
    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">

                <div className="">
                    <Tabs defaultValue="general" className="w-[900px]">
                        <TabsList>
                            {
                                tabs.map((i) => {
                                    return (
                                        <TabsTrigger key={i.value} value={i.value}>{i.label}</TabsTrigger>
                                    )
                                })
                            }
                        </TabsList>
                        {
                            tabs.map((i) => {
                                return (
                                    <TabsContent key={i.value} value={i.value} className="pt-6">
                                        {i.component}
                                    </TabsContent>
                                )
                            })
                        }
                    </Tabs>

                </div>
            </div>
        </main>
    )
}
