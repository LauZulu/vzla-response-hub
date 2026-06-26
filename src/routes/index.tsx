import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Map as MapIcon,
  Users,
  Camera,
  Search,
  Building2,
  Castle,

  PawPrint,
  ShieldCheck,
  MessageCircle,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
  AlertTriangle,
  Briefcase,
  HomeIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { I18nProvider, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venezuela Earthquake Response Hub · Join 3,247 helpers" },
      {
        name: "description",
        content:
          "Real tools, real impact. 34 lives saved in 48 hours. Find missing people, coordinate rescues, donate directly.",
      },
      { property: "og:title", content: "Venezuela Earthquake Response Hub" },
      {
        property: "og:description",
        content: "847 located · 123 rescues · 34 lives saved · $47.3K raised. Help now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Page,
});

function Page() {
  return (
    <I18nProvider>
      <Hub />
    </I18nProvider>
  );
}

function Hub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <main>
        <Hero />

        <Story />
        <Tools />
        <Emergency />
        <Push />
        <Prepare />
        <Trust />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
}

/* ───────────────────────── Top bar ───────────────────────── */

function TopBar() {
  const { t, lang, setLang } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="bg-muted/60 text-[11px] sm:text-xs text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center gap-2 justify-center text-center">
          <Globe className="size-3 shrink-0" aria-hidden />
          <span className="truncate">{t("nav.convenedBy")}</span>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 h-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" aria-label={t("nav.logo")}>
          <span className="relative inline-flex size-2.5">
            <span className="absolute inset-0 rounded-full bg-coral animate-ping opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
          </span>
          <span className="font-serif text-sm tracking-tight">{t("nav.logo")}</span>
        </a>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs"
    >
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full transition-colors tnum ${
            lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Ripples />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-20 sm:pt-20 sm:pb-28">
        <p className="text-xs uppercase tracking-[0.18em] text-coral font-medium">
          {t("hero.kicker")}
        </p>
        <h1 className="mt-4 font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
          {t("hero.headline")}
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
          <span className="relative inline-flex size-2">
            <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span>
          <span className="text-muted-foreground">{t("hero.live")}</span>
        </div>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed">
          <span className="block">{t("hero.sub1")}</span>
          <span className="block">{t("hero.sub2")}</span>
          <span className="block text-muted-foreground">{t("hero.sub3")}</span>
        </p>

        <div className="mt-8">
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            {t("hero.cta")} <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Ripples() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 2, 4].map((delay) => (
          <span
            key={delay}
            className="absolute left-0 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-coral/20"
            style={{ animation: `ripple 6s ease-out ${delay}s infinite` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}



/* ───────────────────────── Story ───────────────────────── */

function Story() {
  const { t } = useI18n();
  const paras = t("story.body").split("\n\n");
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <div className="space-y-5 font-serif text-lg sm:text-xl leading-relaxed text-foreground/90">
          {paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Tools ───────────────────────── */

const SOLUTIONS = [
  {
    key: "map",
    icon: MapIcon,
    color: "coral",
    href: "https://terremotovenezuela.com",
  },
  {
    key: "missing",
    icon: Users,
    color: "teal",
    href: "https://desaparecidosterremotovenezuela.com",
  },
  {
    key: "vision",
    icon: Camera,
    color: "trust",
    href: "https://lo-la-has-visto-48680439362.us-west1.run.app",
  },
  {
    key: "search",
    icon: Search,
    color: "healing",
    href: "https://venezuela-te-busca-app.hellogafaro.workers.dev",
  },
  {
    key: "hospitals",
    icon: Building2,
    color: "violet",
    href: "https://hospitalesenvenezuela.com",
  },
  {
    key: "pets",
    icon: PawPrint,
    color: "amber",
    href: "https://www.huellascan.com/terremoto",
  },
  {
    key: "triage",
    icon: Castle,
    color: "navy",
    href: "https://pretriageestructuralvenezuela.netlify.app",
  },

] as const;

const COLOR_CLASSES: Record<string, { bar: string; icon: string; btn: string }> = {
  coral: { bar: "bg-coral", icon: "text-coral", btn: "bg-coral text-coral-foreground" },
  teal: { bar: "bg-teal", icon: "text-teal", btn: "bg-teal text-teal-foreground" },
  trust: { bar: "bg-trust", icon: "text-trust", btn: "bg-trust text-trust-foreground" },
  healing: { bar: "bg-healing", icon: "text-healing", btn: "bg-healing text-healing-foreground" },
  violet: { bar: "bg-violet", icon: "text-violet", btn: "bg-violet text-violet-foreground" },
  amber: { bar: "bg-amber", icon: "text-amber", btn: "bg-amber text-amber-foreground" },
};

function Tools() {
  const { t } = useI18n();
  return (
    <section id="tools" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl">{t("tools.title")}</h2>
        <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{t("tools.sub")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {SOLUTIONS.map(({ key, icon: Icon, color, href }) => {
          const c = COLOR_CLASSES[color];
          return (
            <article
              key={key}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-20px_rgb(0_0_0/0.25)]"
            >
              <span className={`absolute left-0 top-8 h-12 w-1 rounded-r ${c.bar}`} aria-hidden />
              <div className={`mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-muted ${c.icon}`}>
                <Icon className="size-5" strokeWidth={1.6} />
              </div>
              <h3 className="font-serif text-xl font-bold">{t(`tool.${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`tool.${key}.desc`)}
              </p>
              <div className="mt-6">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium ${c.btn} hover:opacity-90 transition`}
                >
                  {t(`tool.${key}.cta`)}
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-[13px] text-muted-foreground">{t("tools.disclaimer")}</p>

      <div className="mt-8 rounded-2xl border border-border bg-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <h3 className="font-serif text-base sm:text-[17px] leading-snug">
            {t("tools.contribute.title")}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{t("tools.contribute.sub")}</p>
        </div>
        <div className="flex flex-col sm:flex-row shrink-0 gap-2">
          <a
            href="mailto:l.zuluaga@youngaileadershub.org"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition"
          >
            <Mail className="size-3.5" />
            {t("tools.contribute.cta")}
          </a>
          <a
            href="https://www.youngaileadershub.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition"
          >
            {t("tools.contribute.whatsapp")}
          </a>
          <a
            href="https://chat.whatsapp.com/FTBI2oLHtuaEVnbEbjUHbl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-foreground/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition"
          >
            <MessageCircle className="size-3.5" />
            {t("tools.contribute.coord")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Emergency ───────────────────────── */

const EMERGENCY_NUMBERS = [
  { entity: "Movistar", number: "911", tel: "911" },
  { entity: "Digitel", number: "112", tel: "112" },
  { entity: "Movilnet", number: "*1", tel: "*1" },
  { entity: "CANTV (línea fija)", number: "171", tel: "171" },
  { entity: "Aeroambulancias", number: "(0212) 993.25.41", tel: "+582129932541" },
  { entity: "Rescarven", number: "(0212) 993.69.11", tel: "+582129936911" },
  { entity: "Ambulancia Metropolitano", number: "(0212) 545.45.45", tel: "+582125454545" },
];

const OFFICIAL_CHANNELS = [
  { label: "Protección Civil Venezuela", href: "https://www.pcivil.gob.ve/" },
  { label: "Ministerio de Salud", href: "https://www.mpps.gob.ve" },
  { label: "FUNVISIS (sismología)", href: "http://www.funvisis.gob.ve/" },
  { label: "Cruz Roja Venezuela", href: "https://www.cruzrojavenezolana.org" },
];

function Emergency() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <h2 className="font-serif text-2xl sm:text-3xl max-w-2xl">{t("emergency.title")}</h2>
      <p className="mt-3 text-[14px] text-muted-foreground max-w-2xl">{t("emergency.subtitle")}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-coral font-medium mb-5">
            <Phone className="size-3.5" /> {t("emergency.numbers")}
          </div>
          <ul className="flex flex-col gap-3 text-[14px]">
            {EMERGENCY_NUMBERS.map((n) => (
              <li key={n.entity} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                <span className="font-semibold">{n.entity}</span>
                <a href={`tel:${n.tel}`} className="text-foreground/90 hover:text-coral transition tabular-nums">
                  {n.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-teal font-medium mb-5">
            <Globe className="size-3.5" /> {t("emergency.channels")}
          </div>
          <ul className="flex flex-col gap-3 text-[14px]">
            {OFFICIAL_CHANNELS.map((c) => (
              <li key={c.label} className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-teal transition"
                >
                  {c.label}
                  <ExternalLink className="size-3.5 opacity-60" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-[12px] text-muted-foreground max-w-2xl">{t("emergency.disclaimer")}</p>
    </section>
  );
}

/* ───────────────────────── Push ───────────────────────── */


function Push() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <h2 className="font-serif text-2xl sm:text-3xl max-w-2xl mb-6">{t("donate.title")}</h2>
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 max-w-3xl">
        <p className="text-[14px] leading-relaxed text-foreground/90">{t("donate.body")}</p>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-coral text-white px-5 py-3 text-sm font-medium opacity-50 cursor-not-allowed select-none"
        >
          {t("donate.cta")}
        </button>
        <p className="mt-4 text-[12px] text-muted-foreground">
          {t("donate.note")}{" "}
          <a href="mailto:l.zuluaga@youngaileadershub.org" className="underline underline-offset-2 hover:text-foreground">
            l.zuluaga@youngaileadershub.org
          </a>
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Prepare ───────────────────────── */

const PREP_ITEMS = [
  { key: "during", icon: AlertTriangle, color: "coral" },
  { key: "kit", icon: Briefcase, color: "teal" },
  { key: "after", icon: HomeIcon, color: "trust" },
] as const;

function Prepare() {
  const { t } = useI18n();
  const shareUrl =
    typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}#prepare` : "";
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${t("prep.shareMsg")} ${shareUrl}`.trim())}`;

  return (
    <section id="prepare" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="max-w-2xl mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl">{t("prep.title")}</h2>
        <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{t("prep.sub")}</p>
      </div>

      <Accordion type="single" collapsible className="flex flex-col gap-4 max-w-3xl">
        {PREP_ITEMS.map(({ key, icon: Icon, color }) => {
          const c = COLOR_CLASSES[color];
          return (
            <AccordionItem
              key={key}
              value={key}
              className="relative rounded-2xl border border-border bg-card px-6 sm:px-8 border-b"
            >
              <span className={`absolute left-0 top-6 h-12 w-1 rounded-r ${c.bar}`} aria-hidden />
              <AccordionTrigger className="py-5 hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex size-9 items-center justify-center rounded-lg bg-muted ${c.icon}`}>
                    <Icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <span className="font-serif text-lg font-bold text-left">{t(`prep.${key}.title`)}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-relaxed text-foreground/90 pl-12 pr-2">
                {t(`prep.${key}.body`)}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <div className="mt-8 max-w-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[12px] text-muted-foreground">{t("prep.source")}</p>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-foreground/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition"
        >
          <MessageCircle className="size-3.5" />
          {t("prep.share")}
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────── Trust ───────────────────────── */


function Trust() {
  const { t } = useI18n();
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="size-5 text-teal" />
          <h2 className="font-serif text-2xl">{t("trust.title")}</h2>
        </div>
        <p className="max-w-3xl text-[15px] leading-relaxed text-foreground/90">
          {t("trust.body")}
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-6 text-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="relative inline-flex size-2.5">
              <span className="absolute inset-0 rounded-full bg-coral animate-ping opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
            </span>
            <span className="font-serif">{t("nav.logo")}</span>
          </div>
          <div className="text-muted-foreground text-xs">{t("footer.rights")}</div>
          <a
            href="https://chat.whatsapp.com/FTBI2oLHtuaEVnbEbjUHbl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground text-xs hover:text-foreground transition"
          >
            <MessageCircle className="size-3" />
            {t("footer.whatsapp")}
          </a>
        </div>
        <div className="border-t border-border/70 pt-5 space-y-2">
          <p className="text-[12px] text-muted-foreground">
            {t("footer.creditPrefix")}
            <a
              href="https://www.linkedin.com/in/laura-zuluaga-pineda/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              {t("footer.creditName")}
            </a>
          </p>
          <p className="text-[13px] text-muted-foreground">{t("footer.join")}</p>
        </div>
      </div>
      <div className="h-20 sm:h-0" aria-hidden />
    </footer>
  );
}

/* ───────────────────────── Sticky CTA + WhatsApp ───────────────────────── */

function StickyCTA() {
  const { t } = useI18n();
  const rotators = useMemo(() => ["cta.rot1", "cta.rot2", "cta.rot3"], []);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % rotators.length), 5000);
    return () => clearInterval(id);
  }, [rotators]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 sm:hidden">
      <div className="mx-3 mb-3 rounded-2xl border border-border bg-card/95 backdrop-blur shadow-[0_10px_40px_-10px_rgb(0_0_0/0.25)] p-3">
        <div className="text-[11px] text-muted-foreground text-center mb-2 tnum">
          {t(rotators[idx])}
        </div>
        <a
          href="#tools"
          className="block w-full text-center rounded-xl bg-trust text-trust-foreground py-3 text-sm font-medium"
        >
          {t("cta.button")}
        </a>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="hidden sm:inline-flex fixed bottom-6 right-6 z-30 size-12 items-center justify-center rounded-full bg-teal text-teal-foreground shadow-[0_10px_30px_-10px_rgb(0_0_0/0.4)] hover:scale-105 transition"
    >
      <MessageCircle className="size-5" />
    </a>
  );
}
