'use client';

/**
 * MethodologyIllustration
 * ─────────────────────────────────────────────────────────────────
 * Risograph / duotone illustration for the About / Methodology page.
 *
 * Technique (Option B):
 *   • The raster PNG is embedded inside an SVG <image> tag.
 *   • mix-blend-mode: multiply removes the cream white background
 *     so the illustration sits naturally on any light background.
 *   • An SVG grain filter adds a subtle noise layer on top.
 *   • A CSS float keyframe makes the whole composition gently rise
 *     and fall on an infinite loop after the fade-in completes.
 *   • Dark mode: opacity is reduced slightly so the illustration
 *     doesn't overpower the dark background.
 *
 * Usage:
 *   import MethodologyIllustration from '@/components/MethodologyIllustration'
 *   <MethodologyIllustration />
 * ─────────────────────────────────────────────────────────────────
 */

export default function MethodologyIllustration() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        maxWidth: 680,
        margin: '0 auto',
        lineHeight: 0,
      }}
    >
      <svg
        viewBox="0 0 800 500"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: 'block', overflow: 'visible' }}
      >
        <defs>

          {/* ── Grain / noise filter ── */}
          <filter id="riso-grain" x="-5%" y="-5%" width="110%" height="110%"
            colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="grayNoise"
            />
            <feBlend
              in="SourceGraphic"
              in2="grayNoise"
              mode="multiply"
              result="blended"
            />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>

          {/* ── Ink-bleed / soft-edge filter ── */}
          <filter id="inkbleed" x="-2%" y="-2%" width="104%" height="104%">
            <feGaussianBlur stdDeviation="0.6" result="blurred" />
            <feComposite in="blurred" in2="SourceGraphic" operator="over" />
          </filter>

          {/* ── Animation styles ── */}
          <style>{`
            @keyframes risoFadeIn {
              from { opacity: 0; transform: translateY(14px); }
              to   { opacity: 1; transform: translateY(0); }
            }

            @keyframes risoFloat {
              0%, 100% { transform: translateY(0px); }
              50%      { transform: translateY(-9px); }
            }

            .riso-enter {
              animation:
                risoFadeIn 1.0s cubic-bezier(0.22, 1, 0.36, 1) both,
                risoFloat  7s 1.2s ease-in-out infinite;
              transform-origin: center bottom;
            }

            @media (prefers-color-scheme: dark) {
              .riso-enter { opacity: 0.82 !important; }
            }

            .dark .riso-enter { opacity: 0.82 !important; }
          `}</style>

        </defs>

        <g className="riso-enter">

          <image
            href="/illustrations/methodology-illustration.jpeg"
            x="0"
            y="0"
            width="800"
            height="500"
            preserveAspectRatio="xMidYMid meet"
            filter="url(#inkbleed)"
            style={{
              mixBlendMode: 'multiply',
            }}
          />

          <rect
            x="0"
            y="0"
            width="800"
            height="500"
            fill="#8b1a1a"
            opacity="0.035"
            filter="url(#riso-grain)"
            style={{ mixBlendMode: 'multiply' }}
          />

        </g>

      </svg>
    </div>
  );
}