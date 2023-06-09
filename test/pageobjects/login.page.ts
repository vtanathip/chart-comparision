import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[id="id_username"]');
    }

    public get inputPassword () {
        return $('input[id="id_password"]');
    }

    public get btnUserSetting () {
        return $('.tv-header__inner > .tv-header__area--user > button:first-child');
    }

    public get btnSignin () {
        return $('button[data-name="header-user-menu-sign-in"]');
    }

    public get btnSigninWithEmail () {
        return $('button[name="Email"]')
    }

    public get btnSubmitSignin () {
        return $('button[class*="submit"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await (await this.btnUserSetting).waitForExist({ timeout: 30000 }).then(async()=>{await this.btnUserSetting.click()});
        await (await this.btnSignin).waitForExist({ timeout: 30000 }).then(async ()=>{await this.btnSignin.click()});
        await (await this.btnSigninWithEmail).waitForExist({ timeout: 30000 }).then(async ()=>{await this.btnSigninWithEmail.click()});
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmitSignin).waitForExist({ timeout: 30000 }).then(async ()=>{ await this.btnSubmitSignin.click()});
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

export default new LoginPage();
