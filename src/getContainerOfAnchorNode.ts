import getSelectionContainer from "./getSelectionContainer";
import { SelectionElement } from "./types";

function getContainerOfAnchorNode():SelectionElement{
    const container = getSelectionContainer();
    if(!container){
        return undefined;
    }
    
    const selection = window.getSelection();
    if(!selection || !selection?.anchorNode){
        return undefined;
    }
    let anchorNode:SelectionElement = selection.anchorNode;
    while(container!==anchorNode?.parentNode){
        anchorNode = anchorNode?.parentNode;
    }
    return anchorNode;
}

export default getContainerOfAnchorNode;