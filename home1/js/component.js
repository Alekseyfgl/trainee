function Component(element) {
    this.element = element
}


Component.prototype = {
    constructor: Component,
    show: function () {
        this.element.classList.add('show')
    },

    hide: function () {
        this.element.classList.remove('show')
    }
}
