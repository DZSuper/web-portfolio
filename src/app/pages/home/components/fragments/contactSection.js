import ContactForm from "../elements/contactSection/contactForm";
import TitleSection from "../elements/titleSection";

export default function ContactSection() {
  return (
    <div id="contact">
      <TitleSection value="Contact Me" />
      <ContactForm />
    </div>
  );
}
