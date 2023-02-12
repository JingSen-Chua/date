let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let today = new Date()
let systemDate = new Date()
const week1 = new Date(2023,0,30);
let selectedMonth


function generateCalendar(date,prevOrNext) {

    //clear calendar
    //calendar.innerHTML=''
    
    const element = document.getElementById('calendar');
    element.remove(); // Removes the div

    const main = document.getElementById('main')
    main.insertAdjacentHTML('beforeend',`<div id="calendar" class="grid" data-role="touch" data-on-swipe-right="prevMonth" data-on-swipe-left="nextMonth"></div>`)

    let calendar = document.getElementById('calendar')

    document.getElementById(`month`).innerHTML =`${month[date.getMonth()]}`
    document.getElementById(`year`).innerHTML =`${date.getFullYear()}`

    selectedMonth = new Date(date.getFullYear(),date.getMonth())
    let prevMonth = new Date(selectedMonth.getFullYear(),selectedMonth.getMonth(),0)
    let lastDay = new Date(selectedMonth.getFullYear(),selectedMonth.getMonth()+1,0)
    let firstDay = selectedMonth.getDay();
    let totalDays =  lastDay.getDate()
    let monday
    let count = 0
    //console.log(`selected month: ${selectedMonth}`)
    //console.log(`previous month: ${prevMonth}`)
    //console.log(`last day: ${lastDay}`)
    //console.log(`first day: ${firstDay}`)
    //console.log(`total days: ${totalDays}`)
    //determine which date is the first monday on calendar screen

    if (selectedMonth.getDay() !== 1) {
        monday = new Date(prevMonth.getFullYear(),prevMonth.getMonth(),prevMonth.getDate()-firstDay+2)
    } else if (selectedMonth.getDay() == 0) {
        monday = new Date(selectedMonth.getFullYear(),selectedMonth.getMonth(),selectedMonth.getDate()+1)
    } else {
        monday = selectedMonth
    }

    console.log(`monday: ${monday}`)

//generate dates for previous month

if (firstDay !== 0) {
    for (x=0;x<firstDay;x++) {
       calendar.insertAdjacentHTML('beforeend',`<p id='box-${count}' class='square opacity25'>${prevMonth.getDate()-firstDay+1+x}</p>`)
       count++
    }
}

//generate dates for current month

for (x=0;x<totalDays;x++) {
    calendar.insertAdjacentHTML('beforeend',`<p id='box-${count}' class='square'>${x+1}</p>`)
    count++
}

//generate dates for next month

if (lastDay.getDay() !==6) {
    for (x=0;x<6-lastDay.getDay();x++) {
    calendar.insertAdjacentHTML('beforeend',`<p id='box-${count}' class='square opacity25'>${x+1}</p>`)
    count++
    }
}
/* 
    // generate dates for current month
    for (let x=0;x<totalDays;x++) {
        document.getElementById(`box-${x+firstDay}`).innerHTML =`${x+1}`
    }

    // generate dates for prev month
    for (let x=1;x<=firstDay;x++) {
        document.getElementById(`box-${firstDay-x}`).innerHTML =`${prevMonth.getDate()-x+1}`
        document.getElementById(`box-${firstDay-x}`).classList.add('opacity25')
    }

    // generate dates for next month
    for (let x=0;x<=6-firstDay;x++) {
        if (document.getElementById(`box-${firstDay+totalDays+x}`) !== null)  {
        document.getElementById(`box-${firstDay+totalDays+x}`).innerHTML =`${x+1}`
        document.getElementById(`box-${firstDay+totalDays+x}`).classList.add('opacity25')
        }
    }
*/
    //determine work and rest days

    if (document.getElementById('box-35') == null) {
        if (Number.isInteger((monday.getTime()-week1.getTime())/1209600000)) {
                document.getElementById(`box-0`).classList.add('rest')
                document.getElementById(`box-1`).classList.add('working')
                document.getElementById(`box-2`).classList.add('working')
                document.getElementById(`box-3`).classList.add('rest')
                document.getElementById(`box-4`).classList.add('rest')
                document.getElementById(`box-5`).classList.add('working')
                document.getElementById(`box-6`).classList.add('working')
                document.getElementById(`box-7`).classList.add('working')
                document.getElementById(`box-8`).classList.add('rest')
                document.getElementById(`box-9`).classList.add('rest')
                document.getElementById(`box-10`).classList.add('working')
                document.getElementById(`box-11`).classList.add('working')
                document.getElementById(`box-12`).classList.add('working')
                document.getElementById(`box-13`).classList.add('rest')
                document.getElementById(`box-14`).classList.add('rest')
                document.getElementById(`box-15`).classList.add('working')
                document.getElementById(`box-16`).classList.add('working')
                document.getElementById(`box-17`).classList.add('rest')
                document.getElementById(`box-18`).classList.add('rest')
                document.getElementById(`box-19`).classList.add('working')
                document.getElementById(`box-20`).classList.add('working')
                document.getElementById(`box-21`).classList.add('working')
                document.getElementById(`box-22`).classList.add('rest')
                document.getElementById(`box-23`).classList.add('rest')
                document.getElementById(`box-24`).classList.add('working')
                document.getElementById(`box-25`).classList.add('working')
                document.getElementById(`box-26`).classList.add('working')
                document.getElementById(`box-27`).classList.add('rest')
                document.getElementById(`box-28`).classList.add('rest')
                document.getElementById(`box-29`).classList.add('working')
                document.getElementById(`box-30`).classList.add('working')
                document.getElementById(`box-31`).classList.add('rest')
                document.getElementById(`box-32`).classList.add('rest')
                document.getElementById(`box-33`).classList.add('working')
                document.getElementById(`box-34`).classList.add('working')
        } else {
                document.getElementById(`box-0`).classList.add('working') 
                document.getElementById(`box-1`).classList.add('rest')
                document.getElementById(`box-2`).classList.add('rest')
                document.getElementById(`box-3`).classList.add('working')
                document.getElementById(`box-4`).classList.add('working')
                document.getElementById(`box-5`).classList.add('working')
                document.getElementById(`box-6`).classList.add('rest')
                document.getElementById(`box-7`).classList.add('rest')
                document.getElementById(`box-8`).classList.add('working')
                document.getElementById(`box-9`).classList.add('working')
                document.getElementById(`box-10`).classList.add('rest')
                document.getElementById(`box-11`).classList.add('rest')
                document.getElementById(`box-12`).classList.add('working')
                document.getElementById(`box-13`).classList.add('working')
                document.getElementById(`box-14`).classList.add('working')
                document.getElementById(`box-15`).classList.add('rest')
                document.getElementById(`box-16`).classList.add('rest')
                document.getElementById(`box-17`).classList.add('working')
                document.getElementById(`box-18`).classList.add('working')
                document.getElementById(`box-19`).classList.add('working')
                document.getElementById(`box-20`).classList.add('rest')
                document.getElementById(`box-21`).classList.add('rest')
                document.getElementById(`box-22`).classList.add('working')
                document.getElementById(`box-23`).classList.add('working')
                document.getElementById(`box-24`).classList.add('rest')
                document.getElementById(`box-25`).classList.add('rest')
                document.getElementById(`box-26`).classList.add('working')
                document.getElementById(`box-27`).classList.add('working')
                document.getElementById(`box-28`).classList.add('working')
                document.getElementById(`box-29`).classList.add('rest')
                document.getElementById(`box-30`).classList.add('rest')
                document.getElementById(`box-31`).classList.add('working')
                document.getElementById(`box-32`).classList.add('working')
                document.getElementById(`box-33`).classList.add('working')
                document.getElementById(`box-34`).classList.add('rest')
            }
            console.log('5 rows')
    } else {
        if (Number.isInteger((monday.getTime()-week1.getTime())/1209600000)) {
            document.getElementById(`box-0`).classList.add('rest')
            document.getElementById(`box-1`).classList.add('working')
            document.getElementById(`box-2`).classList.add('working')
            document.getElementById(`box-3`).classList.add('rest')
            document.getElementById(`box-4`).classList.add('rest')
            document.getElementById(`box-5`).classList.add('working')
            document.getElementById(`box-6`).classList.add('working')
            document.getElementById(`box-7`).classList.add('working')
            document.getElementById(`box-8`).classList.add('rest')
            document.getElementById(`box-9`).classList.add('rest')
            document.getElementById(`box-10`).classList.add('working')
            document.getElementById(`box-11`).classList.add('working')
            document.getElementById(`box-12`).classList.add('working')
            document.getElementById(`box-13`).classList.add('rest')
            document.getElementById(`box-14`).classList.add('rest')
            document.getElementById(`box-15`).classList.add('working')
            document.getElementById(`box-16`).classList.add('working')
            document.getElementById(`box-17`).classList.add('rest')
            document.getElementById(`box-18`).classList.add('rest')
            document.getElementById(`box-19`).classList.add('working')
            document.getElementById(`box-20`).classList.add('working')
            document.getElementById(`box-21`).classList.add('working')
            document.getElementById(`box-22`).classList.add('rest')
            document.getElementById(`box-23`).classList.add('rest')
            document.getElementById(`box-24`).classList.add('working')
            document.getElementById(`box-25`).classList.add('working')
            document.getElementById(`box-26`).classList.add('working')
            document.getElementById(`box-27`).classList.add('rest')
            document.getElementById(`box-28`).classList.add('rest')
            document.getElementById(`box-29`).classList.add('working')
            document.getElementById(`box-30`).classList.add('working')
            document.getElementById(`box-31`).classList.add('rest')
            document.getElementById(`box-32`).classList.add('rest')
            document.getElementById(`box-33`).classList.add('working')
            document.getElementById(`box-34`).classList.add('working')
            document.getElementById(`box-35`).classList.add('working') 
            document.getElementById(`box-36`).classList.add('rest')
            document.getElementById(`box-37`).classList.add('rest')
            document.getElementById(`box-38`).classList.add('working')
            document.getElementById(`box-39`).classList.add('working')
            document.getElementById(`box-40`).classList.add('working')
            document.getElementById(`box-41`).classList.add('rest')
    } else {
            document.getElementById(`box-0`).classList.add('working') 
            document.getElementById(`box-1`).classList.add('rest')
            document.getElementById(`box-2`).classList.add('rest')
            document.getElementById(`box-3`).classList.add('working')
            document.getElementById(`box-4`).classList.add('working')
            document.getElementById(`box-5`).classList.add('working')
            document.getElementById(`box-6`).classList.add('rest')
            document.getElementById(`box-7`).classList.add('rest')
            document.getElementById(`box-8`).classList.add('working')
            document.getElementById(`box-9`).classList.add('working')
            document.getElementById(`box-10`).classList.add('rest')
            document.getElementById(`box-11`).classList.add('rest')
            document.getElementById(`box-12`).classList.add('working')
            document.getElementById(`box-13`).classList.add('working')
            document.getElementById(`box-14`).classList.add('working')
            document.getElementById(`box-15`).classList.add('rest')
            document.getElementById(`box-16`).classList.add('rest')
            document.getElementById(`box-17`).classList.add('working')
            document.getElementById(`box-18`).classList.add('working')
            document.getElementById(`box-19`).classList.add('working')
            document.getElementById(`box-20`).classList.add('rest')
            document.getElementById(`box-21`).classList.add('rest')
            document.getElementById(`box-22`).classList.add('working')
            document.getElementById(`box-23`).classList.add('working')
            document.getElementById(`box-24`).classList.add('rest')
            document.getElementById(`box-25`).classList.add('rest')
            document.getElementById(`box-26`).classList.add('working')
            document.getElementById(`box-27`).classList.add('working')
            document.getElementById(`box-28`).classList.add('working')
            document.getElementById(`box-29`).classList.add('rest')
            document.getElementById(`box-30`).classList.add('rest')
            document.getElementById(`box-31`).classList.add('working')
            document.getElementById(`box-32`).classList.add('working')
            document.getElementById(`box-33`).classList.add('working')
            document.getElementById(`box-34`).classList.add('rest')
            document.getElementById(`box-35`).classList.add('rest')
            document.getElementById(`box-36`).classList.add('working')
            document.getElementById(`box-37`).classList.add('working')
            document.getElementById(`box-38`).classList.add('rest')
            document.getElementById(`box-39`).classList.add('rest')
            document.getElementById(`box-40`).classList.add('working')
            document.getElementById(`box-41`).classList.add('working')
        }
    }

    //animate entrance
    if (prevOrNext == 'next') {
        document.getElementById('calendar').classList.add(`animate__animated`)
    document.getElementById('calendar').classList.add(`animate__fadeInRight`)
    document.getElementById('calendar').classList.add(`animate__fast`)
    } else {
    document.getElementById('calendar').classList.add(`animate__animated`)
    document.getElementById('calendar').classList.add(`animate__fadeInLeft`)
    document.getElementById('calendar').classList.add(`animate__fast`)
    }
}

function nextMonth() {
 selectedMonth = new Date(selectedMonth.getFullYear(),selectedMonth.getMonth()+1)
 document.getElementById('calendar').classList.add(`animate__animated`)
 document.getElementById('calendar').classList.add(`animate__fadeOutLeft`)
 document.getElementById('calendar').classList.add(`animate__fast`)
 setTimeout(()=>generateCalendar(selectedMonth,'next'), 350)
 //generateCalendar(selectedMonth)

}

function prevMonth() {
    selectedMonth = new Date(selectedMonth.getFullYear(),selectedMonth.getMonth()-1)
    generateCalendar(selectedMonth)
    document.getElementById('calendar').classList.add(`animate__animated`)
    document.getElementById('calendar').classList.add(`animate__fadeOutRight`)
    document.getElementById('calendar').classList.add(`animate__fast`)
    setTimeout(()=>generateCalendar(selectedMonth,'prev'), 350)
}



generateCalendar(today)