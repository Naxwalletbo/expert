export type Seo = {
  keywords: string[];
  description: string;
  image: {
    url: string;
    size: string;
  };
  social_title: string;
};
export type SiteConfig = {
  siteName: string;
  currency: {
    text: string;
    symbol: string;
  };
  baseColor: string;
  maintenanceMode: "0" | "1";
};
export type SiteData = {
  seo: Seo;
  config: SiteConfig;
};
