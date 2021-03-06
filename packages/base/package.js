Package.describe({
  name: 'scorpiusjs:base',
  summary: 'Scorpius',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'ecmascript@0.1.6',
    'meteor-base@1.0.1',
    'mongo',
    'standard-minifiers@1.0.0',
    'ecmascript@0.1.6',
    'underscore',
    'spacebars',
    'blaze-html-templates@1.0.1',
    'check',
    'tracker',
    'nicolaslopezj:options@1.0.1',
    'nicolaslopezj:reactive-templates@1.2.1',
    'nicolaslopezj:roles@1.5.3 || 2.0.0',
    'nicolaslopezj:router-layer@0.0.8',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.5.0',
    'scorpiusjs:lang-en@0.1.0'
  ]);

  api.imply([
    'tracker',
    'underscore',
    'check',
    'nicolaslopezj:router-layer',
    'nicolaslopezj:options',
    'nicolaslopezj:reactive-templates',
    'nicolaslopezj:roles',
    'scorpiusjs:lang-en'
  ]);

  api.addFiles([
    'init.js',
    'helpers.js',
    'home-route.js',
    'layouts.js',
  ]);

  api.addFiles([
    'helpers_client.js',
    'links.js'
  ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});
