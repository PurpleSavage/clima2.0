const country = document.getElementById("country");
const cardInformation = document.querySelector(".card_information");
const boton = document.querySelector(".boton");
const first = document.getElementById("first");
const humidity=document.querySelector(".humidity")
const speedWind= document.querySelector(".speedWind")
const weth=document.querySelector(".sky")
const image=document.querySelector(".image")
function cambiarImg(value){
  if(value==='Clear'){
    image.src='./img/clear.png'
  }
  else if(value==='Clouds'){
    image.src='./img/cloudy.png'
  }
  else if(value==='Snow'){
    image.src='./img/snow.png'
  }
  else if(value==='Rain'){
    image.src='./img/rain.png'
  }
  else if(value==='Drizzle'){
    image.src='./img/drizzle.png'
  }
  else if(value==='Mist'){
    image.src='./img/mist.png'
  }
  else if(value==='Storm'){
    image.src='./img/storm.png'
  }
  else if(value==='Hail'){
    image.src='./img/hail.png'
  }
  else if(value==='Dust'){
    image.src='./img/dust.png'
  }
  else if(value==='Sand'){
    image.src='./img/sand.png'
  }
  else if(value==='Tornado'){
    image.src='./img/tornado.png'
  }
  else if(value==='Squall'){
    image.src='./img/squall.png'
  }
  else if(value==='Haze'){
    image.src='./img/haze.png'
  }
}

function consultaCountry(pais) {
  const apiKey = "315b48071bcfb2f5bff7f06ed07dbe0f";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos climáticos');
      }
      return response.json();
    })
    .then(data => {
      const temp = (data.main['temp']-273.15).toFixed(2)
      const hum=data.main['humidity']
      const wspeed=(data.wind['speed']*3.6).toFixed(2)
      const weather=data.weather[0]['main']
      cambiarImg(weather)
      first.textContent=`${temp} C°`
      humidity.textContent=`${hum} % humidity`
      speedWind.textContent=`${wspeed}Km/h wind speed`
      weth.textContent=`${weather}`
      console.log(data)
    })
    .catch(error => {
      console.log('Error:', error);
      first.innerText = 'Error';
      image.src='./img/joker.png'
    });
}

boton.addEventListener("click", () => {
  if (country.value !== "") {
    const valor = country.value;
    cardInformation.classList.toggle("active");
    consultaCountry(valor);
  } else {
    console.log("Error");
  }
});
