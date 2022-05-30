/* eslint-disable unicorn/no-document-cookie */
function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${cname}=${cvalue};${expires};path=/`
}

function goToIndex() {
  window.location.href = '../../index.html'
}

function checkCookie(NameId2, PassId2) {
  if (document.cookie.split(';')[2].split('=')[1] === NameId2 && document.cookie.split(';')[3].split('=')[1] === PassId2) {
    goToIndex()
  } else {
    // eslint-disable-next-line no-alert
    alert('Wrong login or password')
  }
}

