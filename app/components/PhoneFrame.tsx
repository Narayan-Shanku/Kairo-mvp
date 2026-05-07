'use client';

import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  scale?: number;
  showStatusBar?: boolean;
  time?: string;
}

export default function PhoneFrame({ children, scale = 1, showStatusBar = true, time = '9:41' }: PhoneFrameProps) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: `${375 * scale}px`,
        height: `${812 * scale}px`,
      }}
    >
      {/* Phone shell */}
      <div
        className="absolute inset-0 rounded-[54px] bg-neutral-900 dark:bg-neutral-950 shadow-2xl"
        style={{
          padding: `${10 * scale}px`,
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)',
        }}
      >
        {/* Inner bezel */}
        <div
          className="relative w-full h-full rounded-[44px] overflow-hidden"
          style={{ background: 'var(--bg-base)' }}
        >
          {/* Dynamic island */}
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-50"
            style={{
              width: `${120 * scale}px`,
              height: `${32 * scale}px`,
            }}
          />

          {/* Status bar */}
          {showStatusBar && (
            <div
              className="absolute top-0 left-0 right-0 flex justify-between items-center z-40 text-ink-primary"
              style={{
                padding: `${14 * scale}px ${28 * scale}px ${0}px`,
                fontSize: `${14 * scale}px`,
                fontWeight: 600,
              }}
            >
              <span>{time}</span>
              <div className="flex items-center" style={{ gap: `${5 * scale}px` }}>
                {/* Signal */}
                <svg width={17 * scale} height={11 * scale} viewBox="0 0 17 11" fill="currentColor">
                  <rect x="0" y="7" width="3" height="4" rx="0.5" />
                  <rect x="4.5" y="5" width="3" height="6" rx="0.5" />
                  <rect x="9" y="2.5" width="3" height="8.5" rx="0.5" />
                  <rect x="13.5" y="0" width="3" height="11" rx="0.5" />
                </svg>
                {/* Wifi */}
                <svg width={15 * scale} height={11 * scale} viewBox="0 0 15 11" fill="currentColor">
                  <path d="M7.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path d="M7.5 7a3.5 3.5 0 012.5 1l1.5-1.5a5.5 5.5 0 00-8 0L5 8a3.5 3.5 0 012.5-1z" />
                  <path d="M7.5 3a7.5 7.5 0 015.5 2.4l1.5-1.5a9.5 9.5 0 00-14 0L2 5.4A7.5 7.5 0 017.5 3z" />
                </svg>
                {/* Battery */}
                <svg width={26 * scale} height={11 * scale} viewBox="0 0 26 11" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="10" rx="2" stroke="currentColor" strokeOpacity="0.4" />
                  <rect x="2" y="2" width="19" height="7" rx="1" fill="currentColor" />
                  <rect x="23.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" fillOpacity="0.4" />
                </svg>
              </div>
            </div>
          )}

          {/* Content area */}
          <div className="absolute inset-0 overflow-hidden" style={{ paddingTop: showStatusBar ? `${48 * scale}px` : 0 }}>
            {children}
          </div>

          {/* Home indicator */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-ink-primary rounded-full opacity-90 z-50"
            style={{
              width: `${134 * scale}px`,
              height: `${5 * scale}px`,
              marginBottom: `${8 * scale}px`,
            }}
          />
        </div>
      </div>

      {/* Side buttons (subtle) */}
      <div className="absolute -left-1 top-24 w-1 h-8 bg-neutral-800 rounded-l" style={{ height: `${32 * scale}px`, top: `${100 * scale}px` }} />
      <div className="absolute -left-1 w-1 bg-neutral-800 rounded-l" style={{ height: `${48 * scale}px`, top: `${160 * scale}px` }} />
      <div className="absolute -left-1 w-1 bg-neutral-800 rounded-l" style={{ height: `${48 * scale}px`, top: `${220 * scale}px` }} />
      <div className="absolute -right-1 w-1 bg-neutral-800 rounded-r" style={{ height: `${72 * scale}px`, top: `${180 * scale}px` }} />
    </div>
  );
}
