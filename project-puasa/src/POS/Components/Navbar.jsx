import {FaClock,FaUtensils,FaHome,FaWallet,FaMoneyBillWaveAlt} from 'react-icons/fa'
import { useState } from 'react'

import NavbarLink from './utils/NavbarLink'
import Profile from './utils/Profile'
export default function Navbar(){
    const [selected,setSelected] = useState(null)

    const handleSelected = (textlink) =>{
        setSelected(textlink)
    }


    return(
        <nav className={`w-28 h-screen bg-gray-800 flex flex-col p-2`}>
            {/* Section Profile */}
           <section className={`flex  gap-1 items-center  mt-4 `}>
                <Profile/>
           </section>
           {/* End Section Profile */}

           {/* Logo & Menu */}
           <section className='flex flex-col mt-14 gap-5'>
                <NavbarLink selected={selected} handleSelected={handleSelected} textlink={`Home`}>
                    <FaHome className={`text-2xl   mx-auto`}/>
                </NavbarLink>
                <NavbarLink selected={selected} handleSelected={handleSelected} textlink={`Menu`}>
                    <FaUtensils className={`text-2xl   mx-auto`}/>
                </NavbarLink>
                <NavbarLink selected={selected} handleSelected={handleSelected} textlink={`History`}>
                    <FaClock className={`text-2xl  mx-auto`}/>
                </NavbarLink>
                <NavbarLink selected={selected} handleSelected={handleSelected} textlink={`Promo`}>
                    <FaMoneyBillWaveAlt className={`text-2xl   mx-auto`}/>
                </NavbarLink>
                <NavbarLink selected={selected} handleSelected={handleSelected} textlink={`Wallet`}>
                    <FaWallet className={`text-2xl mx-auto`}/>
                </NavbarLink>
           </section>
           {/* End Logo & Menu */}
        </nav>
    )
}