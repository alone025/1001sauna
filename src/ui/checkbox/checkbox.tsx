import { Checkbox } from "@chakra-ui/react";

type CheckboxUIProps = {
  checkbox_title: string;
  handleCheck: (nam: string)=> void
  checkedVal: string[]
};

const CheckboxUI = ({ checkbox_title, handleCheck, checkedVal }: CheckboxUIProps) => {
  const isCheckedd = checkedVal.find((chck) => chck === (checkbox_title ===  'Не имеет значения' ? 'all' : checkbox_title)) ? true : false

  const allTrue = checkedVal.find((alt)=> alt === 'all') ? true : false

  return (
    <Checkbox isChecked={allTrue ? true : isCheckedd} onChange={()=> handleCheck(checkbox_title === 'Не имеет значения' ? 'all':checkbox_title)} colorScheme="orange" defaultChecked className="!text-[14px] !text-[#3B4255]">
      {checkbox_title}
    </Checkbox>
  );
};

export default CheckboxUI;
