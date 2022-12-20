const btnSave = document.getElementById("btn-save");
const btnCur = document.getElementById("btn-cur");
const input = document.getElementById("input");
const clink = document.getElementById("clink");

if(!chrome.storage.local.get(['clink']))
    chrome.storage.local.set({'clink': 'chrome://new-tab-page'});

chrome.storage.local.get('clink', (res) => {
    clink.textContent = res.clink;
});

// saving to storage & document
const save = () => {
    console.log(clink.textContent);
    console.log(input.value);
    clink.textContent = input.value;

    chrome.storage.local.set({'clink': clink.textContent});

    input.value = '';
};
const logIt = (event) => {
    let code = event.keyCode;
    if(code == 13)
    {
        if(input.value.length == 0)
            saveCur();
        else
            save();
    }
};

const saveCur = async () => {
    let [tab] = await chrome.tabs.query({
        lastFocusedWindow: true,
        active: true
    });

    clink.textContent = tab.url;
    chrome.storage.local.set({'clink': clink.textContent});
    return tab.url;
}

input.addEventListener('keyup', logIt);     //  Enter button listener
btnSave.addEventListener('click', save);
btnCur.addEventListener('click', saveCur);