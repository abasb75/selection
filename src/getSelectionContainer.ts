import { SelectionElement } from "./types";

function getSelectionContainer():SelectionElement{
    const selection = window.getSelection();
    if(!selection){
        return undefined;
    }

    // if anchorNode and focusNode are #text
    if(selection.anchorNode===selection.focusNode){
        return selection.anchorNode?.parentNode;
    }

    let anchorNode = selection.anchorNode;
    while(anchorNode){
        let focusNode = selection.focusNode;
        while(focusNode){
            if(anchorNode===focusNode){
                return focusNode;
            }
            focusNode = focusNode.parentNode;
        }
        anchorNode = anchorNode.parentNode;
    }

    return undefined;
}

export default getSelectionContainer;