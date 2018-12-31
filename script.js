function kod_generate(){
  var regExp = /\[\[(.*)\]\]/g;
  var matches = $("div.woocommerce-variation-add-to-cart").first().html().match(regExp);

  if(matches){
    for (var i = 0; i < matches.length; i++) {
      var str_base = matches[i];
      var str = str_base.substring(2, str_base.length - 2);

      $.getJSON( "<?= get_template_directory_uri(); ?>/assets/json/data.json", function( data ) {
        $.each( data, function( key, val ) {
        if(str === key){
          $("div.woocommerce-variation-add-to-cart").html($("div.woocommerce-variation-add-to-cart").html().replace(str_base,val));
          // FOR DEBUG
          //console.log(str_base + " replaced by " + val);
        }
        });
      });
    }
  }
}		
kod_generate();
