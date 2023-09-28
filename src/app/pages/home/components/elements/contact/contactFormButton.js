export default function ContactFormButton({ state }) {
  return (
    <button
      type="submit"
      disabled={state}
      className="bg-blue-600 rounded-lg p-2 w-full text-lg font-medium transition hover:bg-blue-700"
    >
      SEND MESSAGE
    </button>
  );
}
