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
      fillOpacity: 0,
    },
    visible: {
      pathLength: animate ? 0 : 1,
      fillOpacity: 1,
      transition: {
        duration: 2,
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
      <defs>
        <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#8892AF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#CCD6F6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0a192f', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#112240', stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <g>
        <motion.path
          d="M 70 35 A 25 25 0 1 0 70 65 L 70 50 L 55 50"
          fill="url(#fillGrad)"
          stroke="url(#navGrad)"
          strokeWidth="8"
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
