const navItems = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contacts', href: '#contacts' },
]

function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="site-nav__brand" href="#home">
        <span className="site-nav__brand-mark">EA</span>
        <span className="site-nav__brand-name">Architectural & Construction</span>
      </a>
      <div className="site-nav__links">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default SiteNav
