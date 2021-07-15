import fs from "fs";
import path from "path";
import countryList from '../pages/countryNames.json'

const countryDirectory = path.join(process.cwd(), "countries");


// get the names of the countries in the JSON
export function getCountryNames() {
    return countryList.map((val, key) => {
        return {
            params: {
                name: val.name
            }
        }
    })
}

// Content to be displayed on the page
export function getCountryData(countryName) {
    
    return {
        countryName
    }
}