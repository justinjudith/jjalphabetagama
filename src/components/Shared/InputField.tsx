import React from 'react';

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
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2 justify-start">
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
        className={`w-full h-[46px] font-[500] text-[16px] bg-gray-50 border disabled:cursor-not-allowed rounded-lg focus:outline-none  px-2.5 ${style}`}
      />
    </div>
  );
};

export default InputField;
