import React from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./App.css";
import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import Gmap from "./Gmap";
import { Card, CardContent } from "@material-ui/core";
import Table from './table'
import {sortData} from './util'
import LineGraph from './LineGraph'
import "leaflet/dist/leaflet.css";


// to use leflet you have to import css  remember



export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([])
  const [mapCenter,setMapCenter] = useState({
    lat: 34.80746, lng: -40.4796
  })
  const [mapZoom,setMapZoom] = useState(3);
  const [mapCountries,setMapCountries] = useState([])
  
  useEffect(()=>{
    fetch('https://disease.sh/v3/covid-19/all').then(response=>response.json().then(data=>{
      setCountryInfo(data);
    }))
  },[])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData)
          setCountries(countries);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">WorldWide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>

        {/* Map section */}
        <Gmap countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
      </div>

      <Card className="app__right">
        <CardContent>
          <h1>live Cases by Country</h1>
          <Table countries={tableData}/>
          <h1>world wide cases</h1>
          <hr/>
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}
