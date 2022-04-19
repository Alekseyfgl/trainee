function Modal(element, config) {
    Modal.superclass.constructor.apply(this, arguments)

    this.config = config
    this.element = element
    this.element.innerHTML = `<div class="modal__dialog">
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
                                        id="lastName"
                                        required="${this.config.lastName.required}"
                                        placeholder="Last name"
                                        type="${this.config.lastName.type}"
                                        class="modal__input">
                                    <button 
                                        type="${this.config.typeButton.type}" 
                                        class="modal__btn">Send</button>
                            </form>
                        </div>
                    </div>`
    this.actionModal()
}

extend(Modal, Component)


Modal.prototype.show = function () {
    this.element.classList.remove('hide')
    Modal.superclass.show.call(this);
}


Modal.prototype.hide = function () {
    this.element.classList.add('hide')
    Modal.superclass.hide.call(this);
}


Modal.prototype.actionModal = function () {
    this.page = document.getElementsByClassName('page')[0]
    this.page.addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'modal') {
            this.show()
        } else if (e.target.classList.contains('modal__close')) {
            this.hide()
        } else if (e.target.classList.contains('modal')) {
            this.hide()
        }
    })
}