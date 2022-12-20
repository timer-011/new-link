//  basically it works with files not with functions

chrome.commands.onCommand.addListener((command, tab) => {

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    }).then((res) => {
        // console.log(res);        //  this line does not work here
        return chrome.tabs.create({
            active: true,
            url: res[0].result
        });
    });

    // --------------------------------------------------working-----------------------------------
    // chrome.scripting.executeScript(
    //     {
    //         target: {tabId: tab.id},
    //         files: ['content.js']
    //     },
    //     (injectionResults) => {  
            
    //         chrome.tabs.create({
    //             active: true,
    //             url: injectionResults[0].result
    //         });
    //     });
    // });

            //  NOT WORKED

// -------------------------------------------------------------------------------------
    // let link = {clink: 'chrome://new-tab-page'};

    // const updateLink = () => {
    //     let result = {clink: 'https://web.whatsapp.com/'};
    //     chrome.storage.local.get('clink').then((res) => {
    //         result.clink = res.clink;
    //         console.log(res);
    //         return res.clink;
    //     })
    //     console.log(result.clink)
    //     return result.clink;
    // };
// -------------------------------------------------------------------------------------    
    // chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     func: updateLink
    // }).then((res) => {
        
    //     chrome.tabs.create({
    //         active: true,
    //         url: res.result
    //     });
    // }).catch((err) => {
    //     console.log(err);
    // });

});
// chrome://new-tab-page