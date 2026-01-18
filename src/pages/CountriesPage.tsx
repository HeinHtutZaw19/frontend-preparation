import Select from "../components/ui/Select";
import React, { useState, useEffect } from "react";

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
}

const CountriesPage = () => {
  const [data, setData] = useState<String>("");
  const [selected, setSelected] = useState("");

  const handleClick = async () => {
    const res = await fetch(`${BASE_URL}/capital/${selected}`);

    const result = await res.json();
    const country = result[0].name.common;
    setData(() => country);
  };

  const handleChange = (e) => {
    setSelected(() => e.target.value);
  };

  useEffect(() => {
    handleClick();
    console.log(selected);
  }, [selected]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
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
          />
        ))}
      </Select>
      <p>{data}</p>
    </>
  );
};

export default CountriesPage;
