var adresse = prompt("Indiquer votre adresse :");
alert ("Vous habitez : " + adresse);
$.ajax({
  url: "https://api-adresse.data.gouv.fr/search/?q=" + adresse
});

/*https://api-adresse.data.gouv.fr/search/?q=adresse*/
/******************ACCORDION********************************************************/

$( function() {
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
      icons: icons,
      active: 1
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  } );