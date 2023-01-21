function main(){

  var input = document.getElementById("age");
  var age = input.value;

  if (age <=6 || age >=60){
    alert ("preis beträgt 4 Euro")
  }

  else{
    alert("preis beträgt 6.50 Euro")
  }

  //< 6 jahren oder > 60 -> Sonderpreis 4 Euro
  // Für alle anderen -> 6.50 Euro
}