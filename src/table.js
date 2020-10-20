import React from 'react'
import './Table.css'

export default function table({countries}) {
    return (
        <div className="table">
            {countries.map(({country,cases})=>(
                <tr>
                    <td>{country}</td>
                    <td><strong>{cases}</strong></td>
                </tr>

            ))}
            
        </div>
    )
}
