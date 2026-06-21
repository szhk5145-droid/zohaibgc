import { serviceCategories } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "Service Not Found" };
  return {
    title: `${cat.title} ${cat.highlight} — Zohaib Global`,
    description: cat.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = serviceCategories.find((c) => c.slug === slug);
  if (!cat) notFound();
  return <ServiceDetailClient category={cat} />;
}
