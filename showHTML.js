const puppeteer = require('puppeteer')

function showHTML() {
    var myContent = tinymce.get('mytextarea').getContent()
    document.getElementById("show-result").value = myContent
}
