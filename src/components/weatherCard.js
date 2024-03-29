


const Weathercard = ({ tempInfo }) => {

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset

    } = tempInfo

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`


    return (
        <div>
            <artical className="widget" >
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature" >
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            sunny
                        </div>
                        <div className="place">
                            {name} , {country}
                        </div>
                    </div>


                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/* our 4 column section */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr}PM<br></br>
                                {weathermood}
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br></br>
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br></br>
                                Speed
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br></br>
                                Pressure
                            </p>
                        </div>
                    </div>



                </div>

            </artical>
        </div>
    )
};


export default Weathercard;