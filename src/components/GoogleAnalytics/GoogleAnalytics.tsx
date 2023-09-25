import Script from "next/script";
import { existsGaId, GA_ID } from "@/modules/lib/gtag";

const GoogleAnalytics = () => (
  <>
    {existsGaId && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_ID}');
           `,
          }}
        />
      </>
    )}
  </>
);

export default GoogleAnalytics;
