import copy from "@abasb75/copy-to-clipboard";
import getSelectionAsHTML from "./getSelectionAsHtml";
import getSelectionAsString from "./getSelectionAsString";

function copySelectionTextStyle(){
    if(navigator?.clipboard){
        const html = getSelectionAsHTML();
        const element = document.createElement('div');
        element.innerHTML = html;
        const htmlBlob = new Blob([html], {type: 'text/html'});
        const text = element.textContent ?? '';
        const textBlob = new Blob([text], {type: 'text/plain'});
        const clipboardItem = new ClipboardItem({
            [htmlBlob.type]: htmlBlob,
            [textBlob.type]: textBlob,
        });
      
        // modern browser
        return navigator.clipboard.write([clipboardItem]);
    }
    // for old browser
    copy(getSelectionAsString())
    
}

export default copySelectionTextStyle;
