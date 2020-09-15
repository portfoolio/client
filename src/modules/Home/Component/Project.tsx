import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from 'modules/Home/Store/actions';
import { uuid4 } from 'util/helper';

export default () => {
  const { header, items }: any = useSelector((state: any) => state.home.project);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchProject());
  }, [stableDispatch]);

  if (items.length > 0) {
    setTimeout(function() {
      // @ts-ignore
      $('.projects .owl-carousel').owlCarousel({
        items: items.length,
        dots: true,
        margin: 30,
        autoWidth: true,
        responsive: {
          320: {
            items: 1,
            center: true
          },
          720: {
            items: 2
          },
          780: {
            items: 3
          },
          1200: {
            items: 3
          },
          1920: {
            items: 5
          }
        }
      });
    }, 1000)
  }

  return (
    <section id="work" className="projects">

      <div className="section-title">
        <h2>{header.title}</h2>
        <p>{header.description}</p>
      </div>

      <div className="slider owl-carousel">
        {
          items.map(({ title, subtitle, image }: any) => (
            <div className="project" key={uuid4()}>
              <figure>
                <div className="overlay">
                </div>

                <img src={image} alt={title} />
              </figure>

              <h4>{title}</h4>
              <small>{subtitle}</small>
            </div>
          ))
        }
      </div>
    </section>
  );
}
