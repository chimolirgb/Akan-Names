var CC, YY, MM, DD, d, dayValue;    

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
function getGender(){
    let gender = document.getElementsByName("gender");
    if (genders[0].checked == true){
        var gender = "male";
    }
    else if(genders[1].checked == true){
        var gender = "female"; 
    }
    else{
        return false;
    }
    switch(gender){
        case "male":
            if (dayValue == 1){
                alert ("You were born on" + dayNames[0] + "and Your akan name is" + maleNames[0] + "!");
            }
            else if (dayValue == 2){
                alert("You were born on" + dayNames [1] +"and Your akan name is" + maleNames[1] +"!");
            }
            else if (dayValue == 3){
                alert ("You were born on" + dayNames[2] + "and Your akan name is" + maleNames[2] + "!")
            }
            else if (dayValue ==4){ 
                alert("You were born on" + dayNames[3] + "and Your akan name is" + maleNames[3] + "!");
            }
            else if (dayValue == 5){
                alert("You were born on" + dayNames[4] +"and Your akan name is" + maleNames[4] + "!");
            }
            else if (dayValue == 6){
                alert("You were born on" +dayNames[5] + "and Your akan name is" + maleNames[5] + "!");
            }
            else if (dayValue == 7){
                alert("You were born on" + dayNames[6] + "and Your akan name is" + maleNames[6] + "!");
            }
        }
    }
    break;
      "female";
        if (dayValue == 1){
            alert("You were born on" + dayNames[0] + "and Your akan name is" + femaleNames[0] + "!");
        }
        else if (dayValue ==2){
        alert("You were born on" + dayNames[1] + "and Your akan name is" + femaleNames[1]+ "!");
        }
         else if (dayValue == 3){
    alert("You were born on" + dayNames[2] + "and Your akan name is" + femaleNames[2] + "!");
}
else if(dayValue ==4){
    alert("You were born on" + dayNames[3]+ "and Your akan name is" +femaleNames[3] + "!");
}
else if (dayValue ==5){
    alert("You were born on" + dayNames[4] + "and Your akan name is" + femaleNames[4] + "!");
}
else if (dayValue == 6){
    alert("You were born on" + dayNames[5]+ "and Your akan name is" + femaleNames[5] + "!");
}
break
function findName(){
  dayValue = calculateDayValue();
  getGender();
}