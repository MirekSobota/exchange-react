import { useEffect, useState } from "react";
import axios from "axios";

const requestURL = "https://api.exchangerate.host/latest?base=PLN";

export const useApiData = () => {
    const [apiData, setApiData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(requestURL);
                const { rates, date } = response.data;

                setApiData({
                    state: "success",
                    rates,
                    date,
                })
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