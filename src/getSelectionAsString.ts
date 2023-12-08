function getSelectionAsString():string{
    const selection = window.getSelection();
    if(!selection){
        return "";
    }
    return selection.toString();
}

export default getSelectionAsString;