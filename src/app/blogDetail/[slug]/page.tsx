// app/[slug]/page.tsx

import Detail from '@/app/components/detail';
import CommentsSection from '@/app/components/comment';
import { client } from '@/sanity/lib/client';

export default async function Page({ params }: { params: { slug: string } }) {
  const fetchData = await client.fetch(`*[_type == 'blogs']{
    title,
    "imageUrl": image.asset->url,
    "currentSlug": slug.current,
    sd,
    ld
  }`);
  const data = fetchData.find((item: any) => item.currentSlug === params.slug);

  if (!data) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <Detail data={data} />
      <CommentsSection />
    </div>
  );
}
