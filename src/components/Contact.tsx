import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, Instagram, Facebook, Youtube, Sparkles, Terminal, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  // Input states
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });

  // Transmit engine states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successLogs, setSuccessLogs] = useState<typeof form | null>(null);

  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    if (!value) {
      errorMsg = 'Kolom ini wajib diisi';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = 'Format email tidak valid';
      }
    } else if (name === 'message' && value.length < 10) {
      errorMsg = 'Pesan minimal berisi 10 karakter';
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      validateField(name, value);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('name', form.name);
    const isEmailValid = validateField('email', form.email);
    const isSubjectValid = validateField('subject', form.subject);
    const isMessageValid = validateField('message', form.message);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setIsSubmitting(true);
      
      // Simulate transmitting packets to the server
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setSuccessLogs({ ...form });
        setForm({ name: '', email: '', subject: '', message: '' }); // reset original form
      }, 1500);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setSuccessLogs(null);
  };

  // Generate mailto link as native fallback mechanism
  const getMailtoLink = () => {
    if (!successLogs) return `mailto:${PERSONAL_INFO.email}`;
    const mailSubject = encodeURIComponent(`[Azatz Portfolio] - ${successLogs.subject}`);
    const mailBody = encodeURIComponent(`Halo Azatz,\n\nSaya ${successLogs.name} (${successLogs.email}) mengirim pesan berikut:\n\n${successLogs.message}\n\nSalam,\n${successLogs.name}`);
    return `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-sm bg-neutral-950 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400 uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-500 animate-spin-slow" />
            <span>EXCHANGE_TRANSMISSION</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Mulai Kemitraan &{' '}
            <span className="text-neutral-400">
              Kolaborasi Siber
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm font-light font-sans max-w-xl mx-auto leading-relaxed text-center"
          >
            Punya penawaran koding, jasa setup server VPS mandiri, atau butuh bantuan siber berkualitas tinggi? Sampaikan rincian transmisi Anda!
          </motion.p>
        </div>

        {/* Contact Split layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card rounded-lg p-6 md:p-8 border border-neutral-850 text-left flex flex-col justify-between h-full relative overflow-hidden bg-[#090909]/90">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-white text-base md:text-lg font-bold font-display">Logistik Jaringan</h3>
                  <p className="text-neutral-450 text-xs font-light leading-relaxed">
                    Sistem pemrosesan transmisi data siber aktif selama masa operasional dan akan segera direspons.
                  </p>
                </div>

                {/* Details layout */}
                <div className="space-y-4 font-mono text-[11px]">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-neutral-950 border border-neutral-900 text-neutral-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[8px] text-neutral-500 font-bold tracking-wider">EMAIL_HOST</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-300 text-xs hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-neutral-950 border border-neutral-900 text-neutral-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[8px] text-neutral-500 font-bold tracking-wider">LOC_COORDINATE</p>
                      <p className="text-neutral-300 text-xs">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded bg-neutral-950 border border-neutral-900 text-neutral-400 flex items-center justify-center shrink-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
                      </span>
                    </div>
                    <div>
                      <p className="text-[8px] text-neutral-500 font-bold tracking-wider">AVAILABILITY</p>
                      <p className="text-neutral-300 text-xs">{PERSONAL_INFO.availability}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Social Channels Section */}
              <div className="mt-12 space-y-4">
                <h4 className="text-neutral-400 text-xs font-bold font-mono tracking-widest uppercase">// CHANNEL_NETWORKS:</h4>
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Instagram social link */}
                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-neutral-950 border border-neutral-900 flex flex-col items-center justify-center gap-1.5 transition-all text-neutral-400 hover:text-white hover:border-neutral-700"
                  >
                    <Instagram className="w-4 h-4 pointer-events-none" />
                    <span className="text-[9px] font-mono">Instagram</span>
                  </a>

                  {/* Facebook social link */}
                  <a
                    href={PERSONAL_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-neutral-950 border border-neutral-900 flex flex-col items-center justify-center gap-1.5 transition-all text-neutral-400 hover:text-white hover:border-neutral-700"
                  >
                    <Facebook className="w-4 h-4 pointer-events-none" />
                    <span className="text-[9px] font-mono">Facebook</span>
                  </a>

                  {/* YouTube social link */}
                  <a
                    href={PERSONAL_INFO.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-neutral-950 border border-neutral-900 flex flex-col items-center justify-center gap-1.5 transition-all text-neutral-400 hover:text-white hover:border-neutral-700"
                  >
                    <Youtube className="w-4 h-4 pointer-events-none" />
                    <span className="text-[9px] font-mono">YouTube</span>
                  </a>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Form / Success Receipt Panel */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-lg p-6 md:p-8 border border-neutral-850 text-left min-h-[440px] flex flex-col justify-center bg-[#090909]/90">
              
              <AnimatePresence mode="wait">
                
                {/* STATE 1: SUCCESS RECEIPT LOGGER TERMINAL */}
                {isSuccess && successLogs ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-2.5 text-white font-bold font-display text-base">
                      <CheckCircle className="w-5.5 h-5.5 text-neutral-300" />
                      <span>Transmisi Pesan Berhasil!</span>
                    </div>

                    <p className="text-neutral-400 text-xs font-light font-sans leading-relaxed">
                      Pesan Anda berhasil dieksekusi dan dikodekan. Anda dapat langsung meneruskan rangkuman ke email resmi klien bawaan untuk mempercepat koordinasi.
                    </p>

                    {/* High-Tech Terminal Display */}
                    <div className="rounded-lg border border-neutral-850 bg-black/50 overflow-hidden font-mono text-[11px] text-neutral-300 shadow-inner">
                      
                      {/* Terminal header */}
                      <div className="bg-[#0e0e0e] border-b border-neutral-850 px-4 py-2 flex items-center justify-between text-[9px] text-neutral-500">
                        <div className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                          <span>transmission_receipt.log</span>
                        </div>
                        <span className="text-neutral-300">✓ DELIVERED</span>
                      </div>

                      {/* Log output block */}
                      <div className="p-4 space-y-2 text-left text-[11px] font-mono leading-relaxed text-neutral-400">
                        <p><span className="text-neutral-600">SYSTEM_ID:</span> <span className="text-neutral-300 font-bold">DELOS_COMMS_V1</span></p>
                        <p><span className="text-neutral-600">PENGIRIM:</span> <span className="text-white font-bold">{successLogs.name}</span> &lt;<span className="text-neutral-300 font-mono">{successLogs.email}</span>&gt;</p>
                        <p><span className="text-neutral-600">SUBJEK:</span> <span className="text-neutral-300">{successLogs.subject}</span></p>
                        <div className="border-t border-neutral-850 pt-2 mt-2 space-y-1">
                          <p className="text-neutral-600">RAW_PACK_CONTENT:</p>
                          <p className="p-2 w-full rounded bg-neutral-950 border border-neutral-900 text-neutral-400 font-light text-[10.5px] italic">
                            "{successLogs.message}"
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Receipt Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={getMailtoLink()}
                        className="flex-1 px-4 py-2.5 rounded bg-white font-mono font-bold text-xs text-center text-neutral-950 hover:bg-neutral-200 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Teruskan ke Klien Email
                      </a>
                      <button
                        onClick={handleResetForm}
                        className="px-4 py-2.5 rounded border border-neutral-800 bg-[#0c0c0c] hover:bg-neutral-900 text-neutral-300 font-mono text-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Pesan Log Baru
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  
                  /* STATE 2: PRIMARY INTERACTIVE CONTACT FORM */
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Rows: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <label htmlFor="name" className="text-neutral-300 font-bold tracking-wider uppercase">Nama Lengkap</label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            placeholder="cth. Budiman Jaya"
                            className="w-full px-3.5 py-2.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-650 focus:outline-none focus:border-neutral-500"
                          />
                        </div>
                        {errors.name && <p className="text-[10px] text-neutral-400 font-mono text-left">⚠ {errors.name}</p>}
                      </div>

                      <div className="space-y-1.5 font-mono text-[11px]">
                        <label htmlFor="email" className="text-neutral-300 font-bold tracking-wider uppercase">Alamat Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="cth. budi@gmail.com"
                            className="w-full px-3.5 py-2.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-650 focus:outline-none focus:border-neutral-500"
                          />
                        </div>
                        {errors.email && <p className="text-[10px] text-neutral-400 font-mono text-left">⚠ {errors.email}</p>}
                      </div>

                    </div>

                    {/* Row: Subject of message */}
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <label htmlFor="subject" className="text-neutral-300 font-bold tracking-wider uppercase">Subjek Pesan</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          placeholder="cth. Penawaran Proyek Web Kreatif"
                          className="w-full px-3.5 py-2.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-650 focus:outline-none focus:border-neutral-500"
                        />
                      </div>
                      {errors.subject && <p className="text-[10px] text-neutral-400 font-mono text-left">⚠ {errors.subject}</p>}
                    </div>

                    {/* Row: Main message description */}
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <label htmlFor="message" className="text-neutral-300 font-bold tracking-wider uppercase">Rincian Deskripsi Pesan</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleInputChange}
                          placeholder="Jelaskan kebutuhan fungsional digital Anda di sini..."
                          className="w-full px-3.5 py-2.5 rounded bg-neutral-950 border border-neutral-808 text-xs text-white placeholder-neutral-650 focus:outline-none focus:border-neutral-500 resize-none"
                        />
                      </div>
                      {errors.message && <p className="text-[10px] text-neutral-400 font-mono text-left">⚠ {errors.message}</p>}
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          TRANSMITTING_PACKET...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-3.5 h-3.5" />
                          Transmit Message
                        </span>
                      )}
                    </button>
                    
                  </motion.form>
                )}
                
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
