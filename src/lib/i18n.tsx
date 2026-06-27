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
  "hero.headline": "920+ personas fallecidas. 4.500+ heridas. 50.000+ reportadas como desaparecidas. 172 personas atrapadas bajo escombros. 383 edificios afectados. AHORA",
  "hero.live": "En este segundo, hay personas siendo localizadas",
  "hero.sub1": "Comunidades tech construyeron herramientas reales.",
  "hero.sub2": "Tú puedes ayudar.",
  "hero.sub3": "",
  "hero.cta": "Ver cómo ayudar",
  "hero.cta.tools": "Ver soluciones activas",
  "hero.cta.donate": "Donar ahora",
  "hero.cta.prepare": "Qué hacer ante un sismo",

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
  "tools.search.placeholder": "Buscar por palabra clave (ej: desaparecidos, hospitales, mapa...)",
  "tools.search.empty": "No se encontraron soluciones con ese término.",
  "tools.counter": "{n} herramientas activas · Actualizado {date}",

  "tools.cat.people": "Búsqueda de personas",
  "tools.cat.maps": "Mapas y daños estructurales",
  "tools.cat.comms": "Recursos y comunicación",
  "tools.cat.donations": "Donaciones verificadas",
  "tools.cat.build": "Construye con nosotros",

  "tools.intro.donations":
    "Verifica siempre que la campaña sea legítima. La donación económica suele ser la forma más eficaz de ayudar — permite comprar exactamente lo que cada zona necesita en cada momento.",
  "tools.intro.build":
    "Si tienes habilidades técnicas, puedes construir herramientas que salven vidas este fin de semana.",

  "tools.badge.verified": "Verificado",
  "tools.badge.community": "Comunidad",
  "tools.badge.new": "Nuevo",

  "tools.footer.note":
    "Estas herramientas son independientes, ciudadanas y no partidistas. ¿Construiste algo que pueda ayudar? Escríbenos a l.zuluaga@youngaileadershub.org",

  "tool.map.title": "Mapa de daños estructurales",
  "tool.map.desc":
    "Seguimiento en tiempo real de edificios afectados por el terremoto. Ciudadanos reportan daños clasificados por colapso total, daño severo y daño parcial. Rescatistas lo usan para priorizar operaciones.",
  "tool.map.cta": "Ver mapa",

  "tool.missing.title": "Reporte de personas desaparecidas",
  "tool.missing.desc":
    "Plataforma ciudadana para reportar y buscar personas desaparecidas. Los usuarios crean reportes con nombre, ubicación y foto. Cuando alguien es localizado, se actualiza el estado en tiempo real.",
  "tool.missing.cta": "Buscar persona",

  "tool.vision.title": "Identificación visual con IA",
  "tool.vision.desc":
    "Sube una foto de alguien que buscas o que encontraste. La IA compara con imágenes publicadas en redes y grupos de mensajería para facilitar la identificación.",
  "tool.vision.cta": "Identificar persona",

  "tool.search.title": "Venezuela te busca",
  "tool.search.desc":
    "Registro público de personas desaparecidas tras el terremoto. Permite registrar y buscar personas con foto, nombre, edad y ubicación. Más de 22.000 personas registradas hasta ahora.",
  "tool.search.cta": "Buscar persona",

  "tool.hospitals.title": "Hospitales en Venezuela",
  "tool.hospitals.desc":
    "Busca si tu familiar está ingresado en un hospital. Digitaliza listas de pacientes por nombre o cédula. Cubre centros de salud en las zonas afectadas.",
  "tool.hospitals.cta": "Buscar en hospitales",

  "tool.pets.title": "Mascotas perdidas y encontradas",
  "tool.pets.desc":
    "Reporta o busca mascotas extraviadas tras el terremoto. Sin registro. Fotos y ubicación. Más de 800 reportes activos.",
  "tool.pets.cta": "Buscar o reportar mascota",

  "tool.triage.title": "Pre-triage estructural",
  "tool.triage.desc":
    "Responde un formulario sobre el estado de tu edificio y recibe una evaluación preliminar de riesgo de colapso. Basado en protocolo de ingeniería venezolana (Boletín 61 ANIH).",
  "tool.triage.cta": "Evaluar estructura",

  "tool.shelters.title": "Centros de acopio y refugios",
  "tool.shelters.desc":
    "Mapa para encontrar o registrar puntos de acopio y refugios activos en Venezuela. Verificado por ciudadanos.",
  "tool.shelters.cta": "Ver mapa o reportar",



  "tool.redayuda.title": "Red Ayuda Venezuela",
  "tool.redayuda.desc":
    "Avisa que estás a salvo, busca personas y coordina ayuda entre comunidades. Funciona como red ciudadana descentralizada.",
  "tool.redayuda.cta": "Entrar a la red",

  "tool.sosvzla.title": "SOS Venezuela 2026",
  "tool.sosvzla.desc":
    "Mapa colaborativo en tiempo real con reportes de daños, colapsos, refugios y primeros auxilios. Datos sísmicos en vivo desde USGS. Tu ubicación nunca se comparte públicamente.",
  "tool.sosvzla.cta": "Ver mapa en vivo",

  "tool.yummy.title": "Yummy SOS",
  "tool.yummy.desc":
    "Reporta daños estructurales con fotos y GPS. Viajes gratuitos a hospitales y clínicas en Caracas. Red de conductores activada sin comisión como corredor humanitario durante la emergencia.",
  "tool.yummy.cta": "Reportar o pedir viaje",

  "tool.recursos.title": "Recursos Verificados",
  "tool.recursos.desc":
    "Hub con líneas de emergencia, guías de supervivencia, plataformas de búsqueda y canales de donación — todo verificado y actualizado desde el 25 de junio.",
  "tool.recursos.cta": "Ver recursos",

  "tool.talk360.title": "Talk360 — Llamar a Venezuela",
  "tool.talk360.desc":
    "App para llamar a Venezuela desde el exterior sin roaming ni costos internacionales. Recomendada por la diáspora venezolana como una de las pocas vías de comunicación directa funcionales.",
  "tool.talk360.cta": "Descargar app",

  "tool.globalgiving.title": "GlobalGiving",
  "tool.globalgiving.desc":
    "Fondo verificado que canaliza donaciones directamente a organizaciones locales en Venezuela para atención médica, refugio, agua y alimentos.",
  "tool.globalgiving.cta": "Donar",

  "tool.caritas.title": "Cáritas Venezuela",
  "tool.caritas.desc":
    "Red humanitaria presente en todo el territorio venezolano. Recibe donaciones para atención directa a familias damnificadas en las zonas más afectadas.",
  "tool.caritas.cta": "Donar",

  "tool.wck.title": "World Central Kitchen",
  "tool.wck.desc":
    "Equipo desplegado en Venezuela proporcionando comidas calientes a comunidades afectadas y equipos de rescate. Fundada por el chef José Andrés.",
  "tool.wck.cta": "Donar",

  "tool.entrepanas.title": "entrepanas — Trazabilidad de donaciones",
  "tool.entrepanas.desc":
    "Plataforma que muestra a dónde llega realmente tu ayuda. Los destinatarios verificados publican recibos, facturas y fotos de lo que se compró con cada donación. entrepanas nunca toca los fondos — van directo al destinatario. Construida durante el Build for Venezuela Hackathon.",
  "tool.entrepanas.cta": "Explorar destinatarios",


  "tool.code4vzla.title": "Code for Venezuela",
  "tool.code4vzla.desc":
    "ONG que conecta tecnólogos con las necesidades más urgentes de Venezuela. Años de experiencia construyendo plataformas de datos para respuesta humanitaria.",
  "tool.code4vzla.cta": "Ver proyectos",

  "tool.build4vzla.title": "Build for Venezuela — Hackathon",
  "tool.build4vzla.desc":
    "Hackathon humanitaria online, 26 al 28 de junio. Cualquier persona que pueda construir puede contribuir. Sin importar stack ni nivel.",
  "tool.build4vzla.cta": "Unirme a la hackathon",

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

  "help.title": "Cómo ayudar",
  "help.sub": "Cada acción cuenta. Elige cómo quieres contribuir.",
  "help.emotional": "Hay familias durmiendo en la calle. Hospitales sin insumos. Personas que llevan 48 horas sin saber si su familia está viva. Lo que dones hoy llega directamente a quienes más lo necesitan.",
  "help.money.card.title": "Dona dinero",
  "help.money.card.sub": "Tres canales verificados. Todos emiten soporte o certificado.",
  "help.money.a.name": "Cruz Roja Venezolana",
  "help.money.a.pill": "Verificada",
  "help.money.a.details": "Sociedad Venezolana de la Cruz Roja\nRIF: J-00235031-8\n\nBanco Banesco\nBolívares (VES): 0134-0224-82-2243028658\nDólares (USD): 0134-1736-99-0001006051",
  "help.money.b.name": "Fundación Juntos Se Puede",
  "help.money.b.pill": "Certificado de donación",
  "help.money.b.details": "NIT: 900.918.725-7\n\nBanco de Occidente\nCuenta de Ahorros: 215-83676-8",
  "help.money.c.name": "Dividendo Voluntario para la Comunidad",
  "help.money.c.pill": "Nacional e internacional",
  "help.money.c.details": "Pago móvil (Venezuela):\nBanco Mercantil / J-000579105 / (0412) 332-1367\n\nTransferencia nacional:\nBanco Mercantil\nTitular: Dividendo Voluntario para la Comunidad, A.C.\nCta. Corriente: 0105-0026-5410-2642-4518\nRIF: J-000579105\n\nCuenta en divisas (internacional):\nBanco: Mercantil Banco, S.A.\nSWIFT: MPANPAPA\nNo. de cuenta: 300016658\nTorre de las Américas, Punta Pacífica, Panamá",
  "help.money.c.note": "Mercantil realiza un aporte adicional a cada donación.",
  "help.money.d.name": "Cruz Roja Colombiana",
  "help.money.d.pill": "Donación online",
  "help.money.d.details": "Dona directamente desde la página oficial de la Cruz Roja Colombiana. Pago seguro con tarjeta de crédito o débito.",
  "help.money.d.cta": "Donar ahora",

  "help.money.e.name": "Cáritas Venezuela",
  "help.money.e.pill": "Verificada",
  "help.money.e.details": "Dona directamente en caritasvenezuela.org/donaciones/",
  "help.money.e.cta": "Donar",

  "help.money.f.name": "I Love Venezuela Foundation",
  "help.money.f.pill": "GoFundMe",
  "help.money.f.details": "Campaña verificada de ayuda por terremoto.",
  "help.money.f.cta": "Donar",

  "help.money.g.name": "Banco de Alimentos Bogotá",
  "help.money.g.pill": "Colombia",
  "help.money.g.details": "Bre-B llave: 0091677852\nbancodealimentos.org.co",

  "help.money.h.name": "Dona desde Rappi",
  "help.money.h.pill": "Sin salir de casa",
  "help.money.h.details": "Abre Rappi con dirección en Bogotá.\nEntra a Rappi Turbo.\nBusca el botón de donación o la palabra 'Bono'.\nTu aporte llega al Banco de Alimentos para los afectados.",

  "help.money.verify": "Verifica siempre las cuentas antes de transferir.",
  "help.supplies.card.title": "Dona insumos",
  "help.supplies.card.sub": "Punto de acopio activo en Bogotá.",
  "help.supplies.org": "Fundación Juntos Se Puede",
  "help.supplies.address": "Calle 104 #54-31, Suba, Bogotá",
  "help.supplies.expand": "Ver qué necesitan por categoría",
  "help.supplies.needsList": "",
  "help.supplies.caminantes.sub": "4 puntos en Bogotá. Recepción hasta sábado 4 PM.",
  "help.supplies.caminantes.expand": "Ver ubicaciones",
  "help.supplies.cat.medical.title": "Atención médica",
  "help.supplies.cat.medical.items": "Botiquines, gasas estériles, vendas, guantes desechables, analgésicos, agua oxigenada, suturas, tensiómetros, oxímetros, glucómetros, nebulizadores, suero de rehidratación oral, camillas, cascos, tapabocas.",
  "help.supplies.cat.food.title": "Agua y alimentos",
  "help.supplies.cat.food.items": "Agua potable, alimentos no perecederos, atún, sardinas, arroz, pasta, granos, leche en polvo, barras energéticas, alimentos para bebés, alimento para mascotas.",
  "help.supplies.cat.hygiene.title": "Higiene",
  "help.supplies.cat.hygiene.items": "Jabón, papel higiénico, pañales (bebé y adulto), toallas húmedas, cepillos y crema dental, alcohol, gel antibacterial, detergente, guantes de limpieza.",
  "help.supplies.cat.shelter.title": "Abrigo y refugio",
  "help.supplies.cat.shelter.items": "Cobijas, carpas, colchonetas, lonas plásticas, sacos de dormir, cuerdas, frazadas.",
  "help.supplies.cat.clothing.title": "Ropa",
  "help.supplies.cat.clothing.items": "Ropa en buen estado y limpia, para todas las edades. Abrigos, cobijas, calzado.",

  "help.supplies.moreBogota.title": "Más puntos en Bogotá",
  "help.supplies.otherCities.title": "Otras ciudades de Colombia",
  "help.supplies.international.title": "Centros de acopio internacionales",
  "help.supplies.pets.title": "Donación para mascotas (Puntos Laika Bogotá)",
  "help.supplies.pets.needs": "Qué reciben: alimento húmedo y seco (perros y gatos), arena sanitaria, medicamentos básicos, mantas, guacales, collares, platitos.",
  "help.supplies.pets.also": "También reciben en: CLINIHOGAR (Calle 50 #14-34 Teusaquillo) y La Panadería Rusa (Chapinero, Zona Rosa).",

  "help.people.card.title": "Busca o reporta personas",
  "help.people.card.sub": "Si perdiste contacto con alguien, búscalo aquí. Si encontraste a alguien, repórtalo.",
  "help.people.btn": "Buscar persona",
  "help.people.belowBtn": "Gratis. Toma un minuto. Si ya sabes que alguien está bien, actualiza su estado para dar tranquilidad a otros.",
  "help.people.crossRoja": "Cruz Roja también ofrece un servicio gratuito y confidencial de Restablecimiento del Contacto Familiar.",
  "help.disclaimer": "Esta plataforma no gestiona dinero. Conectamos personas con canales verificados por la comunidad.",


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
  "cta.rot1": "50.000+ personas reportadas como desaparecidas",
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

  // Capa 1
  "quick.title": "¿Qué necesitas ahora?",
  "quick.sub": "Selecciona tu situación. Te llevamos a la mejor herramienta disponible.",
  "quick.search.label": "Busco a alguien",
  "quick.search.note": "Cruz Roja Internacional · Servicio oficial de reunificación familiar activo en 10 países",
  "quick.search.sub": "También: desaparecidosterremotovenezuela.com (40.000+ reportes ciudadanos)",
  "quick.shelter.label": "Necesito refugio",
  "quick.shelter.note": "Mapa de refugios verificados",
  "quick.damage.label": "Reportar daños",
  "quick.damage.note": "Equipo verificado · Foto + GPS",
  "quick.damage.sub": "Dentro de Venezuela: usa VenApp (app oficial del gobierno)",
  "quick.donate.label": "Quiero donar",
  "quick.donate.note": "Cruz Roja Colombiana · Donacion directa online · Pago seguro",
  "quick.donate.sub": "También: GlobalGiving, Cáritas, World Central Kitchen",
  "quick.emergency": "¿Tienes una emergencia médica? Llama al 0800-0-000-911",

  // Capa 2 (reemplaza títulos previos)
  "tools.title2": "Todas las herramientas disponibles",
  "tools.sub2": "Organizadas por categoría. Algunas hacen cosas similares — te indicamos cuál recomendamos y por qué.",
  "tools.cat.shelters": "Centros de acopio y refugios",

  "tools.subgroup.people.title": "Buscar personas desaparecidas",
  "tools.subgroup.people.note": "Estas herramientas tienen funciones similares. Recomendamos Venezuela te busca por volumen de reportes (22.000+). Las demás son alternativas válidas.",
  "tools.subgroup.maps.title": "Reportar y ver daños estructurales",
  "tools.subgroup.maps.note": "Yummy SOS permite reporte con foto+GPS y ofrece viajes gratuitos a hospitales. SOS Venezuela 2026 tiene datos sísmicos en vivo.",

  "tools.trust.verified": "Equipo verificado",
  "tools.trust.community": "Comunidad",
  "tools.trust.unverified": "Sin verificar",
  "tools.recommended": "Recomendada",
  "tools.featured": "Destacada",

  "a11y.newTab": "se abre en una pestaña nueva",

  "tools.updated.active": "Activo · actualizado hoy",
  "tools.updated.recent": "Última revisión: {date}",
  "tools.updated.inactive": "Sin actividad reciente",

  "tools.summary": "{n} herramientas activas · Última actualización: {datetime} · Estas herramientas son independientes, ciudadanas y no partidistas.",

  // Nuevo tool
  "tool.vresiste.title": "Venezuela Resiste",
  "tool.vresiste.desc": "Vista única con daños, refugios y necesidades reportadas por ciudadanos. Navegable por zona y tipo de emergencia.",
  "tool.vresiste.cta": "Abrir plataforma",

  "tool.sismoayuda.title": "SismoAyuda VE — Evaluación estructural",
  "tool.sismoayuda.desc":
    "Sube fotos de los daños de tu edificio y un ingeniero civil voluntario las revisa remotamente. Recibes un informe de habitabilidad por email con clasificación y recomendaciones. Gratis, sin registro, con estándares técnicos ATC-20 y EMS-98.",
  "tool.sismoayuda.cta": "Reportar mi edificación",

  "tool.sosreservadoc.title": "SOS ReservaDoc — Teleconsultas médicas",
  "tool.sosreservadoc.desc":
    "Plataforma de teleconsultas gratuitas para descongestionar hospitales en Venezuela. Si eres médico puedes registrarte para atender pacientes remotamente desde cualquier país. Impulsada por Andrés Bilbao, cofundador de Rappi.",
  "tool.sosreservadoc.cta": "Atender o consultar",

  "tool.filosos.title": "Red de ayuda comunitaria",
  "tool.filosos.desc":
    "Pide o ofrece ayuda cerca de ti. Reporta emergencias, niños solos y necesidades de insumos por zona. Red ciudadana en tiempo real.",
  "tool.filosos.cta": "Pedir u ofrecer ayuda",

  "tool.ayudahumvzla.title": "Ayuda humanitaria Venezuela",
  "tool.ayudahumvzla.desc":
    "Plataforma centralizada para donar, registrarte como voluntario o registrar tu centro de acopio. Coordina la distribución de insumos y solicitudes de apoyo en un solo lugar.",
  "tool.ayudahumvzla.cta": "Donar o ser voluntario",


  // Capa 3
  "build.layer.title": "¿Tienes habilidades técnicas?",
  "build.layer.sub": "Puedes construir herramientas que salven vidas este fin de semana.",
  "build.layer.cta": "¿Construiste algo que pueda ayudar? Escríbenos a l.zuluaga@youngaileadershub.org y lo agregamos al hub.",
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
  "hero.headline": "920+ people deceased. 4,500+ injured. 50,000+ reported missing. 172 people trapped under rubble. 383 buildings affected. RIGHT NOW",
  "hero.live": "This second, people are being located",
  "hero.sub1": "Tech communities built real tools.",
  "hero.sub2": "You can help.",
  "hero.sub3": "",
  "hero.cta": "See how to help",
  "hero.cta.tools": "See active solutions",
  "hero.cta.donate": "Donate now",
  "hero.cta.prepare": "What to do in an earthquake",

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
  "tools.search.placeholder": "Search by keyword (e.g. missing, hospitals, map...)",
  "tools.search.empty": "No solutions found for that term.",
  "tools.counter": "{n} active tools · Updated {date}",

  "tools.cat.people": "Find people",
  "tools.cat.maps": "Maps & structural damage",
  "tools.cat.comms": "Resources & communication",
  "tools.cat.donations": "Verified donations",
  "tools.cat.build": "Build with us",

  "tools.intro.donations":
    "Always verify the campaign is legitimate. Cash donations are usually the most effective form of help — they let teams buy exactly what each area needs in the moment.",
  "tools.intro.build":
    "If you have technical skills, you can build tools that save lives this weekend.",

  "tools.badge.verified": "Verified",
  "tools.badge.community": "Community",
  "tools.badge.new": "New",

  "tools.footer.note":
    "These tools are independent, citizen-led and nonpartisan. Built something that can help? Write to us at l.zuluaga@youngaileadershub.org",

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

  "tool.shelters.title": "Aid collection points and shelters",
  "tool.shelters.desc":
    "Collaborative map to register and locate aid collection points and shelters available in Venezuela. Report verified locations so help reaches where it is needed.",
  "tool.shelters.cta": "View map or report",

  "tool.ayudave.title": "AyudaVE — Humanitarian aid",
  "tool.ayudave.desc":
    "Platform to donate, sign up as a volunteer, or register your collection center in under a minute. Connects donors, volunteers and aid centers in one place.",
  "tool.ayudave.cta": "Donate or volunteer",


  "tool.redayuda.title": "Red Ayuda Venezuela",
  "tool.redayuda.desc":
    "Mark yourself safe, search for people, and coordinate help between communities. Works as a decentralized citizen network.",
  "tool.redayuda.cta": "Enter the network",

  "tool.sosvzla.title": "SOS Venezuela 2026",
  "tool.sosvzla.desc":
    "Real-time collaborative map with damage, collapse, shelter and first-aid reports. Live seismic data from USGS. Your location is never shared publicly.",
  "tool.sosvzla.cta": "See live map",

  "tool.yummy.title": "Yummy SOS",
  "tool.yummy.desc":
    "Report structural damage with photos and GPS. Free rides to hospitals and clinics in Caracas. Driver network activated with no commission as a humanitarian corridor during the emergency.",
  "tool.yummy.cta": "Report or request a ride",

  "tool.recursos.title": "Verified Resources",
  "tool.recursos.desc":
    "Hub with emergency lines, survival guides, search platforms and donation channels — all verified and updated since June 25.",
  "tool.recursos.cta": "See resources",

  "tool.talk360.title": "Talk360 — Call Venezuela",
  "tool.talk360.desc":
    "App to call Venezuela from abroad without roaming or international fees. Recommended by the Venezuelan diaspora as one of the few working direct communication channels.",
  "tool.talk360.cta": "Download app",

  "tool.globalgiving.title": "GlobalGiving",
  "tool.globalgiving.desc":
    "Verified fund that channels donations directly to local organizations in Venezuela for medical care, shelter, water and food.",
  "tool.globalgiving.cta": "Donate",

  "tool.caritas.title": "Cáritas Venezuela",
  "tool.caritas.desc":
    "Humanitarian network present across Venezuela. Receives donations for direct care of families affected in the most impacted areas.",
  "tool.caritas.cta": "Donate",

  "tool.wck.title": "World Central Kitchen",
  "tool.wck.desc":
    "Team deployed in Venezuela providing hot meals to affected communities and rescue crews. Founded by chef José Andrés.",
  "tool.wck.cta": "Donate",

  "tool.entrepanas.title": "entrepanas — Donation traceability",
  "tool.entrepanas.desc":
    "Platform that shows where your help actually lands. Verified recipients post receipts, invoices and photos of what was bought with each donation. entrepanas never touches the funds — they go straight to the recipient. Built during the Build for Venezuela Hackathon.",
  "tool.entrepanas.cta": "Explore recipients",


  "tool.code4vzla.title": "Code for Venezuela",
  "tool.code4vzla.desc":
    "NGO connecting technologists with Venezuela's most urgent needs. Years of experience building data platforms for humanitarian response.",
  "tool.code4vzla.cta": "See projects",

  "tool.build4vzla.title": "Build for Venezuela — Hackathon",
  "tool.build4vzla.desc":
    "Online humanitarian hackathon, June 26–28. Anyone who can build can contribute. Any stack, any level.",
  "tool.build4vzla.cta": "Join the hackathon",

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

  "help.title": "How to help",
  "help.sub": "Every action counts. Choose how you want to contribute.",
  "help.emotional": "There are families sleeping on the streets. Hospitals without supplies. People who have spent 48 hours not knowing if their family is alive. What you donate today goes directly to those who need it most.",
  "help.money.card.title": "Donate money",
  "help.money.card.sub": "Three verified channels. All issue a receipt or certificate.",
  "help.money.a.name": "Venezuelan Red Cross",
  "help.money.a.pill": "Verified",
  "help.money.a.details": "Sociedad Venezolana de la Cruz Roja\nRIF: J-00235031-8\n\nBanco Banesco\nBolivars (VES): 0134-0224-82-2243028658\nDollars (USD): 0134-1736-99-0001006051",
  "help.money.b.name": "Fundación Juntos Se Puede",
  "help.money.b.pill": "Donation certificate",
  "help.money.b.details": "NIT: 900.918.725-7\n\nBanco de Occidente\nSavings Account: 215-83676-8",
  "help.money.c.name": "Dividendo Voluntario para la Comunidad",
  "help.money.c.pill": "National & international",
  "help.money.c.details": "Mobile payment (Venezuela):\nBanco Mercantil / J-000579105 / (0412) 332-1367\n\nDomestic transfer:\nBanco Mercantil\nAccount holder: Dividendo Voluntario para la Comunidad, A.C.\nChecking account: 0105-0026-5410-2642-4518\nRIF: J-000579105\n\nForeign currency account (international):\nBank: Mercantil Banco, S.A.\nSWIFT: MPANPAPA\nAccount number: 300016658\nTorre de las Américas, Punta Pacífica, Panama",
  "help.money.c.note": "Mercantil contributes an additional amount to every donation.",
  "help.money.d.name": "Colombian Red Cross",
  "help.money.d.pill": "Online donation",
  "help.money.d.details": "Donate directly from the official Colombian Red Cross site. Secure payment with credit or debit card.",
  "help.money.d.cta": "Donate now",

  "help.money.e.name": "Caritas Venezuela",
  "help.money.e.pill": "Verified",
  "help.money.e.details": "Donate directly at caritasvenezuela.org/donaciones/",
  "help.money.e.cta": "Donate",

  "help.money.f.name": "I Love Venezuela Foundation",
  "help.money.f.pill": "GoFundMe",
  "help.money.f.details": "Verified earthquake relief campaign.",
  "help.money.f.cta": "Donate",

  "help.money.g.name": "Banco de Alimentos Bogotá",
  "help.money.g.pill": "Colombia",
  "help.money.g.details": "Bre-B llave: 0091677852\nbancodealimentos.org.co",

  "help.money.h.name": "Donate via Rappi",
  "help.money.h.pill": "From home",
  "help.money.h.details": "Open Rappi with a Bogotá address.\nGo to Rappi Turbo.\nLook for the donation button or the word 'Bono'.\nYour contribution reaches the Food Bank for those affected.",

  "help.money.verify": "Always verify accounts before transferring.",
  "help.supplies.card.title": "Donate supplies",
  "help.supplies.card.sub": "Active drop-off point in Bogotá.",
  "help.supplies.org": "Fundación Juntos Se Puede",
  "help.supplies.address": "Calle 104 #54-31, Suba, Bogotá",
  "help.supplies.expand": "See what they need by category",
  "help.supplies.needsList": "",
  "help.supplies.caminantes.sub": "4 locations in Bogotá. Drop-off until Saturday 4 PM.",
  "help.supplies.caminantes.expand": "View locations",
  "help.supplies.cat.medical.title": "Medical care",
  "help.supplies.cat.medical.items": "First-aid kits, sterile gauze, bandages, disposable gloves, painkillers, hydrogen peroxide, sutures, blood pressure monitors, pulse oximeters, glucometers, nebulizers, oral rehydration salts, stretchers, helmets, face masks.",
  "help.supplies.cat.food.title": "Water and food",
  "help.supplies.cat.food.items": "Drinking water, non-perishable food, tuna, sardines, rice, pasta, grains, powdered milk, energy bars, baby food, pet food.",
  "help.supplies.cat.hygiene.title": "Hygiene",
  "help.supplies.cat.hygiene.items": "Soap, toilet paper, diapers (baby and adult), wet wipes, toothbrushes and toothpaste, alcohol, hand sanitizer, detergent, cleaning gloves.",
  "help.supplies.cat.shelter.title": "Warmth and shelter",
  "help.supplies.cat.shelter.items": "Blankets, tents, sleeping mats, plastic tarps, sleeping bags, ropes, throws.",
  "help.supplies.cat.clothing.title": "Clothing",
  "help.supplies.cat.clothing.items": "Clean clothing in good condition, for all ages. Coats, blankets, footwear.",

  "help.supplies.moreBogota.title": "More points in Bogotá",
  "help.supplies.otherCities.title": "Other cities in Colombia",
  "help.supplies.international.title": "International collection centers",
  "help.supplies.pets.title": "Donation for pets (Laika points Bogotá)",
  "help.supplies.pets.needs": "What they receive: wet and dry food (dogs and cats), cat litter, basic medicines, blankets, crates, collars, bowls.",
  "help.supplies.pets.also": "Also receiving at: CLINIHOGAR (Calle 50 #14-34 Teusaquillo) and La Panadería Rusa (Chapinero, Zona Rosa).",

  "help.people.card.title": "Search or report people",
  "help.people.card.sub": "If you've lost contact with someone, search here. If you found someone, report it.",
  "help.people.btn": "Search for a person",
  "help.people.belowBtn": "Free. Takes a minute. If you already know someone is safe, update their status to give peace of mind to others.",
  "help.people.crossRoja": "The Red Cross also offers a free and confidential Restoring Family Links service.",
  "help.disclaimer": "This platform does not handle money. We connect people with channels verified by the community.",


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

  // Layer 1
  "quick.title": "What do you need right now?",
  "quick.sub": "Pick your situation. We'll send you to the best available tool.",
  "quick.search.label": "I'm looking for someone",
  "quick.search.note": "ICRC · Official family reunification service active in 10 countries",
  "quick.search.sub": "Also: desaparecidosterremotovenezuela.com (40,000+ citizen reports)",
  "quick.shelter.label": "I need shelter",
  "quick.shelter.note": "Verified shelter map",
  "quick.damage.label": "Report damage",
  "quick.damage.note": "Verified team · Photo + GPS",
  "quick.damage.sub": "Inside Venezuela: use VenApp (official government app)",
  "quick.donate.label": "I want to donate",
  "quick.donate.note": "Colombian Red Cross · Direct online donation · Secure card payment",
  "quick.donate.sub": "Also: GlobalGiving, Caritas, World Central Kitchen",
  "quick.emergency": "Medical emergency? Call 0800-0-000-911",

  // Layer 2 (replaces previous titles)
  "tools.title2": "All available tools",
  "tools.sub2": "Organized by category. Some do similar things — we tell you which one we recommend and why.",
  "tools.cat.shelters": "Aid points & shelters",

  "tools.subgroup.people.title": "Find missing people",
  "tools.subgroup.people.note": "These tools have similar functions. We recommend Venezuela te busca by volume of reports (22,000+). The others are valid alternatives.",
  "tools.subgroup.maps.title": "Report and view structural damage",
  "tools.subgroup.maps.note": "Yummy SOS allows photo+GPS reports and offers free rides to hospitals. SOS Venezuela 2026 has live seismic data.",

  "tools.trust.verified": "Verified team",
  "tools.trust.community": "Community",
  "tools.trust.unverified": "Unverified",
  "tools.recommended": "Recommended",
  "tools.featured": "Featured",

  "a11y.newTab": "opens in a new tab",

  "tools.updated.active": "Active · updated today",
  "tools.updated.recent": "Last reviewed: {date}",
  "tools.updated.inactive": "No recent activity",

  "tools.summary": "{n} active tools · Last update: {datetime} · These tools are independent, citizen-led and nonpartisan.",

  // New tool
  "tool.vresiste.title": "Venezuela Resiste",
  "tool.vresiste.desc": "Citizen initiative that centralizes information on damage, shelters and needs in one browsable view. Built and maintained by volunteers.",
  "tool.vresiste.cta": "Open platform",

  "tool.sismoayuda.title": "SismoAyuda VE — Structural assessment",
  "tool.sismoayuda.desc":
    "Upload photos of damage to your building and a volunteer civil engineer reviews them remotely. You get a habitability report by email with classification and recommendations. Free, no signup, using ATC-20 and EMS-98 technical standards.",
  "tool.sismoayuda.cta": "Report my building",

  "tool.sosreservadoc.title": "SOS ReservaDoc — Medical teleconsultations",
  "tool.sosreservadoc.desc":
    "Free teleconsultation platform to relieve pressure on hospitals in Venezuela. If you are a doctor, sign up to treat patients remotely from any country. Backed by Andrés Bilbao, co-founder of Rappi.",
  "tool.sosreservadoc.cta": "Treat or consult",

  "tool.filosos.title": "Community aid network",
  "tool.filosos.desc":
    "Request or offer help in real time. Report emergencies, share resources and find assistance nearby. Includes child reports and supply distribution.",
  "tool.filosos.cta": "Open",

  "tool.ayudahumvzla.title": "Ayuda humanitaria Venezuela",
  "tool.ayudahumvzla.desc":
    "Centralized platform to donate, register as a volunteer or register your collection center. Coordinates supply distribution and support requests in one place.",
  "tool.ayudahumvzla.cta": "Open",

  // Layer 3
  "build.layer.title": "Got technical skills?",
  "build.layer.sub": "You can build tools that save lives this weekend.",
  "build.layer.cta": "Built something that can help? Write to us at l.zuluaga@youngaileadershub.org and we'll add it to the hub.",
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
