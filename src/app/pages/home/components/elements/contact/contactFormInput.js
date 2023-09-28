export default function ContactFormInput({ value }) {
  let type;
  switch (value) {
    case "Your Email":
      type = "email";
      break;

    default:
      type = "text";
      break;
  }

  return (
    <input
      className="bg-gray-800 p-2 border border-gray-700 text-sm rounded-lg"
      type={type}
      placeholder={value}
      name={value}
      required
      autoComplete="off"
    />
  );
}
