import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJourney } from 'modules/Home/Store/actions';
import { truncate, uuid4 } from 'util/helper';

export default () => {
  const [tab, setTab] = useState(0);
  const { header, items }: any = useSelector((state: any) => state.home.journey);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchJourney());
  }, [stableDispatch]);

  return (
    <section className="journey">
      <div className="container">
        <div className="section-title">
          <h2>{header.title}</h2>
          <p>{header.description}</p>
        </div>

        <div className="tabs">
          <div className="tab__nav">
            {
              items.map(({ title }: { title: string }, k: any) => {
                return (
                  <button
                    className="btn btn--default"
                    key={uuid4()}
                    onClick={() => setTab(k)}
                  >{title}</button>
                );
              })
            }
          </div>

          <div className="tab__content">
            {
              items.map(({ items: content }: any, k: any) => (
                <ul key={uuid4()} style={{ display: k === tab ? '' : 'none' }}>
                  {
                    content.map(({ title, subtitle, description }: any) => (
                      <li key={uuid4()}>
                        <h4>{title}</h4>
                        <span>{subtitle}</span>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: truncate(description.split('!').slice(1).join('<br /> -'), 300)
                          }}
                        />
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
