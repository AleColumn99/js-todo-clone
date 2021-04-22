$(document).ready(function(){

  //ricevuto da un'API esterna queste info
  var arrTodo = [
    "Comprare i crocchini per Pepe",
    "Prendere un pelapatate",
    "Andare a recuperare mio fratello",
    "Comprare la Guinness"
  ];

  //leggo il contenuto dell'array per stamparlo
  for(var i=0; i < arrTodo.length; i++) {

    var strTodo = arrTodo[i];

    /*
    //SOLUZIONE UNO PER STAMPARE (CON STRINGA)
    //inserisco nella stringa html il valore dell'elemento dell'array
    var strHtml = '<li><p>' + strTodo + '</p><i class="far fa-trash-alt"></i></li>';
    //inserisco nel codice html
    $('.app ul').append(strHtml); 
    */

    //SOLUZIONE DUE PER STAMPARE (CON CLONE)
    //inserisco nella stringa html il valore dell'elemento dell'array
    var item = $('.template li').clone();
    $(item).find('.text').append(strTodo);
    $('.app ul').append(item);

  };

  //TOGLIERE ELEMENTI
  $(document).on('click', '.fa-trash-alt', function(){
    $(this).parent().remove();
  });

  //AGGIUNGO UN ELEMENTO DAL CAMPO INPUT
  $('.app input').keyup(function(event){

    //quando schiaccio enter (13)
    if(event.which === 13) {

      var strTodo = $(this).val().trim();

      if (strTodo.length > 3) {
        var item = $('.template li').clone();
        $(item).find('.text').append(strTodo);
        $('.app ul').append(item);
        $(this).val('');
      }

    }

  });

});



























//KEYUP KEYDOWN KEYPRESS

/* $('#input-text').keyup(function(event){

  console.log(event.which);
  console.log($(this).val());
  console.log("______________________");

  if(event.which === 13) {
    console.log($(this).val());
  }

  if($(this).val().length > 3) {
    console.log($(this).val());
  }

});

//NON SI USA MAI

$('#input-text').keydown(function(event){

  console.log(event.which);

});

$('#input-text').keypress(function(event){

  console.log(event.which);
  console.log($(this).val());
  console.log("______________________");

}); */