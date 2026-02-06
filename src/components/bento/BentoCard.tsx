/*
  Authors:
  >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

  („• ֊ •„)❤  <  Have a good day !
  --U-----U------------------------
*/


/* ----- IMPORTS ----- */
import React from 'react';


/* ----- PROPS ----- */
interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
}


/* ----- COMPONENT ----- */
function BentoCard({ title, description, icon, color, className }: BentoCardProps) {
  return (
    <div className={`p-6 bg-zinc-900 border border-zinc-800 rounded-4xl hover:border-zinc-700 transition-all cursor-pointer group ${className}`}>
      <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:scale-110 transition-transform ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

/* ----- EXPORT ----- */
export default BentoCard;
