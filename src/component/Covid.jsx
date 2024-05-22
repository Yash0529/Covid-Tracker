import React, { useEffect,useState } from "react";
import './Covid.css';
import './json.json'
import Card from './Card';
const Covid=()=>{

  const [val,setVal]=useState(0);
  const getCovidData= async()=>{
    
    try{
      const response=await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const actualData=await response.json();
      setVal(actualData.data.regional);
    }
    catch(err){
      console.log(err);
    }
  }
  console.log(val);
  useEffect(()=>{
    getCovidData();
  },[]);
  return (
    <div className="main">

      <div className="heading">
        <h1>🔴 Live Data</h1>
        <h2>Covid CoronaVirus Tracker</h2>
      </div>
      <div className="Cards">
        <Card color='#cbf6ff' prp="ConfirmedIndian" data={val.confirmedCasesIndian}/>
        <Card color='#e5daff' prp="ConfirmedCases Foreign" data={val.confirmedCasesForeign}/>
        <Card color='#ffdada' prp="Deaths" data={val.deaths}/>
        <Card color='#c8ffe1' prp="Discharged" data={val.discharged}/>
        <Card color='#fff7d4' prp="State" data={val.loc}/>
        <Card color='#8488'   prp="TotalConfirmed" data={val.totalConfirmed}/>
      </div>
    </div>
  )
}
export default Covid;