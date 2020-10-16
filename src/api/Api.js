import axios from 'axios';


const url = 'https://nepalcorona.info/api/v1/data/nepal';
const district = 'https://data.nepalcorona.info/api/v1/districts';


export const fetchData = async()=>{
    try{
        const {data: {
            deaths,
            in_isolation,
            quarantined,
            recovered,
            tested_negative,
            tested_positive,
            tested_total,
            updated_at
          }} = await axios.get(url) 
        return {
            deaths,
            in_isolation,
            quarantined,
            recovered,
            tested_negative,
            tested_positive,
            tested_total,
            updated_at
        };
    }
    catch(e){
        console.log(e);
    }
    
}

export const fetchDistrict = async ()=>{
    try{
        const {data}=  await axios.get(district);
       const results = data.map(res=> res
       )
       return results;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchDistrictDetails = async()=>{
    try{ const data = await axios.get(`${district}`)
}
    catch(e){
        console.log(e)
    }
    
}

