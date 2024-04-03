
const urlImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Profile(){
    return(
         <>
            <div className={`w-8 h-8 rounded-full overflow-hidden border-2 border-slate-400 shrink-0`}>

                <img className={`w-full object-cover`} src={urlImg} />
            </div>
            <div>
                <h2 className={`font-semibold text-sm  text-white line-clamp-1`}>Didi</h2>
                <p className={` text-xs text-white/60`}>Cashier</p>

            </div>
        </>
    )
}