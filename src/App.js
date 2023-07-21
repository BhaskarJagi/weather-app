import React, { useState } from 'react'


const App = () => {

    let [latitude,setLatitude] = useState(0);
    let [longitude,setLongitude] = useState(0);
    let [hemisphere,setHemisphere] = useState("")
    let month = new Date().getMonth()


    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
                setLatitude(location.coords.latitude)
                setLongitude(location.coords.longitude)

                if(location.coords.latitude>0){
                    setHemisphere("Northern Hemisphere")
                }
                else if(location.coords.latitude<0){
                    setHemisphere("Southern Hemisphere")
                }
                else{
                    setHemisphere("Equator")
                }
            })
        }
    }

    return(
        <div>
            <h1>Latitude: {latitude}</h1>
            <h1>Longitude: {longitude}</h1>
            <h1>Hemisphere: {hemisphere}</h1>
            <h1>Month: {month}</h1>
            <button onClick={getLocation}>Get Location</button>
            {
                (hemisphere === "Northern Hemisphere" && (month>2 && month<9)) || (hemisphere === "Southern Hemisphere" && (month<=2 || month>=9)) ? (
                    <div>
                        <p>This is Summer Season</p>
                        <img src="https://www.pennlive.com/resizer/lRt1rCecM_oB6N3elOGlpkVU6cs=/500x0/smart/image.pennlive.com/home/penn-media/width600/img/wildaboutpa/photo/summer-sunrisejpg-8a3de64ee9c00a6e.jpg" alt="summer"/>
                    </div>
                ) : ((hemisphere === "Northern Hemisphere" && (month<=2 || month>=9)) || (hemisphere === "Southern Hemisphere" && (month>2 && month<9)) ? (
                    <div>
                        <p>This is Winter Season</p>
                        <img src="https://www.mistay.in/travel-blog/content/images/size/w600/2020/06/cover-9.jpg" alt="winter"/>
                    </div>
                ):(
                    <h1>We are fetching wait...</h1>
                ))
            }
        </div>
    )
}

export default App