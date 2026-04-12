'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type FounderCard = {
  image: string;
  text: string;      // short bio shown in the hover bubble
  name: string;
  jobtitle: string;
};

type Props = {
  founders: FounderCard[];
};

export const TypewriterAvatars: React.FC<Props> = ({ founders }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean[]>(
    new Array(founders.length).fill(false)
  );
  const [typedText, setTypedText] = useState('');
  const typewriterRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopTypewriter = useCallback(() => {
    if (typewriterRef.current) clearTimeout(typewriterRef.current);
    setTypedText('');
  }, []);

  const startTypewriter = useCallback((text: string) => {
    stopTypewriter();
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setTypedText(text.slice(0, i));
        i++;
        typewriterRef.current = setTimeout(type, 35);
      }
    };
    type();
  }, [stopTypewriter]);

  const handleEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    setHasBeenHovered(prev => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    startTypewriter(founders[index].text);
  }, [founders, startTypewriter]);

  const handleLeave = useCallback(() => {
    setHoveredIndex(null);
    stopTypewriter();
  }, [stopTypewriter]);

  useEffect(() => () => stopTypewriter(), [stopTypewriter]);

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      {founders.map((founder, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => handleEnter(index)}
          onMouseLeave={handleLeave}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Avatar circle */}
          <motion.img
            src={founder.image}
            alt={founder.name}
            className="w-10 h-10 rounded-full border-2 object-cover cursor-pointer"
            animate={{
              borderColor: (hoveredIndex === index || hasBeenHovered[index])
                ? '#FF6600'
                : '#E5E7EB',
              boxShadow: hoveredIndex === index
                ? '0 0 0 3px rgba(255,102,0,0.2)'
                : '0 0 0 0px rgba(255,102,0,0)',
            }}
            transition={{ duration: 0.25 }}
          />

          {/* Floating bubble */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: -4 }}
                exit={{ opacity: 0, scale: 0.85, y: 6 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute bottom-[52px] left-1/2 -translate-x-1/2 z-50
                           bg-white rounded-2xl shadow-xl border border-[#EEEEE8]
                           px-4 py-3 w-56 text-left"
              >
                <div className="h-20 overflow-hidden text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {typedText}
                  <span className="animate-pulse opacity-60">|</span>
                </div>
                <div className="mt-2 pt-2 border-t border-[#EEEEE8]">
                  <p className="text-[13px] font-semibold text-[#1A1A1A]">{founder.name}</p>
                  <p className="text-[11px] text-gray-400 tracking-wide">{founder.jobtitle}</p>
                </div>
                {/* tail */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[7px]
                                w-3 h-3 bg-white border-r border-b border-[#EEEEE8]
                                rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
