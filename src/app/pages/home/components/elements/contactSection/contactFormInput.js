import { ValidationError } from "@formspree/react";

export default function ContactFormInput({ value, form, type, state }) {
  return (
    <>
      <input
        className="bg-gray-800 p-2 border border-gray-700 text-sm rounded-lg"
        placeholder={value}
        type={type}
        name={form}
        required
        autoComplete="off"
      />
      <ValidationError prefix={form} field={form} errors={state} />
    </>
  );
}
