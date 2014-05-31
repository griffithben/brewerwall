require.config({
  paths: {
    jquery: 'components/jquery',
    underscore: 'components/underscore',
    backbone: 'components/backbone',
    text: 'components/text'
  },
  shim: {
    jquery: { exports: '$' },
    underscore: { exports: '_' },
    backbone: { deps: ['jquery','underscore'], exports: 'Backbone' }
  }
});
