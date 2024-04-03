
export default function Category({selectCategory,handleSelected}){

    const isSelected = (input)=>{
        const color = selectCategory === input ? 'bg-sky-500 text-white' : ''
        return color
    }

  
    return(
        <>
              <div name="all" onClick={handleSelected} className={`w-24 rounded-md  shadow-md border ${isSelected('all')} `}>
                    <img className={`w-10 block mx-auto`} src="/Asset/all.png" />
                    <h3 className={`text-center text-sm font-semibold text-gray-500 `}>All</h3>
                </div>
                <div name="main" onClick={handleSelected} className={`w-24 rounded-md shadow-md border ${isSelected('main')}`}>
                    <img className={`w-10 block mx-auto`} src="/Asset/burger.png" />
                    <h3 className={`text-center text-sm font-semibold text-gray-500`}>Main</h3>
                </div>
                <div name="drinks" onClick={handleSelected} className={`w-24 rounded-md shadow-md border ${isSelected('drinks')}`}>
                    <img className={`w-10 block mx-auto`} src="/Asset/coffee.png" />
                    <h3 className={`text-center text-sm font-semibold text-gray-500`}>Drinks</h3>
                </div>
                <div name="dessert" onClick={handleSelected} className={`w-24 rounded-md shadow-md border ${isSelected('dessert')}`}>
                    <img className={`w-10 block mx-auto`} src="/Asset/cookies.png" />
                    <h3 className={`text-center text-sm font-semibold text-gray-500`}>Dessert</h3>
                </div>
        </>
    )
}