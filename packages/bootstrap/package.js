Package.describe({
  name: 'scorpiusjs:bootstrap',
  summary: 'A simple theme for scorpius',
  version: '0.1.0',
  git: 'https://github.com/scorpiusjs/scorpius'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'meteor-platform',
    'scorpiusjs:core@0.1.0',
    'less@2.5.0_1',
    'aldeed:autoform@5.7.1',
    'aldeed:tabular@1.1.0',
    'useraccounts:bootstrap@1.11.1'
    ]);

  api.imply([
    'scorpiusjs:core',
    'aldeed:autoform',
    'useraccounts:bootstrap'
    ]);

  api.addFiles([
    'init.js',
    'tabular.js'
    ]);

  api.addFiles([
    'views/layout/layout.html',
    'views/layout/layout.js',
    'views/layout/layout.less',
    'views/sidebar/sidebar.html',
    'views/sidebar/sidebar.less',
    'views/accounts/login.html',
    'views/accounts/register-with-invitation.html',
    'views/accounts/index.html',
    'views/accounts/password.html',
    'views/accounts/profile.html',
    'views/accounts/profile.js',
    'views/accounts/accounts.less',
    'views/accounts/accounts.html',
    'views/accounts/update.html',
    'views/accounts/create.html',
    'views/config/update.html',
    'views/config/update.js',
    'views/dictionary/update.html',
    'views/dictionary/update.js',
    'views/collections/index.html',
    'views/collections/index.js',
    'views/collections/index.less',
    'views/collections/create.html',
    'views/collections/create.js',
    'views/collections/update.html',
    'views/collections/update.js',
    'views/collections/delete.html',
    'views/pages/index.html',
    'views/pages/create.html',
    'views/pages/update.html',
    'views/pages/delete.html',
    'views/pages/pages.js',
    ], 'client');

  api.export('scorpius');
});

Package.onTest(function(api) {
  api.use('tinytest');
  // api.use('scorpiusjs:core');
});
