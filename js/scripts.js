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
    if (!numberTwo || !numberOne || !numberThree){
      alert("Enter a number:");
    }else if((numberTwo || numberOne || numberThree) === 0){
      alert('Enter a number that is not a "Zero"');
    }else if(numberOne === numberTwo && numberOne === numberThree && numberTwo === numberThree ) {
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#not").hide();
      $("#scalene").hide();
    }else if(numberOne === numberTwo || numberOne === numberThree || numberTwo === numberThree){
      $("#isosceles").show();
      $("#not").hide();
      $("#scalene").hide();
      $("#equilateral").hide();
    }else if (a<=numberThree && b<=numberTwo && c<=numberOne){
      $("#not").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
    }else if(numberOne !== numberTwo && numberOne !== numberThree && numberTwo !== numberThree){
      $("#scalene").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#not").hide();
    }
    event.preventDefault();
  });
});
