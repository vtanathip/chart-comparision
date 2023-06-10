import { LooksSameResult } from 'looks-same';
import ChartPage from '../pageobjects/chart.page';
import LoginPage from '../pageobjects/login.page'
import UserPage from '../pageobjects/user.page'
const config = require('config');
const username = config.get('tradingview.username');
const password = config.get('tradingview.password');

describe('Tradingview Chart Comparision', () => {
    it('False postive test case for compare real graph', async () => {
        await LoginPage.open()
        await LoginPage.maximize()
        await LoginPage.login(username, password);

        await UserPage.checkTitle()
        await UserPage.openUserProfile()
        await UserPage.redirectToSuperChart()

        await ChartPage.captureChartToImage()
        const result:LooksSameResult = await ChartPage.performImageComparison('baseImage.png','resizedImage.png')
        await expect(result.equal).toBe(false)
    })

    it('[DUMMY] should pass compare image', async () => {
        const result:LooksSameResult = await ChartPage.performImageComparison('fakeBaseImage.jpg','fakeResizedImage.jpg')
        await expect(result.equal).toBe(true)
    })
})


