import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // English localized paths -> internal German paths
      { source: "/en/services", destination: "/en/leistungen" },
      { source: "/en/about", destination: "/en/ueber-mich" },
      { source: "/en/contact", destination: "/en/kontakt" },
    ];
  },
};

export default withNextIntl(nextConfig);
