import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="fixed inset-0 bg-opacity-50 transition-opacity" />
      <Image
        src="/loading.svg"
        alt="Loading"
        width={100}
        height={100}
        loading="lazy"
      />
    </div>
  );
}
