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
      className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 disabled:opacity-50"
      title="Usuń"
    >
      <Trash2 className="w-5 h-5 transition-transform group-hover:scale-110" />
    </button>
  );
}
