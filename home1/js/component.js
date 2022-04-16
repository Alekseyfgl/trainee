function Component(element) {
    this.element = element
    this.parentElemnt = '<div class="block"></div>'
    this.timer = null
}


Component.prototype = {
    constructor: Component,
    show: function () {
        this.element.insertAdjacentHTML('afterbegin', this.parentElemnt)
    },

    hide: function () {
        this.modal = document.getElementsByClassName('modal')[0]
    },
}

