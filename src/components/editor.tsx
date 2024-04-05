"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: "<h1>Hola mundo!</h1>",
		editorProps: {
			attributes: {
				class:
					"border border-1 p-2 outline-none min-h-[150px] rounded-xl shadow-sm",
			},
		},
	});

	return <EditorContent editor={editor} />;
};

export default Tiptap;

/* 
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapProps {
	description?: string;
	onChange?: (richText: string) => void;
}

const Tiptap = ({ description, onChange }: TiptapProps) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: description,
		editorProps: {
			attributes: {
				class: "border border-1 py-6 px-2 min-h-[150px] rounded-xl shadow-sm",
			},
		},
		onUpdate({ editor }) {
			onChange?.(editor.getHTML());
			console.log(editor.getHTML());
		},
	});

	return <EditorContent editor={editor} />;
};

export default Tiptap;

*/
