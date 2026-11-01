const fs = require('fs');
const path = require('path');

// Ensure directories
['assets', 'assets/cards', 'assets/tech', 'assets/icons', 'assets/connect'].forEach(dir => {
  const p = path.join(__dirname, dir);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// ==========================================
// 1. HERO BANNER SVG (assets/hero-banner.svg)
// ==========================================
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 400" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="laptopScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>

    <linearGradient id="laptopBaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#CBD5E1" />
      <stop offset="50%" stop-color="#E2E8F0" />
      <stop offset="100%" stop-color="#94A3B8" />
    </linearGradient>

    <linearGradient id="illuBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EFF6FF" />
      <stop offset="100%" stop-color="#DBEAFE" />
    </linearGradient>

    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FB923C" />
      <stop offset="100%" stop-color="#EA580C" />
    </linearGradient>

    <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>

    <filter id="softShadow" x="-5%" y="-5%" width="115%" height="120%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.04" />
    </filter>

    <filter id="cloudShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#3B82F6" flood-opacity="0.12" />
    </filter>
  </defs>

  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .title-hi { font-weight: 800; font-size: 42px; fill: #0F172A; }
    .title-nurudeen { font-weight: 800; font-size: 46px; fill: #0F172A; }
    .title-adewale { font-weight: 800; font-size: 46px; fill: #FF7A00; }
    .role-title { font-weight: 700; font-size: 15.5px; fill: #1E293B; letter-spacing: -0.2px; }
    .bio-text { font-weight: 400; font-size: 14.5px; fill: #475569; }
    .meta-text { font-weight: 500; font-size: 13.5px; fill: #334155; }
    .tag-open { font-weight: 600; font-size: 12.5px; fill: #16A34A; }
    .subhead-meta { font-weight: 500; font-size: 13.5px; fill: #64748B; }
    .brand-name { font-weight: 700; font-size: 14px; fill: #0F172A; }
  </style>

  <!-- Container Box with soft border & subtle shadow -->
  <rect x="2" y="2" width="916" height="396" rx="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="url(#softShadow)" />

  <!-- TOP BAR -->
  <!-- GitHub Logo icon -->
  <g transform="translate(36, 26)">
    <path fill="#0F172A" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
  </g>
  <text x="64" y="41" class="font-sans brand-name">Subair-09</text>
  <text x="145" y="41" class="font-sans subhead-meta">|</text>
  <text x="160" y="41" class="font-sans subhead-meta">Building. Automating. Scaling.</text>

  <!-- Open to opportunities pill (top right) -->
  <g transform="translate(735, 29)">
    <circle cx="5" cy="11" r="4.5" fill="#22C55E" />
    <text x="16" y="15" class="font-sans tag-open">Open to opportunities</text>
  </g>

  <!-- Divider Line -->
  <line x1="36" y1="58" x2="884" y2="58" stroke="#F1F5F9" stroke-width="1.5" />

  <!-- HERO SECTION LEFT -->
  <!-- Orange Accent Bar -->
  <rect x="36" y="80" width="38" height="4.5" rx="2.25" fill="#FF7A00" />

  <!-- Headline: Hi, I'm -->
  <text x="36" y="125" class="font-sans title-hi">Hi, I’m</text>

  <!-- Headline: Nurudeen Adewale -->
  <text x="36" y="173" class="font-sans">
    <tspan class="title-nurudeen">Nurudeen </tspan>
    <tspan class="title-adewale">Adewale</tspan>
  </text>

  <!-- Roles -->
  <text x="36" y="210" class="font-sans role-title">Cloud Engineer  |  AI Full-Stack Developer  |  DevOps Engineer</text>

  <!-- Bio Paragraph -->
  <text x="36" y="242" class="font-sans bio-text">I'm a Computer Science graduate who builds modern web</text>
  <text x="36" y="264" class="font-sans bio-text">applications, automates infrastructure and integrates AI solutions</text>
  <text x="36" y="286" class="font-sans bio-text">to solve real-world problems.</text>

  <!-- Location and Open to opportunities -->
  <g transform="translate(36, 320)">
    <!-- Location Pin Icon -->
    <path fill="#2563EB" d="M7 0C3.134 0 0 3.134 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    <text x="22" y="14" class="font-sans meta-text">Lagos, Nigeria</text>

    <!-- Divider -->
    <text x="135" y="14" class="font-sans subhead-meta">|</text>

    <!-- Mail Icon -->
    <g transform="translate(155, 0)">
      <path fill="#2563EB" d="M1.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9A1.5 1.5 0 011.5 2zm0 1.5a.5.5 0 00-.5.5v.5l7 4.375 7-4.375V4a.5.5 0 00-.5-.5h-13zm13 2.268l-6.735 4.21a.5.5 0 01-.53 0L.5 5.768V12.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5.768z"/>
      <text x="24" y="14" class="font-sans meta-text">Open to opportunities</text>
    </g>
  </g>

  <!-- HERO SECTION RIGHT: MODERN ILLUSTRATION CARD -->
  <g transform="translate(560, 78)">
    <!-- Background Card -->
    <rect width="324" height="280" rx="24" fill="url(#illuBgGrad)" />

    <!-- Sun Accent -->
    <circle cx="68" cy="72" r="18" fill="url(#sunGrad)" opacity="0.95" />

    <!-- Cloud Floating Behind -->
    <g transform="translate(145, 38)" filter="url(#cloudShadow)">
      <path fill="url(#cloudGrad)" d="M50 35c0-13.807-11.193-25-25-25-2.04 0-4.018.246-5.908.71C16.896 4.606 10.963 0 4 0-5.389 0-13 7.611-13 17c0 .77.051 1.527.151 2.268C-17.755 21.056-21 25.647-21 31c0 7.18 5.82 13 13 13h58c7.18 0 13-5.82 13-13 0-6.075-4.167-11.176-9.824-12.569A24.908 24.908 0 0050 35z"/>
    </g>

    <!-- Laptop Illustration -->
    <g transform="translate(42, 65)">
      <!-- Motion / Swoosh Lines -->
      <path d="M-15 155 C 50 170, 180 160, 255 125" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M15 170 C 80 180, 190 170, 240 142" stroke="#60A5FA" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.5"/>

      <!-- Laptop Screen Backing / Bezel -->
      <rect x="22" y="18" width="196" height="126" rx="10" fill="#0F172A" stroke="#1E293B" stroke-width="2" />
      
      <!-- Camera Dot -->
      <circle cx="120" cy="24" r="1.5" fill="#64748B" />

      <!-- Screen Display -->
      <rect x="28" y="30" width="184" height="106" rx="6" fill="url(#laptopScreenGrad)" />

      <!-- Code Bracket Symbol </> -->
      <text x="120" y="93" font-family="'Fira Code', 'Courier New', monospace" font-size="34" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">&lt;/&gt;</text>

      <!-- Laptop Screen Base / Hinge & Keyboard Body -->
      <path d="M2 144 L238 144 C243 144 246 148 244 153 L236 160 C234 162 231 163 228 163 L12 163 C9 163 6 162 4 160 L-4 153 C-6 148 -3 144 2 144 Z" fill="url(#laptopBaseGrad)" stroke="#94A3B8" stroke-width="1" />
      
      <!-- Trackpad Groove -->
      <rect x="100" y="147" width="40" height="5" rx="2.5" fill="#64748B" opacity="0.4" />
      <!-- Notch Opener -->
      <path d="M106 144 L134 144 C132 147 108 147 106 144 Z" fill="#475569" />
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'assets', 'hero-banner.svg'), heroSvg.trim());

// ==========================================
// 2. TECH PILL SVGS (assets/tech/*.svg)
// ==========================================
const techList = [
  {
    id: 'azure',
    name: 'Azure',
    width: 96,
    icon: `<path fill="#0078D4" d="M12.923 1.77L6.47 14.15H1.05l7.98-12.38zM7.34 15.35l3.22 4.88h8.39l-8.08-9.4zM20 18.77l-4.22-4.91L23.5 1.77h-6.26l-5.06 9.69 4.35 5.09z"/>`
  },
  {
    id: 'aws',
    name: 'AWS',
    width: 92,
    icon: `<path fill="#FF9900" d="M18.8 14.5c-2.3 1.7-5.7 2.6-8.6 2.6-4.1 0-7.7-1.5-10.4-4-.2-.2 0-.5.2-.3 2.9 1.7 6.4 2.7 10.1 2.7 2.6 0 5.4-.6 8-1.7.4-.2.8.2.7.7zm1.3-.7c-.3-.4-1.9-.2-2.8-.1-.3 0-.3-.3 0-.5 1.6-1.1 4.1-.8 4.4-.4.3.4-.1 2.9-1.6 4.1-.3.2-.5.1-.4-.2.4-.8.7-2.5.4-2.9z"/><path fill="#232F3E" d="M7.7 5.6c0 1.2-.5 2-1.6 2.6v.1c1.5.3 2 1.4 2 2.7 0 2.2-1.8 3.5-4.5 3.5H0V3.3h3.5c2.7 0 4.2 1.1 4.2 2.3zm-5.7-.3v2.5h1.2c1.3 0 2.1-.5 2.1-1.3 0-.7-.6-1.2-1.9-1.2H2zm0 4.4v3h1.4c1.5 0 2.3-.5 2.3-1.5 0-1-.8-1.5-2.2-1.5H2zM15.4 3.3L13 14.5h-2l-1.8-8.2h-.1l-1.8 8.2h-2L3 3.3h2.1l1.4 8h.1l1.8-8h1.7l1.8 8h.1l1.4-8h2z"/>`
  },
  {
    id: 'linux',
    name: 'Linux',
    width: 94,
    icon: `<path fill="#FCC624" d="M12 2C9.5 2 7.8 4 7.8 6.5c0 1.2.3 2.4.8 3.5C6.4 11 5 13.2 5 16c0 1.5.4 3 1.2 4.2C5.5 20.8 5 21.6 5 22.5c0 1.4 2 2.5 4.5 2.5 1.4 0 2.6-.3 3.4-.9.8.6 2 .9 3.4.9 2.5 0 4.5-1.1 4.5-2.5 0-.9-.5-1.7-1.2-2.3.8-1.2 1.2-2.7 1.2-4.2 0-2.8-1.4-5-3.6-6C17.9 8.9 18.2 7.7 18.2 6.5 18.2 4 16.5 2 14 2h-2z"/><circle cx="10" cy="6" r="1.2" fill="#000"/><circle cx="14" cy="6" r="1.2" fill="#000"/><path fill="#FFA500" d="M10 8.5c1 .5 3 .5 4 0-.5 1.5-1.5 2-2 2s-1.5-.5-2-2z"/><path fill="#FFFFFF" d="M12 11c-2.5 0-4 2.5-4 5.5 0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-3-1.5-5.5-4-5.5z"/>`
  },
  {
    id: 'docker',
    name: 'Docker',
    width: 104,
    icon: `<path fill="#2496ED" d="M23.5 10.8c-.3-.2-1.3-.8-2.8-.5-.2-.5-.5-1-1-1.4l-.5-.4-.4.5c-.7.8-.9 1.9-.8 2.8-.6.3-1.8.4-2.8.1l-.2-.1v3.2c0 .3-.1.6-.2.8H2.5c-.3 0-.5.2-.5.5v.5c0 3.3 2.7 6 6 6 6.3 0 11.2-3.8 13.5-9.3.9.1 1.7-.3 2.2-.8l.3-.4-.5-.6zm-17.5.7h2.2v2.2H6v-2.2zm3 0h2.2v2.2H9v-2.2zm3 0h2.2v2.2H12v-2.2zm-6-3h2.2v2.2H6V8.5zm3 0h2.2v2.2H9V8.5zm3 0h2.2v2.2H12V8.5zm3 0h2.2v2.2H15V8.5zm-6-3h2.2v2.2H9V5.5zm3 0h2.2v2.2H12V5.5z"/>`
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    width: 128,
    icon: `<path fill="#326CE5" d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.3L5.34 8.15v7.7L12 19.7l6.66-3.85v-7.7L12 4.3zm0 3.2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>`
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    width: 148,
    icon: `<path fill="#2088FF" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>`
  },
  {
    id: 'react',
    name: 'React',
    width: 96,
    icon: `<g fill="none" stroke="#61DAFB" stroke-width="1.6"><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.8" fill="#61DAFB"/></g>`
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    width: 106,
    icon: `<path fill="#339933" d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.4L5 8.4v7.2l7 4 7-4V8.4l-7-4zm-1.5 5.1h3v7h-3v-7z"/>`
  }
];

techList.forEach(t => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${t.width}" height="40" viewBox="0 0 ${t.width} 40" fill="none">
    <rect x="0.5" y="0.5" width="${t.width - 1}" height="39" rx="10" fill="#FFFFFF" stroke="#E2E8F0"/>
    <g transform="translate(12, 8)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        ${t.icon}
      </svg>
    </g>
    <text x="42" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#0F172A">${t.name}</text>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, 'assets', 'tech', `${t.id}.svg`), svg.trim());
});

// ==========================================
// 3. PROJECT CARD SVGS (assets/cards/*.svg)
// ==========================================
const cards = [
  {
    id: 'card-textocode',
    title: 'Textocode Marketplace',
    lines: [
      'Digital marketplace for',
      'selling and delivering',
      'digital products with',
      'secure payments.'
    ],
    iconSvg: `
      <!-- Blue Geometric Blocks -->
      <g transform="translate(86, 18)">
        <rect x="0" y="0" width="16" height="16" rx="3" fill="#2563EB"/>
        <rect x="18" y="0" width="16" height="16" rx="3" fill="#3B82F6"/>
        <rect x="0" y="18" width="16" height="16" rx="3" fill="#60A5FA"/>
        <rect x="18" y="18" width="16" height="16" rx="3" fill="#1D4ED8"/>
        <rect x="9" y="9" width="16" height="16" rx="3" fill="#93C5FD"/>
      </g>`
  },
  {
    id: 'card-japamoves',
    title: 'JapaMoves AI',
    lines: [
      'AI-powered immigration',
      'assessment platform to',
      'help people explore',
      'international opportunities.'
    ],
    iconSvg: `
      <!-- Paper Plane / Flight Migration Arrow -->
      <g transform="translate(86, 18)">
        <path d="M0 16 L38 0 L22 36 L16 22 Z" fill="#2563EB"/>
        <path d="M16 22 L38 0 L20 18 Z" fill="#60A5FA"/>
        <path d="M16 22 L22 36 L26 26 Z" fill="#FF7A00"/>
      </g>`
  },
  {
    id: 'card-bbdmobility',
    title: 'BBD Mobility',
    lines: [
      'Delivery and logistics',
      'platform connecting',
      'customers, riders and',
      'administrators.'
    ],
    iconSvg: `
      <!-- Delivery Truck -->
      <g transform="translate(86, 20)">
        <rect x="0" y="4" width="26" height="22" rx="3" fill="#2563EB"/>
        <path d="M26 10 L34 10 L38 17 L38 26 L26 26 Z" fill="#FF7A00"/>
        <rect x="29" y="12" width="6" height="6" rx="1.5" fill="#FFFFFF"/>
        <circle cx="8" cy="27" r="4.5" fill="#1E293B" stroke="#FFFFFF" stroke-width="1.5"/>
        <circle cx="32" cy="27" r="4.5" fill="#1E293B" stroke="#FFFFFF" stroke-width="1.5"/>
      </g>`
  },
  {
    id: 'card-baked-by-doja',
    title: 'Baked by Doja',
    lines: [
      'AI-powered bakery ordering',
      'solution with voice sales',
      'agent and digital ordering.'
    ],
    iconSvg: `
      <!-- Cupcake -->
      <g transform="translate(92, 18)">
        <path d="M5 16 C3 12, 5 6, 14 6 C23 6, 25 12, 23 16 C26 16, 28 19, 26 22 C24 25, 4 25, 2 22 C0 19, 2 16, 5 16 Z" fill="#FF7A00"/>
        <circle cx="14" cy="4" r="3.5" fill="#EF4444"/>
        <path d="M4 23 L6 36 C6.5 38 7.5 39 9 39 L19 39 C20.5 39 21.5 38 22 36 L24 23 Z" fill="#2563EB"/>
      </g>`
  },
  {
    id: 'card-medicare',
    title: 'Medicare',
    lines: [
      'Healthcare platform for',
      'better access to quality',
      'medical services.'
    ],
    iconSvg: `
      <!-- Medical Cross inside Circle -->
      <g transform="translate(88, 18)">
        <circle cx="18" cy="18" r="18" fill="#2563EB"/>
        <rect x="15" y="7" width="6" height="22" rx="2" fill="#FFFFFF"/>
        <rect x="7" y="15" width="22" height="6" rx="2" fill="#FFFFFF"/>
      </g>`
  },
  {
    id: 'card-techquo',
    title: 'Techquo Mobile',
    lines: [
      'Modern e-commerce app',
      'with admin dashboard.'
    ],
    iconSvg: `
      <!-- Modern Storefront -->
      <g transform="translate(88, 20)">
        <path d="M2 10 L18 2 L34 10 L32 15 L4 15 Z" fill="#2563EB"/>
        <rect x="5" y="15" width="26" height="18" rx="2" fill="#1D4ED8"/>
        <rect x="9" y="20" width="8" height="13" fill="#93C5FD"/>
        <rect x="20" y="20" width="7" height="8" rx="1" fill="#FFFFFF"/>
      </g>`
  },
  {
    id: 'card-bbdautos',
    title: 'BBD Autos',
    lines: [
      'Tyre and vehicle dealership',
      'with RFQ system.'
    ],
    iconSvg: `
      <!-- Car Icon -->
      <g transform="translate(84, 22)">
        <path d="M6 14 L10 6 C11 4, 13 4, 15 4 L27 4 C29 4, 31 4, 32 6 L36 14 C39 15, 41 17, 41 20 L41 24 L39 24 L39 22 L3 22 L3 24 L1 24 L1 20 C1 17, 3 15, 6 14 Z" fill="#2563EB"/>
        <circle cx="10" cy="22" r="4" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
        <circle cx="32" cy="22" r="4" fill="#0F172A" stroke="#FFFFFF" stroke-width="1.5"/>
        <path d="M12 7 L20 7 L20 12 L9 12 Z" fill="#93C5FD"/>
        <path d="M22 7 L30 7 L33 12 L22 12 Z" fill="#93C5FD"/>
      </g>`
  },
  {
    id: 'card-casemind',
    title: 'CaseMind',
    lines: [
      'AI-powered case',
      'management solution for',
      'lawyers & businesses.'
    ],
    iconSvg: `
      <!-- Legal / Education Mortarboard -->
      <g transform="translate(86, 20)">
        <path d="M20 2 L38 11 L20 20 L2 11 Z" fill="#2563EB"/>
        <path d="M9 16.5 L9 26 C9 29, 14 32, 20 32 C26 32, 31 29, 31 26 L31 16.5 L20 22 Z" fill="#1D4ED8"/>
        <path d="M35 13 L35 24" stroke="#FF7A00" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="35" cy="25" r="2.5" fill="#FF7A00"/>
      </g>`
  }
];

cards.forEach(c => {
  const lineTspans = c.lines.map((l, i) => `<tspan x="18" dy="${i === 0 ? 0 : 18}">${l}</tspan>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 275" width="215" height="275" fill="none">
    <defs>
      <filter id="cardShadow" x="-10%" y="-5%" width="120%" height="115%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.04"/>
      </filter>
    </defs>
    <style>
      .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      .card-title { font-size: 15px; font-weight: 700; fill: #0F172A; }
      .card-desc { font-size: 12.5px; font-weight: 400; fill: #64748B; }
      .card-link { font-size: 13px; font-weight: 600; fill: #2563EB; }
    </style>

    <!-- Card Background -->
    <rect x="1.5" y="1.5" width="212" height="272" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" filter="url(#cardShadow)"/>

    <!-- Icon Container Box -->
    <rect x="14" y="14" width="187" height="74" rx="12" fill="#F0F7FF"/>
    ${c.iconSvg}

    <!-- Card Title -->
    <text x="18" y="116" class="font-sans card-title">${c.title}</text>

    <!-- Description Lines -->
    <text x="18" y="138" class="font-sans card-desc">
      ${lineTspans}
    </text>

    <!-- Action Link: View Project -> -->
    <g transform="translate(18, 250)">
      <text x="0" y="0" class="font-sans card-link">View Project</text>
      <path d="M84 -4 L90 -4 M87 -7 L90 -4 L87 -1" stroke="#2563EB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, 'assets', 'cards', `${c.id}.svg`), svg.trim());
});

// ==========================================
// 4. CONNECT PILL SVGS (assets/connect/*.svg)
// ==========================================
const connectItems = [
  {
    id: 'email',
    text: 'Nurudeen@quotientsafrica.com',
    width: 250,
    icon: `<path fill="#2563EB" d="M2 4h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.5l8 5 8-5V6H2zm16 2.3l-7.47 4.67a1 1 0 01-1.06 0L2 8.3V16h16V8.3z"/>`
  },
  {
    id: 'website',
    text: 'quotientsdigitalhorizonltd.com',
    width: 260,
    icon: `<path fill="#2563EB" d="M12.5 4.5l3 3a1 1 0 01-1.4 1.4l-3-3a3 3 0 00-4.2 4.2l2 2a1 1 0 01-1.4 1.4l-2-2a5 5 0 017-7zm-5 11l-3-3a1 1 0 011.4-1.4l3 3a3 3 0 004.2-4.2l-2-2a1 1 0 011.4-1.4l2 2a5 5 0 01-7 7z"/>`
  },
  {
    id: 'github',
    text: 'github.com/Subair-09',
    width: 200,
    icon: `<path fill="#0F172A" fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>`
  },
  {
    id: 'linkedin',
    text: 'linkedin.com/in/subair-09',
    width: 215,
    icon: `<path fill="#0A66C2" d="M19 0H1C.4 0 0 .4 0 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM6 17H3V8h3v9zM4.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm12.5 10.3h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V17h-3V8h2.8v1.2h.1c.4-.8 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7v4.6z"/>`
  }
];

connectItems.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${item.width}" height="42" viewBox="0 0 ${item.width} 42" fill="none">
    <rect x="1" y="1" width="${item.width - 2}" height="40" rx="12" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.2"/>
    <g transform="translate(14, 11)">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        ${item.icon}
      </svg>
    </g>
    <text x="44" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12.5" font-weight="600" fill="#2563EB">${item.text}</text>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, 'assets', 'connect', `${item.id}.svg`), svg.trim());
});

// ==========================================
// 5. FOOTER SVG (assets/footer.svg)
// ==========================================
const footerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 120" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0EDFE" stop-opacity="0.6"/>
      <stop offset="50%" stop-color="#EFF6FF" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#DBEAFE" stop-opacity="0.7"/>
    </linearGradient>
  </defs>
  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .foot-text { font-size: 13.5px; font-weight: 500; fill: #475569; }
    .foot-highlight { font-weight: 600; fill: #1E293B; }
  </style>

  <!-- Divider lines with message -->
  <line x1="140" y1="40" x2="260" y2="40" stroke="#CBD5E1" stroke-width="1.2"/>
  <text x="460" y="44" class="font-sans foot-text" text-anchor="middle">
    Thanks for visiting!  <tspan fill="#F59E0B">⭐</tspan>  <tspan class="foot-highlight">Feel free to explore my projects and connect.</tspan>
  </text>
  <line x1="660" y1="40" x2="780" y2="40" stroke="#CBD5E1" stroke-width="1.2"/>

  <!-- Subtle bottom decorative waves matching mockup -->
  <path d="M0 80 C 250 50, 450 110, 920 70 L920 120 L0 120 Z" fill="url(#waveGrad)"/>
  <path d="M0 95 C 300 75, 600 115, 920 85 L920 120 L0 120 Z" fill="#BFDBFE" opacity="0.4"/>
</svg>`;

fs.writeFileSync(path.join(__dirname, 'assets', 'footer.svg'), footerSvg.trim());

console.log('All SVGs generated successfully!');
