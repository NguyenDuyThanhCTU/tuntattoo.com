import "@styles/styles.css";
import "@styles/CKGlobal.css";
import { StateProvider } from "@context/StateProvider";
import Header from "@components/layout/Header";
import Copyright from "@components/layout/Copyright";
import { find } from "@config/lib/api";
import localFont from "next/font/local";
import Footer from "@components/layout/Footer";
import Hotline from "@components/layout/Hotline";

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
      <StateProvider>
        <body className="font-LexendDeca font-light">
          <Header Config={Config} ProductCategory={ProductCategory} />
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
