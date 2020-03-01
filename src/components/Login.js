import * as React from "react";
import {useState} from "react";
import {GlobalContext} from "./GlobalContextProvider";
import TextField from '@material-ui/core/TextField';




export const Login = () => {
    const {username, password} = React.useContext(GlobalContext);
    console.log(username,password);

    const [name, setName] = useState("");
    const [pword, setPword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log(username === name && password === pword  ? ("Log In") : "");
    }

 return <>
     <form>
         
     <TextField 
     label="username"
     onChange={e => setName(e.target.value)}
     /> 

     <TextField 
     label="password" 
     type="password"
     onChange={e => setPword(e.target.value)}
     />
    
    <button onClick={submit}>Log In</button>
    </form>
    </>
};
