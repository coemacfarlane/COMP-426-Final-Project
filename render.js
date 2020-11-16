export const load = function () {
    const $root = $('#root');
    $root.append("Hello World!");
}

$(function () {
    load();
});