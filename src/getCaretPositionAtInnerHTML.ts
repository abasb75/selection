function getCaretPositionAtInnerHTML(element:HTMLElement|null):number{
    if(!element){
        return -1;
    }
    const target = document.createTextNode("\u0001");
    const selection = window.getSelection();
    if(!selection || selection.rangeCount<1 ){
        return -1;
    }
    const range = selection.getRangeAt(0);
    if(!range || !range.insertNode){
        return -1;
    }
    range.insertNode(target);
    const position = element.innerHTML.indexOf("\u0001");
    target?.parentNode?.removeChild(target);
    return position;
}

export default getCaretPositionAtInnerHTML;