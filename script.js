var deneme=0

function myFunction() {
    var sayi = document.getElementById("myInput").value;
    deneme +=1
    document.getElementById("denemesayisi").innerHTML ="This is your test number: " + deneme;
    
    if (sayi == 38) {
      text = "Spot on! Good job!";
    
  
    } else if (sayi > 38) {
      text = "I am thinking a lower number..";

    } else if (sayi < 38) {
        text = "I am thinking a higher number..";
    
  
    } else {
      text = "Waaay off..";
    }
 
  
      document.getElementById("test").innerHTML = text;
  }


