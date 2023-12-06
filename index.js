const puppetter = require('puppeteer');

//wrapping all code in a async function
(async function () {
    try {
        //launch the browser
        const browser = await puppetter.launch({headless: 'new'})

        //open a new blank page
        const page = await browser.newPage()

        //Storing the content
        const content = `<h1><span style="color: rgb(45, 194, 107);">Testando </span><span style="color: rgb(224, 62, 45);">editor</span></h1>
        <p><span style="color: rgb(224, 62, 45);">Funciona?</span></p>`

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