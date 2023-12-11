import puppeteer from "puppeteer";

export async function create(req, res) {
    //Esse valores não estão sendo recebidos
    const { html } = req.body

    try {
        //launch the browser
        const browser = await puppeteer.launch({ headless: 'new' })

        //open a new blank page
        const page = await browser.newPage()

        //Setting the content on the page
        await page.setContent(html)

        //Creating the pdf
        await page.pdf({
            path: './src/pdf/meupdflindao.pdf',
            format: 'A4'
        })

        //Closing the browser
        await browser.close()

        res.status(201).json({ message: "PDF Criado com sucesso!" })
    } catch (e) {
        res.status(500).json({ message: "Erro!" })
    }
}