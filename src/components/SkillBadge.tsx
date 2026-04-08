import type { ReactNode } from 'react';

function CursorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 49 56">
      <path d="M48.0226 13.2547L25.6601 0.311786C24.942 -0.103929 24.0559 -0.103929 23.3378 0.311786L0.976347 13.2547C0.372691 13.6041 0 14.2503 0 14.9502V41.0498C0 41.7496 0.372691 42.3958 0.976347 42.7453L23.3389 55.6882C24.057 56.1039 24.943 56.1039 25.6611 55.6882L48.0237 42.7453C48.6273 42.3958 49 41.7496 49 41.0498V14.9502C49 14.2503 48.6273 13.6041 48.0237 13.2547H48.0226ZM46.6179 15.9964L25.0302 53.4802C24.8842 53.7328 24.4989 53.6296 24.4989 53.337V28.793C24.4989 28.3026 24.2375 27.849 23.8134 27.6027L2.61094 15.3312C2.35898 15.1849 2.46186 14.7987 2.75372 14.7987H45.9292C46.5423 14.7987 46.9255 15.4649 46.619 15.9974L46.6179 15.9964Z"/>
    </svg>
  );
}

function VSCodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 256 256">
      <rect width="224" height="224" x="16" y="16" fill="url(#vsc0)" rx="70"/>
      <path fill="url(#vsc1)" d="M158.008 72.7863C158.008 69.0193 153.791 69.0192 151.916 69.4901C154.54 67.4183 157.618 67.9206 158.711 68.5484L184.054 80.9749C186.469 82.1589 188.001 84.6226 188.001 87.3224V169.071C188.001 171.807 186.428 174.296 183.964 175.461L160.117 186.737C158.477 187.443 154.915 189.186 151.916 186.737C155.665 187.444 157.696 184.775 158.008 182.97V72.7863Z"/>
      <path fill="url(#vsc2)" d="M152.22 69.4223C154.209 69.0291 158.008 69.2115 158.008 72.7864V100.925L81.1725 159.051C79.8295 160.067 77.9394 159.899 76.7955 158.661L68.8766 150.092C67.636 148.75 67.7228 146.648 69.0698 145.414L151.915 69.4902L152.22 69.4223Z"/>
      <path fill="url(#vsc3)" d="M158.008 155.302L81.1725 97.1757C79.8295 96.1597 77.9394 96.3282 76.7955 97.566L68.8766 106.135C67.636 107.477 67.7228 109.579 69.0698 110.813L151.915 186.737C155.664 187.443 157.695 184.775 158.008 182.97V155.302Z"/>
      <defs>
        <linearGradient id="vsc0" x1="16" x2="208" y1="16" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#ACCCFF"/>
        </linearGradient>
        <linearGradient id="vsc1" x1="169.958" x2="169.958" y1="68" y2="188" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32B5F1"/>
          <stop offset="1" stopColor="#2B9FED"/>
        </linearGradient>
        <linearGradient id="vsc2" x1="158.008" x2="72.379" y1="83.145" y2="155.022" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F6FB3"/>
          <stop offset=".271" stopColor="#1279B7"/>
          <stop offset=".421" stopColor="#1176B5"/>
          <stop offset=".618" stopColor="#0E69AC"/>
          <stop offset=".855" stopColor="#0F70AF"/>
          <stop offset="1" stopColor="#0F6DAD"/>
        </linearGradient>
        <linearGradient id="vsc3" x1="72.951" x2="158.339" y1="102.215" y2="172.916" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1791D2"/>
          <stop offset="1" stopColor="#1173C5"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function CopilotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.922 16.997C23.061 18.492 18.063 22.02 12 22.02 5.937 22.02.939 18.492.078 16.997A.641.641 0 0 1 0 16.741v-2.869a.883.883 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.098 10.098 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952C7.255 2.937 9.248 1.98 11.978 1.98c2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.841.841 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256Zm-11.75-5.992h-.344a4.359 4.359 0 0 1-.355.508c-.77.947-1.918 1.492-3.508 1.492-1.725 0-2.989-.359-3.782-1.259a2.137 2.137 0 0 1-.085-.104L4 11.746v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.359 4.359 0 0 1-.355-.508Zm2.328 3.25c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm-5 0c.549 0 1 .451 1 1v2c0 .549-.451 1-1 1-.549 0-1-.451-1-1v-2c0-.549.451-1 1-1Zm3.313-6.185c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"/>
    </svg>
  );
}

function ClaudeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
    </svg>
  );
}
import {
  SiReact, SiReactrouter, SiNextdotjs, SiRemix, SiRedux,
  SiTypescript, SiJavascript, SiTailwindcss,
  SiBootstrap, SiThreedotjs,
  SiNestjs, SiNodedotjs, SiSocketdotio, SiPostgresql,
  SiVite, SiGit, SiFirebase, SiLinux, SiWordpress, SiShopify,
} from 'react-icons/si';
import { BsFiletypePdf } from 'react-icons/bs';
import { MdBarChart } from 'react-icons/md';
import { TbBrandSocketIo } from 'react-icons/tb';
import { AiOutlineEdit } from 'react-icons/ai';
import { BiAtom } from 'react-icons/bi';

const iconMap: Record<string, { icon: ReactNode; color: string }> = {
  // Frontend
  'React 19':           { icon: <SiReact size={14} />,          color: '#61DAFB' },
  'React Router 7':     { icon: <SiReactrouter size={14} />,    color: '#CA4245' },
  'Next.js':            { icon: <SiNextdotjs size={14} />,      color: 'currentColor' },
  'Remix.js':           { icon: <SiRemix size={14} />,          color: 'currentColor' },
  'Redux Toolkit':      { icon: <SiRedux size={14} />,          color: '#764ABC' },
  'TypeScript':         { icon: <SiTypescript size={14} />,     color: '#3178C6' },
  'JavaScript (ES6+)':  { icon: <SiJavascript size={14} />,    color: '#F7DF1E' },
  'Tailwind CSS':       { icon: <SiTailwindcss size={14} />,   color: '#06B6D4' },
  'shadcn':             { icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><g transform="matrix(0.33 0 0 0.33 12 12)"><g transform="matrix(1 0 0 1 17.19 17.19)" clipPath="url(#sc1)"><clipPath id="sc1"><rect transform="matrix(1 0 0 1 -15.63 -15.62)" x="-50" y="-50" width="100" height="100"/></clipPath><path stroke="currentColor" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-65.63,-65.62)" d="M 81.25 49.9996 L 50 81.2496"/></g><g transform="matrix(1 0 0 1 -3.13 -3.13)" clipPath="url(#sc2)"><clipPath id="sc2"><rect transform="matrix(1 0 0 1 4.69 4.69)" x="-50" y="-50" width="100" height="100"/></clipPath><path stroke="currentColor" strokeWidth="6.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-45.31,-45.31)" d="M 75 15.6246 L 15.625 74.9996"/></g></g></svg>, color: 'currentColor' },
  'Bootstrap':          { icon: <SiBootstrap size={14} />,      color: '#7952B3' },
  'Three.js':           { icon: <SiThreedotjs size={14} />,    color: 'currentColor' },
  'Chart.js':           { icon: <MdBarChart size={14} />,       color: '#FF6384' },
  'Markdown Editor':    { icon: <AiOutlineEdit size={14} />,    color: '#2196F3' },
  'Axios':              { icon: <BiAtom size={14} />,           color: '#5A29E4' },
  // Backend
  'Node.js':            { icon: <SiNodedotjs size={14} />,      color: '#339933' },
  'Nest.js':            { icon: <SiNestjs size={14} />,         color: '#E0234E' },
  'WebSocket':          { icon: <TbBrandSocketIo size={14} />,  color: 'currentColor' },
  'Socket.io':          { icon: <SiSocketdotio size={14} />,   color: 'currentColor' },
  'PostgreSQL':         { icon: <SiPostgresql size={14} />,    color: '#4169E1' },
  'React PDF':          { icon: <BsFiletypePdf size={14} />,   color: '#FF4444' },
  // Tools
  'Vite':               { icon: <SiVite size={14} />,           color: '#646CFF' },
  'VS Code':            { icon: <VSCodeIcon />,                 color: '#007ACC' },
  'Cursor':             { icon: <CursorIcon />,                 color: 'currentColor' },
  'Claude Code':        { icon: <ClaudeIcon />,                 color: '#CC785C' },
  'GitHub Copilot':     { icon: <CopilotIcon />,               color: 'currentColor' },
  'Git':                { icon: <SiGit size={14} />,            color: '#F05032' },
  'Firebase':           { icon: <SiFirebase size={14} />,       color: '#FFCA28' },
  'Linux':              { icon: <SiLinux size={14} />,          color: '#FCC624' },
  'WordPress':          { icon: <SiWordpress size={14} />,      color: '#21759B' },
  'Shopify':            { icon: <SiShopify size={14} />,        color: '#96BF48' },
};

export function SkillBadge({ name }: { name: string }) {
  const entry = iconMap[name];

  return (
    <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
      {entry && (
        <span
          style={entry.color !== 'currentColor' ? { color: entry.color } : undefined}
          className="shrink-0 flex items-center text-foreground"
        >
          {entry.icon}
        </span>
      )}
      {name}
    </span>
  );
}
