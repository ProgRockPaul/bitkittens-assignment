$(function(){
  $('.summon-cats').on('click', function(){
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      dataType: "json"
    }).done(function(responseData){
      var catList = responseData["cats"];
      // console.log(catList[0]);
      // var catPic = responseData["photo"];
      // console.log(catPic);

      $('<img>').attr('src', catList[0]["photo"]).attr('alt', "Photo of " + catList[0]["name"]).appendTo('#cat1');
      $('<img>').attr('src', catList[1]["photo"]).attr('alt', "Photo of " + catList[1]["name"]).appendTo('#cat2');
      $('<img>').attr('src', catList[2]["photo"]).attr('alt', "Photo of " + catList[2]["name"]).appendTo('#cat3');

    })
  });

});
