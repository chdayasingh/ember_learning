import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class IndexRoute extends Route {
  // model hook - will return model (data) for this route
  async model() {
    // fetching data from remote and reshaping
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { type, ...attributes };
    });
  }
}
