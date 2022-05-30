"use strict";

// eslint-disable-next-line compat/compat
fetch('data.json').then(function (response) {
  return response.json();
}).then(function (data) {
  modularContent(data);
  vaultConfiguration(data);
})["catch"](function (error) {
  console("error: ".concat(error));
});

function modularContent(data) {
  var getElem1 = document.getElementById('CONTENT_MODULE_VAULT_QUERY_name');
  getElem1.innerHTML = data.ModularContent[0].CONTENT_MODULE_VAULT_QUERY[0].name;
  var getElem3 = document.getElementById('IS_CONTENT_MODULES_HIDDEN_name');
  getElem3.innerHTML = data.ModularContent[0].IS_CONTENT_MODULES_HIDDEN[0].name;

  if (data.ModularContent[0].CONTENT_MODULE_VAULT_QUERY[0].type === 'string') {
    var input = document.createElement('input');
    input.type = 'txt';
    input.className = 'form-control';
    input.placeholder = 'Value';
    var okay = document.querySelector('#CONTENT_MODULE_VAULT_QUERY_type_id');
    okay.appendChild(input);
  }

  if (data.ModularContent[0].IS_CONTENT_MODULES_HIDDEN[0].type === 'boolean') {
    var select = document.createElement('select');
    select.className = 'form-control';
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    option1.textContent = 'True';
    option2.textContent = 'False';
    select.appendChild(option1);
    select.appendChild(option2);
    var okay2 = document.querySelector('#IS_CONTENT_MODULES_HIDDEN_type_id');
    okay2.appendChild(select);
  }
}

function vaultConfiguration(data) {
  var getElem1 = document.getElementById('VAULT_LOGIN_URL_name');
  getElem1.innerHTML = data.Configuration[0].VAULT_LOGIN_URL[0].name;
  var getElem3 = document.getElementById('VAULT_VERSION_name');
  getElem3.innerHTML = data.Configuration[0].VAULT_VERSION[0].name;

  if (data.Configuration[0].VAULT_LOGIN_URL[0].type === 'string') {
    var input = document.createElement('input');
    input.type = 'txt';
    input.className = 'form-control';
    input.placeholder = 'Value';
    var okay = document.querySelector('#VAULT_LOGIN_URL_type_id');
    okay.appendChild(input);
  }

  if (data.Configuration[0].VAULT_VERSION[0].type === 'string') {
    var _input = document.createElement('input');

    _input.type = 'txt';
    _input.className = 'form-control';
    _input.placeholder = 'Value';

    var _okay = document.querySelector('#VAULT_VERSION_type_id');

    _okay.appendChild(_input);
  }
}