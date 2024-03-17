export default function NavbarLink(props){
    return(
        <div className='text-white hover:bg-sky-600 py-2 rounded-lg shadow'>
            <a className={`mx-auto `} href='#'>
                {props.children}
                <p className={`text-lg text-center  text-white`}>{props.textlink}</p>
             </a>
        </div>
    )
}