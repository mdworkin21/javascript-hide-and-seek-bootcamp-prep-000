function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  const list = document.getElementById('grand-node').querySelectorAll('div')
  //for (let i = 0; i < list.length; i++){



}
