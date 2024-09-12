// src/components/YandexMap.tsx
import React, { useRef, useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  RulerControl,
  GeolocationControl,
  ZoomControl,

} from "@pbe/react-yandex-maps";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, CloseButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text,  useToast } from "@chakra-ui/react";
import { Map as YMap } from "yandex-maps";
import html2canvas from "html2canvas";




interface Office {
    id: number;
    name: string;
    coordinates: [number, number]; 
  }

  const offices: Office[] = [
    { id: 1, name: "Office 1", coordinates: [55.751574, 37.573856] },
    { id: 2, name: "Office 2", coordinates: [55.758, 37.62] },
    { id: 3, name: "Office 3", coordinates: [55.764, 37.59] },
  ];


const YandexMap: React.FC = () => {
  const mapRef = useRef<YMap | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const toast = useToast();

  const [showTraffic, setShowTraffic] = useState(true);
  const [showMapType, setShowMapType] = useState(true);

  const toggleTraffic = () => setShowTraffic(!showTraffic);
  const toggleMapType = () => setShowMapType(!showMapType);

  const generateYandexMapUrl = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      const zoom = mapRef.current.getZoom();
      return `https://yandex.com/maps/?ll=${center[1]},${center[0]}&z=${zoom}`;
    }
    return "";
  };

  const handleShare = () => {
    const mapUrl = generateYandexMapUrl();
    navigator.clipboard.writeText(mapUrl).then(() => {
        new Promise((resolve) => setTimeout(resolve, 2000));

    
        toast({
          title: 'URL copied to clipboard!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          render: () => (
            <Box
            bg="#F1FFF4"
            color="#3B4255"
            border="2px solid" 
            borderColor="#00D33B"
            borderRadius="md"
            p={4}
            position="relative"
            className="flex flex-row items-center"
          >
            <Text className="!text-base !font-OpenSans !font-normal" >URL copied to clipboard</Text>
            <CloseButton position="absolute" color='#CCCCCC' right="8px" gap='10px' top="12px" onClick={()=> toast.closeAll()} />
          </Box>
          ),
        });
    });
  };

  const handlePrint = () => {
    if (mapContainerRef.current) {
      html2canvas(mapContainerRef.current)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");

          const printWindow = window.open("", "_blank") as Window;

          if (printWindow) {
     
            printWindow.document.write(
              "<html><head><title>Map Screenshot</title></head><body>"
            );
            printWindow.document.write(
              `<img src="${imgData}" style="width:100%"/>`
            );
            printWindow.document.write("</body></html>");


            printWindow.document.close();
            printWindow.onload = () => {
              printWindow.print();
              printWindow.close(); 
            };
          }
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };

  const handleChat = () => {
    alert("Opening chat...");
  };


  // const [hoveredOffice, setHoveredOffice] = useState<null | number>(null);
  const [selectedOffice, setSelectedOffice] = useState<null | Office>(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  // const handleHover = (officeId: number | null) => {
  //   setHoveredOffice(officeId);
  // };

  const handleClick = (office: Office) => {
    setSelectedOffice(office);
  };

  const closePopover = () => {
    setSelectedOffice(null);
  };

  // const handleMouseMove = (event: React.MouseEvent) => {
  //   const rect = mapContainerRef.current?.getBoundingClientRect();
  //   if (rect) {
  //     setMousePosition({
  //       x: event.clientX - rect.left,
  //       y: event.clientY - rect.top,
  //     });
  //   }

  
  // };

  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );


  const handleGeolocationSuccess = (coords: [number, number]) => {
    setUserLocation(coords);
    if (mapRef.current) {
      mapRef.current.setCenter(coords, 14, {
        checkZoomRange: true,
        duration: 300,
      });
    }
  };



  return (
    <YMaps>
      <div className="mapprint" id="mapPrintContainer">
        <div ref={mapContainerRef} style={{ position: "relative", borderRadius:"16px", overflow: "hidden" }}  >
        {selectedOffice && (
            <Popover isOpen={!!selectedOffice} onClose={closePopover} placement="left">
              <PopoverTrigger>
                <div></div>
              </PopoverTrigger>
              <PopoverContent border='none' position="absolute" top="10px" left="50%" transform="translateX(-50%)" className="!translate-y-[25%] !absolute !top-2 !left-[15px] shadow-sm max-w-[278px] !invisible sm:!visible" >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader >
                    <h4 className="!text-[21px] !font-OpenSans !font-semibold !text-[#3B4255] line-clamp-2" >Райская гавань</h4>
                </PopoverHeader>
                <PopoverBody>
                  <h4 className="text-base text-[#4C4C4C] font-OpenSans font-normal line-clamp-1" >Адрес: <span className="font-semibold hover:underline hover:cursor-pointer text-[#3B4255]" >Мира, 112, корпус 1</span></h4>
                  <h4 className="!text-[21px] my-2 !font-OpenSans !font-semibold !text-[#3B4255]" >1600 - 2000 ₽/час</h4>
                  <button className="text-[#FF7A01] border-[#FF7A01] border rounded-xl w-full max-w-[142px] h-8 text-[14px] font-OpenSans font-semibold" >Подробнее</button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
          <Map
            defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
            width="100%"
            id="mapContainer"
            height="450px"
            instanceRef={(ref) => {
              if (ref) {
                mapRef.current = ref;
                
                // Dynamically add controls with position
                ref.controls.remove("trafficControl");
                ref.controls.remove("typeSelector");
                
                if (showTraffic) {
                  ref.controls.add("trafficControl", {
                    position: { top: 10, right: 10 } // Custom position
                  });
                }
                if (showMapType) {
                  ref.controls.add("typeSelector", {
                    position: { top: 10, right: 120 } // Custom position
                  });
                }
              }
            }}
          
            options={{
              suppressMapOpenBlock: true, 
            }}
            modules={["control.ZoomControl", "control.TypeSelector"]}
          >




            {offices.map((office) => (
                      <React.Fragment key={office.id}>

             
              <Placemark
                key={office.id}
                geometry={office.coordinates}
                properties={{
                  balloonContent: office.name,
                }}
                options={{
                    
                    balloonCloseButton: false,
                }}
             
                // onMouseEnter={() => handleHover(office.id)}
                //   onMouseLeave={() => handleHover(null)}
                  onClick={() => handleClick(office)}

              />
              {/* {hoveredOffice === office.id && (
                  <Tooltip
                    label={office.name}
                    isOpen
                    placement="right"
                    position="absolute"
                    left={`${mousePosition.x - window.screen.width  }px`}
                    top={`${mousePosition.y - 450 }px`}
                    style={{ zIndex: 1000 }}
                  >
                    <div></div>
                  </Tooltip>
                )} */}
                {userLocation && (
              <Placemark
                geometry={userLocation}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/assets/pin-map.png", // Custom icon for user location
                  iconImageSize: [30, 30],
                  iconImageOffset: [-15, -15],
                }}
              />
            )}
    </React.Fragment>
            ))}
            <RulerControl options={{ position: { top: 85, right: 15 }, scaleLine:false }} />
            <GeolocationControl options={{ position: { top: 135, right: 15 } }}  instanceRef={(ref) => {
                if (ref) {
                  ref.events.add("locationchange", (event) => {
                    const coords = event.get("position");
                    console.log(coords);
                    
                    handleGeolocationSuccess(coords);
                  });
                  ref.events.add("locationerror", (event) => {
                    console.error("Geolocation error:", event.get("message"));
                  });
                }
              }}
 />
            <ZoomControl options={{ position: { top: 185, right: 15 }, size:"small", zoomDuration:300 }}/>
            {/* {showTraffic && <TrafficControl classname="transition-transform" options={{ position : {right:"65px", top: "15px"} }} />}
            {showMapType && <TypeSelector classname="transition-transform" options={{ position : {right:"165px", top: "15px"} }} />} */}
            
          </Map>

          


          <Button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#fff",
              padding: "5px 10px",
            }}
            rounded="full"
            className="shadow-md"
            onClick={() => {
              toggleTraffic();
              toggleMapType();
            }}
          >
            <HamburgerIcon />
          </Button>

          <ButtonGroup size='sm'  isAttached variant='outline' style={{position:"absolute", bottom:"70px", right:"10px" }}>
          <Button
            style={{
              backgroundColor: "#fff",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={handleShare}
          >
            <img src="/assets/share.png" alt="share" />
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={handlePrint}
          >
            <img src="/assets/printer.png" alt="print" />
          </Button>
          </ButtonGroup>
       

          
         

          <Button
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "#000",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            rounded='full'
            onClick={handleChat}
          >
            <img src="/assets/chat.png" alt="chat" />
          </Button>
        </div>
      </div>
    </YMaps>
  );
};

export default YandexMap;
