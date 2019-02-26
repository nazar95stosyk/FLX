const rootNode = document.getElementById('root');

const locTodo = 'myAwesomeTodoList';
const locDone = 'myAwesomeDoneList';
const jsT = localStorage.getItem(locTodo);
const jsD = localStorage.getItem(locDone);

const adoIts = JSON.parse(jsT) || [];
const finishedItms = JSON.parse(jsD) || [];
const unexisting = -1;

function locStorObj(array, localStorageKey) {
  localStorage.setItem(localStorageKey, JSON.stringify(array));
}

window.addEventListener('load', tagValidation);
window.addEventListener('hashchange', tagValidation);

const tagMain = '';
const tagAdd = '#/add';
const tagModify = '#/modify/';

function tagValidation() {
  if (location.hash === tagMain) {
    contributeMainP();
  }

  if (location.hash === tagAdd) {
    contributeNewP();
  }

  if (location.hash.includes(tagModify)) {
    contributeModifyP();
  }
}

function contributeMainP() {
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);

  const headingTxt = document.createTextNode('Simple TODO application');
  h1.appendChild(headingTxt);

  const joinBtn = document.createElement('btn');
  rootNode.appendChild(joinBtn);

  const joinBtnTxt = document.createTextNode('Add new task');
  joinBtn.appendChild(joinBtnTxt);
  joinBtn.setAttribute('class', 'btn');

  const arrayContribute = adoIts.concat(finishedItms);

  if (!arrayContribute.length) {
      const part = document.createElement('p');
      rootNode.appendChild(part);

      const partTxt = document.createTextNode('TODO is empty');
      part.setAttribute('class', 'desolate_catalogue');
      part.appendChild(partTxt);

  } else {
    const adoItsList = document.createElement('ul');
    rootNode.appendChild(adoItsList);

    arrayContribute.forEach((item) => {
      const listUseItm = document.createElement('li');
      listUseItm.setAttribute('class', 'use_list_it');
      rootNode.appendChild(listUseItm);
      listUseItm.setAttribute('id', item.id);

      const quadrat = document.createElement('img');
      listUseItm.appendChild(quadrat);
      quadrat.setAttribute('class', 'quadtrat');

      const adoUse = document.createElement('a');
      listUseItm.appendChild(adoUse);

      const adoUseDescr = document.createTextNode(item.description);
      adoUse.appendChild(adoUseDescr);
      adoUse.setAttribute('class', 'descr');
      adoUse.setAttribute('href', `${tagModify}${item.id}`);

      if (!item.isDone) {
        quadrat.setAttribute('src', './assets/img/todo-s.png');
      } else {
        quadrat.setAttribute('src', './assets/img/done-s.png');
        adoUse.style.backgroundColor = 'grey';
      }

      quadrat.addEventListener('click', check);

      const del = document.createElement('img');
      listUseItm.appendChild(del);
      del.setAttribute('src', './assets/img/remove-s.jpg');
      del.addEventListener('click', delUseItm);
    });
  }
  joinBtn.addEventListener('click', settingTagAdd);
}

function check(event) {
  const indexItm = parseInt(event.target.parentNode.id);
  const delElements = adoIts.findIndex(item => item.id === indexItm);
  if (delElements === unexisting) {
    return
  }
  
  const currUseInAdo = adoIts[delElements];
  currUseInAdo.isDone = true;
  adoIts.splice(delElements, 1);
  finishedItms.push(currUseInAdo);

  locStorObj(adoIts, locTodo);
  locStorObj(finishedItms, locDone);

  contributeMainP();
}

function delUseItm(event) {
  const indexItm = parseInt(event.target.parentNode.id);
  const delAdo = adoIts.findIndex(item => item.id === indexItm);
  if (delAdo !== unexisting) {
    adoIts.splice(delAdo, 1);
  }
  
  const delDone = finishedItms.findIndex(item => item.id === indexItm);

  if (delDone !== unexisting) {
    finishedItms.splice(delDone, 1);
  }
  
  locStorObj(adoIts, locTodo);
  locStorObj(finishedItms, locDone);
  
  contributeMainP();
}

function settingTagAdd(event) {
  window.location.hash = tagAdd;
  event.preventDefault();
}

function contributeNewP() {
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);
  const headingTxt = document.createTextNode('Add task');
  h1.appendChild(headingTxt);

  const insertTask = document.createElement('input');
  insertTask.setAttribute('id', 'insert');
  rootNode.appendChild(insertTask);

  const divBtns = document.createElement('div');
  divBtns.setAttribute('class', 'btns');
  rootNode.appendChild(divBtns);
  const dropBtn = document.createElement('btn');
  divBtns.appendChild(dropBtn);
  dropBtn.setAttribute('class', 'btn');
  const dropBtnTxt = document.createTextNode('Cancel');
  dropBtn.appendChild(dropBtnTxt);
  const storeBtn = document.createElement('btn');
  divBtns.appendChild(storeBtn);
  storeBtn.setAttribute('class', 'btn');
  const storeBtnTxt = document.createTextNode('Save changes');
  storeBtn.appendChild(storeBtnTxt);

  dropBtn.addEventListener('click', setTagMain);
  storeBtn.addEventListener('click', addStore);
}

function setTagMain(event) {
  window.location.hash = tagMain;
  event.preventDefault();
}

function addStore(event) {
  const use = document.getElementById('insert').value;

  if (!use) {
    return;
  }
  adoIts.push({isDone: false, id: indexGen(), description: use});
  locStorObj(adoIts, locTodo);
  setTagMain(event);
}

function indexGen() {
  const identificators = adoIts.concat(finishedItms).map((item) => item.id);
  return identificators.length ? 1 + Math.max(...identificators) : 1;
}

function contributeModifyP() {
  const indexItm = parseInt(location.hash.split('/').pop());
  const modItm = adoIts.find(item => item.id === indexItm);

  if (!modItm) {
    window.location.hash = tagMain;
    return;
  }
  
  rootNode.innerHTML = '';

  const h1 = document.createElement('h1');
  rootNode.appendChild(h1);
  const headingTxt = document.createTextNode('Modify item');
  h1.appendChild(headingTxt);

  const insertUseItm = document.createElement('input');
  insertUseItm.setAttribute('id', 'insert');
  rootNode.appendChild(insertUseItm);
  insertUseItm.defaultValue = modItm.description;

  const divBtns = document.createElement('div');
  divBtns.setAttribute('class', 'btns');
  rootNode.appendChild(divBtns);
  const dropBtn = document.createElement('btn');
  divBtns.appendChild(dropBtn);
  dropBtn.setAttribute('class', 'btn');
  const dropBtnTxt = document.createTextNode('Cancel');
  dropBtn.appendChild(dropBtnTxt);
  const storeBtn = document.createElement('btn');
  divBtns.appendChild(storeBtn);
  storeBtn.setAttribute('class', 'btn');
  const storeBtnTxt = document.createTextNode('Save changes');
  storeBtn.appendChild(storeBtnTxt);

  dropBtn.addEventListener('click', setTagMain);
  storeBtn.addEventListener('click', storeMod);
}

function storeMod(event) {
  const modUse = document.getElementById('insert').value;

  if (!modUse) {
    return;
  }
  
  const indexItm = parseInt(location.hash.split('/').pop());
  adoIts.find(item => item.id === indexItm).description = modUse;
  locStorObj(adoIts, locTodo);
  setTagMain(event);
}