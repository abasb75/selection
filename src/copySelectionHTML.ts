import copy from "@abasb75/copy-to-clipboard";
import getSelectionAsHTML from "./getSelectionAsHtml"

function copySelectionHTML(){
    copy(getSelectionAsHTML());
}

export default copySelectionHTML;
