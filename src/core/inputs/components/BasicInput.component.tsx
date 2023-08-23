import { IBasicInputProps } from "../interfaces";

export const BasicInput = ({
  className,
  disabled,
  onChange,
  placeholder,
  value,
  type,
}: IBasicInputProps): JSX.Element => {
  return (
    <fieldset className="form-group">
      <input
        className={`form-control form-control-lg ${className}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={event => onChange(event.target.value)}
        value={value}
      />
    </fieldset>
  );
};
