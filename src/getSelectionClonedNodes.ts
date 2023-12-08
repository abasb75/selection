function getSelectionClonedNodes():DocumentFragment|undefined{
    const selection = window.getSelection();
    if(!selection || selection.rangeCount<1){
        return undefined;
    }
    const range = selection.getRangeAt(0);
    return range.cloneContents();
}

export default getSelectionClonedNodes;