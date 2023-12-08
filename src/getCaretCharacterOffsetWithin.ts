function getCaretCharacterOffsetWithin(element:Element|undefined):number {
    if(!element){
        return -1;
    }
    const selection = window.getSelection();
    if(!selection || !selection.rangeCount ){
        return -1;
    }
    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    return preCaretRange.toString().length;
}


export default getCaretCharacterOffsetWithin;