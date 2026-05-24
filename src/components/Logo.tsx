import { motion } from 'framer-motion';

interface LogoProps {
  animate?: boolean;
  width?: string;
  height?: string;
}

function Logo({ animate = true, width = "50", height = "50" }: LogoProps) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: animate ? 0 : 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
    >
      <title>GB</title>
      <g>
        <motion.path
          d="M 70 35 A 25 25 0 1 0 70 65 L 70 50 L 55 50"
          fill="none"
          stroke="#141414"
          strokeWidth="7"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </g>
    </motion.svg>
  );
}

export default Logo;
