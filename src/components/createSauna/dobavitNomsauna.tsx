import { useState } from "react"
import CardeNomer from "./cardeNomer"

const DobavitNomsauna = () => {

  const [dataNom, setDataNom] = useState([
    {
      id:1,
      txt: "",
      raqami:1
    },
    {
      id:2,
      txt: "",
      raqami:2
    },
  ])

  
  const [sDNK, setDNK] = useState(dataNom.length)

  const handleAdd = () => {
    const newD = [...dataNom, {id: sDNK + 1, txt:"",  raqami:dataNom.length+1}]
    setDataNom(newD)
    setDNK((pr)=>pr+1)
  }

  const handleDelete = (id:number) => {
    const filteredD = dataNom.filter((pl)=> pl.id !== id)
    setDataNom(filteredD)
  }
  
  const [isClose, setIsClose] = useState(true)
  return (  
  <div className={`dobavtsanua-contente ${isClose ? 'h-[70px] sm:h-auto overflow-hidden transition-all sm:overflow-auto':""} flex transition-all flex-col gap-4 shadow p-5 sm:p-8 rounded-2xl bg-white mt-2 sm:mt-5 lg:mt-8`}>
     <h4 onClick={()=> setIsClose((prev)=>!prev)} className="text-lg lg:text-[21px] font-OpenSans text-[#3B4255] font-semibold mb-1 sm:mb-5 flex flex-row justify-between">Номера <svg className={`block sm:hidden p-1 bg-[#F8F8F8] rounded-[32px] ${isClose? "rotate-180 transition-transform":"transition-transform"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M22.666 18.6667L15.9993 12.0001L9.33268 18.6667" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </h4>
    
    <div className="botome">
      <hr className="mt-2" />
        {
          dataNom.map((jm, mj)=>(
            <CardeNomer keyID={mj +1} key={mj} nm={jm.id} delt={handleDelete} />
          ))
        }
        <p className="text-sm mt-6 sm:text-base font-OpenSans font-normal text-[#4C4C4C]">Если в вашей сауне несколько саун/номеров, вы можете добавить описание каждой/каждого из них.</p>
        <button onClick={handleAdd} className="border hover:opacity-70 border-[#FF7A01] px-10 py-2 rounded-xl bg-white text-sm sm:text-base text-[#FF7A01] font-OpenSans font-semibold mt-6">Добавить сауну/номер зал</button>
    </div>
    </div>
  )
}

export default DobavitNomsauna