import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
  const {serviceId} = useParams()
  const [data, setData] = useState([]);
  useEffect(()=>{
      fetch('/fakedata.json')
      .then(res=> res.json())
      .then(data => setData(data))
  },[])
  const exactItem = data.find(td => td.key === serviceId);
  console.log(exactItem)

  return (
    <div>
         <div className="container">
         
                <img src={exactItem?.img} className="mt-5 w-100" alt="" />
            <h1 className="font-weight-bold">Test Name: {exactItem?.Test}</h1>
            <p className="font-weight-bold">Supervisor : {exactItem?.Supervisor}</p>
            <p className="font-weight-bold">Test Price :{exactItem?.price}</p>
            <p className="font-weight-bold">Number Of Test: {exactItem?.NumberOfTest}</p>
            

            </div>
    </div>
  );
};

export default ServiceDetail;