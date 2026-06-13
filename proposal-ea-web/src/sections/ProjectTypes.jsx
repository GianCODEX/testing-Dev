import { projectTypes } from '../data/siteContent'

function ProjectTypes() {
  return (
    <section className="project-section" aria-labelledby="project-title">
      <div className="project-section__heading">
        <p className="section-kicker">Complete project support</p>
        <h2 id="project-title">From first sketch to finished space</h2>
      </div>

      <div className="project-steps">
        {projectTypes.map((project) => (
          <article className="project-step" key={project.label}>
            <span>{project.label}</span>
            <p>{project.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectTypes
