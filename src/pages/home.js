import { useContext } from "react";
import { AppContext } from '../App';
import { isError, useQuery } from "@tanstack/react-query";


export const Home = () => {

    const {userName} = useContext(AppContext);

// using react-query useQuery hook
    const {data, isLoading, isError, refetch} = useQuery(['cat'], () => {
       return ( fetch('https://catfact.ninja/fact')          
        .then(response => response.json())
        .then(data => data))
    });

    if (isError) {
        return <h1>Sorry, there was an error</h1>
    };
    
    if (isLoading) {
        return <h1>Loading....</h1>
    };


    return (
        <div>
            <h1>This is the homepage and user is {userName}</h1>
            <h2>I love cats. Here is one cool fact about a cat:</h2>
            <h3>{data?.fact}</h3>
            <button onClick={refetch}>Update</button>
        </div>
    )
}