import { useState } from "react"
import { apiKey } from "../const";
import styles from './styles.module.css';

export const LocationSearch = ({onCityFound}) => {

    const [zipCode, setZipCode] = useState('')
    const getLocation = (zip) => {
        const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${apiKey}&q=${zip}`

        fetch(url)
            .then(res => res.json())
            .then(res => res.find(l => l.Country.ID === 'BR'))
            .then(res => 
                onCityFound({
                    name: res.LocalizedName,
                    Key: res.Key,
                    state: res.AdministrativeArea.ID
            }))
            setZipCode(' ')
    };

    return (
        <div className={styles.main}>
            <input
                placeholder="Zip Code"
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
            />
            <button onClick={() => getLocation(zipCode)}>Search</button>
        </div>
    )
}