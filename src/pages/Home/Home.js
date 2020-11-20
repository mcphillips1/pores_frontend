import React, { useCallback, useState } from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import axios from '../../Communication/Axios'
import _ from 'lodash'
import ProductWindow from '../../Components/ProductWindow/ProductWindow'

const Home = (props) => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const delayedSearchQuery = useCallback(_.debounce(s => sendToBackEnd(s), 1000), [])
    const [results, setResults] = useState([])

    const searchForProducts = (e) => {
        e.preventDefault()
        setLoading(true)

        setValue(e.target.value)
        delayedSearchQuery(e.target.value)

        setLoading(false)
    }

    const sendToBackEnd = (s) => {
        if(s !== ""){
            axios.get("/search", {
                params: { searchTerm: s }
            }).then(res => {
                console.log(res)
            }
            )
        }
        
    }

    return (

        <div>
            <SearchBar value={value} onChange={searchForProducts} />
            <ProductWindow products={results} />
            {/* {loading ? <Spinner /> : <ProductWindow products={results} />} */}
        </div>
    )
}

export default Home