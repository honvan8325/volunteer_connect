'use client'

import { cn } from '@/lib/utils'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

interface TiptapProps {
	className?: string
	onChange?: (value: string) => void
	value?: string
	placeholder?: string
}

const Tiptap = ({
	className,
	onChange,
	value = '',
}: TiptapProps) => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: value,
		editorProps: {
			attributes: {
				class: cn(
					'prose prose-sm w-full rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 max-w-none',
					className,
				),
			},
		},
		onUpdate: ({ editor }) => {
			const html = editor.getHTML()

			if (onChange) {
				onChange(html)
			}
		},
	})

	useEffect(() => {
		if (editor && value) {
			editor.commands.setContent(value)
		}
	}, [editor, value])

	return (
		<>
			{editor && (
				<BubbleMenu
					className='bg-white border text-sm border-slate-100 py-1 px-4 space-x-3 rounded-md shadow-md'
					tippyOptions={{ duration: 100 }}
					editor={editor}
				>
					<button
						type='button'
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={cn(
							editor.isActive('bold') && 'is-active',
							'font-medium',
						)}
					>
						Bold
					</button>
					<button
						type='button'
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={cn(editor.isActive('italic') && 'is-active', 'italic')}
					>
						Italic
					</button>
					<button
						type='button'
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={cn(
							editor.isActive('strike') && 'is-active',
							'line-through',
						)}
					>
						Strike
					</button>
				</BubbleMenu>
			)}

			<EditorContent editor={editor} />
		</>
	)
}

export default Tiptap
