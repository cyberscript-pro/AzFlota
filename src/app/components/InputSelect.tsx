import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../formularios/AddUser";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProfesionalProps {
  id: "password" | "nombre" | "ci" | "role" | "confirmPassword" | "nickname";
  label?: string;
  options: SelectOption[];
  register?: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
}

const InputSelect = ({
  id,
  label,
  options = [],
  register,
  errors,
  className = "",
  defaultValue = "",
  disabled = false,
  required = false,
  ...props
}: SelectProfesionalProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium mb-1 text-gray-700`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <select
          id={id}
          defaultValue={defaultValue}
          disabled={disabled}
          className={`appearance-none block w-full pl-3 pr-10 py-2 text-base rounded-md border ${
            errors.role
              ? "border-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          } shadow-sm transition duration-150 ease-in-out ${
            disabled ? "bg-gray-100 text-gray-500" : "bg-white text-gray-900"
          }`}
          {...(register ? register(id) : {})}
          {...props}
        >
          <option value="" disabled hidden>
            Selecciona una opción
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon
            className={`h-5 w-5 ${
              errors.role ? "text-red-400" : "text-gray-400"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>

      {errors.role?.message && (
        <span className="mt-1 text-sm text-red-600">{errors.role.message}</span>
      )}
    </div>
  );
};

export default InputSelect;
