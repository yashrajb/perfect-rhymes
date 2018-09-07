var btn = document.getElementById("submit-btn");

btn.addEventListener("click",function(){

var user_input = document.getElementById("user_input").value;
var resultUL = document.getElementById("resultUL");
if(user_input!==""){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resultUL.innerHTML = "";
      var obj = JSON.parse(this.responseText);
      for(var i=0;i<obj.length;i++){
        resultUL.innerHTML = result.innerHTML+"<li>"+obj[i].word+"</li>";
      }
    }
  };
  xhttp.open("GET", "https://api.datamuse.com/words?rel_rhy="+user_input, true);
  xhttp.send();
}else {
  resultUL.innerHTML = "";
}





})