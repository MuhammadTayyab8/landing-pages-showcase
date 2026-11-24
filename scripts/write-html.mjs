// Generates index.html + favicon for each React landing page (meta, OG, fonts).
import { writeFileSync, mkdirSync } from 'node:fs';

const G = (q) => `<link href="https://fonts.googleapis.com/css2?${q}&display=swap" rel="stylesheet">`;
const FS = (q) => `<link href="https://api.fontshare.com/v2/css?${q}&display=swap" rel="stylesheet">`;

const pages = {
  'base-club': {
    title: 'BASE CLUB — SocialFi for Creators on Base',
    desc: 'Subscribe to creators and stream $CLUB rewards every second on Base. Stake, boost and track your yield in real time.',
    theme: '#0038E0', bg: '#0038E0', fg: '#CCFF00', mark: '#',
    fonts: [G('family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&family=Unbounded:wght@600;700;800;900&family=JetBrains+Mono:wght@500;700')],
    body: 'bg-[#0038E0] text-white antialiased overflow-x-hidden selection:bg-[#CCFF00] selection:text-black',
  },
  creatix: {
    title: 'Creatix — Creative Agency',
    desc: 'Creatix is a creative agency empowering brands with design, UI/UX, 3D and web development.',
    theme: '#090b0e', bg: '#090b0e', fg: '#b8ff2c', mark: '✳',
    fonts: [FS('f[]=clash-display@500,600,700&f[]=satoshi@400,500,700,900')],
    body: 'bg-[#090b0e] text-white antialiased selection:bg-[#b8ff2c] selection:text-black min-h-screen font-sans',
  },
  finguard: {
    title: 'FinGuard — Secure Your Financial Future',
    desc: 'Trusted protection and expert guidance for your finances. Real-time monitoring, fast transactions and smart planning.',
    theme: '#000000', bg: '#ff4d00', fg: '#ffffff', mark: 'F',
    fonts: [G('family=Syne:wght@700;800'), FS('f[]=general-sans@400,500,600,700')],
    body: 'font-sans antialiased bg-black text-slate-900 selection:bg-orange-500 selection:text-white',
  },
  nicepay: {
    title: 'Nicepay — Enhance Your Financial Control',
    desc: 'Streamline your business finances with an intuitive, scalable SaaS platform built for modern teams.',
    theme: '#6d4aff', bg: '#6d4aff', fg: '#ffffff', mark: 'N',
    fonts: [G('family=Geist:wght@300..800&family=Instrument+Serif:ital@0;1')],
    body: 'font-sans antialiased text-slate-900 bg-white selection:bg-purple-100 selection:text-purple-700',
  },
  'petal-power': {
    title: 'Petal Power — Your Online Houseplant Destination',
    desc: 'Curated houseplants, rare indoor collections and plant-care services, shipped straight from our greenhouse.',
    theme: '#345c58', bg: '#15342a', fg: '#c8e6b0', mark: '❦',
    fonts: [G('family=Fraunces:ital,opsz,wght@0,9..144,400..800;1,9..144,400..700&family=DM+Sans:opsz,wght@9..40,400..700')],
    body: 'font-body antialiased bg-[#345c58] text-[#12231e] selection:bg-[#15342a] selection:text-white',
  },
};

for (const [dir, p] of Object.entries(pages)) {
  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${p.bg}"/><text x="32" y="44" font-family="Arial, sans-serif" font-size="34" font-weight="900" text-anchor="middle" fill="${p.fg}">${p.mark}</text></svg>\n`;
  mkdirSync(`${dir}/public`, { recursive: true });
  writeFileSync(`${dir}/public/favicon.svg`, favicon);
  writeFileSync(`${dir}/index.html`, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${p.title}</title>
    <meta name="description" content="${p.desc}" />
    <meta name="theme-color" content="${p.theme}" />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${p.title}" />
    <meta property="og:description" content="${p.desc}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    ${p.fonts.join('\n    ')}
  </head>
  <body class="${p.body}">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`);
  console.log('wrote', dir);
}
