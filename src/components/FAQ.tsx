import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, TrendingUp, Cpu, Server, Briefcase } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ComponentType<any>;
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Berapa umur Drazat Herdiansyah (Azatz) saat ini dan apakah legal untuk menerima proyek?',
      answer: 'Saya lahir pada tanggal 19 Maret 2010 (saat ini berumur 16 tahun) dan saat ini sedang menempuh pendidikan di SMP Negeri 1 Ciawi, Tasikmalaya, Jawa Barat. Walaupun masih berstatus pelajar, saya sangat aktif menerima proyek freelance non-formal, magang siber, maupun kolaborasi tim di luar jam sekolah melalui wali atau sistem kontrak kerja lepas yang fleksibel.',
      icon: Sparkles
    },
    {
      id: 'faq-2',
      question: 'Apa saja layanan teknis (freelance) utama yang Azatz tawarkan?',
      answer: 'Saya mengkhususkan diri pada tiga pilar: 1) Pembuatan website responsif menggunakan HTML, Tailwind CSS, dan React; 2) Setup server VPS dasar berbasis Linux Bash (konfigurasi firewall UFW, instalasi Nginx/Apache Web Server, sertifikat SSL gratis, dan SSH secure); serta 3) Optimalisasi dan modifikasi aplikasi web PHP warisan (legacy) atau pembuatan REST API sederhana dengan Node.js.',
      icon: Cpu
    },
    {
      id: 'faq-3',
      question: 'Bagaimana cara kerja sama dengan Azatz dan berapa tarif pengerjaannya?',
      answer: 'Sangat mudah! Anda bisa langsung mengirimkan proposal proyek ke email resmi henhendrazat@gmail.com atau melalui tautan kontak kami. Tarif pengerjaan sangat bersahabat dan fleksibel, berorientasi membantu pelaku UMKM (Kantin Sekolah) atau developer lokal mendapatkan produk digital dengan harga yang ramah kantong.',
      icon: Briefcase
    },
    {
      id: 'faq-4',
      question: 'Apakah Azatz bisa membantu analisis portofolio trading Forex atau Kripto?',
      answer: 'Ya, tentu! Sejak tahun 2024, saya aktif menekuni dunia trading Forex dan Cryptocurrency sebagai kegiatan sampingan utama. Saya telah mengasah insting manajemen risiko keuangan dan analisis teknikal chart candlestick (pola harga). Saya siap membantu menyusun alat visualisasi data kripto atau membuat skrip filter data pasar modern.',
      icon: TrendingUp
    },
    {
      id: 'faq-5',
      question: 'Seberapa jauh pemahaman Azatz tentang Geopolitik dan Makroekonomi?',
      answer: 'Mulai tahun 2025, saya menaruh ketertarikan tinggi pada dinamika geopolitik internasional dan makroekonomi global. Saya rutin mengonsumsi berita pergeseran rantai pasok chip semikonduktor, kebijakan suku bunga bank sentral dunia, dan dampaknya terhadap sirkulasi infrastruktur server siber. Wawasan makro ini memengaruhi cara saya membangun server VPS yang tangguh secara jangka panjang.',
      icon: Server
    }
  ];

  const toggleFAQ = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden border-b border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-left">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-sm bg-neutral-950 border border-neutral-800 text-[10px] font-mono tracking-widest text-neutral-400 uppercase"
          >
            <HelpCircle className="w-3.5 h-3.5 text-neutral-500" />
            <span>EXAMINATION_FAQ_BOARD</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight"
          >
            Pertanyaan{' '}
            <span className="text-neutral-400">
              Sering Diajukan
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-neutral-450 text-xs sm:text-sm font-light font-sans max-w-xl mx-auto leading-relaxed"
          >
            Pelajari rincian legalitas kerja sama lepas, spesifikasi server VPS, manajemen risiko finansial, hingga integrasi wawasan makro sirkulasi digital.
          </motion.p>
        </div>

        {/* FAQ Accordion List with Grayscale/Minimalist Glassmorphism Cards */}
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqData.map((item) => {
            const IconComponent = item.icon;
            const isOpen = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`glass-card rounded-lg border transition-all duration-300 relative overflow-hidden ${
                  isOpen 
                    ? 'border-neutral-500 bg-[#0d0d0d] shadow-md' 
                    : 'border-neutral-850 hover:border-neutral-700 bg-neutral-950/60 hover:bg-neutral-900/40'
                }`}
              >
                {/* Micro active top indicator line */}
                {isOpen && (
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-neutral-300" />
                )}

                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2 rounded transition-colors shrink-0 ${
                      isOpen ? 'bg-neutral-900 text-white border border-neutral-850' : 'bg-neutral-950 text-neutral-500 border border-neutral-900'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-white text-xs sm:text-sm font-bold font-mono tracking-wide leading-tight truncate">
                      {item.question.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className={`p-1.5 rounded bg-neutral-950 border border-neutral-900 text-neutral-500 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-white bg-neutral-905' : ''
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-neutral-900 text-neutral-400 text-xs sm:text-xs leading-relaxed font-sans font-light text-left">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tip Badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-neutral-500 font-mono tracking-widest">
          <span>// STATUS: METRIC_OPERATIONAL_OK • SECURITY: VERIFIED</span>
        </div>

      </div>
    </section>
  );
}
