import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RoutingDefinition } from 'modules/Core/types';

const App: FC = () => {
  const appTitle: string = process.env.REACT_APP_NAME || 'Djordje Stojiljkovic';

  const routingDefs: RoutingDefinition[] = [];

  return (
    <BrowserRouter>
      <Helmet titleTemplate={`${appTitle} | %s`} defaultTitle={appTitle}>
        <meta charSet="utf-8" />
        <meta name="description" content="Djordje Stojiljkovic" />
      </Helmet>


      <Switch>
        {
          routingDefs.map(
            (routingDef: RoutingDefinition): ReactNode => routingDef.map((route: ReactNode): ReactNode => route)
          )
        }

        <Route
          render={(): React.ReactNode => (
            <>
              <div className="landing">
                <section className="hero">
                  <ul className="social-list">
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Linkedin</a>
                    </li>
                  </ul>
                  <div className="container">
                    <header className="header" id="header">
                      <a href="#">
                        <img src="/images/logo.png" alt="Logo" />
                      </a>
                      <nav className="nav">
                        <button className="btn--close"><i className="fas fa-times" /></button>

                        <ul>
                          <li className="nav__item">
                            <a href="#">Home</a>
                          </li>
                          <li className="nav__item">
                            <a href="#about">About Me</a>
                          </li>
                          <li className="nav__item">

                            <div className="nav__item-dropdown">
                              <a href="#services">Services <i className="fas fa-angle-down ml-5" /></a>
                              <ul>
                                <li>
                                  <a href="#">Menu item</a>
                                </li>

                                <li>
                                  <a href="#">Menu item</a>
                                </li>

                                <li>
                                  <a href="#">Menu item</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav__item">
                            <a href="#work">Work</a>
                          </li>
                          <li className="nav__item">
                            <a href="#">Blog</a>
                          </li>
                          <li className="nav__item">
                            <a href="#contact">Contact</a>
                          </li>
                        </ul>
                      </nav>

                      <div className="cta-placeholder">
                        <button hidden className="btn btn--link"><i className="fas fa-search" /></button>
                        <button className="btn btn--hamburger btn--link"><i className="fas fa-bars" /></button>
                      </div>
                    </header>

                    <div className="hero__caption">
                      <div className="hero__caption-text">
                        <h3>Hi There</h3>
                        <h1>I'm <span>Jonathan Deo</span></h1>
                        <p>A professional Web Developer and UI/UX Designer.</p>

                        <div className="cta-placeholder">
                          <button className="btn btn--default">Download Resume</button>
                          <button className="btn btn--default">My Portfolio</button>
                        </div>
                      </div>

                      <div className="hero__caption-image" />
                    </div>
                  </div>
                </section>

                <section id="about" className="about">
                  <div className="container">
                    <ul className="stats">
                      <li>
                        <span className="stats__counter">808+</span>
                        <span className="stats__title">Projects completed</span>
                      </li>
                      <li>
                        <span className="stats__counter">525+</span>
                        <span className="stats__title">Positive Feedback</span>
                      </li>
                      <li>
                        <span className="stats__counter">125+</span>
                        <span className="stats__title">Runing Project</span>
                      </li>
                      <li>
                        <span className="stats__counter">1231+</span>
                        <span className="stats__title">Cups of coffee</span>
                      </li>
                    </ul>

                    <div className="about__wrapper">
                      <div className="about__image">
                        <figure>
                          <img src="/images/about.png" alt="" />
                        </figure>
                      </div>
                      <div className="about__text">
                        <h2>Read About Me</h2>

                        <p>
                          Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs.
                          Prosperous understood middletons in conviction an uncommonly do.
                          Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.
                        </p>

                        <div className="skill__list">
                          <div className="skill__item">
                            <div className="bg-orange" style={{ width: '75%'}}>
                              <span>UX/UI Design</span>
                              <span className="align-right">75%</span>
                            </div>
                          </div>
                          <div className="skill__item">
                            <div className="bg-purple" style={{ width: '60%'}}>
                              <span>Web Development</span>
                              <span className="align-right">60%</span>
                            </div>
                          </div>
                          <div className="skill__item">
                            <div className="bg-blue" style={{ width: '90%'}}>
                              <span>Problem Solving</span>
                              <span className="align-right">90%</span>
                            </div>
                          </div>
                          <div className="skill__item">
                            <div className="bg-light-blue" style={{ width: '66%'}}>
                              <span>Prototype</span>
                              <span className="align-right">66%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="services" className="services">
                  <div className="container">
                    <div className="section-title">
                      <h2>My Services</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>

                    <div className="service__list">
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--graphic-design" />
                        </div>
                        <div className="service__card-title">
                          <h4>Graphic Design</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span>
                            <i className="icon icon--arrow-right" />
                          </span>
                        </div>
                      </div>
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--ux"></i>
                        </div>
                        <div className="service__card-title">
                          <h4>UX/UI Design</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span><i className="icon icon--arrow-right"></i></span>
                        </div>
                      </div>
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--branding"></i>
                        </div>
                        <div className="service__card-title">
                          <h4>Branding Design</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span><i className="icon icon--arrow-right"></i></span>
                        </div>
                      </div>
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--creative"></i>
                        </div>
                        <div className="service__card-title">
                          <h4>Creative Design</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span><i className="icon icon--arrow-right"></i></span>
                        </div>
                      </div>
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--research"></i>
                        </div>
                        <div className="service__card-title">
                          <h4>Web Research</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span><i className="icon icon--arrow-right"></i></span>
                        </div>
                      </div>
                      <div className="service__card">
                        <div className="service__card-icon">
                          <i className="icon icon--analysis"></i>
                        </div>
                        <div className="service__card-title">
                          <h4>Project Analysis</h4>
                        </div>

                        <div className="service__card-content">
                          <p>
                            Lorem ipsum dolor sit amet, ctetur adipiscing elit. Maecenas consectetur luctus tellus, a aliquam.
                          </p>
                          <span><i className="icon icon--arrow-right"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="journey">
                  <div className="container">
                    <div className="section-title">
                      <h2>My Awesome Journey</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>

                    <div className="tabs">
                      <div className="tab__nav">
                        <button className="btn btn--default">My Education</button>
                        <button className="btn btn--default">My Experience</button>
                        <button className="btn btn--default">Awards</button>
                      </div>

                      <div className="tab__content">
                        <ul>
                          <li>
                            <h4>Diploma in Web @ Web Dev Ltd</h4>
                            <span>1998-2000 - University of Stuies</span>
                            <p>
                              Lorem ipsum dolor sit amet Awards ut laoreet re na aliquam erat volutpat.
                              Ut wisi enim ad minim quis. ia, design & development, lead generation and hjpk communications.
                            </p>
                          </li>
                          <li>
                            <h4>Diploma in Web @ Web Dev Ltd</h4>
                            <span>1998-2000 - University of Stuies</span>
                            <p>
                              Lorem ipsum dolor sit amet Awards ut laoreet re na aliquam erat volutpat.
                              Ut wisi enim ad minim quis. ia, design & development, lead generation and hjpk communications.
                            </p>
                          </li>
                          <li>
                            <h4>Diploma in Web @ Web Dev Ltd</h4>
                            <span>1998-2000 - University of Stuies</span>
                            <p>
                              Lorem ipsum dolor sit amet Awards ut laoreet re na aliquam erat volutpat.
                              Ut wisi enim ad minim quis. ia, design & development, lead generation and hjpk communications.
                            </p>
                          </li>
                          <li>
                            <h4>Diploma in Web @ Web Dev Ltd</h4>
                            <span>1998-2000 - University of Stuies</span>
                            <p>
                              Lorem ipsum dolor sit amet Awards ut laoreet re na aliquam erat volutpat.
                              Ut wisi enim ad minim quis. ia, design & development, lead generation and hjpk communications.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="work" className="projects">

                  <div className="section-title">
                    <h2>Our Recent Projects</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>

                  <div className="slider owl-carousel">
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                    <div className="project">
                      <figure>
                        <div className="overlay">
                          <a href="#">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="#">
                            <i className="fas fa-heart" />
                          </a>
                        </div>

                        <img src="/images/project.png" alt="" />
                      </figure>

                      <h4>Dashboard UI Design</h4>
                      <small>Completed on 25 July 2019</small>
                    </div>
                  </div>
                </section>

                <section className="testimonials">
                  <div className="text-placeholder">
                    <h2>What’s Our Client Saying</h2>
                    <blockquote>
                      We provide marketing services to startups and small businesses to looking for a
                      partner of their digital media, design & development, lead generation and communications requirements.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                      <span>Mark Toyen - Envato Customer</span>
                    </blockquote>
                  </div>
                  <div className="image-placeholder">
                    <img src="/images/testimonials.png" alt="" />
                  </div>
                </section>

                <section className="news">
                  <div className="container">
                    <div className="section-title section-title--flex">
                      <div className="text--align-left">
                        <h2>Latest News</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna prodhe leorem ipsum aliqua.
                        </p>
                      </div>

                      <div className="owl-nav">
                      </div>
                    </div>

                    <div className="news__list owl-carousel">
                      <div className="news__card">
                        <a href="#">
                          <figure className="news__card-image">

                          </figure>

                          <div className="news__card-content">
                            <h4>Hey Seeker, It Time to job.</h4>
                            <p>
                              Fusce dignissim a orci sit amet sagittis.
                              Pellentesque habitan. Lorem ipsum olor sit amet, consectetur.
                            </p>

                            <div className="news__card-meta">
                              <figure>
                                <img src="" alt="" />
                              </figure>

                              <span>John Deo</span>
                              <span className="align-right"><i className="far fa-heart mr-5" />27</span>
                              <span><i className="far fa-comment mr-5" />12</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="news__card">
                        <a href="#">
                          <figure className="news__card-image">

                          </figure>

                          <div className="news__card-content">
                            <h4>Hey Seeker, It Time to job.</h4>
                            <p>
                              Fusce dignissim a orci sit amet sagittis.
                              Pellentesque habitan. Lorem ipsum olor sit amet, consectetur.
                            </p>

                            <div className="news__card-meta">
                              <figure>
                                <img src="" alt="" />
                              </figure>

                              <span>John Deo</span>
                              <span className="align-right"><i className="far fa-heart mr-5" />27</span>
                              <span><i className="far fa-comment mr-5" />12</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="news__card">
                        <a href="#">
                          <figure className="news__card-image">

                          </figure>

                          <div className="news__card-content">
                            <h4>Hey Seeker, It Time to job.</h4>
                            <p>
                              Fusce dignissim a orci sit amet sagittis.
                              Pellentesque habitan. Lorem ipsum olor sit amet, consectetur.
                            </p>

                            <div className="news__card-meta">
                              <figure>
                                <img src="" alt="" />
                              </figure>

                              <span>John Deo</span>
                              <span className="align-right"><i className="far fa-heart mr-5" />27</span>
                              <span><i className="far fa-comment mr-5" />12</span>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="news__card">
                        <a href="#">
                          <figure className="news__card-image">

                          </figure>

                          <div className="news__card-content">
                            <h4>Hey Seeker, It Time to job.</h4>
                            <p>
                              Fusce dignissim a orci sit amet sagittis.
                              Pellentesque habitan. Lorem ipsum olor sit amet, consectetur.
                            </p>

                            <div className="news__card-meta">
                              <figure>
                                <img src="" alt="" />
                              </figure>

                              <span>John Deo</span>
                              <span className="align-right"><i className="far fa-heart mr-5" />27</span>
                              <span><i className="far fa-comment mr-5" />12</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className="contact">
                  <div className="container">
                    <div className="contact__image">
                      <img src="/images/contact.png" alt="" />
                    </div>

                    <form action="" className="form align-right">
                      <h2>Get In Touch</h2>
                      <div className="form__group mb-50">
                        <div className="form__field">
                          <label>Name</label>
                          <input type="text" id="name" className="input" />
                        </div>
                        <div className="form__field">
                          <label>Email</label>
                          <input type="text" id="email" className="input" />
                        </div>
                      </div>

                      <div className="form__field mb-50">
                        <label>Subject</label>
                        <input type="text" id="subject" className="input" />
                      </div>

                      <div className="form__field mb-45">
                        <textarea name="textarea" id=""className="textarea" placeholder="Write your message" />
                      </div>

                      <button type="submit" className="btn btn--default">Send Message</button>
                    </form>
                  </div>
                </section>

                <footer>
                  <div className="container">
                    <div className="logo">
                      <a href="#">
                        <img src="/images/logo.png" alt="" />
                      </a>
                    </div>

                    <a href="#header" className="align-right">
                      Back To Top <i className="fas fa-angle-up ml-5"></i>
                    </a>

                    <p className="align-right">
                      Copyright By@Example - 2019
                    </p>
                  </div>
                </footer>
              </div>
            </>
          )}
        />
      </Switch>

    </BrowserRouter>
  );
};

export default App;
