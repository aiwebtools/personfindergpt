
import React from 'react';
import { cn } from "@/lib/utils";

type ButtonVariant = 'default' | 'purple' | 'pink' | 'yellow';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  glitchEffect?: boolean;
  href?: string;
  className?: string;
  target?: string;
}

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  glitchEffect = false,
  href,
  className,
  target,
  ...props
}: ButtonProps) => {
  const baseClasses = "relative font-cyber uppercase tracking-wider rounded transition-all duration-300 hover:scale-105 flex items-center justify-center";
  
  const variantClasses = {
    default: "cyber-button",
    purple: "cyber-button cyber-button-purple",
    pink: "border-cyberpunk-neon-pink text-cyberpunk-neon-pink hover:bg-cyberpunk-neon-pink hover:text-cyberpunk-dark",
    yellow: "border-cyberpunk-neon-yellow text-cyberpunk-neon-yellow hover:bg-cyberpunk-neon-yellow hover:text-cyberpunk-dark"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    glitchEffect && "glitch",
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
