import { useState } from "react"

export default function NavbarLink(props){
    const {handleSelected,selected,textlink} = props
    return(
        <div id={textlink} onClick={()=>handleSelected(textlink)}  className={`text-white hover:bg-sky-600  ${selected === props.textlink? 'bg-sky-600' : 'inherit'} py-2 rounded-lg shadow`}>
            <a className={`mx-auto `} href='#'>
                {props.children}
                <p className={`text-lg text-center  text-white`}>{props.textlink}</p>
             </a>
        </div>
    )
}