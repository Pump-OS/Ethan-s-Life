import Image from "next/image";

interface XIconProps {
  className?: string;
}

export default function XIcon({ className = "h-4 w-4" }: XIconProps) {
  const size = className.includes("h-3") ? 14 : className.includes("h-5") ? 20 : 16;
  return (
    <Image
      src="/images/x-logo.png"
      alt="X"
      width={size}
      height={size}
      className={`${className} invert opacity-30`}
    />
  );
}
