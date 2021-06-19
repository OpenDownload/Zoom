
/*
    Copyright (c) 2021 OpenDownload@protonmail.com
*/


const { pathname } = window.location;


if(pathname.startsWith('/rec/'))
  window.addEventListener('contextmenu',enableContext,true);


/*
    Enable Video Context
*/

function enableContext(event){
  if(event.target.nodeName !== 'VIDEO')
    return;

  event.returnValue = true;
  event.stopPropagation();
}
