import {useState, useEffect} from 'react'
import axios from 'axios';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { data, error, loading }
}

export default useFetch