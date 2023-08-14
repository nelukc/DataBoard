
setInterval("displayDateDetails()",1000);
let is24HourFormat = false;



function displayDateDetails(){
    const currentDate = new Date();

    console.log("current date "  + currentDate);
    //Date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    //Day name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[currentDate.getDay()];

    // Display values
   document.getElementById("day").innerHTML = dayName;
   document.getElementById("date").innerHTML = formattedDate;

   convertTime();

}
    


function convertTime(){
    
    const currentTime = new Date();

    console.log(currentTime)
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = 'AM';

    if(is24HourFormat){
        period = '';
    }else{
        if(hours >=12){
            period = 'PM';
            if(hours > 12){
                hours -= 12;
            }
        }

        if(hours==0){
            hours = 12 ;
        }

    }


     // Display values
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
   document.getElementById("session").innerHTML = period;
}

function convertTimeValue(){
    is24HourFormat = !is24HourFormat;
        convertTime();
 
}