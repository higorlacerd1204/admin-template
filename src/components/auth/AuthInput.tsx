interface AuthInputProps {
  label: string;
  value: any;
  onChangeValue: (newValue: any) => void;
  type: 'text' | 'email' | 'password';
  required?: boolean;
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-500 focus:outline-none "
        onChange={({ target: { value } }) => props.onChangeValue?.(value)}
        required={props.required}
        type={props.type}
        value={props.value}
      />
    </div>
  );
}
