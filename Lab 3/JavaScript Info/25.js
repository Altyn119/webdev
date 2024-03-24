// Date and Time

//Create a date
let d = new Date(2012, 1, 20, 3, 12);
alert(d);

//Show a weekday
function getWeekDay(date) {
    let d = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return d[date.getDay()];
}
  
let date = new Date(2014, 0, 3); 
alert(getWeekDay(date)); 

//European weekday
function getLocalDay(date) {
    let d = date.getDay();
    if (d == 0) {
        d = 7;
    }
    return d;
}
let date1 = new Date(2012, 0, 3); 
alert( getLocalDay(date1) );

//Which day of month was many days ago?
function getDateAgo(date, days) {
    let d = new Date(date);
    d.setDate(date.getDate() - days);
    return d.getDate();
}
let date3 = new Date(2015, 0, 2);
alert( getDateAgo(date3, 1) );
alert( getDateAgo(date3, 2) ); 
alert( getDateAgo(date3, 365) ); 

//Last day of month?
function getLastDayOfMonth(year, month) {
    let d = new Date(year, month + 1, 0);
    return d.getDate();
}

//How many seconds have passed today?
function getSecondsToday() {
    let now = new Date();
    return now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
} 
alert(getSecondsToday());

//How many seconds till tomorrow?
function getSecondsToTomorrow() {
    let now = new Date();
    let ans = (now.getHours * 60 + now.getMinutes) * 60 + now.getSeconds;
    return 86400 - ans;
}

//Format the relative date
function formatDate(date) {
    let diff = new Date() - date;
    let sec = Math.floor(diff/1000); 
    if(sec < 1){
        return 'right now';
    }
    if (sec < 60) {
      return sec + ' sec. ago';
    }

    let min = Math.floor(diff/60000);
    if (min < 60) {
      return min + ' min. ago';
    }

    //format the date
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    date = [
        '0' + dayOfMonth, '0' + month, '' + year, '0' +hour,'0' + minutes
    ].map(component => component.slice(-2)); 
    
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
}



