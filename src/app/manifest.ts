import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.englishName,
    short_name: siteConfig.englishName,
    description:
      "أكاديمية Feeling Bliss للتمكين النفسي والمالي وتحقيق الأهداف.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d6664",
    icons: [
      {
        src: siteConfig.logoUrl,
        sizes: "1258x1254",
        type: "image/png",
      },
    ],
  };
}
