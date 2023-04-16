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

    </>
  )
}

export default ({placeholder}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "overflow-none outline-none text-[0.875rem] font-[400] leading-[1.5rem] text-[#1F2937] placeholder-[#9CA3AF] overflow-x-auto overflow-y-auto",
      }
    },
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
 
  <h1>${placeholder}</h1>

    `,
  })

  return (
    <div className="border-[1px] rounded-md border-lightgray h-full">
      <MenuBar 
      className="border-[1px]"
      editor={editor} />
      <EditorContent
      className="p-2 outline-none overflow-auto"
       editor={editor} />
    </div>
  )
}