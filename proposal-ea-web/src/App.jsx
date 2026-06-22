import SiteNav from './sections/SiteNav'
import BrandHeader from './sections/BrandHeader'
import AboutUs from './sections/AboutUs'
import ServicesOffered from './sections/ServicesOffered'
import ProjectTypes from './sections/ProjectTypes'
import AchievementsGallery from './sections/AchievementsGallery'
import ContactBand from './sections/ContactBand'
import CopyrightFooter from './sections/CopyrightFooter'
import './App.css'

function App() {
  return (
    <main className="site-shell">
      <SiteNav />
      <BrandHeader />
      <AboutUs />
      <ServicesOffered />
      <ProjectTypes />
      <AchievementsGallery />
      <ContactBand />
      <CopyrightFooter />
    </main>
  )
}

export default App
