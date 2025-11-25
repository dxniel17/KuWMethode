// Daten
const kontrollmethodeData = {
  definition: " Die Kontrollmethode ist ein geplanter, wiederholbarer Test, der immer unter denselben Bedingungen und unter der selben Technik durchgeführt wird, um Veränderungen in deiner aktuellen Leistungsfähigkeit zuverlässig sichtbar zu machen. Dabei wird genau dieselbe Übung mit gleicher Dauer, gleichem Ablauf und möglichst identischen äußeren Faktoren erneut ausgeführt. Durch diesen direkten Vergleich erkennst du klar, ob du fitter, schneller oder ausdauernder geworden bist oder ob dein Training angepasst werden muss. Diese Methode schafft objektive Messbarkeit, nimmt das Rätselraten aus dem Training und zeigt dir eindeutig, wo du gerade stehst und wie sich deine Fitness im Laufe der Zeit entwickelt.",
  ziele: ["Leistung prüfen", "Aktuelle Form einschätzen", "Training bewerten"],
  merkmale: {
    intensitaet: "Meist 80–90% der eigenen Leistung",
    umfang: "Etwa 5–20 Minuten je nach Sportart",
    tempo: "Gleiches Tempo im Zielkorridor",
    rahmenbedingungen: "Ruhige Umgebung, klare Vorgaben, kein Druck",
    einsatzbereiche: ["Laufsport", "Radsport", "Schwimmen"],
  },
  vorteile: ["Vergleichbare Ergebnisse", "Klare Erfolgskontrolle", "Gute Steuerung des Trainings"],
  risiken: ["Zu hohe Belastung ohne gute Basis", "Genug Erholung einplanen"],
  beispiel: {
    titel: "Techniklauf-Stationen",
    beschreibung:
      "Staffellauf mit sauberer Technik ausgeführt um die Kontrollmethode zu demonstrieren.", 
    dauer: "15–20 Minuten",
  },
};

const wettkampfmethodeData = {
  definition:
    "Die Wettkampfmethode ist eine Trainingsform, bei der du so trainierst, als würdest du bereits im echten Wettkampf stehen. Das bedeutet: Du setzt dich bewusst einem höheren körperlichen und mentalen Druck aus, orientierst dich am Wettkampftempo und übst die gleichen taktischen Entscheidungen, die du später im Ernstfall brauchst. Durch diese realitätsnahe Belastung lernst du, mit Stress, Geschwindigkeit, Konkurrenzgefühl und Zeitdruck umzugehen, ohne die Kontrolle zu verlieren. Die Wettkampfmethode bereitet dich daher optimal darauf vor, im tatsächlichen Wettbewerb stabil, fokussiert und leistungsfähig zu bleiben, weil dein Körper und dein Kopf die Situation bereits kennen.",
  ziele: ["Belastbarkeit testen", "Wettkampf simulieren", "Umgang mit Druck üben"],
  merkmale: {
    intensitaet: "Hoch, oft 90–100%",
    umfang: "Wettkampfdistanz oder etwas kürzer",
    tempo: "Wettkampftempo bzw. Renntempo, je nach Taktik",
    rahmenbedingungen: "Wettkampf-ähnlich: Gegner, Motivation, Zeitdruck",
    einsatzbereiche: ["Ausdauersportarten", "Teamsport", "Individualsport"],
  },
  vorteile: [
    "Sehr guter Transfer auf echte Wettkämpfe",
    "Mentale Vorbereitung auf Druck",
    "Realistische Belastung",
  ],
  risiken: ["Hoher Stress, nur mit guter Basis", "Mehr Erholung nötig", "Nicht zu häufig einsetzen"],
  beispiel: {
    titel: "Sprintstaffel – Schnell & Wettbewerbsnah",
    beschreibung: "Staffel, Teams starten gleichzeitig, Abklatschen, Tempo",
    dauer: "10–15 Minuten",
  },
};

const praxisUebungen = [
  {
    id: "techniklauf-stationen",
    titel: "Techniklauf – sauber ausgeführt",
    typ: "kontrollmethode",
    ziel: "Kontrollierte Technik, Lauftechnik & Koordination verbessern",
    dauer: "15–20 Minuten",
    ablauf: [
      "Aufbau: 4–5 kurze Stationen (8–10 m): Kniehebelauf, Anfersen, Sidesteps, Hopserlauf, Fußgelenksarbeit",
      "Teams bilden (3–4 Gruppen)",
      "Stationen langsam und bewusst durchlaufen – Fokus auf saubere Ausführung",
      "Fokuspunkte je Station (z. B. Aufrecht bleiben, Arme im Takt, sauber abrollen)",
      "Mini-Selbstkontrolle nach jedem Durchgang: Was lief gut? Fokus erfüllt?",
      "Optional: Partner-Feedback kurz geben (z. B. Armführung, Rumpfhaltung)",
    ],
    material: ["Markierungshütchen/Leinen", "Blätter mit Fokuspunkten", "Wasser"],
    varianten: {
      leicht: "4 Stationen, längere Pausen, ruhiges Tempo",
      schwer: "5 Stationen, kürzere Pausen, Metronom/Pacer für Rhythmus",
    },
    sicherheitshinweise: [
      "Nicht auf Zeit – Qualität vor Tempo",
      "Gründlich aufwärmen (ca. 10 Minuten)",
      "Bei Unwohlsein abbrechen",
    ],
  },
  {
    id: "sprintstaffel-wettkampf",
    titel: "Sprintstaffel – schnell & wettbewerbsnah",
    typ: "wettkampfmethode",
    ziel: "Wettkampfausführung erleben, Fokus auf Tempo, und Zeit",
    dauer: "10–15 Minuten",
    ablauf: [
      "Derselbe Parcours bleibt stehen – als Staffelstrecke (40–60 m)",
      "Teams starten gleichzeitig",
      "Jede Person läuft so schnell wie möglich – Technik wird nicht kontrolliert",
      "Abklatschen, nächste Person läuft",
      "2–3 Runden pro Team, Gewinnerteam ist zuerst fertig",
    ],
    material: ["Markierungshütchen/Leinen", "Stoppuhr optional", "Wasser"],
    varianten: {
      leicht: "Kürzere Strecke, Handicap-Start ausgleichen",
      schwer: "Mehr Runden, finale All-out-Runde, Pflicht-Abklatsch-Zone",
    },
    sicherheitshinweise: [
      "Klare Wechselzonen, keine engen Kontakte",
      "Nur mit ausreichendem Warm-up sprinten",
      "Hydration und Erholung beachten",
    ],
  },
];

const praesentationOutline = {
  abschnitte: [
    {
      titel: "Einleitung & Bedeutung",
      unterpunkte: [
        "Warum Leistungsüberprüfung im Ausdauertraining?",
        "Unterschied Training vs. Wettkampf",
        "Ziele der systematischen Leistungsdiagnose",
      ],
      schaetzteDauer: 2,
    },
    {
      titel: "Kontrollmethode",
      unterpunkte: [
        "Definition einfach erklärt",
        "Einsatzbereiche",
        "Vorteile (Objektivität, Reproduzierbarkeit)",
        "Hinweise und Grenzen",
      ],
      schaetzteDauer: 4,
    },
    {
      titel: "Wettkampfmethode",
      unterpunkte: [
        "Definition und psychologische Aspekte",
        "Simulation realer Wettkämpfe",
        "Mentale Vorbereitung",
        "Vorteile des realistischen Settings",
      ],
      schaetzteDauer: 4,
    },
    {
      titel: "Vergleich & Gegenüberstellung",
      unterpunkte: [
        "Intensität und Beanspruchung",
        "Umfang und Dauer",
        "Psychologische Komponenten",
        "Praktische Anwendung",
      ],
      schaetzteDauer: 3,
    },
    {
      titel: "Praktische Umsetzung",
      unterpunkte: [
        "Integration in den Trainingsplan",
        "Auswahl der Methode",
        "Häufigkeit und Periodisierung",
        "Erfolgskontrolle und Anpassung",
      ],
      schaetzteDauer: 2,
    },
  ],
};

const technikenKontroll = [
  'Brust raus, Oberkörper aufrecht',
  'Schultern stabil und straff halten',
  'Wenig Bewegung im Oberkörper',
  'Arme dynamisch und locker vor–zurück führen',
  'Nicht seitlich ausweichen',
  'Beinachse stabil halten',
  'Nicht auf der Ferse landen → Mittel- oder Vorderfuß',
  'Aktiver Abdruck aus Sprunggelenk und Waden',
];

const technikenWettkampf = [
  'Zeitdruck akzeptieren, fokussiert bleiben',
  'Wettkampftempo halten, kurze Beschleunigungen auf Ansage',
  'Tempo-Wechsel kontrollieren',
  'Ruhige Atmung trotz hoher Intensität',
  'Körperspannung unter Belastung halten',
  'Saubere Wechsel/Abklatsch in der Staffel',
];

// Utilities
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function mount(html) {
  const app = qs('#app');
  const wrapper = document.createElement('div');
  wrapper.className = 'opacity-0 transition-opacity duration-300';
  wrapper.innerHTML = html;
  app.innerHTML = '';
  app.appendChild(wrapper);
  requestAnimationFrame(() => {
    wrapper.classList.remove('opacity-0');
    wrapper.classList.add('opacity-100');
  });
  lucide.createIcons();
  setupReveal();
}

function setupReveal() {
  const nodes = qsa('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || '0';
          entry.target.style.animationDelay = `${delay}ms`;
          entry.target.classList.add('animate-blur-reveal');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  nodes.forEach((n, i) => {
    n.setAttribute('data-delay', String(i * 60));
    observer.observe(n);
  });
}

// Seiten
function HomePage() {
  mount(`
    <section class="min-h-screen">
      <section class="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24">
        <div class="max-w-6xl mx-auto px-4 text-center" data-reveal>
          <div class="flex justify-center mb-8">
            <i data-lucide="clock" class="w-24 h-24 opacity-80 animate-pulse-soft"></i>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold mb-6">Kontroll- & Wettkampfmethode</h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">Von Daniel, Lucian, Jason, Bora und Mia.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/methoden" class="btn btn-primary px-8 py-4 ring-1 ring-inset ring-gray-200 flex items-center gap-2 justify-center"><i data-lucide="target" class="w-5 h-5"></i>Methoden entdecken</a>
            <a href="#/praxis" class="btn btn-outline px-8 py-4 flex items-center gap-2 justify-center"><i data-lucide="zap" class="w-5 h-5"></i>Praxis-Übungen</a>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12" data-reveal>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Was sind diese Methoden?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Zwei grundlegende Ansätze zur Leistungsdiagnostik</p>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all" data-reveal>
              <div class="flex items-center mb-6">
                <i data-lucide="activity" class="w-8 h-8 text-blue-600 mr-3"></i>
                <h3 class="text-2xl font-bold text-gray-900">Kontrollmethode</h3>
              </div>
              <p class="text-gray-700 mb-6">${kontrollmethodeData.definition}</p>
              <ul class="space-y-2">
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Submaximale Intensität (80–90%)</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Standardisierte Bedingungen</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Objektive Leistungsmessung</span></li>
              </ul>
            </div>
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all" data-reveal>
              <div class="flex items-center mb-6">
                <i data-lucide="trophy" class="w-8 h-8 text-blue-700 mr-3"></i>
                <h3 class="text-2xl font-bold text-gray-900">Wettkampfmethode</h3>
              </div>
              <p class="text-gray-700 mb-6">${wettkampfmethodeData.definition}</p>
              <ul class="space-y-2">
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Hohe Intensität (90–100%)</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Wettkampf-ähnliche Situation</span></li>
                <li class="flex items-start"><span class="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3"></span><span class="text-gray-700">Mentale Belastbarkeit</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  `);
}

function MethodenPage() {
  mount(`
    <div class="min-h-screen">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="text-center mb-12" data-reveal>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Methoden im Detail</h1>
          
        </div>

        <!-- Kontrollmethode -->
        <section class="space-y-6 mb-12">
          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal>
            <div class="flex items-center mb-4">
              <i data-lucide="activity" class="w-8 h-8 text-blue-600 mr-3"></i>
              <h2 class="text-2xl font-bold text-gray-900">Kontrollmethode</h2>
            </div>
            <p class="text-lg text-gray-700">${kontrollmethodeData.definition}</p>
          </div>

          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal data-delay="60">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Merkmale</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Intensität</h4>
                <p class="text-gray-700">${kontrollmethodeData.merkmale.intensitaet}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Umfang</h4>
                <p class="text-gray-700">${kontrollmethodeData.merkmale.umfang}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Tempo</h4>
                <p class="text-gray-700">${kontrollmethodeData.merkmale.tempo}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Rahmenbedingungen</h4>
                <p class="text-gray-700">${kontrollmethodeData.merkmale.rahmenbedingungen}</p>
              </div>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-gray-900 mb-2">Einsatzbereiche</h4>
              <div class="flex flex-wrap gap-2">
                ${kontrollmethodeData.merkmale.einsatzbereiche
                  .map((b) => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${b}</span>`)
                  .join('')}
              </div>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-gray-900 mb-2">Techniken</h4>
              <ul class="grid md:grid-cols-2 gap-2">
                ${technikenKontroll
                  .map(
                    (t) => `<li class="flex items-start"><i data-lucide="check" class="w-4 h-4 text-blue-600 mr-2 mt-0.5"></i><span class="text-gray-700">${t}</span></li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8" data-reveal data-delay="120">
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm">
              <h3 class="text-xl font-bold text-blue-700 mb-4">Vorteile</h3>
              <ul class="space-y-2 text-gray-700">
                ${kontrollmethodeData.vorteile
                  .map(
                    (v) => `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-blue-600 mr-3"></i>${v}</li>`
                  )
                  .join('')}
              </ul>
            </div>
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Hinweise</h3>
              <ul class="space-y-2 text-gray-700">
                ${kontrollmethodeData.risiken
                  .map(
                    (r) => `<li class="flex items-start"><i data-lucide="alert-triangle" class="w-5 h-5 text-blue-700 mr-3"></i>${r}</li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl p-6 ring-1 ring-blue-200" data-reveal data-delay="180">
            <div class="flex items-center mb-2">
              <i data-lucide="clock" class="w-5 h-5 text-blue-600 mr-2"></i>
              <span class="text-sm text-blue-800 font-medium">${kontrollmethodeData.beispiel.dauer}</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900">${kontrollmethodeData.beispiel.titel}</h4>
            <p class="text-gray-700">${kontrollmethodeData.beispiel.beschreibung}</p>
          </div>
        </section>

        <!-- Wettkampfmethode -->
        <section class="space-y-6">
          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal>
            <div class="flex items-center mb-4">
              <i data-lucide="trophy" class="w-8 h-8 text-blue-600 mr-3"></i>
              <h2 class="text-2xl font-bold text-gray-900">Wettkampfmethode</h2>
            </div>
            <p class="text-lg text-gray-700">${wettkampfmethodeData.definition}</p>
          </div>

          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal data-delay="60">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Merkmale</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Intensität</h4>
                <p class="text-gray-700">${wettkampfmethodeData.merkmale.intensitaet}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Umfang</h4>
                <p class="text-gray-700">${wettkampfmethodeData.merkmale.umfang}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Tempo</h4>
                <p class="text-gray-700">${wettkampfmethodeData.merkmale.tempo}</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Rahmenbedingungen</h4>
                <p class="text-gray-700">${wettkampfmethodeData.merkmale.rahmenbedingungen}</p>
              </div>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-gray-900 mb-2">Einsatzbereiche</h4>
              <div class="flex flex-wrap gap-2">
                ${wettkampfmethodeData.merkmale.einsatzbereiche
                  .map((b) => `<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${b}</span>`)
                  .join('')}
              </div>
            </div>
            <div class="mt-6">
              <h4 class="font-semibold text-gray-900 mb-2">Techniken</h4>
              <ul class="grid md:grid-cols-2 gap-2">
                ${technikenWettkampf
                  .map(
                    (t) => `<li class="flex items-start"><i data-lucide="check" class="w-4 h-4 text-blue-600 mr-2 mt-0.5"></i><span class="text-gray-700">${t}</span></li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8" data-reveal data-delay="120">
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm">
              <h3 class="text-xl font-bold text-blue-700 mb-4">Vorteile</h3>
              <ul class="space-y-2 text-gray-700">
                ${wettkampfmethodeData.vorteile
                  .map(
                    (v) => `<li class="flex items-start"><i data-lucide="check-circle" class="w-5 h-5 text-blue-600 mr-3"></i>${v}</li>`
                  )
                  .join('')}
              </ul>
            </div>
            <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Hinweise</h3>
              <ul class="space-y-2 text-gray-700">
                ${wettkampfmethodeData.risiken
                  .map(
                    (r) => `<li class="flex items-start"><i data-lucide="alert-triangle" class="w-5 h-5 text-blue-700 mr-3"></i>${r}</li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl p-6 ring-1 ring-blue-200" data-reveal data-delay="180">
            <div class="flex items-center mb-2">
              <i data-lucide="clock" class="w-5 h-5 text-blue-700 mr-2"></i>
              <span class="text-sm text-blue-800 font-medium">${wettkampfmethodeData.beispiel.dauer}</span>
            </div>
            <h4 class="text-lg font-semibold text-gray-900">${wettkampfmethodeData.beispiel.titel}</h4>
            <p class="text-gray-700">${wettkampfmethodeData.beispiel.beschreibung}</p>
          </div>
        </section>

        <!-- Vergleichstabelle -->
        <section class="mt-12" data-reveal data-delay="240">
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Vergleich</h3>
            <p class="text-gray-600">Wesentliche Unterschiede im Überblick</p>
          </div>
          <div class="bg-white/90 backdrop-blur-xl rounded-xl ring-1 ring-gray-200 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Merkmal</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-blue-600">Kontrollmethode</th>
                    <th class="px-6 py-4 text-left text-sm font-semibold text-blue-700">Wettkampfmethode</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 font-medium text-gray-900">Intensität</td>
                    <td class="px-6 py-4 text-gray-700">${kontrollmethodeData.merkmale.intensitaet}</td>
                    <td class="px-6 py-4 text-gray-700">${wettkampfmethodeData.merkmale.intensitaet}</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 font-medium text-gray-900">Umfang</td>
                    <td class="px-6 py-4 text-gray-700">${kontrollmethodeData.merkmale.umfang}</td>
                    <td class="px-6 py-4 text-gray-700">${wettkampfmethodeData.merkmale.umfang}</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 font-medium text-gray-900">Tempo</td>
                    <td class="px-6 py-4 text-gray-700">${kontrollmethodeData.merkmale.tempo}</td>
                    <td class="px-6 py-4 text-gray-700">${wettkampfmethodeData.merkmale.tempo}</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-6 py-4 font-medium text-gray-900">Rahmenbedingungen</td>
                    <td class="px-6 py-4 text-gray-700">${kontrollmethodeData.merkmale.rahmenbedingungen}</td>
                    <td class="px-6 py-4 text-gray-700">${wettkampfmethodeData.merkmale.rahmenbedingungen}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="py-12 text-center" data-reveal data-delay="300">
          <a href="#/praxis" class="btn btn-primary px-8 py-3 inline-flex items-center gap-2"><i data-lucide="zap" class="w-5 h-5"></i>Zur Praxis wechseln</a>
        </section>
      </div>
    </div>
  `);
}

function PraxisPage() {
  const cards = praxisUebungen
    .map(
      (u) => `
      <div class="bg-white/90 backdrop-blur-xl rounded-xl p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5" data-reveal>
        <div class="flex items-center justify-between mb-4">
          <div class="px-3 py-1 rounded-full text-sm font-medium ${
            u.typ === 'kontrollmethode'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-blue-50 text-blue-700'
          }">${u.typ === 'kontrollmethode' ? 'Kontrollmethode' : 'Wettkampfmethode'}</div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-3">${u.titel}</h3>
        <p class="text-gray-600 mb-4">${u.ziel}</p>
        <div class="flex items-center text-gray-500 mb-4">
          <i data-lucide="clock" class="w-4 h-4 mr-2"></i>
          <span class="text-sm">${u.dauer}</span>
        </div>
        <button class="w-full btn btn-primary py-2 px-4 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2" data-start="${u.id}"><i data-lucide="play" class="w-4 h-4"></i>Übung starten</button>
      </div>`
    )
    .join('');

  mount(`
    <div class="min-h-screen">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="text-center mb-12" data-reveal>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Praxis-Übungen</h1>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
      </div>
    </div>
  `);

  qsa('[data-start]').forEach((btn) => {
    btn.addEventListener('click', () => showUebungDetail(btn.getAttribute('data-start')));
  });

  function showUebungDetail(id) {
    const u = praxisUebungen.find((x) => x.id === id);
    if (!u) return;
    mount(`
      <div class="min-h-screen">
        <div class="max-w-6xl mx-auto px-4 py-8">
          <button class="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6" id="back">
            <i data-lucide="chevron-right" class="w-4 h-4 mr-2 rotate-180"></i>
            Zurück zur Übersicht
          </button>

          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal>
            <div class="flex items-center justify-between mb-6">
              <div>
                <div class="flex items-center mb-2">
                  <div class="px-3 py-1 rounded-full text-sm font-medium mr-4 ${
                    u.typ === 'kontrollmethode' ? 'bg-blue-100 text-blue-800' : 'bg-blue-50 text-blue-700'
                  }">${u.typ === 'kontrollmethode' ? 'Kontrollmethode' : 'Wettkampfmethode'}</div>
                  <div class="flex items-center text-gray-500">
                    <i data-lucide="clock" class="w-4 h-4 mr-2"></i>
                    <span>${u.dauer}</span>
                  </div>
                </div>
                <h1 class="text-3xl font-bold text-gray-900">${u.titel}</h1>
                <p class="text-xl text-gray-600 mt-2">${u.ziel}</p>
              </div>
              <i data-lucide="play" class="w-12 h-12 text-blue-700"></i>
            </div>
          </div>

          

          

          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Techniken</h3>
            <ul class="grid md:grid-cols-2 gap-2">
              ${(() => {
                const list = u.typ === 'kontrollmethode' ? technikenKontroll : technikenWettkampf;
                return list
                  .map(
                    (t) => `<li class="flex items-start"><i data-lucide="check" class="w-4 h-4 text-blue-600 mr-2 mt-0.5"></i><span class="text-gray-700">${t}</span></li>`
                  )
                  .join('');
              })()}
            </ul>
          </div>

          <div class="bg-white/90 backdrop-blur-xl rounded-xl p-8 ring-1 ring-gray-200 shadow-sm" data-reveal>
            <div class="flex items-center mb-6">
              <i data-lucide="alert-triangle" class="w-8 h-8 text-blue-700 mr-3"></i>
              <h2 class="text-2xl font-bold text-gray-900">Sicherheitshinweise</h2>
            </div>
            <div class="space-y-3">
              ${u.sicherheitshinweise
                .map(
                  (s) => `<div class="flex items-start p-3 bg-gray-50 rounded-lg"><i data-lucide="alert-triangle" class="w-5 h-5 text-blue-700 mr-3 mt-0.5"></i><span class="text-gray-700">${s}</span></div>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `);

    qs('#back').addEventListener('click', PraxisPage);
  }
}


// Router
function router() {
  const hash = location.hash || '#/';
  if (hash.startsWith('#/methoden')) return MethodenPage();
  if (hash.startsWith('#/praxis')) return PraxisPage();
  return HomePage();
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  router();
  const header = document.querySelector('header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('sticky-active');
    } else {
      header.classList.remove('sticky-active');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
});
