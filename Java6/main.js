function modifyDOM(){
    var createTitle=document.createElement('h1');
    var nodeText=document.createTextNode('Ky eshte nje titull');
    createTitle.appendChild(nodeText);
    document.getElementsByTagName('body')[0].appendChild(createTitle);

    var titulli=documnet.getElementsByTagName('h1')[0];
    titulli.style.color="red";
    titulli.style.display='none';

    titulli.classList.add(titulli);
}