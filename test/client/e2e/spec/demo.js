module.exports = {
    'find answer': (browser) => {
        let link = '//*[@id="app"]/main/div/div/div[4]/div[1]/div/span/p[1]/a'
        let btn = '//*[@id="app"]/main/div/div/div[1]/button'
        browser.url('http://127.0.0.1:3000').maximizeWindow()
        browser.expect.element('body').be.present
        browser.useXpath().waitForElementVisible(link,16000)
        browser.pause(5000)
        browser.useXpath().click(link)
        browser.pause(3000)
        browser.click(btn)
    }
}
