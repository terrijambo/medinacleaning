import { FormEvent, useEffect, useState } from 'react'

const services = [
  ['Homes & apartments', 'Recurring and one-time cleaning for the rooms you live in.'],
  ['Workplaces', 'Practical care for offices, storefronts, and shared spaces.'],
  ['Deep-clean requests', 'For the parts of a space that need more time and attention.'],
]

const gallery = [
  { src: '/media/image-1.jpg', alt: 'Freshly cleaned commercial waiting area and entry.' },
  { src: '/media/image-3.jpg', alt: 'Cleaner vacuuming carpet in an interior space.' },
  { src: '/media/image-4.jpg', alt: 'Cleaner working in a cared-for room.' },
  { src: '/media/image-5.jpg', alt: 'Cleaner vacuuming carpet in a finished space.' },
  { src: '/media/image-6.jpg', alt: 'Cleaning work in progress inside a building.' },
  { src: '/media/image-7.jpg', alt: 'Cleaner caring for an interior space.' },
  { src: '/media/image-8.jpg', alt: 'Detail cleaning work in a room.' },
  { src: '/media/image-9.jpg', alt: 'Freshly cleaned interior.' },
  { src: '/media/image-10.jpg', alt: 'Finished clean in a commercial interior.' },
]

function Arrow() {
  return <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 9h11M9 4l5 5-5 5" /></svg>
}

function Spark() {
  return <svg className="spark" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 2c1.7 13.5 8.5 20.3 22 22-13.5 1.7-20.3 8.5-22 22-1.7-13.5-8.5-20.3-22-22C15.5 22.3 22.3 15.5 24 2Z" /></svg>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() { setMenuOpen(false) }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Medina's Cleaning Services home">
          <span>MEDINA'S</span><span>Cleaning Services</span>
        </a>
        <nav className="nav nav--desktop" aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#work">Our work</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#estimate">Request a quote <Arrow /></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
        </button>
        <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} id="mobile-menu">
          <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Our work</a><a href="#about" onClick={closeMenu}>About</a><a href="#estimate" onClick={closeMenu}>Request a quote</a>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="location">Manhattan, New York</p>
            <h1>Spaces that<br /><em>feel reset.</em></h1>
            <p className="hero-intro">Medina's Cleaning Services brings careful, hands-on cleaning to the places you live and work.</p>
            <a className="button button--cream" href="#estimate">Start with a quote <Arrow /></a>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="/media/image-1.jpg" alt="Clean commercial interior with a bright entry and tiled floor." fetchPriority="high" />
            <div className="hero-caption"><Spark /><span>Thoughtful care,<br />visible results.</span></div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Explore services"><span>Explore</span><i /></a>
        </section>

        <section className="services section" id="services">
          <div className="section-lede">
            <p className="section-label">A clean that fits the space</p>
            <h2>Bring us the<br />to-do list.</h2>
          </div>
          <div className="service-list">
            {services.map(([title, copy]) => <article className="service" key={title}><h3>{title}</h3><p>{copy}</p><a href="#estimate" aria-label={`Request a quote for ${title}`}><Arrow /></a></article>)}
          </div>
        </section>

        <section className="proof" id="about">
          <div className="proof-photo"><img src="/media/image-2-upscaled.jpg" alt="Two members of a cleaning team standing with professional floor equipment." loading="lazy" /></div>
          <div className="proof-copy">
            <p className="section-label">Made with care</p>
            <h2>Detail you can<br />count on.</h2>
            <p>Every visit is built around the details that make a space feel right: consistent care, respectful service, and a clean you can see from the first pass to the final look around.</p>
            <a className="text-link" href="#work">See the work <Arrow /></a>
          </div>
        </section>

        <section className="gallery section-dark" id="work">
          <div className="gallery-intro"><p className="section-label">Recent work</p><h2>Proof is in<br />the details.</h2><p>Real moments from the spaces Medina's Cleaning Services has cared for.</p></div>
          <div className="gallery-grid">
            {gallery.map((image, index) => <figure className={`gallery-item gallery-item--${index + 1}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}
          </div>
        </section>

        <section className="estimate" id="estimate">
          <div className="estimate-intro"><p className="section-label">Let’s make a plan</p><h2>Tell us what<br /><em>needs care.</em></h2><p>Share the basics about your space and the kind of cleaning you have in mind. We’ll use it to start the conversation.</p></div>
          <div className="form-shell">
            {submitted ? <div className="form-success" role="status"><Spark /><h3>Thank you.</h3><p>Your request is ready for the Medina's Cleaning Services team to review.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another request <Arrow /></button></div> : <form onSubmit={handleSubmit}>
              <label>Your name<input name="name" autoComplete="name" required placeholder="First and last name" /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>What kind of space?<select name="space" required defaultValue=""><option value="" disabled>Select one</option><option>Home or apartment</option><option>Office or workplace</option><option>Retail or shared space</option><option>Something else</option></select></label>
              <label className="form-wide">A few details<textarea name="details" rows={4} required placeholder="Location, rooms or areas, and what you need cleaned." /></label>
              <button className="button button--dark form-submit" type="submit">Send quote request <Arrow /></button>
            </form>}
          </div>
        </section>
      </main>

      <footer><div className="footer-brand"><span>MEDINA'S</span><span>Cleaning Services</span></div><p>Manhattan, New York</p><a href="#top">Back to top <Arrow /></a><p>© {new Date().getFullYear()} Medina's Cleaning Services</p></footer>
    </>
  )
}
