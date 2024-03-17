import { useState,useRef } from "react"
import Input from "./Input"
import inputs from "./input-data"

export default function FormV2(){
    const [values,setValues] = useState({
        username : '',
        email : '',
        birthday:'',
        password:'',
        confirmPassword:''
    })

    const inputData = inputs(values)

    const onChange = (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
     
        
    }
    return(

    <div className={`max-w-2xl bg-white backdrop-blur-md px-2 py-1 rounded shadow-md `}>
        <form className={`flex flex-col justify-center group`} onSubmit={handleSubmit}  >
            {inputData.map(input=><Input key={input.id} {...input} values={values[input.name]} onChange={onChange}/>)}
            <button className={`mt-4 bg-green-500 px-2 py-1 rounded shadow text-white font-semibold `} >Submit</button>
        </form>

    </div>

    )   
}




