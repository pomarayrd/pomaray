import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import type { ChangeEvent } from "react";

interface MarkdownEditorProps {
	onChange: (value: string) => void;
	value: string;
}

function MarkdownEditor({
	onChange,
	value
}: MarkdownEditorProps) {

	const handleChange = (newValue = "", e?: ChangeEvent<HTMLTextAreaElement>) => onChange(newValue);
	return (
		<div>
			<MDEditor className="min-h-[400px]" data-color-mode="light" value={value} onChange={handleChange} />
		</div>
	);
}

export default MarkdownEditor;