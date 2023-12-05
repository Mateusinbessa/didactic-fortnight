function myLoad() {
    var myContent = localStorage.getItem("myContent")
    tinymce.get('mytextarea').setContent(myContent)
}