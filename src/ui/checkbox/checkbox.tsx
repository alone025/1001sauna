import { Checkbox } from "@chakra-ui/react";

type CheckboxUIProps = {
  checkbox_title: string;
};

const CheckboxUI = ({ checkbox_title }: CheckboxUIProps) => {
  return (
    <Checkbox colorScheme="orange" defaultChecked className="!text-[14px] !text-[#3B4255]">
      {checkbox_title}
    </Checkbox>
  );
};

export default CheckboxUI;
