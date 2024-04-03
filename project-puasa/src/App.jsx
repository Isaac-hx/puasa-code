import { Outlet } from "react-router-dom"
import IndexForm from "./Form/Index"
import IndexPos from "./POS/Index"

function App(){
  return(
    <div className={`font-poppins flex`}>
      <IndexPos/>
      <Outlet/>
    </div>
    )
}


export default App