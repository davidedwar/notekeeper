import React ,{Component} from 'react'
import TextField from '@material-ui/core/TextField'

export default function Signup() {
    return (
        <div>
                <TextField id="standard-basic" label="Email" />
                    <br/>
                <TextField id="standard-basic" label="Password" />          
        </div>
    )
}
