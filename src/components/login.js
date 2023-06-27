import React,{useState,useEffect,useRef} from 'react';

const Login = () =>{
    const data = [{"nama" : "dimas","nim":3922250001,"password" : "123"}]
    const [nama,setNama] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(nama === data[0].nim && password === data[0].password){
            console.log("berhasil login")
        }else{
            console.log("Nama dan password salah")
        }
        setNama("")
        setPassword("")
    }


    return(
       <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nama : </label>
            <input id='name' type="text" value={nama} onChange={(e)=>{setNama(e.target.value)}}></input><br/>
            <label htmlFor="password">prodi : </label>
            <input id='password' type="password" value={password} onChange={(e) =>setPassword(e.target.value)}></input>
            <button type='submit'>submit</button>
       </form>
    )
}


export default Login