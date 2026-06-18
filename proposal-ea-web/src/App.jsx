import { Analytics } from '@vercel/analytics/react'
import BrandHeader from './sections/BrandHeader'
import ServicesOffered from './sections/ServicesOffered'
import ProjectTypes from './sections/ProjectTypes'
import AchievementsGallery from './sections/AchievementsGallery'
import ContactBand from './sections/ContactBand'
import CopyrightFooter from './sections/CopyrightFooter'
import './App.css'

function App() {
  return (
    <main className="site-shell">
      <BrandHeader />
      <ServicesOffered />
      <ProjectTypes />
      <AchievementsGallery />
      <ContactBand />
      <CopyrightFooter />
      <Analytics />
    </main>
  )
}

export default App
