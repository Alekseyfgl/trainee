class Component {
    constructor(element) {
        this.element = element
    }

    show() {
        this.element.classList.add('show')
    }
    hide() {
        this.element.classList.remove('show')
    }
}


export default Component
