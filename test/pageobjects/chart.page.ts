import Page from './page';

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
