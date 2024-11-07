<script lang="ts">
  import { page } from "$app/stores";
  import { baseUrl, faviconUrl, logoUrl } from "$lib/baseUrl";
  import type { Seo, SiteConfig } from "$lib/types/site-config.type";
  export let data: Seo;
  export let config: SiteConfig;
  const socialImageSize = data?.image?.size?.split("x");
  // console.log({ socialImageSize, data });
</script>

<title>{config.siteName}</title>
<meta name="description" content={data.description} />
<meta name="keywords" content={data.keywords.toString()} />
<link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
<!-- Apple Stuff -->
<link rel="apple-touch-icon" href={logoUrl} />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content={config.siteName} />

<!-- Google / Search Engine Tags -->
<meta itemprop="name" content={config.siteName} />
<meta itemprop="description" content={data.description} />
<meta itemprop="image" content={data.image.url} />

<!-- Facebook Meta Tags -->
<meta property="og:type" content="website" />
<meta property="og:title" content={data.social_title} />
<meta property="og:description" content={data.description} />
<meta property="og:image" content={data.image.url} />

{#if socialImageSize}
  <meta property="og:image:width" content={socialImageSize[0]} />
  <meta property="og:image:height" content={socialImageSize[1]} />
{/if}
<meta property="og:url" content={$page.url.href} />

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image" />
