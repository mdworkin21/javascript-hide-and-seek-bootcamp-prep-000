function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')

}
