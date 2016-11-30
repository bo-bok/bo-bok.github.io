function hasClassName (node, className) {
  return node.className.indexOf(className) !== -1;
}

function findParentByClassName (node, className) {
  // if the parent of node has this className, return or else go up another level
  if (hasClassName(node.parentNode, className)) {
    return node.parentNode;
  }
  else {
    return findParentByClassName(node.parentNode, className)
  }
}


document.body.onclick = function (event) {
  // if it includes this class name
  if (hasClassName (event.target, "project-info-link")) {
    // figure out what is the relevant thing
    var projectModal = event.target.parentNode.getElementsByClassName("modal-container")[0];
    // show that particular modal
    projectModal.style.display = "block";
    event.preventDefault();
    return;
  }

  // if we click on close button we want to close the box that's nearest/ most relvant to it
  if (hasClassName (event.target.parentNode, "modal-close")) {
    // find the parent with name 'modal-container'
    var closeModal = findParentByClassName(event.target, 'modal-container');
    // hide that particular modal
    closeModal.style.display = "none";
    event.preventDefault();
    return;
  }
}
