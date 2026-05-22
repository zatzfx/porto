import React from 'react';
import { motion } from 'motion/react';

interface GlowBackgroundProps {
  isPlaying?: boolean;
}

export default function GlowBackground({ isPlaying = false }: GlowBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#050505]">
      {/* Westworld Architectural Blueprint Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.004)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.004)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      {/* High-precision crosshair coordinate markers in corners (Westworld host calibration screen style) */}
      <div className="absolute top-8 left-8 text-[8px] font-mono text-neutral-600 select-none tracking-widest">[ CALIBRATION_GRID_L1 ]</div>
      <div className="absolute top-8 right-8 text-[8px] font-mono text-neutral-600 select-none tracking-widest">[ DECR_MODEL_SYS_Active: {isPlaying ? 'TRUE' : 'FALSE'} ]</div>
      <div className="absolute bottom-8 left-8 text-[8px] font-mono text-neutral-600 select-none tracking-widest">[ SYS_UTC_2026 ]</div>
      <div className="absolute bottom-8 right-8 text-[8px] font-mono text-neutral-600 select-none tracking-widest">[ DELOS_INC_H_V2 ]</div>

      {/* Westworld Circular Vector Alignment Ring (The circular frame from the logo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full border border-neutral-800/30 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[85%] rounded-full border border-neutral-800/15" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-neutral-800/10" />
      </div>

      {/* Elegant, thin geometric horizontal coordinate axis */}
      <div className="absolute top-1/2 inset-x-0 h-[1px] bg-neutral-800/10" />
      <div className="absolute left-1/2 inset-y-0 w-[1px] bg-neutral-800/10" />

      {/* When audio is playing: Delicate white/sand particle alignment pulses across the axis (lightweight) */}
      {isPlaying && (
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.25, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-neutral-900/10"
          />
          
          {/* Stark minimalist pulse tracker indicator */}
          <div className="absolute top-[48%] left-1/4 w-[1px] h-12 bg-neutral-700/50 animate-pulse" />
          <div className="absolute top-[52%] right-1/4 w-[1px] h-12 bg-neutral-700/50 animate-pulse" />
        </div>
      )}
    </div>
  );
}
