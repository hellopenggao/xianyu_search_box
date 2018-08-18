chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({'url': "https://2.taobao.com"}, function (tab) {
    })
})