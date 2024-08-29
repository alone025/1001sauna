import { links } from "../../data/links_data";

function Links() {
  return (
    <>
      <div className="flex items-center gap-[8px] flex-wrap w-full border-b border-b-[#CCC] pb-[20px] mb-[32px]">
        {links.map((item) => (
          <div className="bg-[white] text-[14px] sm:text-base flex px-[16px] py-[10px] w-auto rounded-[46px] cursor-pointer">
            {item.title}
          </div>
        ))}
      </div>
    </>
  );
}

export default Links;
