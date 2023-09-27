import Image from "next/image";

export default function SkillImageLogo({ value, data }) {
  return (
    <div
      className="flex flex-col justify-between items-center gap-4"
      title={value}
    >
      {data ? (
        <Image
          className="w-auto"
          src={data}
          width={60}
          height={60}
          alt={value}
        />
      ) : (
        <div className="animate-pulse h-14 w-14 bg-slate-600 rounded-md"></div>
      )}
      <p className="text-xs text-slate-500 font-semibold">{value}</p>
    </div>
  );
}
