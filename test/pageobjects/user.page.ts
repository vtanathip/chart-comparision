import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get titleAlert () {
        return $('h1[class*="title"]');
    }

    public get btnPublish () {
        return $('div[id="header-toolbar-publish-desktop"]')
    }

    public get btnUserProfile () {
        return $('button[aria-label="Open user menu"] > img')
    }

    public get spanUsername (){
        return $('span[class*="username"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async checkTitle () {
        await (await this.titleAlert).waitForDisplayed({ timeout: 30000 });
    }

    public async openUserProfile () {
        await (await this.btnUserProfile).waitForDisplayed({ timeout: 30000 }).then(async()=>{await this.btnUserProfile.click()});
        await (await this.spanUsername).waitForDisplayed({ timeout: 30000 }).then( async () => {(await ((await this.spanUsername).getText())).includes("vtanathip")});
    }

    public async redirectToSuperChart(){
        super.open('https://www.tradingview.com/chart/z3Qr0Vl3/');
        await (await this.btnPublish).waitForDisplayed({ timeout: 30000 });
    }
}

export default new UserPage();
