import React from "react";
import { useState, useEffect } from "react";
import { fetchDistrict } from "../../api/Api";
import SingleDistrict from "./SingleDistrict";
import { FormControl, NativeSelect } from "@material-ui/core";

export default function District() {
  const [district, setDistrict] = useState("");
  const [districtArray, setDistrictArray] = useState([]);

  useEffect(() => {
    const getDistrict = async () => {
      const obtained = await fetchDistrict();
      setDistrictArray(obtained);
    };
    getDistrict();
  }, []);

  const handleChange=async(event)=>{
      console.log(event.traget.value)
  }

  return (
    <FormControl>
      <NativeSelect onChange={handleChange}>
        {districtArray.map((res, i) => {
          return (
            <option key={i} id={res.id} value={res.title}>
              
              {res.title}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
}
