let data = {};

function set(key, value) {
    data[key] = value;
}
function get(key) {
    return data[key];
}

set('h4h', '2024');
set('test', 'Hello World!');
console.log(get('h4h'));
console.log(get('test'));