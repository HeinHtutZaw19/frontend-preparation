import Select from "../components/ui/Select";
import React, { useState, useEffect } from "react";
import "./CountriesPage.css";

const BASE_URL = "https://restcountries.com/v3.1";

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "London",
  "Paris",
  "Berlin",
  "Tokyo",
  "Seoul",
  "Ottawa",
  "Canberra",
  "Washington",
  "Madrid",
  "Rome",
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
  name: { common: string };
  capital: string[];
  region: string;
  flag: string;
  population: number;
  language: any;
  currency: string;
}

const CountriesPage = () => {
  const [data, setData] = useState<Country | null>(null);
  const [selected, setSelected] = useState("");

  const handleChange = (e: any) => {
    setSelected(() => e.target.value);
  };

  useEffect(() => {
    const handleClick = async () => {
      const response = await fetch(`${BASE_URL}/capital/${selected}`);
      const result = (await response.json())[0];
      const capital = result.capital;
      const common = result.name.common;
      const flag = result.flags.png;
      const region = result.region;
      const population = result.population;
      const language = Object.values(result.languages)[0];
      const currency = Object.values(result.currencies)[0].name;

      setData({
        name: { common: common },
        capital,
        region,
        flag,
        population,
        language,
        currency,
      });
    };
    handleClick();
  }, [selected]);

  return (
    <main>
      <div className="left">
        <Select
          value={selected}
          placeholder="Select a Capital"
          onChange={handleChange}
        >
          {FILTERABLE_CAPITALS.map((capital, index) => (
            <Select.Option
              style={{ color: "black" }}
              key={index}
              value={capital}
            >
              {capital}
            </Select.Option>
          ))}
        </Select>
      </div>

      <div className={`${data != null ? "right" : ""}`}>
        {data != null && (
          <div className="info-container">
            <img src={data.flag} alt="flag" />
            <h2>{data.name.common}</h2>
            <p>
              <span>Capital: </span>
              {data.capital}
            </p>
            <p>
              <span>Region: </span>
              {data.region}
            </p>
            <p>
              <span>Population: </span>
              {data.population}
            </p>
            <p>
              <span>Lanugage: </span>
              {data.language}
            </p>
            <p>
              <span>Currency: </span>
              {data.currency}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountriesPage;
