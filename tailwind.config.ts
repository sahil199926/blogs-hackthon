import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient":
          "radial-gradient(50% 84.31% at 50% 53.28%, #FFFFFF 0%, #EBF7FF 100%)",
        "Light-Gradient-Horizontal": 
          "linear-gradient(to right, #EBF7FF 0%  ,#FFFFFF 100%)",
        "Light-Gradient-Vertical": 
          "linear-gradient(to top, #EBF7FF 0%  ,#FFFFFF 100%)",
        "Linear-Gradient-Degree": "linear-gradient(270deg, #FFFFFF 36.22%, #EBF7FF 100%)"

      },
      maxWidth: {
        "8xl": "1440px",
      },
      width: {
        "8xl": "1440px",
      },
      fontSize: {
        "Custom-64": [
          "4rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "600",
          },
        ],
        "Custom-56": [
          "3.5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "600",
          },
        ],
        "Display-Medium-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        "Display-FullCaps-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        "Display-FullCaps-18": [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
            fontWeight: "500",
          },
        ],
        "Display-Semibold-40": [
          "2.5rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-32": [
          "2rem",
          {
            lineHeight: "2.875rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-28": [
          "1.75rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-24": [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-20": [
          "1.25rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        "Display-Semibold-14": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "600",
          },
        ],
        "Body-Semibold-20": [
          "1.25rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "600",
          },
        ],
        "Body-Semibold-14": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "600",
          },
        ],
        "Body-Regular-18": [
          "1.125rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "400",
          },
        ],
        "Body-Regular-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "Body-Regular-14": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        "Body-Regular-12": [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "400",
          },
        ],
        "Body-Medium-20": [
          "1.25rem",
          {
            lineHeight: "1.875rem",
            fontWeight: "500",
          },
        ],
        "Body-Medium-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        "Body-Medium-12": [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "500",
          },
        ],
        "Body-Medium-14": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],

        "Link-medium-14": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        "Link-medium-16": [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        "Link-medium-18": [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "500",
          },
        ],
        "Caption-Regular-14": [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "400",
          },
        ],
      },
      lineHeight: {
        "11": "2.875rem",
        "27px": "1.6875rem",
        "46px": "2.875rem",
        "22px": "1.375rem",
        "30px": "1.875rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "xl-1000": "1000px",
        "sm-400": "400px",
      },
      colors: {
        background: "hsl(var(--background))",
        Neutrals: {
          white: "#FFFFFF",
          "50": "#F2F2F2",
          "100": "#EDEDED",
          "200": "#E0E0E0",
          "300": "#D4D4D4",
          "400": "#C4C4C4",
          "500": "#B5B5B5",
          "600": "#A1A1A1",
          "700": "#8C8C8C",
          "800": "#707070",
          "900": "#454545",
          "950": "#191919",
        },
        "Primary-Blue": {
          "50": "#DBF3FF",
          "100": "#CCEDFF",
          "200": "#A8E1FF",
          "300": "#8AD6FF",
          "400": "#66C9FF",
          "500": "#42BDFF",
          "600": "#24B2FF",
          "700": "#00A6FF",
          "800": "#008FDB",
          "900": "#007BBD",
          "950": "#006FAB",
        },
        "Accent-Orange": {
          "50": "#FFE9E0",
          "100": "#FFDDD1",
          "200": "#FFC7B3",
          "300": "#FFB094",
          "400": "#FF9A75",
          "500": "#FF8457",
          "600": "#FF6D38",
          "700": "#FF571A",
          "800": "#FF4400",
          "900": "#E03C00",
          "950": "#CF3700",
        },
        "Primary-Mordor-Blue-Bg": {
          "50": "#F6FBFD",
          "75": "#F5FBFF",
          "100": "#EAF6FA",
          "200": "#D5EDF6",
          "300": "#C0E3F1",
          "400": "#A3D6EB",
          "500": "#86C9E4",
          "600": "#65BBDD",
          "700": "#37A6D2",
          "800": "#298FB8",
          "900": "#2583A8",
          "950": "#227698",
        },
        "Primary-Mordor-Green-Bg": {
          "50": "#EBF9FA",
          "100": "#E3F7F8",
          "200": "#D2F3F3",
          "300": "#BEEDEE",
          "400": "#AAE8E9",
          "500": "#9AE3E5",
          "600": "#86DEDF",
          "700": "#75DADB",
          "800": "#61D4D6",
          "900": "#51D0D2",
          "950": "#46CDCF",
        },
        "Primary-Gradient": "linear-gradient(90deg, #46CDCF 0%, #2985B2 100%)",
        "Light-Gradient-Bg": "linear-gradient(90deg, , #EBF7FF 100%)",
        "Light-Gradient-Horizontal": "linear-gradient(to right, #EBF7FF 0%  ,#FFFFFF 100%)",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        mordorCustom: "2px 2px 8px 0 rgba(0, 0, 0, 0.05)", // needed in some designs
        blogAndCasecard: "2px 2px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
