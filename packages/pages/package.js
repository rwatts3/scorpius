Package.describe({
	name: 'scorpiusjs:pages',
	summary: 'Pages for Scorpius CMS',
	version: '0.1.0',
	git: 'https://github.com/scorpiusjs/pages'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.0.1');

	api.use([
		'blaze-html-templates@1.0.1',
		'ecmascript@0.1.6',
		'meteor-platform',
		'scorpiusjs:base@0.1.0',
		'aldeed:collection2@2.3.3',
		'aldeed:autoform@5.4.0'
		]);

	api.use(['aldeed:tabular@1.2.0', 'nicolaslopezj:tabular-materialize@1.2.1'], {
		weak: true
	});

	api.imply([

		]);

	api.addFiles([
		'pages.js',
		'admin.js'
		]);

	api.addFiles([
		'pages_server.js'
		], 'server');

	api.addFiles([
		'pages.html',
		'pages_client.js'
		], 'client');

});
