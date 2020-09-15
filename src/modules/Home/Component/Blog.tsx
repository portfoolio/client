import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from 'modules/Home/Store/actions';
import { uuid4 } from 'util/helper';

export default () => {
  const { header, posts }: any = useSelector((state: any) => state.home.blog);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchBlog());
  }, [stableDispatch]);

  if (posts.length > 0) {
    setTimeout(function () {
      // @ts-ignore
      $('.news .owl-carousel').owlCarousel({
        dots: false,
        margin: 30,
        navContainer: ('.section-title .owl-nav'),
        responsive: {
          320: {
            items: 1
          },
          750: {
            items: 2
          },
          1230: {
            items: 3
          }
        }
      });
    }, 1000);
  }

  return (
    <section className="news">
      <div className="container">
        <div className="section-title section-title--flex">
          <div className="text--align-left">
            <h2>{header.title}</h2>
            <p>{header.description}</p>
          </div>

          <div className="owl-nav" />
        </div>

        <div className="news__list owl-carousel">
          {
            posts.map(({ title, description, thumbnail }: any) => (
              <div className="news__card" key={uuid4()}>
                <a href="#">
                  <figure className="news__card-image" style={{ backgroundImage: `url('${thumbnail}')`}}/>

                  <div className="news__card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>

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
            ))
          }
        </div>
      </div>
    </section>
  );
}
