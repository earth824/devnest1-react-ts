import { ComponentPropsWithoutRef } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({ id, label, ...otherProps }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        {...otherProps}
        id={id}
        className="px-3 py-1.5 outline-none border rounded-md border-gray-400"
      />
    </div>
  );
}
