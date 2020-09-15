import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchService } from 'modules/Home/Store/actions';
import { uuid4 } from 'util/helper';

export default () => {
  const { header, services }: any = useSelector((state: any) => state.home.service);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchService());
  }, [stableDispatch]);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>{header.title}</h2>
          <p>{header.description}</p>
        </div>

        <div className="service__list">
          {
            services.map(({ title, description, icon }: { title: string, description: string, icon: string }) => (
              <div className="service__card" key={uuid4()}>
                <div className="service__card-icon">
                  <i className={icon} />
                </div>
                <div className="service__card-title">
                  <h4>{title}</h4>
                </div>

                <div className="service__card-content">
                  <p>
                    {description}
                  </p>
                  <span>
                    <i className="icon icon--arrow-right" />
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
