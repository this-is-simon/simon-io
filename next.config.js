/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV === "development",
      ssr: true,
      fileName: false,
      topLevelImportPaths: ["@emotion/react", "@emotion/styled"],
      cssProp: true,
      // Not supported yet.
      // minify?: boolean,
      // Not supported yet.
      // transpileTemplateLiterals?: boolean,
      // Not supported yet.
      // pure?: boolean,
    },
  },
};

module.exports = nextConfig;
