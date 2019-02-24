let changeUse = 1;
let use_amount = 0;
const new_input = document.getElementById('new_add');
const btn_add = document.getElementById('btn_add');

new_input.addEventListener('keyup', inputVerification);
btn_add.addEventListener('click', Verification);

function Verification() {
  if (new_input.value.trim()) {
    let maximal_use = 10;
    if (maximal_use > use_amount) {
      new_use();
    }
    if (use_amount === maximal_use) {
      document.getElementById('note').textContent = 'Maximum amount of items per list are 10';
      new_input.value = '';
      new_input.setAttribute('disabled', 'disabled');
    }
  }
}

function new_use() {
  const list = document.getElementById('list');
  const item_use = document.createElement('li');

  item_use.setAttribute('draggable', 'true');
  item_use.addEventListener('dragstart', Beginning, false);
  item_use.addEventListener('dragover', draggingOverdose, false);
  item_use.addEventListener('drop', funcDropper, false);
  item_use.setAttribute('class', 'use_item');
  list.appendChild(item_use);
  list.addEventListener('click', Tap);

  const txt_square = document.createElement('div');
  txt_square.setAttribute('class', 'txt_square');
  item_use.appendChild(txt_square);

  const uncheck = document.createElement('i');
  txt_square.appendChild(uncheck);
  uncheck.setAttribute('class', 'material-icons shazam uncheck_item');
  const uncheck_txt = document.createTextNode('check_box_outline_blank');
  uncheck.appendChild(uncheck_txt);

  const use = document.createElement('p');
  txt_square.appendChild(use);
  const use_txt = document.createTextNode(new_input.value);
  use.appendChild(use_txt);

  const c = document.createElement('i');
  item_use.appendChild(c);
  c.setAttribute('class', 'material-icons shazam delete');
  const cTxt = document.createTextNode('delete');
  c.appendChild(cTxt);

  use_amount += changeUse;

  new_input.value = '';
  btn_add.setAttribute('class', 'material-icons batman flash shazam');
  btn_add.style.cursor = 'default';
}

function inputVerification() {
  if (new_input.value.trim()) {
    btn_add.setAttribute('class', 'material-icons shazam');
    btn_add.style.cursor = 'pointer';
  } else {
    btn_add.setAttribute('class', 'material-icons batman flash shazam');
  }
}

function del(e) {
    e.target.parentElement.remove();
    use_amount -= changeUse;
    document.getElementById('note').textContent = '';
    new_input.removeAttribute('disabled');
    btn_add.setAttribute('class', 'material-icons shazam');
    btn_add.style.cursor = 'pointer';
  }

  function Tap(e) {
    if (e.target.classList.contains('delete')) {
      del(e);
    }
    if (e.target.classList.contains('uncheck_item')) {
      itsOver(e);
    }
  }

function itsOver(e) {
  e.target.textContent = 'check_box';
  e.target.setAttribute('id', 'check_item');
}



let dragging = null;

function draggingOverdose(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function Beginning(e) {
    dragging = this;
  e.valuePush.effectAllowed = 'move';
  e.valuePush.setData('text/html', this.innerHTML);
}

function funcDropper(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (dragging !== this) {
    dragging.innerHTML = this.innerHTML;
    this.innerHTML = e.valuePush.getData('text/html');
    this.addEventListener('click', Tap);
    dragging.addEventListener('click', Tap);
  }

  return false;
}
