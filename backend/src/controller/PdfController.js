import { readFileSync } from 'node:fs'
import puppeteer from 'puppeteer';

export async function create(req, res) {
    const { html } = req.body
    try {
        const imagePath = "C:\\Users\\mateus.bessa\\Desktop\\Projetos\\PDF-Formatado\\pdf-formatter\\frontend\\src\\assets\\logo.jpg"

        const browser = await puppeteer.launch({ headless: 'new' });

        const page = await browser.newPage();

        const finalHTML = `
            <img style=
                "width: 100px; 
                 height: 100px; 
                 display: block; 
                 margin: auto;" 
                 src="data:image/jpg;base64,${readFileSync(imagePath).toString('base64')}" 
            />
            ${html}
        `;

        await page.setContent(finalHTML);

        await page.pdf({
            path: 'src/pdf/meupdf.pdf',
            format: 'A4',
            printBackground: true
        });

        await browser.close();

        res.status(201).json({ message: "PDF Criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}