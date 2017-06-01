module.exports = {
    'find answer': (browser) => {
        let link = '//*[@id="app"]/div/div[2]/div[1]/a'
        browser.url('http://127.0.0.1:3000').maximizeWindow()
        browser.expect.element('body').be.present
        browser.useXpath().waitForElementVisible(link,16000)
        browser.pause(5000)
        browser.useXpath().click(link)
    }
}
