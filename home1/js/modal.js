function Modal(selector, config) {
    Component.prototype.constructor.apply(this, arguments)
    this.config = config
    this.actionModal()
}


Modal.prototype = Object.create(Component.prototype)
Modal.prototype.constructor = Modal

Modal.prototype.show = function () {
    Component.prototype.show.call(this);

    this.modal = document.getElementsByClassName('block')[0]
    this.modal.classList.add('modal')
    this.modal.classList.remove('block')
    this.modal.insertAdjacentHTML('afterbegin',
        `<div class="modal__dialog">
                <div class="modal__content">
                    <div class="modal__close">×</div>
                    <form action="#">
                        <p class="modal__title">${this.config.title}</p>
                            <input
                                 id="firstName"
                                required="${this.config.firstName.required}"
                                placeholder="First name"
                                type="${this.config.firstName.type}"
                                class="modal__input">
                            <input
                                required="${this.config.lastName.required}"
                                placeholder="Last name"
                                type="${this.config.lastName.type}"
                                class="modal__input">
                                
                            <button 
                                type="${this.config.typeButton.type}" 
                                class="modal__btn">Send</button>
                    </form>
                </div>
            </div>`)
}

Modal.prototype.hide = function () {
    Component.prototype.hide.call(this);
    if (this.modal) {
        this.modal.remove()
    }
}


Modal.prototype.actionModal = function () {

    this.page = document.getElementsByClassName('page')[0]
    this.page.addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'modal') {
            this.show()
        } else if (e.target.classList.contains('modal')) {
            this.hide()
        } else if (e.target.classList.contains('modal__close')) {
            this.hide()
        }
    })

}






