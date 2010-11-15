(function( $ ){
  $.fn.pushTop = function() {
    return this.each(function() {
      var $this = $(this);
      top_z_index = 0;
      $('*').each(function() {
        var this_z_index = $(this).css('z-index');
        if (this_z_index != "auto" && this_z_index > top_z_index) {
            top_z_index = this_z_index;
        }
      });
      top_z_index++;
      $this.css('z-index',top_z_index);
    });
  };
})( jQuery );