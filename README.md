



# Installation :

install with command :
```sh
npm i @abasb75/selection-js
```

# copy selected text
`copyText()` used for copy selected text to user clipboard:
<image src="https://github.com/abasb75/selection-js/blob/master/assets/copy-text.gif" alt="selection.js">

```javascript
import slection from "selection-js";
...
<button onClick={e=>selection.copyText()}>Copy Selected Text</button>
...

```

# copy selected text with style
`copyStyledText()` used for copy selected text with style to user clipboard:

<image src="https://github.com/abasb75/selection-js/blob/master/assets/copy-styled-text.gif" alt="selection.js">

```javascript
import slection from "selection-js";
...
<button onClick={e=>selection.copyStyledText()}>Copy Selected Text</button>
...

```

# copy selected text with style
`copyHTML()` used for getting copy of html of selected text to user clipboard:

<image src="https://github.com/abasb75/selection-js/blob/master/assets/copy-html.gif" alt="selection.js">

```javascript
import slection from "selection-js";
...
<button onClick={e=>selection.copyHTML()}>Copy HTML</button>
...

```

# Getting Container of selected text
`getContainer()` can be used to get the container element:

```javascript
import slection from "selection-js";
...
const container = selection.getContainer();
...

```


# getAnchorContainer
Use `getAnchorContainer()` to get the child of `container`, which is the parent of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Selection/anchorNode">anchorNode</a>.

```javascript
import slection from "selection-js";
...
const anchorContainer = selection.getAnchorContainer();
...


```


# getFocusContainer
Use `getFocusContainer()` to get the child of `container`, which is the parent of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Selection/focusNode">focusNode</a>.

```javascript
import slection from "selection-js";
...
const anchorContainer = selection.getFocusContainer();
...


```

# getClonedNodes

`getClonedNodes()` gives a tree of the nodes of the selected part of the page. The nodes of the tree aren't linked to the `DOM`

```javascript
import slection from "selection-js";
...
const clonedTree = selection.getClonedNodes();
...

```

# getTree

`getTree()` gives a tree of the nodes of the selected part of the page. The nodes of the tree are linked to the `DOM`

```javascript
import slection from "selection-js";
...
const tree = selection.getTree();
...

```

# getNodes

`getNodes()` gives an array of the nodes of the selected part of the page. The nodes of the tree are linked to the `DOM`

```javascript
import slection from "selection-js";
...
const nodes = selection.getNodes();
...

```


# asString

`asString()` returns a string of selected part of web page!

```javascript
import slection from "selection-js";
...
const nodes = selection.asString();
// result: left-to-right or right-to-left
...

```

# asHTML

`asHTML()` returns a string include html of selected part of web page!

```javascript
import slection from "selection-js";
...
const nodes = selection.asHTML();
// result: <b><i><a href="#">left</a>-to-<a href="#">ri<span>ght</span></a></i></b>or<b><i>right-to-left</i></b>
...

```

# caretPosition

`caretPosition()` returns number of position of cursor (caret) in `innerHTML` of `container`

```javascript
import slection from "selection-js";
...
const position = selection.caretPosition();
...

```

<image src="https://github.com/abasb75/selection-js/blob/master/assets/get-caret-position.png" alt="selection.js">










