import './../../styles/Menubar.module.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import {BiBold, BiUndo, BiRedo} from 'react-icons/bi'
import {FiItalic} from 'react-icons/fi'
import {GrStrikeThrough} from 'react-icons/gr'
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('bold') ? 'is-active' : ''}`}
      >
       <BiBold/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('italic') ? 'is-active' : ''}`}
      >
        <FiItalic/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('strike') ? 'is-active' : ''}`}
      >
        <GrStrikeThrough/>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('code') ? 'is-active' : ''}`}
      >
        code
      </button> */}
      {/* <button 
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
      onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button> */}
      {/* <button 
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
      onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('paragraph') ? 'is-active' : ''}`}
      >
        paragraph
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
      >
        h2
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}`}
      >
        h4
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}`}
      >
        h6
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('bulletList') ? 'is-active' : ''}`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('orderedList') ? 'is-active' : ''}`}
      >
        ordered list
      </button> */}
      {/* <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('blockquote') ? 'is-active' : ''}`}
      >
        blockquote
      </button> */}
      {/* <button 
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
      onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button> */}
      {/* <button 
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
      onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}
      <button
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <BiUndo/>
      </button>
      <button
      className="border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
       <BiRedo/>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={`border-[1px] rounded-md border-lightgray p-1 m-1 hover:bg-black hover:text-white ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}`}
      >
        purple
      </button> */}
    </>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: `
      
    `,
  })

  return (
    <div className="border-[1px] rounded-md border-lightgray">
      <MenuBar 
      className="border-[1px]"
      editor={editor} />
      <EditorContent
      className="p-2 focus:outline-none"
       editor={editor} />
    </div>
  )
}