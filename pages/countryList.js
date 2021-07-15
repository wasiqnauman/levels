import Head from "next/head";
import Layout from "../components/layout"
import Link from "next/link";
import countryNames from './countryNames.json'
import styles from '../styles/country.module.css'
import { useState } from "react"

export default function CountryList() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Layout>
    <Head>
      <title>Levels.fyi Interview Project</title>
    </Head>
      <h1>List of countries</h1>
      <div className={styles.countryList}>
        
        {/* Using React Hooks to maintain state and check for what has been typed so far */}
        <input type='text' placeholder='Search' onChange={(event) => { setSearchTerm(event.target.value) }} />
        {/* We will now filter the list based on the searchTerm that has been typed so far, if its empty we print the entire list */}
        {countryNames.filter((val) => {
          {/* Convert to lowercase to make search case-insensitive*/}
          if (searchTerm == "" || val.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
            return val
        })
          .map((val, key) => {    {/* Print out the country names  */}
          return (
            <div className={styles.row} key={key}>
              <Link href={`/countries/${val.name}`}>
                <a>{val.name}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>

  )
}
