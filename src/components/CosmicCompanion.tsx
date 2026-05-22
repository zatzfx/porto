import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Heart, Music, X, Edit3, Check, Link, RotateCcw } from 'lucide-react';

interface CosmicCompanionProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export default function CosmicCompanion({ onPlayStateChange }: CosmicCompanionProps) {
  // Assistant companion states
  const [isOpen, setIsOpen] = useState(true);
  const [bubbleText, setBubbleText] = useState('Stay ding here subian tini! 🎵 Tempel URL lagumu untuk dimainkan langsung di website! ✨');
  const [tiniEmotion, setTiniEmotion] = useState<'idle' | 'happy' | 'dancing' | 'love'>('idle');
  const [companionClickedCount, setCompanionClickedCount] = useState(0);

  // Audio Engine states
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  
  // Custom Audio URL configuration
  const defaultAudioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
  const [audioUrl, setAudioUrl] = useState(() => {
    return localStorage.getItem('azatz_audio_url') || defaultAudioUrl;
  });
  const [inputUrl, setInputUrl] = useState(audioUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  // References to Audio elements
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync play state to parent
  useEffect(() => {
    if (onPlayStateChange) onPlayStateChange(isPlaying);
  }, [isPlaying, onPlayStateChange]);

  // Handle assistant dialogue cycles adapted for Drazat Herdiansyah in Westworld calibration style
  const dialogueQueue = [
    'Halo! Aku Tini, asisten siber modular Drazat Herdiansyah (alias Azatz)! 🌸 Aku siap memandu perjalanan siber kita!',
    'Stay ding here subian tini~ ♫ Musik fokus ini dioptimalkan untuk menyelaraskan neuron koding dan konfigurasi VPS server! (≧▽≦) ♡',
    'Kerja Sama Aktif: Azatz siap terjun ke dalam kolaborasi tim, magang industri, atau proyek siber komersial! Hubungi dia sekarang! ✉',
    'Analitik Finansial: Sejak 2024, Azatz mengasah disiplin pembacaan teknikal chart Forex & Crypto. Risiko terpantau minimal! 📈',
    'Makro Geopolitik: Sejak 2025, Azatz mendalami supply-chain teknologi global untuk mengamankan hosting server berdaya tahan tinggi! 🌍',
    'Data Silsilah Belajar: Dari masa bernostalgia di SDN Kurniabakti (2021) hingga SMPN 1 Ciawi Tasikmalaya saat ini, perkembangan metrik belajarnya 100%! 🚀',
    'Kustomisasi Audio: Kamu bebas mengubah latar suara dengan menempelkan tautan MP3-mu sendiri pada panel kontrol sebelah kiri! 📥',
  ];

  const handleTiniClick = () => {
    setCompanionClickedCount(prev => prev + 1);
    setTiniEmotion('happy');
    
    // Cycle dialogue
    const nextText = dialogueQueue[companionClickedCount % dialogueQueue.length];
    setBubbleText(nextText);

    setTimeout(() => {
      setTiniEmotion(isPlaying ? 'dancing' : 'idle');
    }, 1500);
  };

  // Trigger reactive assistant reactions when player toggles play state
  useEffect(() => {
    if (isPlaying) {
      setTiniEmotion('dancing');
      setBubbleText('Prosesor Sinkronisasi: "Stay ding here subian tini..." ♫ Irama frekuensi tinggi terdeteksi! Goyangkan badanmu! ( •̀ ω •́ )✧ ✨');
    } else {
      setTiniEmotion('idle');
      setBubbleText('Suasana sepi... Aktifkan pemutar audio kembali untuk menghangatkan sirkuit hiburan saya! (｡•́︿•̀｡)');
    }
  }, [isPlaying]);

  // Handle instance level HTML5 Audio binding
  useEffect(() => {
    const audioObj = new Audio(audioUrl);
    audioObj.loop = true;
    audioObj.volume = muted ? 0 : volume;
    audioRef.current = audioObj;

    const handlePlayEvent = () => setIsPlaying(true);
    const handlePauseEvent = () => setIsPlaying(false);
    const handleErrorEvent = (e: any) => {
      console.warn('Audio playback error:', e);
      setAudioError('URL audio tidak valid atau diblokir oleh CORS.');
      setIsPlaying(false);
    };

    audioObj.addEventListener('play', handlePlayEvent);
    audioObj.addEventListener('pause', handlePauseEvent);
    audioObj.addEventListener('error', handleErrorEvent);

    // Auto-resume if was playing previously
    if (isPlaying) {
      audioObj.play().catch(() => setIsPlaying(false));
    }

    return () => {
      audioObj.pause();
      audioObj.removeEventListener('play', handlePlayEvent);
      audioObj.removeEventListener('pause', handlePauseEvent);
      audioObj.removeEventListener('error', handleErrorEvent);
      audioRef.current = null;
    };
  }, [audioUrl]);

  // Handle individual Volume / Mute changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
  }, [volume, muted]);

  const handlePlayToggle = () => {
    if (!audioRef.current) return;
    setAudioError(null);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Chrome/Safari security context gesture check
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Azatz Audio couldn\'t autoplay directly:', err);
        setAudioError('Klik putar sekali lagi untuk mengaktifkan pemutar audio.');
      });
    }
  };

  const handleSaveUrl = () => {
    if (!inputUrl.trim()) return;
    
    setAudioError(null);
    setAudioUrl(inputUrl.trim());
    localStorage.setItem('azatz_audio_url', inputUrl.trim());
    setIsEditingUrl(false);
    
    // Auto-play the newly swapped track
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }, 200);

    setTiniEmotion('love');
    setBubbleText('Konfigurasi berhasil! Audio kustom Anda sekarang dimuat ke dalam sirkuit memori. (≧▽≦) ♡');
  };

  const handleResetToDefault = () => {
    setInputUrl(defaultAudioUrl);
    setAudioUrl(defaultAudioUrl);
    localStorage.removeItem('azatz_audio_url');
    setAudioError(null);
    setIsEditingUrl(false);
    setTiniEmotion('happy');
    setBubbleText('Kembali ke setup audio bawaan Delos System. Semangat belajar kodingnya! 🌸');
  };

  return (
    <>
      {/* 1. MINIMAL SCI-FI AUDIO CONTROLLER (Floating bottom-left) */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: -30 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        className="fixed bottom-6 left-6 z-30 max-w-sm w-[90vw] sm:w-[280px]"
      >
        <div className="glass-card rounded-xl p-4 border border-white/10 bg-[#0e0e0e]/95 backdrop-blur-xl shadow-xl relative overflow-hidden">
          {/* Subtle ivory light top strip indicating status */}
          <div className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-500 ${
            isPlaying ? 'bg-neutral-300 animate-pulse' : 'bg-neutral-800'
          }`} />

          <div className="flex flex-col gap-3">
            
            {/* Header Track layout with Edit Toggle */}
            <div className="flex items-center justify-between gap-2 text-left">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`p-2 rounded-lg transition-all duration-500 shrink-0 ${
                  isPlaying 
                    ? 'bg-neutral-100 text-neutral-950 animate-spin-slow' 
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400'
                }`}>
                  <Music className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5 min-w-0 font-mono">
                  <p className="text-[8px] text-neutral-500 tracking-wider font-bold uppercase flex items-center gap-1">
                    AUDIO_SYS
                    {isPlaying && (
                      <span className="w-1 h-1 rounded-full bg-neutral-300 inline-block animate-ping" />
                    )}
                  </p>
                  <p className="text-white text-xs font-semibold truncate font-display" title={audioUrl}>
                    {audioUrl === defaultAudioUrl ? 'Stay_Ding_Here_Lof' : 'Custom_User_Audio'}
                  </p>
                </div>
              </div>

              {/* Edit URL Trigger Button */}
              <button
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className={`p-2 rounded-lg transition-all cursor-pointer ${
                  isEditingUrl 
                    ? 'bg-neutral-800 text-white border border-neutral-700' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:bg-neutral-800'
                }`}
                title="Sistem Kustomisasi Audio"
              >
                <Edit3 className="w-3 h-3" />
              </button>
            </div>

            {/* Editable Audio Input Slide-down Area */}
            <AnimatePresence>
              {isEditingUrl && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-neutral-800 pt-3 flex flex-col gap-2"
                >
                  <p className="text-[9px] text-neutral-400 font-mono flex items-center gap-1">
                    <Link className="w-3 h-3 text-neutral-400" />
                    Direct URL link (MP3):
                  </p>
                  
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://example.com/audio.mp3"
                      className="flex-1 bg-black/60 border border-neutral-800 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-neutral-700 font-mono"
                    />
                    <button
                      onClick={handleSaveUrl}
                      className="px-2.5 bg-neutral-100 hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 cursor-pointer transition-all shrink-0"
                    >
                      <Check className="w-3 h-3" />
                      Set
                    </button>
                  </div>

                  {/* Reset to Default Option */}
                  {audioUrl !== defaultAudioUrl && (
                    <button
                      onClick={handleResetToDefault}
                      className="text-[9px] text-neutral-400 hover:text-white self-start flex items-center gap-1 cursor-pointer transition-colors pt-0.5 font-mono"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      Kembalikan ke bawaan
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error notifications area */}
            {audioError && (
              <div className="text-[9px] text-neutral-400 font-mono bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1 text-left leading-normal">
                ⚠ {audioError}
              </div>
            )}

            {/* Middle slider & play buttons */}
            <div className="flex items-center justify-between gap-4 pt-1">
              
              {/* Play Pause button */}
              <button
                onClick={handlePlayToggle}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  isPlaying 
                    ? 'bg-neutral-100 text-neutral-900 shadow-md scale-102 hover:bg-white' 
                    : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:text-white hover:bg-neutral-800'
                }`}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>

              {/* Volume slider control */}
              <div className="flex-1 flex items-center gap-2">
                <button 
                  onClick={() => setMuted(!muted)} 
                  className="text-neutral-405 hover:text-white transition-colors p-1"
                >
                  {muted || volume === 0 ? <VolumeX className="w-3.5 h-3.5 text-neutral-500" /> : <Volume2 className="w-3.5 h-3.5 text-neutral-300" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    if (muted) setMuted(false);
                  }}
                  className="flex-1 h-0.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-200 focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #ffffff 0%, #ffffff ${(muted ? 0 : volume) * 100}%, #1f1f1f ${(muted ? 0 : volume) * 100}%, #1f1f1f 100%)`
                  }}
                />
              </div>

            </div>

            {/* Custom mini-banner explaining theme inside player */}
            <div className="text-[8px] text-neutral-500 font-mono flex items-center justify-between pt-1 border-t border-neutral-800">
              <span>DELOS_SENDER_C1</span>
              {isPlaying ? (
                <span className="text-white animate-pulse">TRANSMITTING</span>
              ) : (
                <span>STDBY</span>
              )}
            </div>

          </div>
        </div>
      </motion.div>


      {/* 2. WESTWORLD SCI-FI AVATAR COMPANION (Floating bottom-right) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Dialogue Bubble */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-w-xs p-4 rounded-xl glass-card border border-neutral-800 bg-[#070707]/95 shadow-xl relative pointer-events-auto text-left"
            >
              {/* Little triangle pointer decoration */}
              <div className="absolute bottom-[-5px] right-8 w-2.5 h-2.5 bg-[#070707] border-r border-b border-neutral-800 rotate-45" />

              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-neutral-400" />
                    <span className="text-[9px] font-mono tracking-widest font-extrabold text-[#dfc59f] uppercase">[ Host_Tini // Active ]</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-0.5 rounded-full text-neutral-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer pointer-events-auto"
                    title="Nonaktifkan Pesan"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed font-sans font-light">
                  {bubbleText}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chibi Assistant Floating Avatar Widget */}
        <motion.div
          animate={isPlaying ? {
            y: [0, -8, 0],
            scale: [1, 1.06, 1],
          } : {
            y: [0, -4, 0],
            scale: 1,
          }}
          transition={{
            duration: isPlaying ? 1.5 : 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onClick={() => {
            if (!isOpen) setIsOpen(true);
            handleTiniClick();
          }}
          className="w-14 h-14 rounded-full glass-card border bg-[#0d0d0d] hover:border-white/30 shadow-xl relative pointer-events-auto cursor-pointer group select-none flex items-center justify-center border-neutral-800 active:scale-95 transition-all"
        >
          {/* Wave ring emitter when sound is playing */}
          {isPlaying && (
            <span className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-60 pointer-events-none" />
          )}

          {/* Westworld minimalist cyber face */}
          <div className="relative w-10 h-10 flex flex-col items-center justify-center">
            
            {/* Cyber Antenna or Headband */}
            <div className="absolute top-0 w-6 h-0.5 bg-neutral-700/80 -translate-y-1">
              <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-300 animate-pulse" />
            </div>

            {/* Hair locks top framing cheeks */}
            <div className="absolute inset-x-1 top-0.5 bg-neutral-900 rounded-b h-1.5 z-10" />

            {/* Beautiful corporate mechanical white-eyes frame */}
            <div className={`flex gap-2 text-center mt-1 justify-center items-center z-10 ${
              tiniEmotion === 'dancing' ? 'animate-bounce' : ''
            }`}>
              
              {/* Left Eye */}
              {isPlaying ? (
                <div className="text-neutral-200 text-xs font-mono font-black select-none leading-none">&gt;</div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-white flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="w-0.5 h-0.5 bg-neutral-900 rounded-full absolute top-0.5 right-0.5" />
                </div>
              )}

              {/* Right Eye */}
              {isPlaying ? (
                <div className="text-neutral-200 text-xs font-mono font-black select-none leading-none">&lt;</div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-white flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="w-0.5 h-0.5 bg-neutral-900 rounded-full absolute top-0.5 right-0.5" />
                </div>
              )}

            </div>

            {/* Subtle cheeks indicators */}
            <div className="absolute inset-x-2 bottom-2.5 flex justify-between px-0.5">
              <div className="w-1.5 h-0.5 rounded-full bg-neutral-700 animate-pulse" />
              <div className="w-1.5 h-0.5 rounded-full bg-neutral-700 animate-pulse" />
            </div>

            {/* Dynamic Mouth based on reaction */}
            <div className="mt-0.5 transition-all">
              {tiniEmotion === 'love' ? (
                <Heart className="w-3 h-3 text-neutral-300 fill-current" />
              ) : tiniEmotion === 'happy' || isPlaying ? (
                <span className="text-white text-xs font-mono font-extrabold leading-none block">w</span>
              ) : (
                <span className="text-neutral-400 text-[9px] font-semibold leading-none block">v</span>
              )}
            </div>

            {/* Cyber Kitty Ears in corporate gold/sand hue */}
            <div className="absolute top-[-2px] left-[-2px] w-2.5 h-2 bg-neutral-800 rounded-tr -rotate-12 transform origin-bottom-left" />
            <div className="absolute top-[-2px] right-[-2px] w-2.5 h-2 bg-neutral-800 rounded-tl rotate-12 transform origin-bottom-right" />

          </div>

          {/* Micro calibration vector overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-t from-neutral-800/20 to-transparent pointer-events-none rounded-b-full" />
        </motion.div>

      </div>
    </>
  );
}
