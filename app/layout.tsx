import "@styles/styles.css";
import "@styles/CKGlobal.css";
import { StateProvider } from "@context/StateProvider";
import Header from "@components/layout/Header";
import Copyright from "@components/layout/Copyright";
import { find } from "@config/lib/api";
import localFont from "next/font/local";
import Footer from "@components/layout/Footer";
import Hotline from "@components/layout/Hotline";
import Script from "next/script";

const UVNM = localFont({
  src: "../public/UVNM.ttf",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Config = await find("Config");
  const Posts = await find("Posts ");

  const PostCategory = await find("PostCategory");
  const ProductCategory = await find("ProductCategory");
  const Products = await find("Products");

  return (
    <html lang="en">
      <head>
        {/* Thêm Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MC9HG69T');
          `}
        </Script>
      </head>
      <StateProvider>
        <body className="font-LexendDeca font-light">
          <Header Config={Config} ProductCategory={ProductCategory} />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC9HG69T" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <main className="d:mt-[0px] p:mt-[100px] ">{children}</main>
          <Footer Config={Config} Posts={Posts} />
          <Hotline Config={Config} />
          <Copyright
            Config={Config}
            PostCategory={PostCategory}
            ProductCategory={ProductCategory}
            Products={Products}
          />
        </body>
      </StateProvider>
    </html>
  );
}
