import Link from "next/link";

export default function AboutCta() {
  return (
    <Link
      className="bg-blue-500 rounded-full w-max py-2 px-4 font-medium text-xl transition m-auto hover:bg-blue-600 md:m-0"
      href={"#contact"}
    >
      Contact Me
    </Link>
  );
}
