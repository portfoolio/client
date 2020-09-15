import { mergeMap } from 'rxjs/operators';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { concat, from, of } from 'rxjs';

import { ServiceInterface } from 'util/Service';
import { ActionType } from 'modules/Home/Store/types';
import {
  fetchAboutFulFilled, fetchBlogFulFilled,
  fetchJourneyFulFilled,
  fetchProjectFulFilled,
  fetchServiceFulFilled,
  fetchTestimonialFulFilled,
} from 'modules/Home/Store/actions';
import { Client } from 'common/api';

const fetchAbout = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_ABOUT),
    mergeMap(() => {
      return from(Service.request(Client.fetchAbout)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchAboutFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

const fetchService = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_SERVICE),
    mergeMap(() => {
      return from(Service.request(Client.fetchService)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchServiceFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

const fetchJourney = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_JOURNEY),
    mergeMap(() => {
      return from(Service.request(Client.fetchJourney)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchJourneyFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

const fetchProject = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_PROJECT),
    mergeMap(() => {
      return from(Service.request(Client.fetchProject)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchProjectFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

const fetchTestimonial = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_TESTIMONIAL),
    mergeMap(() => {
      return from(Service.request(Client.fetchTestimonial)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchTestimonialFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

const fetchBlog = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>,
  { Service }: { Service: ServiceInterface },
) => {
  return action$.pipe(
    ofType(ActionType.FETCH_BLOG),
    mergeMap(() => {
      return from(Service.request(Client.fetchBlog)).pipe(
        mergeMap((response: any) => {
            return concat(
              of(fetchBlogFulFilled(response)),
            );
          },
        ),
      );
    }),
  );
};

export default {
  fetchAbout,
  fetchService,
  fetchJourney,
  fetchProject,
  fetchTestimonial,
  fetchBlog,
};
