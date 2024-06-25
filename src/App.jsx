import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import './App.css';

function App() {
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://formspree.io/f/xknlrdlw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        form.reset();
        enqueueSnackbar('Message recieved!', { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar('An error occurred while sending the message.', { variant: 'error' });
      });
  }

  return (
    <SnackbarProvider maxSnack={3}>
      <header>
        <div />
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div />
      </header>

      <section className="hero-section">
        <div>
          <h1>Precious Uwhubetine</h1>
          <p>Full-stack developer</p>
        </div>
      </section>

      <section className="about-section" id="about">
        <h1>About me</h1>
        <div>
          <p>
            I am a full-stack developer with 5+ years of experience building scalable web
            applications. I develop websites with JavaScript, React, Redux, and Ruby on Rails.
          </p>
          <p>
            I have extensive experience working with and managing databases, such as MySQL, PostgreSQL and MongoDB.
          </p>
          <p>
            I have also had the opportunity to collaborate with a startup to design and
            develop a website from the ground up, establishing their online presence.
          </p>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2>Featured Projects</h2>
        <ul className="project-list">
          <li className="project-item">
            <h3>The Kingdom Trybe</h3>
            <a href="https://s1.thekingdomtrybe.com" target="_blank" rel="noreferrer">See Project</a>
          </li>
          <li className="project-item">
            <h3>Pepperish.ng</h3>
            <a href="https://pepperish.netlify.app" target="_blank" rel="noreferrer">See Project</a>
            </li>
          <li className="project-item">
            <h3>Schoolinka Todo App</h3>
            <a href="https://todo-app-preciousbetine.vercel.app/" target="_blank" rel="noreferrer">See Project</a>
            </li>
        </ul>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <h2>Contact</h2>

          <form id="contact-form" name="contact-form" onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="Email" required />

            <label htmlFor="message">Message</label>
            <textarea rows={5} id="message" name="Message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Precious Uwhubetine</p>

        <ul>
          <li><a href="mailto:preciousbetine@gmail.com">Email</a></li>
          <li><a href="https://github.com/preciousbetine" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/preciousbetine" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </footer>
    </SnackbarProvider>
  )
}

export default App
