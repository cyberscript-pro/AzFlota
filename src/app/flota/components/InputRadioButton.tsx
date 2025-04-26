import React from "react";

type InputRadioButtonProps = {
  title: string;
  name: string;
  value: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputRadioButton({
  title,
  name,
  value,
  selectedValue,
  onChange,
}: InputRadioButtonProps) {
  return (
    <label className="block m-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={onChange}
      />
      {title}
    </label>
  );
}

export default InputRadioButton;
