Package.describe({
  name: 'pntbr:js-yaml-client',
  version: '0.0.1',
  summary: 'JavaScript YAML parser and dumper - YAML 1.2',
  git: 'https://github.com/pointbar/meteor-js-yaml-client',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('js-yaml.min.js', 'client');
});
