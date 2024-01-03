// https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=3f5b6347b18caf50f3475a160817ec61
import "./style.css"
import { useEffect, useState } from "react"
import Weathercard from "./weatherCard";

const Temp = () => {

    const [searchValue, setSearchValue] = useState("kolkata")
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3f5b6347b18caf50f3475a160817ec61`

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset

            };

            setTempInfo(myNewWeatherInfo);


            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);




    return (
        <>
            <div className="wrap" >
                <div className="search" >
                    <input type="search"
                        placeholder="search..." autoFocus id="search"
                        className="searchTeam" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} ></input>
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        search
                    </button>
                </div>
            </div>

            {/* out temp card */}

            <Weathercard tempInfo={tempInfo} />

        </>

    )
};

export default Temp;
