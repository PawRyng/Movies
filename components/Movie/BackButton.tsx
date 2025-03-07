"use client";
import { useRouter } from "next/navigation";
import { BackIcon } from "../icons";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();
  return (
    <motion.button
      initial={{ x: "-200%", opacity: 0 }}
      animate={{ x: "0", opacity: 1 }}
      onClick={() => router.back()}
      className="flex gap-1 items-center"
    >
      <BackIcon width={30} height={24} fill="#333333" />
    </motion.button>
  );
}
