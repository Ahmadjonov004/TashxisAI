import HowItWorks from "../../components/HowItWorks"
import FeaturesSection from "../../components/FeaturesSection"
import Headermain from "../../components/headerMain/Headermain"
import Navbar from "../../components/navbar/Navbar"
import Testimonials from "../../components/Testimonials"
import Footer from "../../components/Footer"


function Home() {
  return (
    <div>
        {/*navbar  */}
        <Navbar/>

        {/* headermain */}
        <Headermain/>
        <FeaturesSection/>
        <HowItWorks/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home