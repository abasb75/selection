type SelectionElement = Node|PannerNode|HTMLElement|undefined|null;

interface SelectionElementTree{
    element:SelectionElement,
    type?:string,
    childrens:SelectionElementTree[]|undefined,
    containsNode?:boolean,
}

export type {
    SelectionElement,
    SelectionElementTree,
}