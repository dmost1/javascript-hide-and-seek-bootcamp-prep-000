function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n)
{
  var nodeList = document.querySelectorAll(".ranked-list li")
  for(var i = 0; i<nodeList.length;i++){
    var currentVal = parseInt(nodeList[i].innerHTML,10) + n;
    nodeList[i].innerHTML = currentVal;
  }
}

function deepestChild()
{
  var descendents = document.querySelectorAll("div#grand-node div");
  for(var i = 0; i<descendents.length;i++){
    if(descendents[i].querySelector("div") === null){
      return descendents[i];
    }
  }
}
