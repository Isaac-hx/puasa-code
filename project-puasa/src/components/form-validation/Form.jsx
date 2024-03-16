import { useState,useRef } from "react"
import { CountryDropdown } from "react-country-region-selector"
import ValidationForm from "./ValidationForm"
import Input from "./Input"

function Form(){
    const [validation,setValidation] = useState({
        nama : '',
        email : '',
        negara : '',
        kelamin : ''
    })

    const [error,setError] = useState({})



    const handleInput = (event,name) =>{
        setValidation({...validation,[name.target.name]:name.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setError(ValidationForm(validation))
        console.log(validation)

    }

    return(
        <div className={`container p-4 mx-auto md:flex md:justify-center md:max-w-md shadow-md rounded border`}>
            <form onSubmit={handleSubmit}>
                <div className={`max-w-sm my-1`}>
                    <label className={`font-semibold text-gray-800 text-base`} htmlFor="nama">Masukan Nama </label>
                    <input 
                        id={`nama`}
                        name={`nama`}
                        type={`text`}
                        placeholder={`Masukan nama...`}
                        className={`w-full py-1 pl-1 font-semibold border-2 text-sm text-gray-400 border-gray-200 outline-none rounded focus:ring-2`}
                        value={validation.nama.toUpperCase()}
                        onChange={(event)=>{handleInput('',event)}}

                    />
                    {error.nama && <p className={`text-red-500`}>{error.nama}</p>}
                </div>

                <div className={`max-w-sm my-1`}>
                    <label className={`font-semibold text-gray-800 text-base`} htmlFor="email">Masukan Email</label>
                    <input 
                        id={`email`}
                        name={`email`}
                        type={`email`}
                        placeholder={`Masukan Email...`}
                        className={`w-full py-1 pl-1 font-semibold border-2 text-gray-400 border-gray-200 outline-none rounded focus:ring-2`}
                        onChange={(event)=>{handleInput('',event)}}


                        

                    />
                    {error.email && <p className={`text-red-500`}>{error.email}</p>}

                </div>

                <div className={`max-w-sm my-1`}>
                    <label  className={`font-semibold text-gray-800  text-base  my-2`} htmlFor="country-dropdown">Select Country</label>
                    <CountryDropdown 
                    id={`country-dropdown`}
                    name={`negara`}
                    value={validation.negara}
                    classes={`w-full [&>*]:text-xs py-1 pl-1 font-semibold border-2 text-gray-400 border-gray-200 outline-none rounded focus:ring-2 `}
                    onChange={handleInput}/>
                    {error.negara && <p className={`text-red-500`}>{error.negara}</p>}

                    
                </div>

                
                <div className={`max-w-sm my-1 flex flex-col`}>
                    <p  className={`font-semibold text-gray-800 text-base`}>Masukan Gender </p>
                    <span className={`flex gap-2 items-center`}>
                        <input 
                            id={`men`}
                            name={`kelamin`}
                            type={`radio`}
                            value={`Laki-laki`}
                            onChange={(event)=>{handleInput('',event)}}



                        />
                        <label className={`font-semibold text-gray-500 text-base`} htmlFor="men">Laki-laki</label>

                    </span>
                    
                    <span className={`flex gap-2 items-center`}>
                        <input 
                            id={`women`}
                            name={`kelamin`}
                            type={`radio`}
                            value={`Perempuan`}
                            onChange={(event)=>{handleInput('',event)}}

                        />
                        <label  className={`font-semibold text-gray-500 text-base`} htmlFor="women">Perempuan</label>
                    </span>
                    {error.kelamin && <p className={`text-red-500`}>{error.kelamin}</p>}

                </div>

                <div>
                    <button type="submit"
                     className={`px-4 py-1 bg-green-500 hover:bg-green-600 text-white cursor-pointer leading-relaxed rounded font-semibold `}
                     >Validate</button>
                </div>
            </form>
        </div>
    )
}





const validateInput = (values) =>{
    let valid
    for(let x in values){
        if(values[x] === ''){
            valid = true
            break
        }
    }
    valid = false
    return valid
}

export default function FormV2(){
    const [values,setValues] = useState({
        username : '',
        email : '',
        birthday:'',
        password:'',
        confirmPassword:''
    })

    const [isValid,setIsValid] = useState(true)

    const inputs = [
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:'Username',
            error : 'Username should be 3-16 characters',
            label:'Username',
            pattern:"^[a-zA-Z0-9_]{3,16}$",
            required:true
        },
        {
            id:2,
            name:'email',
            type:'email',
            placeholder:'Email',
            error : 'It should be a valid email address',
            label:'Email',
            required:true
        },
        {
            id:3,
            name:'birthday',
            type:'date',
            placeholder:'Birthday',
            label:'Birthday'
        },
        {
            id:4,
            name:'password',
            type:'password',
            placeholder:'Password',
            error:'Password must be 8 character long',
            label:'Password',
            pattern:"(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
            required:true

        },
        {
            id:5,
            name:'confirmPassword',
            type:'password',
            placeholder:'Confirm Password',
            error:'Password doesnt match',
            label:'Confirm Password',
            pattern:values.password ,
            required:true

        }
    ]

    const onChange = (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
        setIsValid(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
     
        
    }
    return(

    <div className={`max-w-2xl bg-white backdrop-blur-md px-2 py-1 rounded shadow-md `}>
        <form className={`flex flex-col justify-center group`} onSubmit={handleSubmit}  >
            {inputs.map(input=><Input key={input.id} {...input} values={values[input.name]} onChange={onChange}/>)}
            <button className={`mt-4 bg-green-500 px-2 py-1 rounded shadow text-white font-semibold `} >Submit</button>
        </form>

    </div>

    )   
}




