$(document).ready(function(){
   function loadPinkvillaData(callback) {   
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'pinkvilla.json', true); 
      xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
              callback(xobj.responseText);
            }
      };
      xobj.send(null);  
   }

   function init() {
     loadPinkvillaData(function(response) {
        var jsonData = JSON.parse(response);
        var tempHtml = '';
        $.each(jsonData, function(key,value){
          tempHtml += '<div class="card" style="width: 18rem;" ><a href="https://www.pinkvilla.com/'+value['path']+'"><img style="" src="'+value['imageUrl']+'" class="card-img-top" alt="image"></a><div class="card-body"><a class="card-text" href="https://www.pinkvilla.com/'+value['path']+'">'+value['title']+'</a></div></div>';
        });
        $('#pinkvilla').html(tempHtml)
     });
    }
    init();
});