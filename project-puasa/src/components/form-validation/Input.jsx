import { useRef, useState } from "react"

export default function Input(props){
    const [focused,setFocused] = useState(false)
    const inputRef = useRef()

    const {label,onChange,id,error,...inputProps} = props

    const handleFocus = () =>{
        setFocused(true)
    }
    return(
        <div className={`flex flex-col mt-2 px-2 `}>
            <label className={`font-semibold text-slate-700 text-base`}>{label}</label>
            <input 
                className={`w-full py-1 pl-1 outline-none rounded border-2 peer `}
                {...inputProps} 
                onChange={onChange} 
                onBlur={handleFocus}
                focused={focused.toString()}
                />
                <span className={`mt-2 text-sm hidden text-red-500  ${focused && 'peer-invalid:block' } `}>{error}
                </span>
        </div>
    )
}