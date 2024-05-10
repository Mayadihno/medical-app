import Brands from '@/components/Frontend/Brands'
import Doctorlist from '@/components/Frontend/Doctors/Doctorlist'
import Hero from '@/components/Frontend/Hero'
import Tabs from '@/components/Frontend/Tabs'



const page = () => {
  return (
    <section className="">
      <div className="">
        <Hero />
      </div>
      <Brands />
      <Tabs />
      <Doctorlist />
      <Doctorlist title='In-person doctor visit' isInPerson={true} className='bg-white py-8 lg:py-24' />
    </section>
  )
}

export default page