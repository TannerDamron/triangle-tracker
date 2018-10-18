var add = function(num1,num2){
  var sum = num1 + num2;
  return sum;
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var numberOne = parseInt($("input#number1").val());
    var numberTwo = parseInt($("input#number2").val());
    var numberThree = parseInt($("input#number3").val());
    var a = add(numberTwo,numberOne);
    var b = add(numberOne,numberThree);
    var c = add(numberThree,numberTwo);
    if(numberOne === numberTwo && numberOne === numberThree && numberTwo === numberThree ) {
      $("#equilateral").show();
    }else if(numberOne === numberTwo || numberOne === numberThree || numberTwo === numberThree){
      $("#isosceles").show();
    }else if (a>numberThree || b>numberTwo || c>numberOne){
      $("#not").show();
    }else if(numberOne !== numberTwo && numberOne !== numberThree && numberTwo !== numberThree){
      $("#scalene").show();
    }
    event.preventDefault();
  });
});


//numberOne + numberTwo > numberThree || numberTwo + numberThree > numberOne || numberThree + numberOne > numberTwo

//(!numberOne || !numberTwo || !numberThree)
