'use client'

import React, { useEffect, useState } from 'react';
import Detail from '@/app/components/detail';
import CommentsSection from '@/app/components/comment';
import { client } from '@/sanity/lib/client';

// Define types for the data and params
interface BlogData {
  title: string;
  imageUrl: string;
  currentSlug: string;
  sd: string;
  ld: string;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    // Unwrap the params Promise using React.use()
    const getSlug = async () => {
      const unwrappedParams = await params; // Wait for params to resolve
      setSlug(unwrappedParams.slug); // Set the slug after unwrapping
    };
    
    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return; // Wait for slug to be available

    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'blogs']{
          title,
          "imageUrl": image.asset->url,
          "currentSlug": slug.current,
          sd,
          ld
        }`);
        const blogData = result.find((item: BlogData) => item.currentSlug === slug);
        setData(blogData || null);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Blog not found!</div>;

  return (
    <div>
      <Detail data={data} />
      <CommentsSection />
    </div>
  );
};

export default Page;
