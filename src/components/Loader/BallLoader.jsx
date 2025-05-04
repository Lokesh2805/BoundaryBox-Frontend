import { motion } from "framer-motion";
import { BiSolidCricketBall } from "react-icons/bi";

export default function SpinningBallLoader() {
  return (
    <div className="flex justify-center items-center mt-20">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <BiSolidCricketBall size={60} className="text-red-600" />
      </motion.div>
      <span className="ml-4 text-xl font-semibold text-white">
        Loading Upcoming Matches...
      </span>
    </div>
  );
}
