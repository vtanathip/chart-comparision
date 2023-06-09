import LoginPage from '../pageobjects/login.page'
import UserPage from '../pageobjects/user.page'
const config = require('config');
const username = config.get('tradingview.username');
const password = config.get('tradingview.password');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.maximize()
        await LoginPage.login(username, password);
        
        await UserPage.checkTitle()
        await UserPage.openUserProfile()
        await UserPage.redirectToSuperChart()
    })
})


