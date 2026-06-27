import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Map as MapIcon,
  MapPin,
  MapPinned,
  Users,
  Camera,
  Search,
  Building2,
  Castle,
  HeartHandshake,
  Package,
  PawPrint,
  ShieldCheck,
  MessageCircle,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  PhoneCall,
  ExternalLink,
  AlertTriangle,
  Briefcase,
  HomeIcon,
  Ambulance,
  ListChecks,
  Cross,
  UtensilsCrossed,
  Terminal,
  Hammer,
  type LucideIcon,
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
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <a
            href="#tools"
            className="inline-flex items-center justify-center rounded-full bg-teal text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            {t("hero.cta.tools")}
          </a>
          <a
            href="#donar"
            className="inline-flex items-center justify-center rounded-full border border-teal text-teal px-5 py-3 text-sm font-medium hover:bg-teal/10 transition"
          >
            {t("hero.cta.donate")}
          </a>
          <a
            href="#preparacion"
            className="inline-flex items-center justify-center rounded-full border border-teal text-teal px-5 py-3 text-sm font-medium hover:bg-teal/10 transition"
          >
            {t("hero.cta.prepare")}
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

type Badge = "verified" | "community" | "new";
type Tool = {
  key: string;
  icon: LucideIcon;
  color: string; // hex
  href: string;
  badge: Badge;
};
type Section = {
  id: string;
  titleKey: string;
  introKey?: string;
  tools: Tool[];
};

const SECTIONS: Section[] = [
  {
    id: "people",
    titleKey: "tools.cat.people",
    tools: [
      { key: "missing", icon: Users, color: "#1D9E75", href: "https://desaparecidosterremotovenezuela.com", badge: "verified" },
      { key: "search", icon: Search, color: "#3B6D11", href: "https://venezuela-te-busca-app.hellogafaro.workers.dev", badge: "verified" },
      { key: "vision", icon: Camera, color: "#185FA5", href: "https://lo-la-has-visto-48680439362.us-west1.run.app", badge: "community" },
      { key: "hospitals", icon: Building2, color: "#534AB7", href: "https://hospitalesenvenezuela.com", badge: "community" },
      { key: "pets", icon: PawPrint, color: "#BA7517", href: "https://www.huellascan.com/terremoto", badge: "community" },
      { key: "redayuda", icon: ShieldCheck, color: "#DC2626", href: "https://redayudavenezuela.com", badge: "new" },
    ],
  },
  {
    id: "maps",
    titleKey: "tools.cat.maps",
    tools: [
      { key: "map", icon: MapIcon, color: "#D85A30", href: "https://terremotovenezuela.com", badge: "verified" },
      { key: "triage", icon: Castle, color: "#11243E", href: "https://pretriageestructuralvenezuela.netlify.app", badge: "verified" },
      { key: "shelters", icon: MapPin, color: "#2E7D32", href: "https://acopios-refugios.vercel.app", badge: "community" },
      { key: "sosvzla", icon: MapPinned, color: "#1E3A5F", href: "https://sosvenezuela2026.com", badge: "new" },
      { key: "yummy", icon: Ambulance, color: "#CA8A04", href: "https://sos.yummyrides.com", badge: "new" },
    ],
  },
  {
    id: "comms",
    titleKey: "tools.cat.comms",
    tools: [
      { key: "recursos", icon: ListChecks, color: "#4D7C0F", href: "https://recursos-venezuela.netlify.app", badge: "verified" },
      { key: "talk360", icon: PhoneCall, color: "#7C3AED", href: "https://talk360.com", badge: "new" },
    ],
  },
  {
    id: "donations",
    titleKey: "tools.cat.donations",
    introKey: "tools.intro.donations",
    tools: [
      { key: "globalgiving", icon: Globe, color: "#059669", href: "https://www.globalgiving.org/projects/venezuela-earthquake-relief/", badge: "verified" },
      { key: "caritas", icon: Cross, color: "#DC2626", href: "https://www.caritas.org/where-caritas-work/latin-america/venezuela/", badge: "verified" },
      { key: "wck", icon: UtensilsCrossed, color: "#EA580C", href: "https://wck.org/", badge: "verified" },
    ],
  },
  {
    id: "build",
    titleKey: "tools.cat.build",
    introKey: "tools.intro.build",
    tools: [
      { key: "code4vzla", icon: Terminal, color: "#2563EB", href: "https://codeforvenezuela.org", badge: "verified" },
      { key: "build4vzla", icon: Hammer, color: "#EA580C", href: "https://build4venezuela.com", badge: "new" },
    ],
  },
];

const BADGE_COLOR: Record<Badge, string> = {
  verified: "#059669",
  community: "#2563EB",
  new: "#D97706",
};

const TOTAL_TOOLS = SECTIONS.reduce((n, s) => n + s.tools.length, 0);

function ToolBadge({ kind }: { kind: Badge }) {
  const { t } = useI18n();
  const label =
    kind === "verified" ? t("tools.badge.verified")
    : kind === "community" ? t("tools.badge.community")
    : t("tools.badge.new");
  return (
    <span
      className="absolute right-4 top-4 inline-flex items-center rounded-full text-white font-medium"
      style={{ backgroundColor: BADGE_COLOR[kind], fontSize: "10px", padding: "2px 10px", borderRadius: "999px", fontWeight: 500 }}
    >
      {label}
    </span>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const { t } = useI18n();
  const Icon = tool.icon;
  return (
    <article className="relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-20px_rgb(0_0_0/0.25)]">
      <span className="absolute left-0 top-8 h-12 w-1 rounded-r" style={{ backgroundColor: tool.color }} aria-hidden />
      <ToolBadge kind={tool.badge} />
      <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-muted" style={{ color: tool.color }}>
        <Icon className="size-5" strokeWidth={1.6} />
      </div>
      <h3 className="font-serif text-xl font-bold pr-20">{t(`tool.${tool.key}.title`)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`tool.${tool.key}.desc`)}</p>
      <div className="mt-6">
        <a
          href={tool.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          style={{ backgroundColor: tool.color }}
        >
          {t(`tool.${tool.key}.cta`)}
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </article>
  );
}

function Tools() {
  const { t, lang } = useI18n();
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS
      .map((s) => ({
        ...s,
        tools: s.tools.filter(({ key }) => {
          const title = t(`tool.${key}.title`).toLowerCase();
          const desc = t(`tool.${key}.desc`).toLowerCase();
          return title.includes(q) || desc.includes(q);
        }),
      }))
      .filter((s) => s.tools.length > 0);
  }, [query, t]);

  const totalFiltered = filteredSections.reduce((n, s) => n + s.tools.length, 0);

  const today = new Date().toLocaleDateString(lang === "es" ? "es-VE" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section id="tools" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="max-w-2xl mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl">{t("tools.title")}</h2>
        <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{t("tools.sub")}</p>
      </div>

      <p className="text-center text-[14px] text-muted-foreground mb-8">
        {t("tools.counter", { n: TOTAL_TOOLS, date: today })}
      </p>

      <div className="relative mb-8 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" strokeWidth={1.6} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("tools.search.placeholder")}
          aria-label={t("tools.search.placeholder")}
          className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm font-sans placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
        />
      </div>

      {totalFiltered === 0 ? (
        <p className="text-sm text-muted-foreground py-8">{t("tools.search.empty")}</p>
      ) : (
        <div className="flex flex-col">
          {filteredSections.map((section) => (
            <div key={section.id} className="border-t pt-10 mt-0" style={{ borderColor: "#E5E7EB", paddingTop: "40px" }}>
              <h3
                className="mb-5"
                style={{
                  fontSize: "13px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {t(section.titleKey)}
              </h3>
              {section.introKey && (
                <p
                  className="mb-6"
                  style={{ fontSize: "14px", color: "#6B7280", maxWidth: "700px" }}
                >
                  {t(section.introKey)}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.tools.map((tool) => (
                  <ToolCard key={tool.key} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        className="mt-10 text-center"
        style={{ borderTop: "1px solid #E5E7EB", paddingTop: "32px" }}
      >
        <p style={{ fontSize: "13px", color: "#6B7280" }}>
          {t("tools.footer.note")}
        </p>
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

  const moneyItems = [
    {
      id: "a",
      name: t("help.money.a.name"),
      details: t("help.money.a.details"),
      pill: t("help.money.a.pill"),
      pillTone: "green" as const,
    },
    {
      id: "b",
      name: t("help.money.b.name"),
      details: t("help.money.b.details"),
      pill: t("help.money.b.pill"),
      pillTone: "green" as const,
    },
    {
      id: "c",
      name: t("help.money.c.name"),
      details: t("help.money.c.details"),
      pill: t("help.money.c.pill"),
      pillTone: "blue" as const,
      note: t("help.money.c.note"),
    },
  ];

  const pillClass = (tone: "green" | "blue") =>
    tone === "green"
      ? "bg-healing/15 text-healing"
      : "bg-trust/15 text-trust";

  return (
    <section id="donar" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="max-w-2xl mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl">{t("help.title")}</h2>
        <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed">{t("help.sub")}</p>
      </div>

      {/* Emotional context */}
      <div className="rounded-2xl bg-teal/10 border border-teal/20 p-6 sm:p-7 mb-8">
        <p className="text-[15px] leading-relaxed text-foreground">{t("help.emotional")}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {/* CARD 1: Money */}
        <article className="relative rounded-2xl border border-border bg-card p-6 flex flex-col">
          <span className="absolute left-0 top-8 h-12 w-1 rounded-r bg-teal" aria-hidden />
          <HeartHandshake className="size-6 text-teal" />
          <h3 className="mt-3 font-serif text-[18px] font-bold">{t("help.money.card.title")}</h3>
          <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{t("help.money.card.sub")}</p>

          <Accordion type="single" collapsible className="mt-4">
            {moneyItems.map((it) => (
              <AccordionItem key={it.id} value={it.id} className="border-b last:border-b-0">
                <AccordionTrigger className="py-3 text-left">
                  <span className="flex items-center gap-2 flex-wrap pr-2">
                    <span className="text-[14px] font-medium">{it.name}</span>
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-medium ${pillClass(it.pillTone)}`}>
                      {it.pill}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-[13px] leading-relaxed whitespace-pre-line text-foreground/90">{it.details}</p>
                  {it.note && (
                    <p className="mt-2 text-[12px] text-muted-foreground leading-relaxed">{it.note}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-4 text-[12px] text-muted-foreground leading-relaxed">{t("help.money.verify")}</p>
        </article>

        {/* CARD 2: Supplies */}
        <article className="relative rounded-2xl border border-border bg-card p-6 flex flex-col">
          <span className="absolute left-0 top-8 h-12 w-1 rounded-r bg-coral" aria-hidden />
          <Package className="size-6 text-coral" />
          <h3 className="mt-3 font-serif text-[18px] font-bold">{t("help.supplies.card.title")}</h3>
          <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{t("help.supplies.card.sub")}</p>

          <div className="mt-4 text-[14px] leading-relaxed">
            <p className="font-bold">{t("help.supplies.org")}</p>
            <p>{t("help.supplies.address")}</p>
          </div>

          <Accordion type="single" collapsible className="mt-3">
            <AccordionItem value="needs" className="border-b-0">
              <AccordionTrigger className="py-3 text-left text-[14px] font-medium">
                {t("help.supplies.expand")}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-[13px] leading-relaxed whitespace-pre-line text-foreground/90">
                  {t("help.supplies.needsList")}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>

        {/* CARD 3: People */}
        <article className="relative rounded-2xl border border-border bg-card p-6 flex flex-col">
          <span className="absolute left-0 top-8 h-12 w-1 rounded-r bg-trust" aria-hidden />
          <Users className="size-6 text-trust" />
          <h3 className="mt-3 font-serif text-[18px] font-bold">{t("help.people.card.title")}</h3>
          <p className="mt-1 text-[14px] text-muted-foreground leading-relaxed">{t("help.people.card.sub")}</p>

          <a
            href="https://desaparecidosterremotovenezuela.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-trust text-trust-foreground px-4 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            {t("help.people.btn")}
            <ArrowRight className="size-3.5" />
          </a>

          <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{t("help.people.belowBtn")}</p>
          <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">{t("help.people.crossRoja")}</p>
        </article>
      </div>

      <p className="mt-8 text-[12px] text-muted-foreground text-center leading-relaxed">{t("help.disclaimer")}</p>
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
    <section id="preparacion" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
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
