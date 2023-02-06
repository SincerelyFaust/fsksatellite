import { motion } from "framer-motion";

const Blooddrop = ({ duration, y }: { duration: number; y: number }) => {
  return (
    <motion.svg
      initial={{ y: 0 }}
      animate={{ y: y }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      width="48"
      height="75"
      viewBox="0 0 48 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.4999 55.0001C39.4338 74.1462 10.2681 83.3242 3.00007 64C-4.33529 44.7649 4.59847 -0.178103 19 0C33.4015 0.0890515 53.6334 35.9431 46.4999 55.0001Z"
        fill="#DC2626"
      />
    </motion.svg>
  );
};

export default Blooddrop;
