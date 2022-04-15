
function Component(selector) {
    this.page = document.getElementsByClassName('page')[0]
    this.element = document.querySelector(selector)
}

Component.prototype.show = function () {
    this.element.insertAdjacentHTML('afterbegin',
        `<div class="block"></div>`)

}

Component.prototype.hide = function () {
    this.modal = document.getElementsByClassName('modal')[0]
    this.notificBlock = document.getElementsByClassName('block-notifications')[0]
}


