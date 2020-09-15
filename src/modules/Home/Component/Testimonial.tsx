import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonial } from 'modules/Home/Store/actions';

export default () => {
  const { header, items }: any = useSelector((state: any) => state.home.testimonial);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(fetchTestimonial());
  }, [stableDispatch]);

  const item = items[Math.floor(Math.random()*items.length)];

  return (
    <section className="testimonials">
      <div className="text-placeholder">
        <h2>{header.title}</h2>
        <blockquote>
          {item.comment}
          <span>{item.author}</span>
        </blockquote>
      </div>
      <div className="image-placeholder">
        <img src="/images/testimonials.png" alt={item.author} />
      </div>
    </section>
  );
}
