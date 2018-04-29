
function savefile() {
    $.ajax({ 
        url,
        data, 
        method: 'POST'
    });
}

// if you have a key and value that is identical you can
// condense it to one word.

const url = 'http://someuploader.com'
const data = { color: 'red' }

savefile(url, data)
