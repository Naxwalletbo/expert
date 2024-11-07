// go liveshare, click on vite server, for shared servers
import { baseUrl } from "$lib/baseUrl";
import type { Seo, SiteConfig } from "$lib/types/site-config.type";
import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
export const load = (async ({ fetch }) => {
  const res = await fetch(`${baseUrl}/api/site-data`);
  // console.log({res});
  if (!res.ok) {
    throw error(500, {
      message: "internal server error",
      // cause: await res.text(),
    });
  }
  const resJson: {
    data: {
      seo: Seo;
      config: SiteConfig;
    };
  } = await res.json();
  return {
    ...resJson.data,
  };
}) satisfies LayoutServerLoad;
