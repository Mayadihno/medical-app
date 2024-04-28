import React from 'react'
import ServiceCard from './ServiceCard'


const ServiceList = ({ services }: { services: ServiceProp[] }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 overflow-hidden'>
            {
                services.map((i) => (
                    <ServiceCard key={i.id} data={i} />
                ))
            }
        </div>
    )
}

export default ServiceList