chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({'url': "https://s.2.taobao.com/list/list.htm?q=%CA%D6%BB%FA&search_type=item&app=shopsearch"}, function (tab) {
    })
})