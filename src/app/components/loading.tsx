import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
  );
}
