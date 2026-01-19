import About from '../components/About'
import ContactUs from '../components/ContactUs'
import Hero from '../components/Hero'
import OurTracks from '../components/OurTracks'
import PremiumLearning from '../components/PremiumLearning'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <OurTracks />
      <PremiumLearning/>
      <Testimonials/>
      <ContactUs/>
    </div>
  )
}

export default Home
