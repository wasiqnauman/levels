import Layout from "../../components/layout";
import { getCountryNames, getCountryData } from "../../lib/country";



// Get the data for the pages

export async function getStaticProps({ params }) {
    const countryData = getCountryData(params.name)
    return {
        props: {
            countryData
        }
    }
}
// Get names of posible paths (eg: countries/xyz)
export async function getStaticPaths() {
    const paths = getCountryNames()
    return {
        paths,
        fallback: false
    }
}


// Content for the page

export default function Post( {countryData}) {
    return (
      <Layout>
            <h1>{countryData.countryName}</h1>
            
      </Layout>
    );
}
