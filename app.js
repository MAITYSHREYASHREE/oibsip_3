const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window .addEventListener("load", () => {
    degree.value= "";
    celsiusField.innerHTML = "";
})
convertbtn.addEventListener("click", (e) => {
    e.preventDefault();
    covertTocelsius();
    convertbtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>converting...</span> ";
    setTimeout(() => {
        convertbtn.innerHTML="<span>Convert</span>";
    },1000)
})
function covertTocelsius()
{
    let inputValue = degree.value;
    setTimeout(() => {
        if(tempType.value === "fahrenheit")
    {
        const fahrenheitTocelsius = (inputValue -32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitTocelsius .toFixed(3)} &deg;
        c`;
    }
    else if(tempType.value === "kelvin")
    {
        const kelvinTocelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinTocelsius .toFixed(3)} &deg;
        c`;
    }
    },1100)
}