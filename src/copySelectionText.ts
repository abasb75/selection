import copy from "@abasb75/copy-to-clipboard";
import getSelectionAsString from "./getSelectionAsString";

function copySelectionText(){
    const text = getSelectionAsString();
    copy(text);
}

export default copySelectionText;