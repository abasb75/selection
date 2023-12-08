import getContainerOfAnchorNode from "./getContainerOfAnchorNode";
import getContainerOfFocusNode from "./getContainerOfFocusNode";
import getSelectionContainer from "./getSelectionContainer";
import { SelectionElement } from "./types";

function getSelectionNodes():SelectionElement[]{

    const selection = window.getSelection();
    if(!selection || !selection.rangeCount){
        return [];
    }

    // if same return one of them;
    if(selection.anchorNode===selection.focusNode){
        return [selection.anchorNode];
    }


    const nodes:SelectionElement[] = [];
    const container = getSelectionContainer();
    const anchorNodeContainer = getContainerOfAnchorNode();
    const focusNodeContainer = getContainerOfFocusNode();
    if(!container || !anchorNodeContainer || !focusNodeContainer){
        return [];
    }

    // first add anchorNodeParents
    let anchorNode:SelectionElement = selection.anchorNode;
    while(anchorNode!==anchorNodeContainer){
        if(!nodes?.includes(anchorNode)){
            nodes.push(anchorNode);
        }
        if(anchorNode?.childNodes?.length 
                && selection.containsNode(anchorNode.childNodes[0]) 
                && !nodes.includes(anchorNode.childNodes[0])
        ){
        anchorNode = anchorNode.firstChild;
        }else if(anchorNode?.nextSibling){
            anchorNode = anchorNode.nextSibling;
        }else{
            anchorNode = anchorNode?.parentNode;
        }
    }
    nodes.push(anchorNodeContainer);


    let focusNode:SelectionElement = selection.focusNode;
    while(focusNode!==focusNodeContainer){
        if(!nodes.includes(focusNode)){
            nodes.push(focusNode);
        }
        if(focusNode?.childNodes?.length 
            && selection.containsNode(focusNode.childNodes[0]) 
            && !nodes.includes(focusNode.childNodes[0])
        ){
            focusNode = focusNode.firstChild;
        }else if(focusNode?.previousSibling){
            focusNode = focusNode.previousSibling; 
        }else{
            focusNode = focusNode?.parentNode;
        }
    }
    nodes.push(focusNodeContainer);


    // find nodes between focus and anchor containers
    let isAnchorFind = false;
    // @ts-ignore: Unreachable code error
    for(let i=0;i<container.childNodes.length;i++){
        // @ts-ignore: Unreachable code error
        if(container.childNodes[i]===focusNodeContainer){
            break;
        }
        if(!isAnchorFind){
            // @ts-ignore: Unreachable code error
            if(container.childNodes[i]===anchorNodeContainer){
                isAnchorFind=true;
            }
        }else{
            // @ts-ignore: Unreachable code error
            getChildsNode(container.childNodes[i],nodes);
        }
    }

    return nodes;
    
}

function getChildsNode(element:SelectionElement,nodes:SelectionElement[]){
    nodes?.push(element);
    // @ts-ignore: Unreachable code error
    if(element && element.childNodes){
        // @ts-ignore: Unreachable code error
        for(let i=0;i<element.childNodes.length;i++){
            // @ts-ignore: Unreachable code error
            getChildsNode(element.childNodes[i],nodes);
        }
    }
    
}

export default getSelectionNodes;