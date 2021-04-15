import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    const changeurl = country ? `${url}/countries/${country}` : url;
    try {
        const { data : { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeurl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        return e;
    }
};

export const fetchDailyData = async() => {
    try {

        const { data } = await axios.get(`${url}/daily`);

        return data.map(({confirmed, deaths, reportDate: date})=>({
            confirmed: confirmed.total,
            deaths: deaths.total,
            date
        }));

    } catch (e) {
        return e;
    }
};

export const fetchCountries = async() => {
    try {

        const {data: {countries}} = await axios.get(`${url}/countries`);

        return countries.map((country)=> country.name);

    } catch (e) {
        return e;
    }
}