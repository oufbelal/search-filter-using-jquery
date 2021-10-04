/* Random User 'Portraits' Generator */

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});


/* Users informationlist */

var data = [  
   {  
      "id":1,
      "name":"Aaron Garo",
   },
   {  
      "id":2,
      "name":"Michael Stines",
   },
   {  
      "id":3,
      "name":"John Smith",
   },
   {  
      "id":4,
      "name":"Ully Heiz",
   },
   {  
      "id":5,
      "name":"Ouf Ibrahim",
   },
   {  
      "id":6,
      "name":"Asgaf Torino",
   }
]

/* Output Content to the HTML */

output = "";
$.each(data, function(key, val){
	output += "<li class='list-group-item values'>";
  	output += '<img class="rounded-circle" src="https://randomuser.me/api/portraits/med/men/' + val.id + '.jpg">';
  	output += '<span class="value-name">' + val.name + '</span>'
  output += "</li>";
});

$('#content').html(output);

/* User Function */

 if (!RegExp.escape) {
   RegExp.escape = function (s) {
     return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
   };
 }
 
jQuery(function(){
  var $rows = $('.values');
  $('#user').keyup(function () {
    var regex =  new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
    $rows.hide().filter(function () {
      var text = $(this).children(".value-name").text().replace(/\s+/g, ' ');
      return regex.test(text)
    }).show();
  });
});
