
// import { useSelector } from "react-redux"
import axios from "axios"
import { useEffect, useState } from "react"

import Header from "../component/Header"
import Loading from "../component/Loading"


const Home = () => {
    const  [currwheather, setcurrwheather] = useState({
        sunset: null,
        sunrise: null,
        country: null,
        city: null,
        temp: null,

        main: null
    })
    const [currwheather2, setcurrwheather2] = useState({
        sunset: null,
        sunrise: null,
        country: null,
        city: null,
        temp: null,

        main: null
    }

    )
    const [inp , setInp] = useState()
    const ApiKey = "6edd516560704f53928bf0faaa64a568"

    const whetherCurrent = async () => {
        let whetherData = await axios({
            // url: `https://api.openweathermap.org/data/2.5/weather?q=osh&appid=${ApiKey}`
            url: `https://api.openweathermap.org/data/2.5/weather?q=osh&lang=ru&appid=${ApiKey}&units=metric`

        })


        let data1 = new Date()
        let data2 = new Date()

        data1.setTime(whetherData.data.sys.sunset)
        data2.setTime(whetherData.data.sys.sunrise)
        let datasunset = data1.getHours() + ":" + data1.getMinutes() + ":" + data1.getSeconds();
        let dataSunrice = data2.getHours() + ":" + data2.getMinutes() + ":" + data2.getSeconds()
        if (whetherData != null) {
            setcurrwheather(
                {
                    sunset: datasunset,
                    sunrise: dataSunrice,
                    country: whetherData.data.sys.country,
                    city: whetherData.data.name,
                    temp: whetherData.data.main.temp,
                    main: whetherData.data.weather,

                }
            )
        }
    }
    const whetherInp = async () => {
        let whetherData = await axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${inp}&lang=ru&appid=${ApiKey}&units=metric`

        })


        let data1 = new Date()
        let data2 = new Date()

        data1.setTime(whetherData.data.sys.sunset)
        data2.setTime(whetherData.data.sys.sunrise)
        let datasunset = data1.getHours() + ":" + data1.getMinutes() + ":" + data1.getSeconds();
        let dataSunrice = data2.getHours() + ":" + data2.getMinutes() + ":" + data2.getSeconds()
        if (whetherData != null) {
            setcurrwheather(
                {
                    sunset: datasunset,
                    sunrise: dataSunrice,
                    country: whetherData.data.sys.country,
                    city: whetherData.data.name,
                    temp: whetherData.data.main.temp,
                    main: whetherData.data.weather,

                }
            )
        }
    }



    useEffect(() => {
        whetherCurrent()
      
    }, [])

    return (
        <div>
            <div className=" col-11 col-md-10 mx-auto mt-5">
                <input type="text" onChange={(e)=>{setInp(e.target.value)}} className="form-control w-50 d-inline" />
                <button  onClick={whetherInp} className=" mx-3 btn btn-outline-light">узнать пагоду</button>
            </div>
            {currwheather.country != null ? <>

                <div className=" col-11  col-md-8 my-5 mx-auto ">
                    <h2 className="text-white" >Прогноз на сегодня  {currwheather.city}   </h2>
                    <br />
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4 mt-3 py-5 bg-white rounded ">
                            <p> город: <b>{currwheather.city}</b>    </p>
                            <p> страна: <b>{currwheather.country}</b>    </p>



                        </div>
                        <div className="col-md-6 mt-3 py-3 bg-white rounded">
                            <p>температура: <b>{currwheather.temp}C°</b></p>

                            {currwheather.main.map(i => <>
                                <span>{i.description}</span>
                                <img src={`http://openweathermap.org/img/wn/${i.icon}@2x.png`} alt="" />
                            </>)}
                            <p> закат солнца: <b>{currwheather.sunset}</b></p>
                            <p> Восход солнца: <b>{currwheather.sunrise}</b></p>


                        </div>
                    </div>

                </div>

            </> : <> {<Loading />} </>}
        </div>
    )
}

export default Home