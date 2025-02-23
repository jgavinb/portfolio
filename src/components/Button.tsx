import React from 'react';

interface ButtonProps {
  className?: string;
  text: string;
  link: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, target, rel, className }) => {
  return (
    <a 
      href={link} 
      className={`btn ${className || ''}`}
      target={target}
      rel={rel}
      aria-label={text}
    >
      {text}
    </a>
  );
};

export default Button;
