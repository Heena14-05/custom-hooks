import { useState, useEffect, use } from "react";

const useFetch =(url)=>{
    // store api data
    const [data, setData] = useState(null);

    // tells whether the api is loading
    const [loading, setLoading] = useState(true);

    // stores error
    const [error, setError] = useState(null);

    useEffect(()=>{
        // calls api
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err);
            setLoading(true);
        })
    },[url])

    return {data, loading, error};
};
export default useFetch;