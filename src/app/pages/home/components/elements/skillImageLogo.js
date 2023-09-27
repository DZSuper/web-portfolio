import SkeletonLoading from "@/components/skeletonLoading";
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
        <SkeletonLoading size="14" />
      )}
      <p className="text-xs">{value}</p>
    </div>
  );
}
