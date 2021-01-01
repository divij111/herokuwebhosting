const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
 event.preventDefault();
 let cityVal = cityName.value;
//  alert(cityName==="");
// alert(cityName);
if(cityName==""){
  city_name.innerText = "Plz write the name before search!";
  datahide.classList.add('data_hide');
}
else{
    try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c7ef3595f2ddee679a4981134c1f552e`;
    const response = await fetch(url);
    //  console.log(response);    
    const data = await response.json();
    const arr = [data];
    city_name.innerText = arr[0].name +","+arr[0].sys.country;
    temp_real_val.innerText = arr[0].main.temp;
    //temp_status.innerText = arr[0].weather[0].main;
   const tempMod = arr[0].weather[0].main;
//    alert(tempMod);
    if(tempMod=="Clear"){
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
    }
    else if(tempMod=="Clouds"){
        temp_status.innerHTML =  "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
    }
    else if(tempMod=="Rain"){
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
    }
    else if(tempMod=="Smoke"){
        temp_status.innerHTML =  "<i class='fas fa-smog' style='color:#fff'></i>"
    }
    // else if(tempMod=="Fog"){
        
    //     temp_status.innerHTML =  "<i class='fas fa-fog' style='color:#fff'></i>"
    // }
    else{
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
    }
    datahide.classList.remove('data_hide');
    // console.log(data);
}
    catch{
     city_name.innerText = "Plz enter the city name properly!";
     datahide.classList.add('data_hide');
         }
}
}
submitBtn.addEventListener('click',getInfo);
