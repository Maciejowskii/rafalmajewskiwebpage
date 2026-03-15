"use server";

import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/session";
import { redirect } from "next/navigation";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/(^-|-$)+/g, ""); // Remove leading/trailing dashes
}

export async function createPostAction(prevState: any, formData: FormData) {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    return { error: "Brak autoryzacji." };
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const status = formData.get("status") as string; // 'draft' or 'published'

  if (!title || !content) {
    return { error: "Tytuł i treść są wymagane." };
  }

  let slug = generateSlug(title);
  
  // Check if slug exists to avoid unique constraint error
  const existingPost = await prisma.post.findUnique({ where: { slug } });
  if (existingPost) {
    slug = `${slug}-${Date.now().toString().slice(-4)}`;
  }

  try {
    await prisma.post.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        publishedAt: status === "published" ? new Date() : null,
        authorId: session.userId,
      },
    });
  } catch (error) {
    console.error("Failed to create post:", error);
    return { error: "Wystąpił błąd podczas zapisywania posta do bazy." };
  }

  redirect("/admin/posts");
}
