"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function RichTextEditor({ value, onChange }: { value: string, onChange: (val: string) => void }) {
  const modules = {
    toolbar: [
      [{ header: [2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"],
    ],
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={onChange} 
        modules={modules}
        className="h-80 mb-12"
      />
    </div>
  );
}
