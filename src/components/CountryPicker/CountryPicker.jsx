import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {fetchCountries} from '../../api'

const CountryPicker = ({handleCountryChange}) => {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setCountriesData(await fetchCountries() );
        };

        fetchApi();
    }, [setCountriesData]);

    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue={""} onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countriesData.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};

export default CountryPicker;