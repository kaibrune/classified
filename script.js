/* $('#product_title_input').on("keyup", function() {
    $('#product_title_output').html($('#product_title_input').val());

    if($('#state_input').val() != ''){
    $('#product_title_output').html($('#state_input').val());
    }
});
 */


$('body').on('input', function() {

    var produkt_titel = $('#produkt_titel').val();

    var zustand = $('#zustand').val();

    var verpackung = $('#verpackung').val();

    var versand = $('#versand').val();

    $('#product_title_output').html(produkt_titel+ ' (' + zustand+ verpackung + versand+ ')');









    $('#product_description').html(

        'Hallo,<br>wir bieten hier'

    );
  
});