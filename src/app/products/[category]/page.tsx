import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "../ProductsClient";
import { ALL_CATEGORIES, getCategorySlug, getCategoryFromSlug } from "@/data/products";
import { notFound } from "next/navigation";

// Define the static paths to generate at build time
export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    category: getCategorySlug(cat),
  }));
}

// Generate specific SEO metadata for each category page
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = getCategoryFromSlug(resolvedParams.category);
  
  if (!categoryName || categoryName === "All") {
    return {
      title: "Products Not Found",
    };
  }

  return {
    title: `${categoryName} — Wholesale Supplier in Hubballi | IBCC`,
    description: `Shop our wide range of industrial ${categoryName.toLowerCase()} in Hubballi. Authorised supplier for top brands with immediate availability.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryName = getCategoryFromSlug(resolvedParams.category);
  
  if (!categoryName || categoryName === "All") {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ProductsClient initialCategorySlug={resolvedParams.category} />
    </Suspense>
  );
}
