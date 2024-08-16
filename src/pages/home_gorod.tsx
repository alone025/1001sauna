import { HStack, VStack } from "@chakra-ui/react"
import CardUI from "../ui/card/card"
import cityData from "../data/home_gorod_data"
import { transliterate } from "../components/translater/translater"


type Props = {
    city: string
}

function Home_gorod({city}: Props) {


  const lotin_harf = transliterate(city)

  const selectedCity = cityData[lotin_harf];


  if (!selectedCity) {
    return <p>City not found</p>;
  }



  return (
    <div>
        <h2>Home gorod</h2>
        <p>{city}</p>

        <VStack spacing={12} align="stretch">
        <div className="gorods-map">
          <div className="name-city">
            <h3 className="text-[30px] text-[#3B4255] font-OpenSans font-semibold mb-8">
              {selectedCity.cityname}
            </h3>
          </div>
          <HStack spacing="24px" className="!grid !grid-cols-4" >
            {selectedCity.saunas.map((nm, ind) => (
              <CardUI data={nm} key={ind} />
            ))}
          </HStack>
        </div>
      </VStack>
    </div>
  )
}

export default Home_gorod