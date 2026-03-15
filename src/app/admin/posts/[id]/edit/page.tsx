import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditPostForm from "./EditPostForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <EditPostForm post={post} />
    </div>
  );
}
