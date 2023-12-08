import getCaretPositionAtInnerHTML from "./getCaretPositionAtInnerHTML";
import getSelectionAsHTML from "./getSelectionAsHtml";

import getCaretCharacterOffsetWithin from "./getCaretCharacterOffsetWithin";
import getSelectionAsString from "./getSelectionAsString";

import getSelectionClonedNodes from "./getSelectionClonedNodes";
import getSelectionContainer from "./getSelectionContainer";
import getSelectionNodes from './getSelectionNodes'
import getContainerOfAnchorNode from "./getContainerOfAnchorNode";
import getContainerOfFocusNode from "./getContainerOfFocusNode";
import getSelectionNodesTree from "./getSelectionNodesTree";
import copySelectionText from "./copySelectionText";
import copySelectionHTML from "./copySelectionHTML";
import copySelectionTextStyle from "./copySelectionTextStyle";

const selectionJS = {
    
    /* html */
    caretPosition:getCaretPositionAtInnerHTML,
    asHTML:getSelectionAsHTML,

    /** text */
    getCaretCharacterOffsetWithin,
    asString:getSelectionAsString,

    /** nodes */
    getContainer:getSelectionContainer,
    getClonedNodes:getSelectionClonedNodes,
    getNodes:getSelectionNodes,
    getAnchorContainer:getContainerOfAnchorNode,
    getFocusContainer:getContainerOfFocusNode,
    getTree:getSelectionNodesTree,

    /**copy & paste */
    copyText:copySelectionText,
    copyStyledText:copySelectionTextStyle,
    copyHTML:copySelectionHTML,

}



export default selectionJS;