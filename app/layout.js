import "./globals.css";
import { DM_Sans, Lato } from "next/font/google";
import ScrollButton from "./ScrollButton";
import Link from "next/link";
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: {
    template: "%s | Çetinkal Akademi",
    default: "Çetinkal Akademi",
  },
  siteName: "Çetinkal Akademi",
  authors: "Çetinkal Sigorta",
  creator: "Çetinkal Sigorta",
  description:
    "Çetinkal Akademi sayesinde sigorta ile ilgili merak edilen yazıları ve blogları buradan bulabilir ve okuyabilirsiniz.",
  keywords: [
    "Akademi",
    "Çetinkal Akademi",
    " Çetinkal Sigorta",
    "Sigorta Nedir",
    "sigortacılık nedir",
  ],
  icons: {
    icon: "favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${dmSans.className} ${lato.variable}`}>
        <div className="fixed -z-10 -right-72 -bottom-72   sm:-right-44 sm:-bottom-44 m-auto h-[500px] w-[500px] rounded-full bg-gradient-to-tr opacity-10 from-blue-500 to-rose-500" />
        <ScrollButton />
        <nav
          className="
      flex items-center justify-center w-full z-20 gap-8 py-12 bg-blue-50/30 border-b border-slate-100 backdrop-blur-[1px]"
        >
          <Link
            href={"/"}
            className="flex items-center space-x-1 font-medium transition-colors hover:text-slate-800 text-slate-600"
          >
            <span>Anasayfa</span>
          </Link>
          <Link
            href={"https://www.cetinkalsigorta.com/hakkimizda"}
            className="flex items-center space-x-1 font-medium transition-colors hover:text-slate-800 text-slate-600"
          >
            <span>Hakkımızda</span>
          </Link>

          <Link
            href={"https://www.cetinkalsigorta.com/iletisim"}
            className="flex items-center space-x-1 font-medium transition-colors hover:text-slate-800 text-slate-600"
          >
            <span>İletişim</span>
          </Link>
        </nav>
        {children}
        <div className=" bg-gradient-to-t from-blue-900/20 via-white/40 to-sky-50/50">
          <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-3xl font-semibold sm:text-5xl text-sky-950">
                Lütfen unutmayın! Bu paylaşılan yazılardan Şirketimiz
                <strong className="font-extrabold tracking-tight text-blue-700 sm:block">
                  asla sorumlu değildir.
                </strong>
              </h1>

              <p className="mt-4 tracking-tight sm:text-xl/relaxed text-slate-700">
                Çetinkal Sigorta olarak Çetinkal Akademi sitemizde sadece
                bilgilendirme amaçlı bloglar paylaşılmaktadır. Bunun dışında
                hiçbir yazı paylaşılmamakla beraber bu yazıların içeriklerinden
                hiçbir şekilde Çetinkal Sigorta sorumlu değildir ve sorumluluk
                almayacaktır.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-700 active:bg-blue-500 sm:w-auto"
                  href="https://www.cetinkalsigorta.com/iletisim/"
                >
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
