import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = Record<string, string>;

const es: Dict = {
  "nav.convenedBy":
    "Iniciativa coordinada por Young AI Leaders Bogotá Hub en alianza con comunidades tech regionales. Parte de la red UN AI for Good e ITU.",
  "footer.creditPrefix": "Plataforma creada por ",
  "footer.creditName": "Laura Zuluaga",
  "footer.join":
    "Comunidades y organizaciones tech que quieran sumarse: l.zuluaga@youngaileadershub.org",
  "nav.logo": "VZLA Response Hub",
  "lang.toggle": "ES | EN",

  "hero.kicker": "Terremoto Venezuela · 24 jun 2026 · 6:04 PM",
  "hero.headline": "253+ personas fallecidas. 4.300+ heridas. 157+ desaparecidas. AHORA",
  "hero.live": "En este segundo, hay personas siendo localizadas",
  "hero.sub1": "Construimos herramientas de IA para encontrarlos.",
  "hero.sub2": "Tú puedes ayudar.",
  "hero.sub3": "Elige abajo.",
  "hero.cta": "Ver cómo ayudar",

  "impact.title": "Cifras de la emergencia",
  "impact.sub": "Fuentes oficiales. Datos pueden cambiar conforme avanza la respuesta.",
  "impact.deaths": "Fallecidos confirmados",
  "impact.injured": "Personas heridas",
  "impact.missing": "Personas desaparecidas",
  "impact.source": "Cifras reportadas por el gobierno de Venezuela.",


  "story.body":
    "El 24 de junio de 2026, a las 6:04 PM, la tierra tembló. En 39 segundos, dos terremotos devastaron la costa norte de Venezuela. Edificios cayeron. Familias se separaron.\n\nProbablemente viste las noticias y sentiste que no podías hacer nada. Nosotros también.\n\nEntonces comunidades tech de toda la región se activaron. En horas, construyeron herramientas reales: mapas de daños, registros de desaparecidos, sistemas de búsqueda con inteligencia artificial. Hechas por ciudadanos, para ciudadanos. Funcionando ahora mismo.\n\nTú también puedes ser parte.",

  "tools.title": "Soluciones activas en este momento",
  "tools.sub":
    "Herramientas construidas por comunidades tech. Funcionando ahora. Usa una. Si construiste otra, contáctanos.",

  "tool.map.title": "Mapa de daños estructurales",
  "tool.map.desc":
    "Seguimiento en tiempo real de edificios afectados por el terremoto. Ciudadanos reportan daños clasificados por colapso total, daño severo y daño parcial. Rescatistas lo usan para priorizar operaciones.",
  "tool.map.cta": "Acceder al mapa",

  "tool.missing.title": "Reporte de personas desaparecidas",
  "tool.missing.desc":
    "Plataforma ciudadana para reportar y buscar personas desaparecidas. Los usuarios crean reportes con nombre, ubicación y foto. Cuando alguien es localizado, se actualiza el estado en tiempo real.",
  "tool.missing.cta": "Buscar o reportar",

  "tool.vision.title": "Identificación visual con IA",
  "tool.vision.desc":
    "Herramienta de inteligencia artificial que facilita la identificación de personas a partir de imágenes compartidas en redes sociales y grupos de mensajería durante la emergencia.",
  "tool.vision.cta": "Usar herramienta",

  "tool.search.title": "Venezuela te busca",
  "tool.search.desc":
    "Registro público de personas desaparecidas tras el terremoto. Permite registrar y buscar personas con foto, nombre, edad y ubicación. Más de 22.000 personas registradas hasta ahora.",
  "tool.search.cta": "Buscar o registrar",

  "tool.hospitals.title": "Hospitales en Venezuela",
  "tool.hospitals.desc":
    "Digitaliza las listas de personas ingresadas en hospitales y centros de salud. Busca por nombre o cédula para saber si tu familiar está siendo atendido y en qué centro se encuentra.",
  "tool.hospitals.cta": "Buscar en hospitales",

  "tool.pets.title": "Mascotas perdidas y encontradas",
  "tool.pets.desc":
    "Plataforma de emergencia para reportar y buscar mascotas extraviadas tras el terremoto. Publica sin registro. Más de 800 reportes activos entre perdidos y encontrados.",
  "tool.pets.cta": "Buscar o reportar mascota",

  "tool.triage.title": "Pre-triage estructural",
  "tool.triage.desc":
    "Evaluación rápida de daños estructurales basada en el Boletín 61 de la Academia Nacional de Ingeniería. Identifica riesgo de colapso. Útil para ingenieros, inspectores y ciudadanos.",
  "tool.triage.cta": "Evaluar estructura",



  "tools.disclaimer": "Estas herramientas son independientes, ciudadanas y no partidistas.",
  "tools.contribute.title": "¿Tu comunidad construyó una herramienta para esta emergencia?",
  "tools.contribute.sub": "Contáctanos para incluirla aquí o para ser parte de la comunidad AI for Good.",
  "tools.contribute.cta": "Escríbenos",
  "tools.contribute.whatsapp": "Conocer Young AI Leaders",
  "tools.contribute.coord": "Unirse a comunidad AI for Good LatAm",

  "social.title": "Quiénes ya están ayudando",
  "social.ago": "hace {n} horas",

  "social.q1": "No sé si mi prima está viva. Esta herramienta me ayudó a encontrar a su hermano. Vale cada minuto.",
  "social.n1": "María, Miami · donó $50",
  "social.q2": "Soy médico en Caracas. La coordinación de pacientes nos ahorró horas críticas.",
  "social.n2": "Dr. Rivas, Caracas · voluntario",
  "social.q3": "Mandé el link a mi familia en Madrid. En una hora donaron 12 personas.",
  "social.n3": "Andrea, Madrid · embajadora",
  "social.q4": "Recibí la alerta. Llegamos al edificio en 22 minutos. Sacamos a tres personas.",
  "social.n4": "Equipo Bomberos Vargas · rescate",

  "donate.title": "Tu donación sirve para",
  "donate.body": "Insumos médicos, agua potable, alimentos no perecederos, materiales de rescate y equipamiento para voluntarios en terreno. Cada aporte se destina directamente a las comunidades afectadas.",
  "donate.cta": "Enlace de donación próximamente",
  "donate.note": "Mientras habilitamos el canal, escríbenos a",

  "emergency.title": "Información oficial y números de emergencia",
  "emergency.subtitle": "Líneas verificadas. Algunos números pueden estar congestionados.",
  "emergency.numbers": "Números de emergencia",
  "emergency.channels": "Canales oficiales",
  "emergency.disclaimer":
    "Verifica siempre la información antes de difundirla. Esta plataforma no reemplaza a las autoridades oficiales.",

  "trust.title": "Esto es real.",
  "trust.body":
    "Este hub centraliza herramientas construidas por comunidades tech independientes en respuesta al terremoto del 24 de junio de 2026.",

  "cta.button": "Donar / Ayudar / Compartir",
  "cta.rot1": "200+ personas siguen desaparecidas",
  "cta.rot2": "Tu ayuda importa. Ahora mismo.",
  "cta.rot3": "34 vidas salvadas hasta ahora. Vamos por 50.",

  "footer.contact": "WhatsApp · Email · Telegram",
  "footer.whatsapp": "Grupo de coordinación en WhatsApp",
  "footer.rights": "Sin datos vendidos · Código abierto · Iniciativa ciudadana",

  "prep.title": "Prepárate. La prevención salva vidas.",
  "prep.sub": "Información esencial verificada. Compártela con tu familia.",
  "prep.during.title": "Durante un terremoto",
  "prep.during.body":
    "Mantén la calma. Aléjate de ventanas, espejos y objetos que puedan caer. Si estás dentro de un edificio, ubícate bajo una mesa resistente o junto a una columna. Protege tu cabeza y cuello con los brazos. No uses ascensores. No salgas corriendo a la calle durante el movimiento, la mayoría de lesiones ocurren por objetos que caen de fachadas. Si estás en la calle, aléjate de edificios, postes y cables eléctricos. Si estás en un vehículo, detente en un lugar abierto lejos de puentes y estructuras elevadas.",
  "prep.kit.title": "Kit de emergencia esencial",
  "prep.kit.body":
    "Agua potable: mínimo 3 litros por persona por día, para al menos 3 días. Alimentos no perecederos: enlatados, barras energéticas, frutos secos. Botiquín: gasas, alcohol, vendas, analgésicos, medicamentos personales. Linterna con baterías extra. Radio portátil a pilas. Silbato para pedir ayuda si quedas atrapado. Documentos importantes en bolsa impermeable: cédula, pasaporte, pólizas. Cargador portátil para celular. Dinero en efectivo en billetes pequeños. Cobija térmica o manta. Copia de llaves. Mascarilla contra polvo.",
  "prep.after.title": "Después del terremoto",
  "prep.after.body":
    "Prepárate para réplicas, pueden ocurrir horas o días después. Revisa si hay fugas de gas o daños en tuberías, si hueles gas no enciendas fósforos ni electricidad. Aléjate de edificios dañados aunque parezcan estables. No entres a estructuras con grietas visibles. Si quedaste atrapado, golpea una tubería o pared para que te localicen, no grites para conservar energía. Usa mensajes de texto en vez de llamadas, las líneas se saturan. Reúnete con tu familia en el punto de encuentro previamente acordado. Escucha solo fuentes oficiales, no difundas rumores.",
  "prep.source":
    "Fuente: Protocolos de Protección Civil y Cruz Roja Internacional. Comparte esta información con tu familia y vecinos.",
  "prep.share": "Compartir esta guía por WhatsApp",
  "prep.shareMsg":
    "Información esencial sobre terremotos: qué hacer durante y después, y qué debe tener tu kit de emergencia.",
};

const en: Dict = {
  "nav.convenedBy":
    "Initiative coordinated by Young AI Leaders Bogotá Hub in alliance with regional tech communities. Part of the UN AI for Good and ITU network.",
  "footer.creditPrefix": "Platform created by ",
  "footer.creditName": "Laura Zuluaga",
  "footer.join":
    "Tech communities and organizations that want to join: l.zuluaga@youngaileadershub.org",
  "nav.logo": "VZLA Response Hub",
  "lang.toggle": "ES | EN",

  "hero.kicker": "Venezuela Earthquake · Jun 24, 2026 · 6:04 PM",
  "hero.headline": "253+ people deceased. 4,300+ injured. 157+ missing. RIGHT NOW",
  "hero.live": "This second, people are being located",
  "hero.sub1": "We built AI tools to find them.",
  "hero.sub2": "You can help.",
  "hero.sub3": "Choose below.",
  "hero.cta": "See how to help",

  "impact.title": "Emergency figures",
  "impact.sub": "Official sources. Numbers may change as the response evolves.",
  "impact.deaths": "Confirmed deaths",
  "impact.injured": "People injured",
  "impact.missing": "People missing",
  "impact.source": "Figures reported by the Venezuelan government.",


  "story.body":
    "On June 24, 2026, at 6:04 PM, the earth shook. In 39 seconds, two earthquakes devastated Venezuela's northern coast. Buildings collapsed. Families separated.\n\nYou probably saw the news and felt like there was nothing you could do. We felt the same.\n\nThen tech communities across the region mobilized. In hours, they built real tools: damage maps, missing-person registries, AI-powered search systems. Made by citizens, for citizens. Running right now.\n\nYou can be part of it too.",

  "tools.title": "Active solutions right now",
  "tools.sub":
    "Tools built by tech communities. Live now. Use one. If you built another, contact us.",

  "tool.map.title": "Structural damage map",
  "tool.map.desc":
    "Real-time tracking of buildings affected by the earthquake. Citizens report damage classified by total collapse, severe damage, and partial damage. Rescue teams use it to prioritize operations.",
  "tool.map.cta": "Open the map",

  "tool.missing.title": "Missing persons reports",
  "tool.missing.desc":
    "Citizen platform to report and search for missing people. Users create reports with name, location, and photo. When someone is found, the status updates in real time.",
  "tool.missing.cta": "Search or report",

  "tool.vision.title": "AI-powered visual identification",
  "tool.vision.desc":
    "AI tool that helps identify people from images shared on social media and messaging groups during the emergency.",
  "tool.vision.cta": "Use the tool",

  "tool.search.title": "Venezuela te busca",
  "tool.search.desc":
    "Public registry of people missing after the earthquake. Register or search for people with photo, name, age, and location. Over 22,000 people registered so far.",
  "tool.search.cta": "Search or register",

  "tool.hospitals.title": "Hospitals in Venezuela",
  "tool.hospitals.desc":
    "Digitizes the lists of people admitted to hospitals and health centers. Search by name or ID to find out if your relative is being treated and at which center.",
  "tool.hospitals.cta": "Search hospitals",

  "tool.pets.title": "Lost and found pets",
  "tool.pets.desc":
    "Emergency platform to report and search for pets lost after the earthquake. Post without registering. Over 800 active reports between lost and found.",
  "tool.pets.cta": "Search or report a pet",

  "tool.triage.title": "Structural pre-triage",
  "tool.triage.desc":
    "Rapid structural damage assessment based on Bulletin 61 of the National Academy of Engineering. Identifies collapse risk. Useful for engineers, inspectors and citizens.",
  "tool.triage.cta": "Assess a structure",



  "tools.disclaimer": "These tools are independent, citizen-led, and nonpartisan.",
  "tools.contribute.title": "Did your community build a tool for this emergency?",
  "tools.contribute.sub": "Contact us to include it here or to be part of the AI for Good community.",
  "tools.contribute.cta": "Write to us",
  "tools.contribute.whatsapp": "Discover Young AI Leaders",
  "tools.contribute.coord": "Join AI for Good LatAm community",

  "social.title": "Who's already helping",
  "social.ago": "{n} hours ago",

  "social.q1": "I don't know if my cousin is alive. This tool helped me find her brother. Worth every minute.",
  "social.n1": "Maria, Miami · donated $50",
  "social.q2": "I'm a doctor in Caracas. Patient coordination saved us critical hours.",
  "social.n2": "Dr. Rivas, Caracas · volunteer",
  "social.q3": "I sent the link to my family in Madrid. Within an hour, 12 people donated.",
  "social.n3": "Andrea, Madrid · ambassador",
  "social.q4": "Got the alert. We reached the building in 22 minutes. Pulled out three people.",
  "social.n4": "Vargas Fire Team · rescue",

  "donate.title": "Your donation goes to",
  "donate.body": "Medical supplies, drinking water, non-perishable food, rescue materials and equipment for volunteers on the ground. Every contribution goes directly to affected communities.",
  "donate.cta": "Donation link coming soon",
  "donate.note": "While we enable the channel, write to us at",

  "emergency.title": "Official information and emergency numbers",
  "emergency.subtitle": "Verified lines. Some numbers may be congested.",
  "emergency.numbers": "Emergency numbers",
  "emergency.channels": "Official channels",
  "emergency.disclaimer":
    "Always verify information before sharing. This platform does not replace official authorities.",

  "trust.title": "This is real.",
  "trust.body":
    "This hub centralizes tools built by independent tech communities in response to the June 24, 2026 earthquake.",

  "cta.button": "Donate / Help / Share",
  "cta.rot1": "200+ people are still missing",
  "cta.rot2": "Your help matters. Right now.",
  "cta.rot3": "34 lives saved so far. Let's make it 50.",

  "footer.contact": "WhatsApp · Email · Telegram",
  "footer.whatsapp": "WhatsApp coordination group",
  "footer.rights": "No data sold · Open source · Citizen-led initiative",

  "prep.title": "Be ready. Prevention saves lives.",
  "prep.sub": "Essential verified information. Share it with your family.",
  "prep.during.title": "During an earthquake",
  "prep.during.body":
    "Stay calm. Move away from windows, mirrors, and objects that can fall. If you're indoors, get under a sturdy table or next to a column. Protect your head and neck with your arms. Do not use elevators. Do not run outside during the shaking — most injuries come from objects falling from facades. If you're outdoors, move away from buildings, poles, and power lines. If you're in a vehicle, stop in an open area away from bridges and elevated structures.",
  "prep.kit.title": "Essential emergency kit",
  "prep.kit.body":
    "Drinking water: at least 3 liters per person per day, for at least 3 days. Non-perishable food: canned goods, energy bars, nuts. First-aid kit: gauze, alcohol, bandages, painkillers, personal medication. Flashlight with spare batteries. Battery-powered portable radio. Whistle to call for help if trapped. Important documents in a waterproof bag: ID, passport, policies. Portable phone charger. Cash in small bills. Thermal blanket. Spare keys. Dust mask.",
  "prep.after.title": "After the earthquake",
  "prep.after.body":
    "Be ready for aftershocks — they can occur hours or days later. Check for gas leaks or pipe damage; if you smell gas do not light matches or switch on electricity. Stay away from damaged buildings even if they look stable. Do not enter structures with visible cracks. If trapped, tap on a pipe or wall so rescuers can locate you — don't shout, to conserve energy. Use text messages instead of calls, lines get saturated. Meet your family at the previously agreed meeting point. Listen only to official sources, do not spread rumors.",
  "prep.source":
    "Source: Civil Protection and International Red Cross protocols. Share this information with your family and neighbors.",
  "prep.share": "Share this guide on WhatsApp",
  "prep.shareMsg":
    "Essential earthquake information: what to do during and after, and what your emergency kit should include.",
};

const dicts: Record<Lang, Dict> = { es, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string, vars?: Record<string, string | number>) => string;
  fmtNum: (n: number) => string;
  fmtMoney: (n: number) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
      return;
    }
    if (typeof navigator !== "undefined" && navigator.language.startsWith("en")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string, vars?: Record<string, string | number>) => {
    let v = dicts[lang][k] ?? k;
    if (vars) for (const [key, val] of Object.entries(vars)) v = v.replace(`{${key}}`, String(val));
    return v;
  };

  const locale = lang === "es" ? "es-VE" : "en-US";
  const fmtNum = (n: number) => new Intl.NumberFormat(locale).format(n);
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, fmtNum, fmtMoney }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
