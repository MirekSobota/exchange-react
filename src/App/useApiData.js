import { useEffect, useState } from "react";
import axios from "axios";

const apiKey= "zCYVeigwdsIU19nZF1qgx2zjOpLNzb5K";

const requestURL =  "https://api.apilayer.com/currency_data/live?source=EUR&currencies=USD,GBP,PLN";
  
export const useApiData = () => {
  const [apiData, setApiData] = useState({
    state: "loading",
  });


  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(requestURL, {
          headers: { apiKey }
        });
      
        const { quotes, timestamp, success } = response.data;
        console.log(response.data)
        
        if (success) {
          const modifiedQuotes = Object.fromEntries(
            Object.keys(quotes).map(key =>[key.substring(3), quotes[key]])
          )
    
        setApiData({
          state: "success",
          rates: modifiedQuotes,
          date: new Date(timestamp * 1000).toLocaleDateString(),
          
        })};
      } catch {
        setApiData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 2000);
  }, []);
  return apiData;
};
