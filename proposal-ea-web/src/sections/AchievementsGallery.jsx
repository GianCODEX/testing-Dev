import { useEffect, useState } from 'react'
import { achievements } from '../data/siteContent'

function AchievementsGallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <section className="achievements-section" aria-labelledby="achievements-title">
      <div className="achievements-heading">
        <p className="section-kicker">Proof of achievements</p>
        <h2 id="achievements-title">Completed EA Projects</h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <article
            className={`achievement-card ${index === 0 ? 'achievement-card--featured' : ''}`}
            key={achievement.title}
          >
            <button
              type="button"
              className="achievement-card__trigger"
              onClick={() => setSelectedProject(achievement)}
              aria-label={`Open full image for ${achievement.title}`}
            >
              <img src={achievement.image} alt={achievement.title} loading="lazy" />
              <span className="achievement-card__shade" />
              <span className="achievement-card__caption">
                <span>{achievement.category}</span>
                <strong>{achievement.title}</strong>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="image-viewer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-viewer-title"
          onClick={() => setSelectedProject(null)}
        >
          <div className="image-viewer__panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="image-viewer__close"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="image-viewer__caption">
              <span>{selectedProject.category}</span>
              <h3 id="image-viewer-title">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AchievementsGallery
