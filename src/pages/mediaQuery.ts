import { css, CSSProp } from "styled-components";
const devices = {
  mobile: 480,
  tablet: 768,
  laptop: 992,
  desktop: 1270,
};
type CSSOrientations = "portrait" | "landscape";

type ScreenSizes = "xLarge" | "large" | "medium" | "small" | "xSmall";
type ScreenSizeBuckets = {
  [screenSize in ScreenSizes]: {
    min?: number;
    max?: number;
    orientation?: CSSOrientations;
  };
};
/**
 * Screen-Size buckets
 * +----------+------------+------------+-------------+--------+
 * |  xSmall  |   small    |   medium   |    large    | xLarge |
 * +----------+------------+------------+-------------+--------+
 * | 0 to 480 | 481 to 768 | 769 to 992 | 993 to 1270 | 1271+  |
 * +----------+------------+------------+-------------+--------+
 */
export const screenSizeBuckets: ScreenSizeBuckets = {
  xLarge: {
    min: devices.desktop + 1,
  },
  large: {
    max: devices.desktop,
    min: devices.laptop + 1,
  },
  medium: {
    max: devices.laptop,
    min: devices.tablet + 1,
  },
  small: {
    max: devices.tablet,
    min: devices.mobile + 1,
  },
  xSmall: {
    max: devices.mobile,
  },
} as const;

interface MediaQueryProps {
  min?: number;
  max?: number;
  orientation?: CSSOrientations;
}
const generateMediaQuery = ({ min, max, orientation }: MediaQueryProps): string =>
  `screen and ${min ? `(min-width: ${min}px)` : ""}${min && max ? ` and ` : ""}${
    max ? `(max-width: ${max}px)` : ""
  }${(min || max) && orientation ? ` and ` : ""}${
    orientation ? `(orientation: ${orientation})` : ""
  }`;

const generateMediaQueryCSS = (props: MediaQueryProps & { style: CSSProp }) =>
  css`
    @media ${generateMediaQuery(props)} {
      ${props.style};
    }
  `;

export const isInScreenBucket = (screenSize: ScreenSizes): boolean =>
  matchMedia(
    generateMediaQuery({
      ...screenSizeBuckets[screenSize],
    })
  ).matches;

/**
 * XLarge Screens. (`width > 1270px`)
 */
export const xLargeScreen = (style: CSSProp) =>
  generateMediaQueryCSS({ style, min: screenSizeBuckets["xLarge"].min });

/**
 * Large Screens. (`width > 992px` AND `width <= 1270px`)
 */
export const largeScreen = (style: CSSProp) =>
  generateMediaQueryCSS({
    style,
    min: screenSizeBuckets["large"].min,
    max: screenSizeBuckets["large"].max,
  });

/**
 * Medium Screens. (`width > 768px` AND `width <= 992px`)
 */
export const mediumScreen = (style: CSSProp) =>
  generateMediaQueryCSS({
    style,
    min: screenSizeBuckets["medium"].min,
    max: screenSizeBuckets["medium"].max,
  });

/**
 * Small Screens. (`width > 480px` AND `width <= 768px`)
 */
export const smallScreen = (style: CSSProp) =>
  generateMediaQueryCSS({
    style,
    min: screenSizeBuckets["small"].min,
    max: screenSizeBuckets["small"].max,
  });

/**
 * XSmall Screens. (`width <= 480px`)
 */
export const xSmallScreen = (style: CSSProp) =>
  generateMediaQueryCSS({ style, max: screenSizeBuckets["xSmall"].max });

/**
 * Large, and XLarge Screens. (`width > 992px`)
 */
export const largeScreenAndAbove = (style: CSSProp) =>
  generateMediaQueryCSS({ style, min: screenSizeBuckets["large"].min });

/**
 * Large, and XLarge Screens. (`width > 992px`)
 */
export const xLargeScreenAndAbove = (style: CSSProp) =>
  generateMediaQueryCSS({ style, min: screenSizeBuckets["xLarge"].min });

/**
 * XSmall, Small, Medium, and Large Screens. (`width <= 1270px`)
 */
export const largeScreenAndBelow = (style: CSSProp) =>
  generateMediaQueryCSS({ style, max: screenSizeBuckets["large"].max });

/**
 * Medium, Large, and XLarge Screens. (`width > 768px`)
 */
export const mediumScreenAndAbove = (style: CSSProp) =>
  generateMediaQueryCSS({ style, min: screenSizeBuckets["medium"].min });

/**
 * XSmall, Small, and Medium Screens. (`width <= 992px`)
 */
export const mediumScreenAndBelow = (style: CSSProp) =>
  generateMediaQueryCSS({ style, max: screenSizeBuckets["medium"].max });

/**
 * Small, Medium, Large, and XLarge Screens. (`width > 480px`)
 */
export const smallScreenAndAbove = (style: CSSProp) =>
  generateMediaQueryCSS({ style, min: screenSizeBuckets["small"].min });

/**
 * XSmall, and Small Screens. (`width <= 768px`)
 */
export const smallScreenAndBelow = (style: CSSProp) =>
  generateMediaQueryCSS({ style, max: screenSizeBuckets["small"].max });

/**
 * Portrait Screens.
 */
export const portraitScreen = (style: CSSProp) =>
  generateMediaQueryCSS({ style, orientation: "portrait" });

/**
 * Landscape Screens.
 */
export const landscapeScreen = (style: CSSProp) =>
  generateMediaQueryCSS({ style, orientation: "landscape" });

export const hideOnMobile = css`
  ${xSmallScreen(
    css`
      display: none;
    `
  )}
`;
export const hideAboveMobile = css`
  ${smallScreenAndAbove(
    css`
      display: none;
    `
  )}
`;
