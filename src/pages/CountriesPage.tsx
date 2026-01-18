import Select from "../components/ui/Select";
import React from "react";

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
  return (
    <>
    </>
  );
};

export default CountriesPage;
