module.exports = class Page {
    open(path){
        browser.url(path);
    }
    close(){
        // close the browser
    }
}