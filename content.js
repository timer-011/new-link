
chrome.storage.local.get('clink').then((mssg) => {
    console.log(mssg);
    return mssg.clink;
})

//  executeScript & tabs.create are not allowed here