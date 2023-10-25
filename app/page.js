// Components
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import Slider from '@/components/Slider'
import AboutApp from '@/components/AboutApp'
import Timeline from '@/components/Timeline'
import Section2 from '@/components/Section2'
import MVP from '@/components/MVP'
import Sign from '@/components/Sign'
import Work from '@/components/Work'
import Vacancies from '@/components/Vacancies'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <HeroSection />
      <Section1 />
      <Slider />
      <AboutApp />
      <Timeline />
      <Section2 />
      <MVP />
      <Sign />
      <Work />
      <Vacancies />
      <Footer />
    </main>
  )
}
