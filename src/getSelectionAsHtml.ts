function getSelectionAsHTML():string{
    
    const selection = window.getSelection();
    if(!selection || selection.rangeCount<1){
        return "";
    }
    if(selection.toString().length<1){
        return "";
    }
    
    const div = document.createElement("div");
    for (var i = 0, len = selection.rangeCount; i < len; ++i) {
        div.appendChild(selection.getRangeAt(i).cloneContents());
    }
    return div.innerHTML;
}


export default getSelectionAsHTML;