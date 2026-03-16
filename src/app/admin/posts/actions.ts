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
  const imageUrl = formData.get("imageUrl") as string;
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
        imageUrl: imageUrl || null,
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

export async function updatePostAction(prevState: any, formData: FormData) {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    return { error: "Brak autoryzacji." };
  }

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const excerpt = formData.get("excerpt") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const seoTitle = formData.get("seoTitle") as string;
  const seoDescription = formData.get("seoDescription") as string;
  const status = formData.get("status") as string; // 'draft' or 'published'

  if (!id || !title || !content) {
    return { error: "ID, tytuł i treść są wymagane." };
  }

  try {
    const existingPost = await prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      return { error: "Nie znaleziono posta." };
    }

    // Only allow author or admin (if we had roles) to edit. 
    // For now, any auth user can edit, but we check if it exists.

    await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        excerpt: excerpt || null,
        imageUrl: imageUrl || null,
        seoTitle: seoTitle || null,
        seoDescription: seoDescription || null,
        publishedAt: status === "published" ? (existingPost.publishedAt || new Date()) : null,
      },
    });
  } catch (error) {
    console.error("Failed to update post:", error);
    return { error: "Wystąpił błąd podczas aktualizacji posta." };
  }

  redirect("/admin/posts");
}

export async function deletePostAction(id: string) {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    throw new Error("Brak autoryzacji.");
  }

  try {
    await prisma.post.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Failed to delete post:", error);
    throw new Error("Wystąpił błąd podczas usuwania posta.");
  }

  redirect("/admin/posts");
}
