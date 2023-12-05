const puppetter = require('puppeteer');

//wrapping all code in a async function
(async function () {
    try {
        //launch the browser
        const browser = await puppetter.launch({headless: 'new'})

        //open a new blank page
        const page = await browser.newPage()

        //Storing the content
        const content = `<h1>Testuando<span style="color: rgb(224, 62, 45);"><strong>editor</strong></span></h1>
        <p><strong>Testando</strong></p>
        <p>1) <em>Oi</em></p>
        <p>2) <span style="color: rgb(224, 62, 45);">Ol&aacute;</span></p>`

        //Setting the content on the page
        await page.setContent(content)
    
        //Creating the pdf
        await page.pdf({
            path: './output.pdf',
            format: 'A4'
        })
        
        console.log("Done creating pdf")

        //Closing the browser
        await browser.close()

        process.exit()

    } catch (e) {
        console.log(e)
    }
})() 