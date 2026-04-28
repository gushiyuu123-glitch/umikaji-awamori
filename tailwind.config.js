/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        /*
          UMIKAJI Color Philosophy
          黒くするな。澄ませろ。
          重厚な酒ではなく、青い夜気の中に浮かぶ冷えた一滴。
        */

        // Brand Core
        sumi: "#0B1117",      // 青墨：黒ではなく、青を含んだ深い夜
        yoru: "#101A22",      // 夜藍：背景の主成分
        milk: "#EEF2F4",      // 青白い乳白：主文字・光
        haze: "#B8C1C8",      // 青灰の霞：補助文字・罫線
        sea: "#7FA0B5",       // 海霧ブルー：空気・湿度・冷感
        amber: "#A88B68",     // 控えめな琥珀：味わいの余韻だけ

        // Night / Air
        night: "#071016",
        deepSea: "#0E1B24",
        blueBlack: "#121E27",
        wetInk: "#16242E",
        coldMist: "#D8E6EE",
        moon: "#F4F6F6",

        // UI / Surface
        ink: "#080D12",
        smoke: "#1A242B",
        stone: "#252D31",
        slateGlass: "#34434C",
        mist: "#DDE4E6",

        // Glass / Liquid
        ice: "#DCEAF1",
        frost: "#C8D8E0",
        clear: "rgba(238, 242, 244, 0.74)",
        glass: "rgba(238, 242, 244, 0.62)",

        // Transparent Utility
        whiteSoft: "rgba(238, 242, 244, 0.86)",
        whiteThin: "rgba(220, 228, 234, 0.58)",
        whiteGhost: "rgba(238, 242, 244, 0.28)",

        blueSoft: "rgba(127, 160, 181, 0.22)",
        blueThin: "rgba(127, 160, 181, 0.12)",
        blueMist: "rgba(120, 148, 166, 0.08)",

        blackSoft: "rgba(11, 17, 23, 0.72)",
        blackDeep: "rgba(7, 16, 22, 0.9)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans JP",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "Noto Serif JP",
          "serif",
        ],
        mincho: [
          "Shippori Mincho B1",
          "Noto Serif JP",
          "serif",
        ],
        en: [
          "Cormorant Garamond",
          "serif",
        ],
      },

      fontSize: {
        "hero-en": [
          "clamp(4.6rem, 10.4vw, 12.8rem)",
          {
            lineHeight: "0.82",
            letterSpacing: "0.04em",
            fontWeight: "400",
          },
        ],
        "hero-ja": [
          "clamp(2.4rem, 5vw, 6rem)",
          {
            lineHeight: "1.08",
            letterSpacing: "0.08em",
            fontWeight: "400",
          },
        ],
        "copy-lg": [
          "clamp(1.25rem, 1.6vw, 1.75rem)",
          {
            lineHeight: "1.9",
            letterSpacing: "0.08em",
            fontWeight: "400",
          },
        ],
        "body-calm": [
          "clamp(0.88rem, 0.95vw, 1rem)",
          {
            lineHeight: "2",
            letterSpacing: "0.06em",
            fontWeight: "300",
          },
        ],
        label: [
          "0.72rem",
          {
            lineHeight: "1",
            letterSpacing: "0.26em",
            fontWeight: "500",
          },
        ],
      },

      letterSpacing: {
        tightish: "-0.02em",
        calm: "0.06em",
        airy: "0.12em",
        label: "0.24em",
        wideLabel: "0.32em",
        luxury: "0.48em",
      },

      lineHeight: {
        calm: "1.75",
        looseCopy: "2",
        hero: "0.88",
      },

      spacing: {
        section: "clamp(6rem, 12vw, 12rem)",
        "section-sm": "clamp(4rem, 8vw, 8rem)",
        gutter: "clamp(1.5rem, 4vw, 5rem)",
        rhythm: "clamp(2.5rem, 6vw, 7rem)",
      },

      maxWidth: {
        content: "1180px",
        narrow: "760px",
        copy: "620px",
        heroCopy: "520px",
      },

      borderRadius: {
        soft: "1.25rem",
        calm: "2rem",
        glass: "2.6rem",
        fullSoft: "999px",
      },

      boxShadow: {
        bottle: "0 44px 130px rgba(0, 0, 0, 0.42)",
        softGlow: "0 0 90px rgba(127, 160, 181, 0.18)",
        blueGlow: "0 0 110px rgba(120, 148, 166, 0.2)",
        glassGlow: "0 0 42px rgba(220, 234, 241, 0.12)",
        innerMist: "inset 0 0 80px rgba(238, 242, 244, 0.04)",
      },

      backgroundImage: {
        /*
          背景は黒ベタではなく、青い夜気を重ねる。
        */

        "hero-radial":
          "radial-gradient(circle at 25% 35%, rgba(127,160,181,0.24) 0%, rgba(127,160,181,0.08) 34%, rgba(11,17,23,0) 66%)",

        "night-fade":
          "linear-gradient(90deg, rgba(7,16,22,0.9) 0%, rgba(11,17,23,0.72) 36%, rgba(16,26,34,0.18) 100%)",

        "blue-night-fade":
          "linear-gradient(90deg, rgba(8,12,16,0.88) 0%, rgba(12,18,24,0.72) 20%, rgba(16,24,32,0.42) 42%, rgba(18,28,36,0.14) 64%, rgba(18,28,36,0.02) 84%, rgba(17,19,21,0.04) 100%)",

        "bottom-shade":
          "linear-gradient(180deg, rgba(11,17,23,0) 0%, rgba(7,16,22,0.72) 100%)",

        "sea-mist":
          "radial-gradient(circle, rgba(110,138,158,0.2) 0%, rgba(130,156,174,0.08) 34%, rgba(130,156,174,0) 70%)",

        "product-aura":
          "radial-gradient(ellipse at 62% 38%, rgba(228,236,242,0.18) 0%, rgba(178,196,208,0.09) 22%, rgba(120,148,166,0.05) 44%, rgba(120,148,166,0) 68%)",

        "milk-fade":
          "linear-gradient(180deg, #EEF2F4 0%, #DDE4E6 100%)",

        "glass-button":
          "linear-gradient(135deg, rgba(238,242,244,0.08), rgba(127,160,181,0.035))",

        "ice-button":
          "linear-gradient(135deg, rgba(238,242,244,0.82), rgba(200,216,224,0.62))",
      },

      backdropBlur: {
        xs: "2px",
        glass: "10px",
      },

      transitionDuration: {
        slow: "900ms",
        slower: "1400ms",
        breathe: "1800ms",
      },

      transitionTimingFunction: {
        outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
        inOutSoft: "cubic-bezier(0.65, 0, 0.35, 1)",
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
            filter: "blur(3px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        heroTitle: {
          "0%": {
            opacity: "0",
            transform: "translateY(18px)",
            filter: "blur(6px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },

        slowFloat: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(0, -12px, 0)",
          },
        },

        mistDrift: {
          "0%": {
            opacity: "0.22",
            transform: "translateX(-2%)",
          },
          "50%": {
            opacity: "0.46",
          },
          "100%": {
            opacity: "0.24",
            transform: "translateX(2%)",
          },
        },

        auraPulse: {
          "0%, 100%": {
            opacity: "0.48",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.68",
            transform: "scale(1.035)",
          },
        },

        iceShimmer: {
          "0%": {
            opacity: "0.28",
            transform: "translateX(-20%)",
          },
          "50%": {
            opacity: "0.62",
          },
          "100%": {
            opacity: "0.28",
            transform: "translateX(20%)",
          },
        },
      },

      animation: {
        fadeUp: "fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        fadeIn: "fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        heroTitle: "heroTitle 1.65s cubic-bezier(0.16, 1, 0.3, 1) both",
        slowFloat: "slowFloat 7s ease-in-out infinite",
        mistDrift: "mistDrift 9s ease-in-out infinite alternate",
        auraPulse: "auraPulse 8s ease-in-out infinite",
        iceShimmer: "iceShimmer 6s ease-in-out infinite alternate",
      },
    },
  },

  plugins: [],
};