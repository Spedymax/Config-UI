fetch('data.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
   ModularContent(data);
   VaultConfiguration(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});


 function ModularContent(data) {
    var getElem1 = document.getElementById("CONTENT_MODULE_VAULT_QUERY_name");
    getElem1.innerHTML =  data[0].CONTENT_MODULE_VAULT_QUERY[0].name;
    var getElem3 = document.getElementById("IS_CONTENT_MODULES_HIDDEN_name");
    getElem3.innerHTML =  data[0].IS_CONTENT_MODULES_HIDDEN[0].name;
    

    if(data[0].CONTENT_MODULE_VAULT_QUERY[0].type === "string"){
        let input = document.createElement('input');
        input.type = "txt"
        input.className = "form-control"
        input.placeholder="Value"
        const okay = document.querySelector('#CONTENT_MODULE_VAULT_QUERY_type_id');
        okay.appendChild(input)
        console.log("It works!")
        
    }

    if(data[0].IS_CONTENT_MODULES_HIDDEN[0].type === "boolean"){
        let select = document.createElement('select');
        select.className = "form-control"
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        option1.textContent = "True"
        option2.textContent = "False"
        select.appendChild(option1);
        select.appendChild(option2);
        const okay2 = document.querySelector('#IS_CONTENT_MODULES_HIDDEN_type_id');
        okay2.appendChild(select)
        console.log("It works!")
        
    }
}

function VaultConfiguration(data) {
    var getElem1 = document.getElementById("VAULT_LOGIN_URL_name");
    getElem1.innerHTML =  data[1].VAULT_LOGIN_URL[0].name;

    var getElem3 = document.getElementById("VAULT_VERSION_name");
    getElem3.innerHTML =  data[1].VAULT_VERSION[0].name;

    

    if(data[1].VAULT_LOGIN_URL[0].type === "string"){
        let input = document.createElement('input');
        input.type = "txt"
        input.className = "form-control"
        input.placeholder="Value"
        const okay = document.querySelector('#VAULT_LOGIN_URL_type_id');
        okay.appendChild(input)
        console.log("It works!")
        
    }

    if(data[1].VAULT_VERSION[0].type === "string"){
        let input = document.createElement('input');
        input.type = "txt"
        input.className = "form-control"
        input.placeholder="Value"
        const okay = document.querySelector('#VAULT_VERSION_type_id');
        okay.appendChild(input)
        console.log("It works!")
        
    }
}