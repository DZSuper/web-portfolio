import { ValidationError } from "@formspree/react";

export default function ContactFormTextarea({ value, state }) {
  return (
    <>
      <textarea
        className="text-sm rounded-lg p-2 border border-gray-700 bg-gray-800 "
        placeholder={value}
        required
        name={value}
      ></textarea>
      <ValidationError prefix={value} field={value} errors={state} />
    </>
  );
}
