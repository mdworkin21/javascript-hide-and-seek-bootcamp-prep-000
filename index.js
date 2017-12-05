function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(selector){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')

}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i] += n
  }

  return rankedLists

}
