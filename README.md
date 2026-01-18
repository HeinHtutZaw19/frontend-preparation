# Countries Explorer (Interview Project)

This project is a small Vite + React + TypeScript application that allows users to explore countries by selecting a capital city. It fetches data from the REST Countries API and displays details like country name, flag, region, population, languages, and currencies. The UI uses a Holy Grail layout for structured presentation.

---

##  Problem Statement

Build a simple frontend application that allows users to:

1. Select a capital city from a predefined list
2. Fetch and display the country/countries associated with that capital
3. Show relevant country details (flag, name, region, population, languages, currency)
4. Organize information clearly using a structured layout

No backend or database is required.

---

##  API Endpoints Used

This application uses the **REST Countries API**.

**Primary Endpoint (fetch by capital):**
* GET https://restcountries.com/v3.1/capital/:capital
Returns country objects that contain:
- `name.common`
- `capital[]`
- `region`
- `population`
- `flags`
- `languages`
- `currencies`

* GET https://restcountries.com/v3.1/capital/all
Fetch full list of countries with names, flags, capitals, etc.

--
## DEMO

https://github.com/user-attachments/assets/8025e6fb-4ad7-4167-80e2-d97f99a6854b


