export default function SkeletonLoading({ size }) {
  return (
    <div
      className={`animate-pulse h-${size} w-${size} bg-slate-600 rounded-md`}
    ></div>
  );
}
