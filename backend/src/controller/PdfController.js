import path from 'node:path';
import { readFileSync } from 'node:fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

export async function create(req, res) {
    const { html } = req.body
    try {
        //Getting the current file path
        const currentFilePath = fileURLToPath(import.meta.url);

        //Getting the current directory name 
        const currentDir = dirname(currentFilePath);

        //Getting the root of the project
        const projectRoot = path.join(currentDir, '..', '..', '..');

        //Path to frontend assets
        const assetsPath = path.join(projectRoot, 'frontend', 'src', 'assets');

        //Making the join
        const imagePath = path.join(assetsPath, 'logo.jpg');

        //Launch the browser
        const browser = await puppeteer.launch({ headless: 'new' });

        //Open a new blank page
        const page = await browser.newPage();

        const finalHTML =
            `<img src="data:image/jpeg;base64,${readFileSync(imagePath).toString('base64')}" alt="alt text" />${html}`

        //Setting the content on the page
        await page.setContent(finalHTML);

        //Creating the pdf
        await page.pdf({
            path: 'src/pdf/meupdf.pdf',
            format: 'A4'
        });

        //Closing the browser
        await browser.close();

        res.status(201).json({ message: "PDF Criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}