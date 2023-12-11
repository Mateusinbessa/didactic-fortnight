import { useRef } from 'react'
import { Editor } from "@tinymce/tinymce-react"
import style from "./App.module.css"

function App() {
  const editorRef = useRef()

  async function onClickHandler() {
    const html = editorRef.current.getContent()

    const url = "http://localhost:3000/pdf/create"

    const content = {
      html
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(content)
      })
      console.log("Deu certo!")
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
      />

      <button className={style.button} type='button' onClick={onClickHandler}>Enviar</button>
    </>
  )
}

export default App
