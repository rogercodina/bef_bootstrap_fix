/**
 * @file
 * JS code, all what this module does is here.
 */

Drupal.behaviors.bef_bootstrap_fix = {
  attach: function (context, settings) {
    var views_exposed_form = jQuery('.views-exposed-form', context);

    views_exposed_form.hide();
    views_exposed_form.find('.form-control').not('.form-text, .form-select').removeClass('form-control');
    views_exposed_form.show();
  }
};
