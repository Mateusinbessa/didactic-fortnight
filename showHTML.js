function showHTML() {
    let myContent = tinymce.get('mytextarea').getContent()
    document.getElementById("show-result").value = myContent
}
