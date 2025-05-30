import { useTheme } from "../../context/ThemeContext";

const logoColors: Record<
  "modern" | "dark" | "light" | "blue" | "rainbow" | "neon",
  { primary: string; secondary: string }
> = {
  modern: {
    primary: "#1a1a1a",
    secondary: "#FFFFFF",
  },
  dark: {
    primary: "#FFFFFF",
    secondary: "#8b5cf6",
    // secondary: "#077a5b",
    // secondary: "#f55d3e",
  },
  light: {
    primary: "#f55d3e",
    secondary: "#1a1a1a",
  },
  blue: {
    primary: "#FFFFFF",
    secondary: "#f59e0b",
    //     --secondary-color: #4b5563;
    //     --accent-color: #fb923c;
    //     --accent-color-light: #fdba74;
    //     --btn-color: #077a5b;
  },
  neon: {
    primary: "#FFFFFF",
    secondary: "#00fff7",
  },
  rainbow: {
    primary: "#ff1493",
    secondary: "#8b5cf6",
  },
};

const ThemedLogo = () => {
  const { theme } = useTheme();
  const colors = logoColors[theme];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Isolation_Mode"
      x="0px"
      y="0px"
      viewBox="1200 1100 2600 2300"
      width="270"
      height="270"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <g>
        <path
          style={{ fill: colors.primary }}
          d="M2326.566,3798.92c2.288-28.646,64.446-839.758-221.149-1147.063   c-26.884-28.934-56.847-53.393-90.235-72.317c-81.492-46.197-183.363-59.409-310.571-24.027c0,0-202.354,76.772-277.168-29.581   c-74.808-106.355-4.382-283.077,230.446-251.537c90.753,12.189,229.273,34.705,358.114,138.152   c36.483,29.287,72.188,65.072,105.8,108.945C2276.648,2723.521,2387.363,3097.148,2326.566,3798.92z"
        />
        <path
          style={{ fill: colors.primary }}
          d="M2309.114,2232.978c-82.041,153.286,17.437,765.632,15.112,777.225    c-0.891-1.205-45.81-225.902-88.518-373.499c-65.943-227.897-119.256-517.397,3.293-646.243    c99.023-106.226,199.913-112.788,265.392-72.095c51.248,33.177,54.322,106.086,7.663,157.008    C2459.354,2132.891,2371.724,2125.029,2309.114,2232.978z"
        />
        <ellipse
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -815.4863 1871.8376)"
          style={{ fill: colors.primary }}
          cx="1851.765"
          cy="1920.298"
          rx="274.258"
          ry="274.258"
        />
      </g>
      <g>
        <path
          style={{ fill: colors.secondary }}
          d="M2591.445,4111.24c-2.289-28.646-64.446-839.758,221.148-1147.063    c26.884-28.934,56.847-53.393,90.235-72.317c81.492-46.197,183.363-59.409,310.571-24.027c0,0,202.354,76.772,277.168-29.581    c74.808-106.355,4.382-283.076-230.445-251.537c-90.754,12.189-229.273,34.705-358.114,138.152    c-36.483,29.287-72.188,65.071-105.8,108.944C2641.362,3035.841,2530.647,3409.469,2591.445,4111.24z"
        />
        <path
          style={{ fill: colors.secondary }}
          d="M2608.896,2545.298c82.041,153.286-17.437,765.632-15.112,777.225    c0.892-1.205,45.81-225.902,88.518-373.499c65.943-227.897,119.256-517.397-3.293-646.243    c-99.023-106.226-199.913-112.788-265.392-72.095c-51.248,33.177-54.322,106.086-7.663,157.008    C2458.657,2445.211,2546.287,2437.35,2608.896,2545.298z"
        />
        <ellipse
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -680.6168 2822.082)"
          style={{ fill: colors.secondary }}
          cx="3066.246"
          cy="2232.618"
          rx="274.258"
          ry="274.258"
        />
      </g>
    </svg>
  );
};

export default ThemedLogo;
