import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  Droplets,
  Ear,
  Heart,
  Layers,
  Leaf,
  ShieldCheck,
  Smile,
  Sparkles,
  Wallet,
} from 'lucide-react';
import './index.css';

const MEDIA = 'https://media.base44.com/images/public/user_6a7f20e690448390e9ab87c1';
const LOGO_URL = `${MEDIA}/4f81fd122_WhatsAppImage2026-10-11at154036.jpeg`;
const VIDEO_URL =
  'https://media.base44.com/videos/public/6ad812ab986d92e8000cf879/fb9a4b093_WhatsAppVideo2026-10-20at165546.mp4';
const VIDEO_CALLOUT =
  'Veja em 20 segundos e role a página para ver os cuidados inclusos 👇';
const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5511969424943&text=Oi!%20Acabei%20de%20ver%20os%20diferenciais%20e%20gostaria%20de%20continuar%20o%20atendimento!';

const DIFFERENTIALS = [
  {
    tag: 'Acolhimento Emocional',
    icon: Leaf,
    title: 'Blend Calmante Anti-Estresse',
    images: [
      'https://media.base44.com/images/public/6ad812ab986d92e8000cf879/7b79b6408_Capturadetela2026-10-20221637.png',
    ],
    alt: 'Blend aromático calmante de óleos essenciais com camomila romana e laranja doce',
    imageFocus: 'bottom',
    pet: 'Aromaterapia natural que reduz o medo e a agitação durante todo o atendimento.',
    benefit:
      'Seu cão volta relaxado para casa, sem traumas ou necessidade de sedação.',
  },
  {
    tag: 'Higiene Preventiva',
    icon: Ear,
    title: 'Limpeza de Ouvido Preventiva',
    images: [`${MEDIA}/fe5bf7b02_ouvido.jpeg`],
    alt: 'Frasco de limpeza otológica veterinária para cães',
    pet: 'Loção suave com Melaleuca que dissolve o cerume sem arder ou irritar.',
    benefit:
      'Previne infecções e otites recorrentes, evitando gastos com consultas veterinárias.',
  },
  {
    tag: 'Água Tratada',
    icon: Droplets,
    title: 'Água Purificada e Filtrada',
    images: [`${MEDIA}/ac61365ca_WhatsAppImage2026-10-20at154041.jpeg`],
    alt: 'Ducha com sistema de filtragem mineral de esferas bioativadas',
    imageFit: 'contain',
    imageHeight: 240,
    pet: 'Ducha com esferas minerais que elimina o cloro e impurezas pesadas da rede.',
    benefit:
      'Pelagem macia, hidratação prolongada e alívio para peles sensíveis ou alérgicas.',
  },
  {
    tag: 'Higiene Facial',
    icon: Smile,
    title: 'Banho Facial Sem Lágrimas',
    images: [`${MEDIA}/2bc69cf61_face.jpeg`],
    alt: 'Shampoo cabeça e face com fórmula que não arde os olhos',
    pet: 'Shampoo hipoalergênico exclusivo para a cabeça e focinho, que não arde os olhos.',
    benefit: 'Higiene delicada da carinha sem sufoco, sem choro e com zero trauma.',
  },
  {
    tag: 'Limpeza Profunda',
    icon: Sparkles,
    title: 'Limpeza Profunda & Durabilidade',
    images: [`${MEDIA}/e5931479a_neutr.jpeg`],
    alt: 'Shampoo neutralizador de odores profissional de 1 litro',
    pet: 'Neutralizador que desintegra as moléculas do mau cheiro sem agredir a pele.',
    benefit: 'Perfume suave e cheirinho de banho tomado que dura muito mais dias em casa.',
  },
  {
    tag: 'Biossegurança',
    icon: Layers,
    title: 'Biossegurança com Toalhas Exclusivas',
    images: [`${MEDIA}/fb6748451_toalha.jpeg`, `${MEDIA}/4bf676380_toal.jpeg`],
    alt: 'Kit de toalhas seladas individualmente, descartável e facial pet',
    pet: 'Toalha descartável lacrada aberta na hora + toalha facial esterilizada dedicada.',
    benefit: 'Risco zero de contaminação por fungos, sarnas ou bactérias de outros pets.',
  },
  {
    tag: 'Conforto Acústico',
    icon: ShieldCheck,
    title: 'Abafador de Ruído para Secagem',
    images: [`${MEDIA}/8fe2eaecc_prote.jpeg`],
    alt: 'Abafador de ruído anatômico para cães durante a secagem',
    pet: 'Faixa anatômica macia que amortece o barulho alto do secador e protege os ouvidos do vento.',
    benefit: 'Secagem rápida e tranquila, eliminando o maior motivo de pânico dos cães.',
  },
  {
    tag: 'Finalização & Spa',
    icon: Heart,
    title: 'Spa de Patinhas e Focinho',
    images: [`${MEDIA}/bf4fe6b65_patinhas.jpeg`],
    alt: 'Bálsamo hidratante Pata Fofa para patinhas e focinho de cães',
    pet: 'Manteiga vegetal nutritiva que restaura a umidade de coxins e focinhos ressecados.',
    benefit: 'Patinhas macias e aveludadas, protegidas contra rachaduras e calor do chão.',
  },
];

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24-1.44 0-2.86-.39-4.1-1.12l-.29-.17-3.12.82.83-3.04-.19-.31a8.2 8.2 0 0 1-1.26-4.42c0-4.54 3.7-8.24 8.24-8.24zm-3.1 4.13c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.68 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.41h-.46z" />
    </svg>
  );
}

function DifferentialCard({ item, index }) {
  const Icon = item.icon;
  const multi = item.images.length > 1;
  const contain = item.imageFit === 'contain';
  const heightClass = item.imageHeight === 240 ? 'h-[240px]' : 'h-[200px]';
  const imgStyle = item.imageFocus === 'bottom' ? { objectPosition: 'center bottom' } : undefined;
  const fitClass = contain ? 'object-contain' : 'object-cover';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_40px_-34px_rgba(17,24,39,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_50px_-34px_rgba(17,24,39,0.3)]"
    >
      <div className="relative">
        {multi ? (
          <div className={`grid grid-cols-2 gap-0.5 ${heightClass}`}>
            {item.images.map((src, i) => (
              <div key={src} className="h-full w-full overflow-hidden">
                <img
                  src={src}
                  alt={i === 0 ? item.alt : `${item.alt} — detalhe`}
                  className={`h-full w-full ${fitClass}`}
                  style={imgStyle}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className={`w-full overflow-hidden ${heightClass} ${contain ? 'bg-card' : ''}`}>
            <img
              src={item.images[0]}
              alt={item.alt}
              className={`h-full w-full ${fitClass}`}
              style={imgStyle}
              loading="lazy"
            />
          </div>
        )}

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-card/90 px-3.5 py-1.5 ring-1 ring-border/70 backdrop-blur-sm">
          <Icon className="h-3.5 w-3.5 text-primary" />
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.16em] text-foreground/75">
            {item.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
        <h3 className="font-heading text-[1.55rem] leading-snug text-foreground">{item.title}</h3>

        <div className="mt-4">
          <p className="flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
            <Leaf className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            Para o pet
          </p>
          <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted-foreground">{item.pet}</p>
        </div>

        <div className="mt-4 rounded-xl bg-accent px-4 py-3.5 ring-1 ring-primary/15">
          <p className="flex items-center gap-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foreground/70">
            <Wallet className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
            Custo-benefício
          </p>
          <p className="mt-1.5 text-[0.92rem] font-medium leading-relaxed text-foreground/85">
            {item.benefit}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-card">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card via-card to-background" />
        <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-6 pb-0 pt-7 text-center sm:pt-12">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.7rem]">
            Atendimento exclusivo &amp; individualizado
          </p>

          <div className="mx-auto mt-4 h-28 w-28 overflow-hidden rounded-full bg-card shadow-[0_24px_50px_-30px_rgba(17,24,39,0.4)] ring-1 ring-border sm:h-36 sm:w-36">
            <img
              src={LOGO_URL}
              alt="Logotipo Estética Pet Spa"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="mt-5 font-heading text-[2.3rem] leading-[1.08] text-foreground sm:text-5xl lg:text-[3.3rem]">
            O seu pet merece um momento só dele com segurança absoluta.
          </h1>
        </div>
      </header>

      {/* VideoSection */}
      <section className="px-6 pb-6 pt-0">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto mb-4 mt-5 max-w-2xl text-center font-body text-[0.95rem] font-semibold leading-relaxed text-[#1E293B] sm:text-base">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary align-middle text-[0.6rem] text-foreground">
              ▶
            </span>
            {VIDEO_CALLOUT}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[340px] rounded-2xl bg-card p-2.5 ring-1 ring-border shadow-[0_30px_60px_-45px_rgba(17,24,39,0.35)] sm:max-w-[360px] sm:p-3"
          >
            <div className="overflow-hidden rounded-xl bg-muted">
              <video
                className="aspect-[9/16] max-h-[480px] w-full object-contain sm:max-h-none"
                src={VIDEO_URL}
                controls
                playsInline
                preload="auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TransitionBand */}
      <section className="px-6 pb-0 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl rounded-2xl border border-primary/40 bg-primary/25 px-5 py-4 text-center shadow-[0_12px_30px_-26px_rgba(190,24,93,0.55)] sm:px-8"
        >
          <p className="font-body text-[17px] font-bold leading-snug text-[#1E293B] sm:text-[21px]">
            Diferenciais já inclusos em cada banho{' '}
            <span className="text-[#9F1239]">(sem taxas extras no final)</span>:
          </p>
        </motion.div>
      </section>

      {/* DifferentialsGrid */}
      <section className="px-6 pb-8 pt-5 sm:pt-6">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <DifferentialCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* CtaSection */}
      <section className="px-6 pb-16 pt-6 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-card px-7 py-12 text-center ring-1 ring-primary/25 shadow-[0_24px_60px_-45px_rgba(17,24,39,0.35)] sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-primary/20 blur-2xl" />

          <p className="relative text-[0.66rem] font-medium uppercase tracking-[0.34em] text-primary">
            Retornar ao atendimento
          </p>

          <p className="relative mx-auto mt-5 max-w-2xl font-body text-[1.05rem] font-semibold leading-relaxed text-foreground sm:text-lg">
            Gostou desse nível de cuidado para o seu filho de quatro patas?
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-9 inline-flex items-center gap-3 rounded-[50px] bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.99] sm:text-[17px]"
          >
            <span className="absolute inset-0 animate-ping rounded-[50px] bg-[#25D366]/30" />
            <WhatsAppIcon className="relative h-5 w-5" />
            <span className="relative">Voltar para o WhatsApp e Agendar</span>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="h-16 w-16 overflow-hidden rounded-full bg-card ring-1 ring-border">
            <img
              src={LOGO_URL}
              alt="Logotipo Estética Pet Spa"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-5 font-heading text-lg tracking-wide text-foreground">Estética Pet Spa</p>
          <p className="mt-1 text-[0.66rem] font-medium uppercase tracking-[0.32em] text-primary">
            Amor • Carinho • Cuidado • Santo André, SP
          </p>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Estética e bem-estar animal com biossegurança, manejo sem estresse e acabamento de
            excelência.
          </p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
