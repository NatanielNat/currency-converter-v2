import {useEffect,useState} from "react";

export const useRatesData = () => {
    const [ratesData,setRatesData] = useState({
      state:"loading"
    });
  
    useEffect(()=>{
  const fetchRates = async() =>{
    try{
      const response = await fetch("https://api.exchangerate.host/latest?base=PLN" )
     
  
      if(!response.ok) {
        throw new Error (response.statusText)
      }
  
      const {rates} = await response.json();
  
      setRatesData({
        state:"success",
        rates,

      });
    }catch {
      setRatesData({
        state: "error",
      });
    }
  };
  setTimeout(fetchRates,5000);
    },[]);
  
    return ratesData;
  }