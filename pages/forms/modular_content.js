// eslint-disable-next-line compat/compat
fetch('data.json')
.then(response => {
  return response.json()
})
.then(data => {
  modularContent(data)
  vaultConfiguration(data)
})
.catch(error => {
  console(`error: ${error}`)
})

function modularContent(data) {
  const getElem1 = document.getElementById('CONTENT_MODULE_VAULT_QUERY_name')
  getElem1.innerHTML = data[0].CONTENT_MODULE_VAULT_QUERY[0].name
  const getElem3 = document.getElementById('IS_CONTENT_MODULES_HIDDEN_name')
  getElem3.innerHTML = data[0].IS_CONTENT_MODULES_HIDDEN[0].name

  if (data[0].CONTENT_MODULE_VAULT_QUERY[0].type === 'string') {
    const input = document.createElement('input')
    input.type = 'txt'
    input.className = 'form-control'
    input.placeholder = 'Value'
    const okay = document.querySelector('#CONTENT_MODULE_VAULT_QUERY_type_id')
    okay.appendChild(input)
  }

  if (data[0].IS_CONTENT_MODULES_HIDDEN[0].type === 'boolean') {
    const select = document.createElement('select')
    select.className = 'form-control'
    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    option1.textContent = 'True'
    option2.textContent = 'False'
    select.appendChild(option1)
    select.appendChild(option2)
    const okay2 = document.querySelector('#IS_CONTENT_MODULES_HIDDEN_type_id')
    okay2.appendChild(select)
  }
}

function vaultConfiguration(data) {
  const getElem1 = document.getElementById('VAULT_LOGIN_URL_name')
  getElem1.innerHTML = data[1].VAULT_LOGIN_URL[0].name

  const getElem3 = document.getElementById('VAULT_VERSION_name')
  getElem3.innerHTML = data[1].VAULT_VERSION[0].name

  if (data[1].VAULT_LOGIN_URL[0].type === 'string') {
    const input = document.createElement('input')
    input.type = 'txt'
    input.className = 'form-control'
    input.placeholder = 'Value'
    const okay = document.querySelector('#VAULT_LOGIN_URL_type_id')
    okay.appendChild(input)
  }

  if (data[1].VAULT_VERSION[0].type === 'string') {
    const input = document.createElement('input')
    input.type = 'txt'
    input.className = 'form-control'
    input.placeholder = 'Value'
    const okay = document.querySelector('#VAULT_VERSION_type_id')
    okay.appendChild(input)
  }
}
