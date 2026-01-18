import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string;
};

const Select = ({ children, placeholder, ...props }: SelectProps) => {
  return (
    <select style={{ color: "black" }} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
};

type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

Select.Option = ({ children, ...props }: OptionProps) => {
  return <option {...props}>{children}</option>;
};

export default Select;
