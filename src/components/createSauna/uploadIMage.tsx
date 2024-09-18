import { useState } from "react";


const UploadIMage = () => {

    const Icon1 = ()=>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1677_15986)">
        <path d="M15.3359 2.6665V6.6665H11.3359" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.664062 13.3335V9.3335H4.66406" stroke="#3B4255" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.3374 5.99989C2.67551 5.04441 3.25015 4.19016 4.00771 3.51683C4.76526 2.84351 5.68104 2.37306 6.66959 2.14939C7.65813 1.92572 8.68723 1.95612 9.66086 2.23774C10.6345 2.51936 11.5209 3.04303 12.2374 3.75989L15.3307 6.66655M0.664062 9.33322L3.7574 12.2399C4.47389 12.9567 5.36031 13.4804 6.33394 13.762C7.30756 14.0437 8.33666 14.0741 9.32521 13.8504C10.3138 13.6267 11.2295 13.1563 11.9871 12.4829C12.7446 11.8096 13.3193 10.9554 13.6574 9.99989" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1677_15986">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
        )
    }
    
    const Icon2 = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 4H3.33333H14" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.33594 4.00016V2.66683C5.33594 2.31321 5.47641 1.97407 5.72646 1.72402C5.97651 1.47397 6.31565 1.3335 6.66927 1.3335H9.33594C9.68956 1.3335 10.0287 1.47397 10.2787 1.72402C10.5288 1.97407 10.6693 2.31321 10.6693 2.66683V4.00016M12.6693 4.00016V13.3335C12.6693 13.6871 12.5288 14.0263 12.2787 14.2763C12.0287 14.5264 11.6896 14.6668 11.3359 14.6668H4.66927C4.31565 14.6668 3.97651 14.5264 3.72646 14.2763C3.47641 14.0263 3.33594 13.6871 3.33594 13.3335V4.00016H12.6693Z" stroke="#3B4255" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
        )
    }

    const [fileName, setFileName] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setFileName(file.name);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImageSrc(reader.result as string);
          };
          reader.readAsDataURL(file);
        }
      };
    

    const handledelet = (e:number) => {
        if(e == 1){
            setFileName(null)
            setImageSrc(null)
        }
        else{
            console.log('UploadMainP da xato');
            
        }
      }


  return (

    <div className="main-picyure w-full flex flex-col gap-5 shadow p-5 sm:p-8 rounded-2xl bg-white mt-2 sm:mt-5 lg:mt-8">
      <h4 className="text-lg lg:text-[21px] font-OpenSans text-[#3B4255] font-semibold">
      Фото
      </h4>
      <div className="image-uploader w-full">
        {fileName && imageSrc ? (
          <button className="p-4 rounded-2xl bg-[#F8F8F8] flex flex-row gap-6 justify-between items-center w-full">
            <div className="lefte flex flex-row items-center gap-4">
                <img src={imageSrc || '/assets/buttonReplacePng.svg'} alt="img" className="h-10 sm:h-20 w-10 sm:w-20 rounded-lg" />
                <p className="text-sm sm:text-base max-w-[50%] line-clamp-1 font-OpenSans font-semibold text-[#3B4255]">{fileName || 'sauna.logo.png'}</p>
            </div>
            <div className="righte flex flex-row gap-1">
            <label htmlFor="uploadInpReplaceMage" className="iconka1 cursor-pointer hover:opacity-70 transition-opacity p-3 rounded-[32px] border border-[#CCCCCC] w-max">
                    <Icon1/>
                    <input onChange={handleFileChange} type="file"  id="uploadInpReplaceMage" className="hidden" />
                </label>
                <div onClick={()=> handledelet(1)} className="ikonka2 hover:opacity-70 transition-opacity p-3 rounded-[32px] border border-[#CCCCCC] w-max">
                    <Icon2/>
                </div>
            </div>
          </button>
          ): ( <><label htmlFor="uploadInpMage" className="px-6 cursor-pointer hover:opacity-70 transition-opacity py-2 border h-[104px] w-full border-dashed rounded-2xl border-[#CCCCCC] flex flex-row gap-3 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 15L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 15"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 7.5L12 3L7.5 7.5"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 3L12 15"
                stroke="#3B4255"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-base text-[#3B4255] font-OpenSans font-semibold">
              Выберите фото
            </p>
          </label>
          <input onChange={handleFileChange} type="file"  id="uploadInpMage" className="hidden" /></>)}
          <p className="text-xs sm:text-sm text-center text-[#4C4C4C] font-OpenSans font-normal mt-4">
            Фотография (главная, не более 1024х768 пкс)*
          </p>
        </div>
      </div>
  )
}

export default UploadIMage