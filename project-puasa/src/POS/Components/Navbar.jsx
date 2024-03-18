import {FaClock,FaUtensils,FaHome,FaWallet,FaMoneyBillWaveAlt} from 'react-icons/fa'
import { useState } from 'react'


const urlImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

import NavbarLink from './utils/NavbarLink'
export default function Navbar(){
    const [selected,setSelected] = useState(null)

    const handleSelected = (textlink) =>{
        setSelected(textlink)
    }


    return(
        <nav className={`fixed top-0 left-0 w-28 h-screen bg-gray-800 flex flex-col p-2`}>
            {/* Section Profile */}
           <section className={`flex  gap-1 items-center  mt-4 `}>
                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 border-slate-400 shrink-0`}>

                    <img className={`w-full object-cover`} src={urlImg}/>
                </div>
                <div>
                    <h2 className={`font-semibold text-sm  text-white line-clamp-1`}>Dimas</h2>
                    <p className={` text-xs text-white/60`}>Cashier</p>

                </div>
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