import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type AccordionProps = {
  section_title: string;
  description: ReactNode;
};

function CustomAccordion({
  section_title,
  description,
}: AccordionProps): JSX.Element {
  return (
    <ChakraAccordion allowToggle>
      <AccordionItem className="font-OpenSans">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" className="text-[#3B4255] font-[600] !py-[14px] !text-[16px]">
              {section_title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{description}</AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  );
}

export default CustomAccordion;
