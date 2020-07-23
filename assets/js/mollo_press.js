(function($, Drupal, drupalSettings) {
  Drupal.behaviors.molloArtist = {
    attach(context, settings) {
      console.log("Mollo Artist");

        $('#mollo-press', context)
          .once('mollo-press')
          .each(() => {});

    },
  };
})(jQuery, Drupal, drupalSettings);
