function Modal(selector, config) {
    Component.prototype.constructor.apply(this, arguments)
    this.config = config
    this.modalEl = `<div class="modal__dialog">
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
    Modal.superclass.show.call(this);

    this.modal = document.getElementsByClassName('block')[0]
    this.modal.classList.add('modal')
    this.modal.classList.add('fade')
    this.modal.classList.remove('block')
    this.modal.insertAdjacentHTML('afterbegin', this.modalEl)
}


Modal.prototype.hide = function () {
    Modal.superclass.hide.call(this);

    this.modal.classList.add('fade-del')


    setTimeout(function () {
        this.modal.remove()
    }.bind(this), 1000)
}


Modal.prototype.sendForm = function (firstNameId, lastNameId) {
    this.dataUser = {
        firstNameId: firstNameId,
        lastNameId: lastNameId,
    }
    console.log(this.dataUser)
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
        } else if (e.target.classList.contains('modal__btn')) {
            e.preventDefault()
            this.firstNameId = document.getElementById('firstName').value;
            this.lastNameId = document.getElementById('lastName').value

            this.sendForm(this.firstNameId, this.lastNameId)
        }
    })

}






