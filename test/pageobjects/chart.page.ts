import Page from './page';
const sharp = require('sharp');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ChartPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get chartDisplay () {
        return $('/html/body/div[2]/div[5]/div[2]/div[1]/div/table/tr[1]/td[2]/div');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async captureChartToImage () {
        await (await this.chartDisplay).waitForClickable({timeout:30000}).then(async () => {await (await this.chartDisplay).doubleClick()});
        
        // Get the dimensions of the element
        const element = await (this.chartDisplay);
        const base64Image = await element.takeElementScreenshot(element.elementId);
        
        // Convert base64 screenshot data to a buffer
        const screenshotBuffer = Buffer.from(base64Image, 'base64');

        // Resize the image using sharp
        sharp(screenshotBuffer).resize(800, 600, {fit: 'inside'}).sharpen().toFile('resized_image.png', (err: any, info: any) => {
            if (err) {
                console.error('Error occurred:', err);
            } else {
                console.log('Image resized successfully.');
                console.log('Output:', info);
            }
        });
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }

    public maximize(): void {
        super.maximize();
    }
}

export default new ChartPage();
