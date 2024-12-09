import "./input.css";

interface InputObj {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(
  { type, placeholder, label, id, value, onChange }: InputObj,
  autocomplete = "off"
) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        autoComplete={autocomplete}
        value={value} // Vincula o estado ao input
        onChange={onChange} // Captura alterações no input
      />
    </div>
  );
}
