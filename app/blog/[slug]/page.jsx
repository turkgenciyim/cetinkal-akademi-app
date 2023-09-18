import Image from "next/image";
import { getSingleBlog, getBlogs } from "@/app/utils/ghost";
import { notFound } from "next/navigation";
import { formatDistance, subDays } from "date-fns";
import { tr } from "date-fns/locale";


export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export const revalidate = 10;

export default async function Pages({ params }) {
  const blog = await getSingleBlog(params.slug);


  if (!blog) {
    notFound();
  }

  return (
    <article className="z-10 max-w-4xl min-h-screen p-4 mx-auto space-y-8">
      <div className="my-8 md:my-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-black tracking-tight text-center text-transparent sm:text-6xl font-lato bg-clip-text bg-gradient-to-tr from-blue-950 to-blue-950">
            {blog.title}
          </h1>
          <p className="max-w-xl mx-auto text-center text-slate-700">
            {blog.excerpt}
          </p>
        </div>
        <div className="max-w-xl mx-auto h-[1px] w-full my-10 bg-slate-200"></div>
        <div className="flex flex-col items-center justify-center tracking-tight text-slate-800">
          <div className="text-xl font-bold text-blue-950">
            Çetinkal Sigorta tarafından
          </div>
          <div className="font-medium text-blue-500 mt-0.5">
            {formatDistance(subDays(new Date(blog.created_at), 0), new Date(), {
              addSuffix: true,
              locale: tr,
            })}{" "}
            paylaşıldı.
          </div>
          <div className="relative w-full h-[30rem] mt-12">
            <Image
              src={blog.feature_image}
              fill
              className="object-cover rounded-md"
              alt="Blog Kapak Fotoğrafı"
            />
            <div
              className="absolute z-20 text-sm font-medium prose -bottom-8 prose-a:text-blue-500 prose-a:decoration-blue-500"
              dangerouslySetInnerHTML={{ __html: blog.feature_image_caption }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: blog?.html }}
      ></div>
    </article>
  );
}
