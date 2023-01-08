// document.head
// document.documentElement
// document.body.childNodes
// document.body.firstElementChild
// document.body.lastChild

for(let node of document.body.childNodes){
    if(node.nodeName=='#text'){
        continue;
    }
    console.log(node)
}   