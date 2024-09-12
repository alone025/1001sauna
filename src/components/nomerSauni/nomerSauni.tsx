
const NomerSauni = ({onOpenNomer}: {onOpenNomer:()=>void}) => {
  return (
<div className="nomerSauni-content p-4 sm:p-6 rounded-2xl bg-white shadow-sm">
    <h3 className="text-xl lg:text-2xl text-[#4C4C4C] font-OpenSans font-semibold mb-6 mt-1 sm:mt-0">Номера и залы <span className="visible sm:invisible">(8)</span></h3>
    <div className="cardsae flex flex-col gap-[10px] sm:gap-1">
        {[0,1,2,3].map((mc)=> (
            <div key={mc} className="cardaz flex flex-col lg:flex-row justify-between p-4 sm:px-5 sm:py-3 rounded-lg border border-[#CCCCCC] bg-white">
            <div className="lefter flex flex-col sm:flex-row gap-3 sm:items-center text-[14px] sm:text-base font-OpenSans font-normal text-[#3B4255]">
                <p className="font-semibold text-[18px] sm:text-base" >Хамам</p>

                <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="4" height="22" viewBox="0 0 4 22" fill="none">
  <circle cx="2" cy="11" r="2" fill="#CCCCCC"/>
</svg>
                <p className="flex flex-row gap-2"> <svg className="block sm:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.49984 1.66663C5.3165 1.66663 3.5415 3.44163 3.5415 5.62496C3.5415 7.76663 5.2165 9.49996 7.39984 9.57496C7.4665 9.56663 7.53317 9.56663 7.58317 9.57496C7.59984 9.57496 7.60817 9.57496 7.62484 9.57496C7.63317 9.57496 7.63317 9.57496 7.6415 9.57496C9.77484 9.49996 11.4498 7.76663 11.4582 5.62496C11.4582 3.44163 9.68317 1.66663 7.49984 1.66663Z" fill="#CCCCCC"/>
  <path d="M11.7333 11.7917C9.4083 10.2417 5.61663 10.2417 3.27497 11.7917C2.21663 12.5 1.6333 13.4583 1.6333 14.4833C1.6333 15.5083 2.21663 16.4583 3.26663 17.1583C4.4333 17.9417 5.96663 18.3333 7.49997 18.3333C9.0333 18.3333 10.5666 17.9417 11.7333 17.1583C12.7833 16.45 13.3666 15.5 13.3666 14.4667C13.3583 13.4417 12.7833 12.4917 11.7333 11.7917Z" fill="#CCCCCC"/>
  <path d="M16.6583 6.11671C16.7916 7.73338 15.6416 9.15004 14.05 9.34171C14.0416 9.34171 14.0416 9.34171 14.0333 9.34171H14.0083C13.9583 9.34171 13.9083 9.34171 13.8666 9.35838C13.0583 9.40004 12.3166 9.14171 11.7583 8.66671C12.6166 7.90004 13.1083 6.75004 13.0083 5.50004C12.95 4.82504 12.7166 4.20838 12.3666 3.68338C12.6833 3.52504 13.05 3.42504 13.425 3.39171C15.0583 3.25004 16.5166 4.46671 16.6583 6.11671Z" fill="#CCCCCC"/>
  <path d="M18.3249 13.825C18.2582 14.6334 17.7415 15.3334 16.8749 15.8084C16.0415 16.2667 14.9915 16.4834 13.9499 16.4584C14.5499 15.9167 14.8999 15.2417 14.9665 14.525C15.0499 13.4917 14.5582 12.5 13.5749 11.7084C13.0165 11.2667 12.3665 10.9167 11.6582 10.6584C13.4999 10.125 15.8165 10.4834 17.2415 11.6334C18.0082 12.25 18.3999 13.025 18.3249 13.825Z" fill="#CCCCCC"/>
</svg> До 30 человек</p>
                <svg className="hidden sm:block" xmlns="http://www.w3.org/2000/svg" width="4" height="22" viewBox="0 0 4 22" fill="none">
  <circle cx="2" cy="11" r="2" fill="#CCCCCC"/>
</svg>
<p className="line-clamp-2 sm:hidden flex flex-row gap-2"><svg className="block sm:hidden"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.4915 1.66663H6.50817C3.47484 1.66663 1.6665 3.47496 1.6665 6.50829V13.4833C1.6665 16.525 3.47484 18.3333 6.50817 18.3333H13.4832C16.5165 18.3333 18.3248 16.525 18.3248 13.4916V6.50829C18.3332 3.47496 16.5248 1.66663 13.4915 1.66663ZM13.1248 13.125H6.87484C6.53317 13.125 6.24984 12.8416 6.24984 12.5C6.24984 12.1583 6.53317 11.875 6.87484 11.875H13.1248C13.4665 11.875 13.7498 12.1583 13.7498 12.5C13.7498 12.8416 13.4665 13.125 13.1248 13.125ZM13.1248 8.12496H6.87484C6.53317 8.12496 6.24984 7.84162 6.24984 7.49996C6.24984 7.15829 6.53317 6.87496 6.87484 6.87496H13.1248C13.4665 6.87496 13.7498 7.15829 13.7498 7.49996C13.7498 7.84162 13.4665 8.12496 13.1248 8.12496Z" fill="#CCCCCC"/>
</svg>бассейн 4х2,5 метра, DVD, спутниковое ТВ, аудио-видео аппаратура</p>
                <p className="hidden sm:block" >Русская, с веником, турецкая, хамам, финская</p>
                <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="4" height="22" viewBox="0 0 4 22" fill="none">
  <circle cx="2" cy="11" r="2" fill="#CCCCCC"/>
</svg>
                <p className="hidden lg:block font-semibold">1350 ₽/чаc</p>

              <div className="tabse flex sm:hidden flex-wrap gap-[5px]">
                <div className="tabe px-3 p-[10px] bg-[#F8F8F8] rounded-lg w-max">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">Русская</p>
                </div>
                <div className="tabe px-3 p-[10px] bg-[#F8F8F8] rounded-lg w-max">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">С веником</p>
                </div>
                <div className="tabe px-3 p-[10px] bg-[#F8F8F8] rounded-lg w-max">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">Турецкая</p>
                </div>
                <div className="tabe px-3 p-[10px] bg-[#F8F8F8] rounded-lg w-max">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">Хамам</p>
                </div>
                <div className="tabe px-3 p-[10px] bg-[#F8F8F8] rounded-lg w-max">
                  <p className="text-sm font-OpenSans font-normal text-[#3B4255]">Финская</p>
                </div>
              </div>
            </div>
            <div className="righter mt-3 sm:mt-4 lg:mt-0">
           
                <p className="block lg:hidden font-semibold text-[18px] sm:text-base font-OpenSans text-[#3B4255] mb-4">1350 ₽/чаc</p>
                <button onClick={onOpenNomer} className="border border-solid hover:bg-[#FF7A01] hover:text-white transition-colors border-[#FF7A01] rounded-xl bg-white px-6 py-2 text-[#FF7A01] text-[14px] font-OpenSans font-semibold">Подробнее</button>
            </div>
        </div>
        ))}
    </div>
</div>
  )
}

export default NomerSauni