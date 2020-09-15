import { ActionType } from 'modules/Home/Store/types';

export function fetchAbout() {
  return {
    type: ActionType.FETCH_ABOUT,
  }
}

export function fetchAboutFulFilled(about: object = {}) {
  return {
    type: ActionType.FETCH_ABOUT_FULFILLED,
    about,
  }
}

export function fetchService() {
  return {
    type: ActionType.FETCH_SERVICE,
  }
}

export function fetchServiceFulFilled(service: object = {}) {
  return {
    type: ActionType.FETCH_SERVICE_FULFILLED,
    service,
  }
}

export function fetchJourney() {
  return {
    type: ActionType.FETCH_JOURNEY,
  }
}

export function fetchJourneyFulFilled(journey: object = {}) {
  return {
    type: ActionType.FETCH_JOURNEY_FULFILLED,
    journey,
  }
}

export function fetchProject() {
  return {
    type: ActionType.FETCH_PROJECT,
  }
}

export function fetchProjectFulFilled(project: object = {}) {
  return {
    type: ActionType.FETCH_PROJECT_FULFILLED,
    project,
  }
}

export function fetchTestimonial() {
  return {
    type: ActionType.FETCH_TESTIMONIAL,
  }
}

export function fetchTestimonialFulFilled(testimonial: object = {}) {
  return {
    type: ActionType.FETCH_TESTIMONIAL_FULFILLED,
    testimonial,
  }
}

export function fetchBlog() {
  return {
    type: ActionType.FETCH_BLOG,
  }
}

export function fetchBlogFulFilled(blog: object = {}) {
  return {
    type: ActionType.FETCH_BLOG_FULFILLED,
    blog,
  }
}
