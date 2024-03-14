import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    // return array of RendalModel's object
    return this.store.findAll('rental');
  }
}