import getSelectionContainer from "./getSelectionContainer";
import { SelectionElement } from "./types";

function getContainerOfFocusNode():SelectionElement{
    const container = getSelectionContainer();
    if(!container){
        return undefined;
    }
    const selection = window.getSelection();
    if(!selection || !selection?.anchorNode){
        return undefined;
    }

    let focusNode:SelectionElement = selection.focusNode;
    while(container!==focusNode?.parentNode){
        focusNode = focusNode?.parentNode;
    }
    return focusNode;
}

export default getContainerOfFocusNode;