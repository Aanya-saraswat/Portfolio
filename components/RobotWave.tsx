export default function RobotWave({ message }: { message: string }) {
  return (
    <div className="flex items-end gap-6">
      <div className="robot-body shrink-0">
        <svg width="128" height="146" viewBox="0 0 76 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* antenna */}
          <line x1="38" y1="4" x2="38" y2="14" stroke="var(--trace)" strokeWidth="2" />
          <circle cx="38" cy="4" r="3" fill="var(--trace)" />

          {/* head */}
          <rect x="14" y="14" width="48" height="36" rx="12" fill="var(--paper-dim)" stroke="var(--trace)" strokeWidth="2" />
          <circle cx="29" cy="32" r="4.5" fill="var(--trace)" />
          <circle cx="47" cy="32" r="4.5" fill="var(--trace)" />
          <path d="M29 41c3 3 15 3 18 0" stroke="var(--brass)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* body */}
          <rect x="18" y="54" width="40" height="28" rx="10" fill="var(--paper-dim)" stroke="var(--line)" strokeWidth="2" />
          <rect x="30" y="62" width="16" height="10" rx="3" fill="var(--brass)" opacity="0.25" />

          {/* left arm (static) */}
          <line x1="18" y1="62" x2="8" y2="72" stroke="var(--line)" strokeWidth="4" strokeLinecap="round" />

          {/* right arm (waving) */}
          <g className="robot-arm">
            <line x1="58" y1="62" x2="70" y2="46" stroke="var(--trace)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="70" cy="46" r="4" fill="var(--trace)" />
          </g>
        </svg>
      </div>

      <div className="robot-bubble relative mb-4 max-w-sm rounded-2xl rounded-bl-sm border border-line bg-paper-dim px-5 py-4 text-base leading-relaxed text-graphite-soft shadow-lg">
        {message}
      </div>
    </div>
  );
}
