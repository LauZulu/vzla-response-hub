import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Map as MapIcon,
  Users,
  Camera,
  Search,
  ShieldCheck,
  Radio,
  MessageCircle,
  Globe,
  ArrowRight,
  Mail,
} from "lucide-react";
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
        <Impact />
        <Story />
        <Tools />
        <Push />
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

/* ───────────────────────── Impact ───────────────────────── */

function useTicker(initial: number, min: number, max: number, intervalMs = 3000) {
  const [n, setN] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => v + Math.floor(min + Math.random() * (max - min + 1)));
    }, intervalMs);
    return () => clearInterval(id);
  }, [min, max, intervalMs]);
  return n;
}

function Impact() {
  const { t, fmtNum, fmtMoney } = useI18n();
  const located = useTicker(847, 1, 3, 2800);
  const rescues = useTicker(123, 0, 1, 9000);
  const lives = useTicker(34, 0, 1, 18000);
  const donated = useTicker(47300, 5, 40, 3500);

  const cards = [
    {
      value: fmtNum(located),
      label: t("impact.located"),
      micro: t("impact.locatedMicro"),
      color: "teal",
    },
    {
      value: fmtNum(rescues),
      label: t("impact.rescues"),
      micro: t("impact.rescuesMicro"),
      color: "healing",
    },
    {
      value: fmtNum(lives),
      label: t("impact.lives"),
      micro: t("impact.livesMicro"),
      color: "trust",
    },
    {
      value: fmtMoney(donated),
      label: t("impact.donated"),
      micro: t("impact.donatedMicro"),
      color: "amber",
    },
  ] as const;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl">{t("impact.title")}</h2>
        <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
          <Radio className="size-3 text-teal" /> {t("impact.updated")}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((c, i) => (
          <ImpactCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function ImpactCard({
  value,
  label,
  micro,
  color,
}: {
  value: string;
  label: string;
  micro: string;
  color: "teal" | "healing" | "trust" | "amber";
}) {
  const ring = {
    teal: "before:bg-teal",
    healing: "before:bg-healing",
    trust: "before:bg-trust",
    amber: "before:bg-amber",
  }[color];
  const text = {
    teal: "text-teal",
    healing: "text-healing",
    trust: "text-trust",
    amber: "text-amber",
  }[color];
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 ${ring}`}
    >
      <div className={`tnum font-serif text-3xl sm:text-4xl ${text}`}>{value}</div>
      <div className="mt-2 text-sm font-medium">{label}</div>
      <div className="mt-1 text-xs text-muted-foreground">{micro}</div>
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
    icon: Map,
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
] as const;

const COLOR_CLASSES: Record<string, { bar: string; icon: string; btn: string }> = {
  coral: { bar: "bg-coral", icon: "text-coral", btn: "bg-coral text-coral-foreground" },
  teal: { bar: "bg-teal", icon: "text-teal", btn: "bg-teal text-teal-foreground" },
  trust: { bar: "bg-trust", icon: "text-trust", btn: "bg-trust text-trust-foreground" },
  healing: { bar: "bg-healing", icon: "text-healing", btn: "bg-healing text-healing-foreground" },
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
        <a
          href="mailto:hub@yalvenezuela.org"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition"
        >
          <Mail className="size-3.5" />
          {t("tools.contribute.cta")}
        </a>
      </div>
    </section>
  );
}

/* ───────────────────────── Social Proof ───────────────────────── */

const HELPERS = [
  { q: "social.q1", n: "social.n1", hrs: 2, hue: 12 },
  { q: "social.q2", n: "social.n2", hrs: 4, hue: 170 },
  { q: "social.q3", n: "social.n3", hrs: 6, hue: 250 },
  { q: "social.q4", n: "social.n4", hrs: 1, hue: 90 },
];

function SocialProof() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % HELPERS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="font-serif text-2xl sm:text-3xl mb-8">{t("social.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 min-h-[200px]">
            {HELPERS.map((h, i) => (
              <figure
                key={i}
                className={`transition-opacity duration-500 ${i === active ? "opacity-100" : "hidden opacity-0"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Avatar hue={h.hue} label={t(h.n)} />
                  <div>
                    <div className="text-sm font-medium">{t(h.n)}</div>
                    <div className="text-xs text-muted-foreground">
                      {t("social.ago", { n: h.hrs })}
                    </div>
                  </div>
                </div>
                <blockquote className="font-serif text-lg leading-relaxed">
                  "{t(h.q)}"
                </blockquote>
              </figure>
            ))}
            <div className="mt-6 flex gap-1.5">
              {HELPERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Story ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${
                    i === active ? "w-8 bg-foreground" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {HELPERS.map((h, i) => (
              <li
                key={i}
                className="rounded-xl border border-border bg-card p-4 flex items-center gap-3"
              >
                <Avatar hue={h.hue} label={t(h.n)} small />
                <div className="min-w-0">
                  <div className="text-xs font-medium truncate">{t(h.n)}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {t("social.ago", { n: h.hrs })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Avatar({ hue, label, small = false }: { hue: number; label: string; small?: boolean }) {
  const initials = label
    .split(/[\s,]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  const size = small ? "size-9 text-xs" : "size-12 text-sm";
  return (
    <div
      className={`shrink-0 ${size} rounded-full grid place-items-center font-medium text-white`}
      style={{
        background: `linear-gradient(135deg, oklch(0.65 0.14 ${hue}), oklch(0.45 0.16 ${
          (hue + 40) % 360
        }))`,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

/* ───────────────────────── Push ───────────────────────── */

function Push() {
  const { t } = useI18n();
  const challenges = ["push.c1", "push.c2", "push.c3", "push.c4"];
  const buys = ["push.b1", "push.b2", "push.b3", "push.b4"];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <h2 className="font-serif text-2xl sm:text-3xl max-w-2xl mb-10">{t("push.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-coral font-medium">
            <span className="size-1.5 rounded-full bg-coral" /> {t("push.challenge")}
          </div>
          <ul className="mt-5 space-y-3">
            {challenges.map((k) => (
              <li key={k} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-2 size-1 rounded-full bg-coral/70 shrink-0" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-teal font-medium">
            <span className="size-1.5 rounded-full bg-teal" /> {t("push.buys")}
          </div>
          <ul className="mt-5 space-y-3">
            {buys.map((k) => (
              <li key={k} className="flex gap-3 text-[15px] leading-relaxed">
                <span className="mt-2 size-1 rounded-full bg-teal/70 shrink-0" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["trust.l1", "trust.l2", "trust.l3"].map((k) => (
            <a
              key={k}
              href="#"
              className="block rounded-xl border border-border bg-card p-5 text-sm hover:border-foreground/40 transition"
            >
              {t(k)}
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowRight className="size-3" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span>{t("trust.audit")}</span>
          <a href="#" className="underline-offset-2 hover:underline">
            {t("trust.code")}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-teal animate-pulse" />
            {t("trust.updated")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="relative inline-flex size-2.5">
            <span className="absolute inset-0 rounded-full bg-coral animate-ping opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-coral" />
          </span>
          <span className="font-serif">{t("nav.logo")}</span>
        </div>
        <div className="text-muted-foreground text-xs">{t("footer.rights")}</div>
        <div className="text-muted-foreground text-xs">{t("footer.contact")}</div>
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
