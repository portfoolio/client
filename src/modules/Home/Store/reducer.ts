import { ActionType } from 'modules/Home/Store/types';

const initialState = {
  about: {
    about: {
      title: '',
      description: '',
    },
    header: {
      title: '',
      subtitle: '',
      description: '',
      image: '',
      links: {
        facebook: '',
        twitter: '',
        instagram: '',
        linkedIn: '',
        github: '',
      }
    },
    counter: [],
  },

  service: {
    header: {
      title: '',
      description: '',
    },
    services: [],
  },

  journey: {
    header: {
      title: '',
      description: '',
    },

    items: [],
  },

  project: {
    header: {
      title: '',
      description: '',
    },

    items: [],
  },

  testimonial: {
    header: {
      title: '',
      description: '',
    },

    items: [
      {
        comment: 'Initial',
        author: 'Portfolio - LinkedIn'
      }
    ],
  },

  blog: {
    header: {
      title: '',
      description: '',
    },

    posts: [],
  }
};

export default (
  state: any = initialState,
  action: any,
): object => {
  switch (action.type) {
    case ActionType.FETCH_ABOUT:
      return {
        ...state,
        about: initialState.about,
      };

    case ActionType.FETCH_ABOUT_FULFILLED:
      return {
        ...state,
        about: action.about,
      };


    case ActionType.FETCH_SERVICE:
      return {
        ...state,
        service: initialState.service,
      };

    case ActionType.FETCH_SERVICE_FULFILLED:
      return {
        ...state,
        service: action.service,
      };


    case ActionType.FETCH_JOURNEY:
      return {
        ...state,
        journey: initialState.journey,
      };

    case ActionType.FETCH_JOURNEY_FULFILLED:
      return {
        ...state,
        journey: action.journey,
      };

    case ActionType.FETCH_PROJECT:
      return {
        ...state,
        project: initialState.project,
      };

    case ActionType.FETCH_PROJECT_FULFILLED:
      return {
        ...state,
        project: action.project,
      };

    case ActionType.FETCH_TESTIMONIAL:
      return {
        ...state,
        testimonial: initialState.testimonial,
      };

    case ActionType.FETCH_TESTIMONIAL_FULFILLED:
      return {
        ...state,
        testimonial: action.testimonial,
      };

    case ActionType.FETCH_BLOG:
      return {
        ...state,
        blog: initialState.blog,
      };

    case ActionType.FETCH_BLOG_FULFILLED:
      return {
        ...state,
        blog: action.blog,
      };

    default:
      return state;
  }
};
