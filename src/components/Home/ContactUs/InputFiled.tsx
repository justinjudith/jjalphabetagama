import React from 'react';
import { IconType } from 'react-icons';
interface Props {
  type: string;
  name: string;
  id: string;
  title?: string;
  placeholder?: string;
  compulsory?: boolean;
  style?: string;
  state?: string | number | undefined;
  setState?: any;
  disabled?: boolean;
  icon: IconType;
}

const InputField = ({
  type,
  name,
  id,
  title,
  placeholder,
  compulsory,
  style,
  state,
  setState,
  disabled,
  icon: Icon,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-start relative">
      <label htmlFor={name} className="">
        {title}
      </label>

      <input
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        name={name}
        value={state}
        placeholder={placeholder}
        onChange={setState}
        type={type}
        disabled={disabled}
        required={compulsory}
        id={id}
        className={`w-full h-[46px] font-[500] text-[16px] bg-gray-50 border disabled:cursor-not-allowed rounded-lg focus:outline-none  px-2.5 pl-[3rem] ${style}`}
      />
      <div className="absolute bottom-4 left-2">
        <Icon className="text-xl" />
      </div>
    </div>
  );
};

export default InputField;
