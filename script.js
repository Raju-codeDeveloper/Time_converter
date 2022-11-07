let hoursEl  = document.getElementById("hour")
let minutesEl = document.getElementById("minute")
let convertBtn = document.getElementById("converter")
let outputBox = document.getElementById("output")
let resultText = document.createElement("p")

function caluclateSeconds(hour, min){
let seconds = 	(hour * 60 * 60)	+ (min *60)
 console.log(seconds)
resultText.textContent =  ` ${seconds}s`
resultText.classList.add("output-time")
outputBox.appendChild(resultText)
}

function secondConverter(){

if(hoursEl.value === ""){

resultText.textContent = "⚠  Enter no. of hours to convert into seconds"
resultText.classList.add("output-text")
outputBox.appendChild(resultText)

}
else if(minutesEl.value === ""){
resultText.textContent = "⚠ Enter no. of Minutes to convert into seconds"
resultText.classList.add("output-text")
outputBox.appendChild(resultText)
}
else{
let hour_sec = hoursEl.value
let min_sec = minutesEl.value

caluclateSeconds(hour_sec,min_sec)
}

}

convertBtn.onclick = () =>
{
    resultText.classList.remove("output-time")
    secondConverter()
}
