import React from 'react'
import {FormControl, NativeSelect } from '@material-ui/core'

export default function SingleDistrict({id,title}) {
    return (
        <div>
            <option value={title}>{title}</option>
        </div>
    )
}
