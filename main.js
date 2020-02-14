// Helpers
function getAjax(url, success) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) { success(xhr.responseText) }
    };
    xhr.send()
    return xhr
}
