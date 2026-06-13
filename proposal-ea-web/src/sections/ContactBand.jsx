import { companyDetails } from '../data/siteContent'

function ContactBand() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <p className="section-kicker">Company profile</p>
        <h2 id="contact-title">Company Details</h2>

        <ul className="company-details">
          {companyDetails.map((detail) => (
            <li key={detail.label}>
              <span className="company-details__label">{detail.label}:</span>
              {detail.lines ? (
                <span className="company-details__lines">
                  {detail.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              ) : detail.href ? (
                <a href={detail.href}>{detail.value}</a>
              ) : (
                <span>{detail.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactBand
