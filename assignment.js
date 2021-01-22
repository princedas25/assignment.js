


//kilometerToMeter

function kilometerToMeter (kilometer){
    var meter = kilometer*1000;
    return meter;
}
 var prince = kilometerToMeter(5);
console.log(prince);

//budgetCalculator
function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var total= watchPrice+phonePrice+laptopPrice;
    return total;
}
var result = budgetCalculator(10,15,20);
console.log(result);


//hotelCost

function hotelCost(day){
    var cost = 0;
    if(day<=10){
        cost=day*100;
    }
    else if (day<=20){
        var firstPart=10*100;
        var remaining=day-10;
        var secondPart=remaining*80;
        cost=firstPart+secondPart;
    }
    else {
        var firstPart=10*100;
        var secondPart=10*80;
        var remaining=day-20;
        var thirdPart=remaining*50;
        cost=firstPart+secondPart+thirdPart;
    }
    return cost;
}
var result = hotelCost(5);
console.log(result);




//megaFriend
var string = ["Rahim", "karim", "prince", "Amit", "Bangladesh", "Australia", "The United State Of America"];

function megaFriend(arr) {
  var long1 = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > long1.length) {
      long1 = arr[i];
    }
  }
  return long1;
}
console.log(megaFriend(string));
