var config = {
  all: {
  },
  development: {
    scripts: [
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
      'bower/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js'
    ],
    stylesheets: [
      'public/css/app.css'
    ]
  },
  production: {
    scripts: [
      'public/js/all.js'
    ],
    stylesheets: [
      'public/css/all.css'
    ]
  },
};

module.exports = function (env) {
  return require('underscore').extend(config.all, config[env]);
};
