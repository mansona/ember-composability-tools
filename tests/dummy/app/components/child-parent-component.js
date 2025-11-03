/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/no-mixins, ember/require-tagless-components, prettier/prettier */
import Component from '@ember/component';
import ChildMixin from 'ember-legacy-composability-tools/mixins/child';
import ParentMixin from 'ember-legacy-composability-tools/mixins/parent';

export default Component.extend(ParentMixin, ChildMixin, {
  didInsertParent() {
    this._super(...arguments);
    console.log('didInsertParent - child-parent'); // eslint-disable-line
  },

  willDestroyParent() {
    this._super(...arguments);
    console.log('willDestroyParent - child-parent'); // eslint-disable-line
  }
});
