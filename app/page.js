import Image from "next/image";
import { getBlogs } from "./utils/ghost";
import Link from "next/link";
import { formatDistance, subDays } from "date-fns";
import { tr } from "date-fns/locale";

export const revalidate = 10;
export default async function Home() {
  const { blogs } = await getBlog();

  return (
    <main>
      <section className="max-w-4xl p-4 mx-auto space-y-8">
        <h1 className="mx-auto my-8 text-4xl font-black tracking-tight text-center md:my-8 xs:text-5xl md:text-6xl lg:text-7xl font-lato">
          Çetinkal Akademi ile{" "}
          <span className="font-sans text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-rose-500">
            sigortalı olduğunuzu
          </span>{" "}
          hatırlatıyoruz.
        </h1>
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="flex flex-col max-w-xl gap-4 p-4 mx-auto transition-all bg-white border rounded-md sm:gap-8 sm:p-8 md:max-w-none md:flex-row group hover:bg-slate-50 border-slate-200/80"
          >
            <div className="relative flex-shrink-0 w-full h-56 mx-auto overflow-hidden rounded-md sm:h-64 md:mx-0 lg:h-56 md:w-80 md:h-44 lg:w-96">
              <Image
                src={blog.feature_image}
                fill
                alt={`Blog Fotoğrafı ${idx}`}
                className="object-cover transition-all group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col flex-1 space-y-3">
                <Link href={`/blog/${blog.slug}`}>
                  <h1 className="text-2xl font-black tracking-tight transition-all hover:decoration-blue-500 hover:text-blue-600 sm:text-3xl hover:underline underline-offset-2 font-lato line-clamp-2 decoration-black decoration-2 decoration-dashed hover:opacity-80 hover:transition-colors">
                    {blog.title}
                  </h1>
                </Link>
                <p className="text-slate-600 line-clamp-3">{blog.excerpt}</p>
              </div>
              <div className="flex flex-wrap gap-4 my-3">
                {blog.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white border rounded-md border-slate-200/50 text-slate-800"
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
              <div className="text-slate-600/80 ">
                {formatDistance(
                  subDays(new Date(blog.created_at), 0),
                  new Date(),
                  { addSuffix: true, locale: tr }
                )}{" "}
                paylaşıldı.
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
async function getBlog() {
  const blogs = await getBlogs();
  return { blogs };
}
