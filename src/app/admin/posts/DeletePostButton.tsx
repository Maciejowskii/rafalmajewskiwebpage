"use client";

import { Trash2 } from "lucide-react";
import { deletePostAction } from "./actions";
import { useState } from "react";

export default function DeletePostButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Czy na pewno chcesz usunąć ten wpis?")) {
      return;
    }

    setIsDeleting(true);
    try {
      await deletePostAction(id);
    } catch (error) {
      alert("Błąd podczas usuwania wpisu.");
      setIsDeleting(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-700 rounded-lg transition-colors disabled:opacity-50"
      title="Usuń"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
