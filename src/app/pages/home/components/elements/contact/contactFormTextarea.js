export default function ContactFormTextarea({ value }) {
  return (
    <textarea
      className="text-sm rounded-lg p-2 border border-gray-700 bg-gray-800 "
      placeholder={value}
      required
      autoComplete="off"
    ></textarea>
  );
}
