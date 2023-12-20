import puppeteer from "puppeteer";

export async function create(req, res) {
    const { html } = req.body

    try {
        //launch the browser
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/google-chrome',
            args: [
                '--disable-setuid-sandbox',
                '--no-sandbox'
            ]
        });
        //open a new blank page
        const page = await browser.newPage()

        //Setting the content on the page
        await page.setContent(html)

        //Creating the pdf
        await page.pdf({
            path: '/backend/src/pdf/meupdf.pdf',
            format: 'A4'
        })

        //Closing the browser
        await browser.close()

        res.status(201).json({ message: "PDF Criado com sucesso!" })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}