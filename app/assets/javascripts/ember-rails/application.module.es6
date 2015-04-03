//= require ember/loader
//= require ember-rails/shims
//= require ember/resolver
//= require ember/load-initializers
//
//= require ember-rails/module_prefix

import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import modulePrefix from 'ember-rails/module_prefix';

let _loadInitializers = loadInitializers['default'] || loadInitializers;

let App = Ember.Application.extend({
  modulePrefix: modulePrefix,
  Resolver: Resolver
});

_loadInitializers(App, modulePrefix);

export default App;
