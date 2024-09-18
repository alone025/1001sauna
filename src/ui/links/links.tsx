import { useState } from "react";
import { links } from "../../data/links_data";
import UslugiAll from "../uslugiall/uslugiAll";

function Links() {

  const [openLinks, setOpenLinks] = useState(false)

  const onCloseLinks = () => {
    setOpenLinks(false)
  }

  const onOpenLinks = () => {
    setOpenLinks(true)
  }

  const bumas = ()=>{
    console.log("bu mas")
  }

  return (
    <>
      <div className="flex items-center gap-[8px] flex-wrap w-full border-b border-b-[#CCC] pb-[20px] mb-[32px]">
        {links.map((item, ind) => (
          <div key={ind} onClick={item.title == 'Ещё' ? onOpenLinks : bumas} className={`bg-[white] text-[14px] sm:text-base flex px-[16px] py-[10px] rounded-[46px] cursor-pointer ${item.title === "Ещё" ? 'w-[105px] flex justify-center':'w-auto'} `}>
            {item.title}
          </div>
        ))}
      </div>
      <UslugiAll onClose={onCloseLinks} isOpen={openLinks} />
    </>
  );
}

export default Links;
