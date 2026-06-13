import LogoMark from '../components/LogoMark'
import { company } from '../data/siteContent'

function BrandHeader() {
  return (
    <section className="brand-section" aria-labelledby="brand-title">
      <div className="brand-sign">
        <div className="brand-sign__mark">
          <LogoMark />
        </div>
        <div className="brand-sign__content">
          <p>Design, build, renovation, and improvement services</p>
          <h1 id="brand-title">{company.name}</h1>
          <address>{company.address}</address>
        </div>
      </div>
    </section>
  )
}

export default BrandHeader
