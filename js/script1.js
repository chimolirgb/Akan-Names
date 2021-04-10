var CC, YY, MM, DD, d, dayValue, gender;    

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
var maleNames = [" Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 

function calculateDayValue(){
 let year = document.getElementById("year").value;
 console.log(year);
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
    console.log(d);
    return(Math.floor(d));
}
function getAkanName(dayValue){
    let genderRadio = document.getElementsByName("gender");
    console.log(genderRadio)

    for (i = 0; i < genderRadio.length; i++){
        if (genderRadio[i].checked)
        gender = genderRadio[i].value;
    }
   console.log(gender);

    switch( gender){
        case "Male":
          alert("You were born on" + dayNames[dayValue] + "and you are" + gender + ". so your Akan name is" + maleNames[dayValue] + "!"); 
          
    break;
      case "Female":
        alert("You were born on" + dayNames[dayValue] + "and you are" + gender + ". so your Akan name is" + femaleNames[dayValue] + "!");      
break;
    }
}
    function findName() {
  dayValue = calculateDayValue();
  getAkanName(dayValue);
}