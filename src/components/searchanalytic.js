import React, { useState , useEffect } from 'react';
import '../App.css';

function App() {

    const [recentSearchData, setrecentSearchData] = useState([]);
    const [mostSearchData, setmostSearchData] = useState([]);
    // get recent searches
    
    const recentSearch =  () => {
        const apiUrl = `http://35.226.31.11/api/recent`;
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setrecentSearchData(data) )
        
        // get most searches
    }

    const Mostsearch =  () =>{
        const apiUrl1 = `http://35.226.31.11/api/mostsearch`;
        fetch(apiUrl1)
        .then((response) => response.json())
        .then((data) =>setmostSearchData(data))
    }
    
    useEffect( async() => {
        await recentSearch();
        await Mostsearch();
    },[]);
    
return (
    <div className="maindata">
        
        <div className="searchdata">
        <h2>Recent Search</h2>
        {
            recentSearchData.map((data, index)=>(
                <div className = "searchdata1"key={index}>
                        
                    <h3>{data.cityname}</h3>
                    <p>{data.time}</p>   
                </div>
            ))
        }
        </div>

        <div className="searchdata">
        <h2>Most Searched</h2>
        {
            mostSearchData.map((data, index)=>(
                <div className="searchdata1" key={index}>
                    
                        <h3>{data._id}</h3>
                    
                        <p>{data.count}</p>
                    
                </div>
            ))
        }
        </div>
    </div>
    )
}
export default App;