import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material"
import axios from 'axios'
export default function SignUp(){
    const createAccount = () =>{
    const [Account, setAccount] = useState({
        emailAddress : "",
        userName : "",
        password : 0
    })
    axios.post('http://localhost:5000/signUp', Account)
    return(
        <>
        <TextField id="outlined-basic" variant="outlined" value={Account.userName}
        onChange={(event) =>{
        setAccount({ ...Account, userName:event.target.value})
        
        }}/>
                <TextField id="outlined-basic"  variant="outlined" value={Account.emailAddress}
        onChange={(event) =>{
        setAccount({ ...Account, emailAddress:event.target.value})
        
        }}/>
                <TextField id="outlined-basic" variant="outlined" value={Account.password}
        onChange={(event) =>{
        setAccount({ ...Account, password:event.target.value})
        
        }}/>
            <Button variant="outlined" onClick={createAccount}> Create </Button>
        </>
        )

    }
}