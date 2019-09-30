// To explain my methods I first set a onclick function to fire when one of the present "Memory Options"
// buttons were pressed (they all contained the attribute name "storage-selector"). From there the function
// setLocalStorage is fired when any of the buttons are clicked; the function collects the phone name by
// running a querySelector for the 2nd item in the h1 query index, collects the phone price by running a
// specific class name and the phone memory selected is recieved by looking for the target button that was clicked,
// to fire the function.

// The entire function is only set to run once a timer of 1s has passed, this is because once a different "Memory Option"
// is clicked, the innertHTML is changed to reflect a different price and without the 1s delay, the function collects
// the unchanged innerHTML and thus the incorrect price (unless the defauly option is clicked first).

//The function pushes all phone variables into an array called phoneInfo so that when I set all the collected
// variables as local storage they can be kept under 1 key value pair

function setLocalStorage (memoryButton){
    window.setTimeout(()=>{
        phoneInfo =[]
        var phoneName = document.querySelectorAll("h1")[1].innerText
        var phonePrice = document.getElementsByClassName('styledComponents__DeviceRetailPriceAmount-sc-56780i-5 bUvSJE')[0].innerHTML;
        var phoneMemory = memoryButton.target.innerText
        phoneInfo.push(phoneName, phonePrice, phoneMemory)
        
        localStorage.setItem("phoneInfoSelected", phoneInfo.join(", "))
        }, 1000)
}

document.getElementsByName('storage-selector').forEach((selector)=>{
    selector.addEventListener('click',setLocalStorage)
})

// Please run code on terminal, press any of the Memory Option buttons and then run localStorage.getItem("phoneInfoSelected") 
// on your console

// Code specific to https://www.telus.com/en/mobility/configure?product=iphone-11-pro-max&sku=NLAIP11PM64GR page
