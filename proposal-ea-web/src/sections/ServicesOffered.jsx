import { serviceColumns } from '../data/siteContent'

function ServicesOffered() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="section-label">
        <h2 id="services-title">Services Offered</h2>
      </div>

      <div className="services-layout">
        {serviceColumns.map((column, columnIndex) => (
          <ul className="services-list" key={`service-column-${columnIndex}`}>
            {column.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default ServicesOffered
