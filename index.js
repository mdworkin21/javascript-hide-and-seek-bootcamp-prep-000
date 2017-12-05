function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  //const list = document.getElementById('grand-node').querySelectorAll('div div div div')
  return document.querySelector('#grand-node div div div div')

}
