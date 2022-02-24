export const WeatherDay = ({ min, max, weatherType, weatherKey, dayOfWeek }) => {
    return(
        <>
            {dayOfWeek}
            <img src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`} alt={weatherType} />
            <div> Temp: {min} / {max} </div>
        </>
    );
};