
const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const monthlyBtn = document.querySelector('#monthly-btn');
const hours = document.querySelectorAll('.hours');
const lastTime = document.querySelectorAll('.previous-time');
// fetch("data.json")
// .then(response=>response.json())
// .then(json =>console.log(json))

function dailyActivity(){
    fetch("data.json")
.then(response=>response.json())
.then(data =>{
    hours.forEach((e,i)=>{
        hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
        lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';
    })
})
}
function weeklyActivity(){
    fetch("data.json")
.then(response=>response.json())
.then(data =>{
    hours.forEach((e,i)=>{
        hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs';
        lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.weekly.previous + 'hrs';
    })
})
}
function monthlyActivity(){
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}

dailyBtn.addEventListener("click", function(){
    this.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    dailyActivity()
})
weeklyBtn.addEventListener("click", function(){
    this.classList.add("active");
    dailyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");
    weeklyActivity()
})
monthlyBtn.addEventListener("click", function(){
    this.classList.add("active");
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyActivity()
})