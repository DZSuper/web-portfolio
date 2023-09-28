"use client";
import { useForm } from "@formspree/react";
import ContactFormButton from "./contactFormButton";
import ContactFormTextarea from "./contactFormTextarea";
import ContactFormInput from "./contactFormInput";
import ContactFormAlert from "./contactFormAlert";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqbpqro");

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-11/12 m-auto flex gap-4 flex-col"
    >
      {state.succeeded ? <ContactFormAlert /> : null}
      <ContactFormInput
        value="Your Name"
        form="name"
        type="text"
        state={state.errors}
      />
      <ContactFormInput
        value="Your Email"
        form="email"
        type="email"
        state={state.errors}
      />
      <ContactFormTextarea value="Message" state={state.errors} />
      <ContactFormButton state={state.submitting} />
    </form>
  );
}
