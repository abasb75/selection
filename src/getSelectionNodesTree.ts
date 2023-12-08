import getSelectionContainer from "./getSelectionContainer";
import getSelectionNodes from "./getSelectionNodes";
import { SelectionElement, SelectionElementTree } from "./types";

function getSelectionNodesTree():SelectionElementTree|undefined{

    const container = getSelectionContainer();
    const nodes:SelectionElement[] = getSelectionNodes();


    const selection = window.getSelection();
    if(!selection || !selection.rangeCount){
        return undefined;
    }

    if(selection?.anchorNode === selection?.focusNode){
        return {
            element:container,
            childrens:[{
                // @ts-ignore: Unreachable code error
                element:selection?.anchorNode,
                childrens:undefined,
                containsNode:true,
                type:'text',
            }],
            type:'container',
        }
    }

    const tree = {
        element:container,
        containsNode:window.getSelection()?.containsNode(container as Node),
        childrens:getChilds(container,nodes),
        type:'container',
    }

    return tree;

}




function getChilds(element:SelectionElement,nodes:SelectionElement[]):SelectionElementTree[]|undefined{
    try{
        // @ts-ignore: Unreachable code error
        if(!element.childNodes || element.childNodes?.length===0){
            return undefined;
        }
        const childs = [];
        // @ts-ignore: Unreachable code error
        for(var i=0;i<element.childNodes.length;i++){
            // @ts-ignore: Unreachable code error
            if(nodes.includes(element.childNodes[i])){
                // @ts-ignore: Unreachable code error
                const containsNode = window.getSelection()?.containsNode(element.childNodes[i]);
                childs.push({
                    // @ts-ignore: Unreachable code error
                    element:element.childNodes[i],
                    containsNode,
                    // @ts-ignore: Unreachable code error
                    childrens:getChilds(element.childNodes[i],nodes),
                    type:'child',
                })
            }
        }
        return childs;
    }catch{
        return undefined;
    }
    
}

export default getSelectionNodesTree;