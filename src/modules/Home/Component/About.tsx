import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbout } from 'modules/Home/Store/actions';
import { uuid4 } from 'util/helper';

export default () => {
  const { counter, about }: any = useSelector((state: any) => state.home.about);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchAbout());
  }, [stableDispatch]);

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <ul className="stats">
            {
              counter.map(({ title, number }: { title: string, number: string }) => (
                <li key={uuid4()}>
                  <span className="stats__counter">{number}</span>
                  <span className="stats__title">{title}</span>
                </li>
              ))
            }
          </ul>

          <div className="about__wrapper">
            <div className="about__image">
              <figure>
                <img src="/images/about.png" alt="" />
              </figure>
            </div>
            <div className="about__text">
              <h2>{about.title}</h2>

              <p>
                {about.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
