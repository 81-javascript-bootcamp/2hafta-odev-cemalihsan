/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.(apply,bind,call)

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

/*
var myCarDetails =  car.displayDetails.bind(car, car.registrationNumber, car.brand);
myCarDetails()
*/

var myCarDetails =  car.displayDetails();
myCarDetails.call(car)

//car.displayDetails.apply(car,[car.registrationNumber,car.brand])

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haricindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  /// your code here
  const searchRegExp = /\s/g;

  if(typeof name === 'string' && name.replace(searchRegExp, '').length >= 2){

    return true
  }
  else{
    return false
  }
}


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.(apply,bind,call)

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

summary.apply(book, ["dystopian novel", "1932"])

/*
let sum = summary.call(book, "dystopian novel", "1932")
sum()
*/

//summary.bind(book,"dystopian novel", "1932")





