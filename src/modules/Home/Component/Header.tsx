import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from 'modules/Home/Store/actions';
import { capitalize, uuid4 } from 'util/helper';

export default () => {
  const { header }: any = useSelector((state: any) => state.home.about);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchAbout());
  }, [stableDispatch]);

  return (
    <section className="hero">
      <ul className="social-list">
        {
          Object.keys(header.links).map((item: any) => {
            return (
              <li key={uuid4()}>
                <a href={header.links[item]} target="_blank">{capitalize(item)}</a>
              </li>
            )
          })
        }
      </ul>
      <div className="container">
        <header className="header" id="header">
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
                <a href="#services">Services Me</a>
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
            <h3>{header.title}</h3>
            <h1>
              I'm <span>{header.subtitle}</span>
            </h1>
            <p>{header.description}</p>

            {/*<div className="cta-placeholder">
              <button className="btn btn--default">Download Resume</button>
              <button className="btn btn--default">My Portfolio</button>
            </div>*/
            }
          </div>

          <div className="hero__caption-image" style={{ backgroundImage: `url(${header.image})`}} />
        </div>
      </div>
    </section>
  );
};
