import KontaktD from "../components/createSauna/kontaktD"


const CreateSauna = () => {
  return (
   <div className="createsaunacontent">
<div className="topes flex flex-col gap-4 text-[18px] font-OpenSans text-[#3B4255] font-semibold">
    <p>Уважаемые владельцы заведений, менеджеры по рекламе, ВЕБСТУДИИ! </p>
    <p>Очень приятно, что вы выбрали наш справочный каталог 4bani.ru для добавления своей организации!</p>
    <p className="font-normal">Телефон службы поддержки клиентов:  8 (800) 551-60-02, добавочный 2  (звонок для вас бесплатный).</p>
</div>
<div className="contentnne">
    <KontaktD/>
</div>
   </div>
  )
}

export default CreateSauna