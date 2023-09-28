import ContactFormButton from "./contactFormButton";
import ContactFormInput from "./contactFormInput";
import ContactFormTextarea from "./contactFormTextarea";

export default function ContactForm() {
  return (
    <form className="max-w-sm w-11/12 m-auto flex gap-4 flex-col">
      <ContactFormInput value="Your Name" />
      <ContactFormInput value="Your Email" />
      <ContactFormInput value="Subject" />
      <ContactFormTextarea value="Your Message" />
      <ContactFormButton />
    </form>
  );
}
