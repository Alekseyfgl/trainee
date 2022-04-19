function Notification(element, config,) {
    Notification.superclass.constructor.apply(this, arguments)

    this.config = config
    this.element = element;
    this.contentEl = this.element.children[0]
    this.addTimer(this.element)
    this.contentEl.children[0].innerHTML = this.config.img
    this.contentEl.children[1].children[0].textContent = this.config.title
    this.contentEl.children[1].children[1].textContent = this.config.message
    this.contentEl.children[2].addEventListener('click', this.hide)
}


extend(Notification, Component)


Notification.prototype.show = function () {
    this.element.classList.remove('hide')

    Notification.superclass.show.call(this);
}


Notification.prototype.hide = function (e) {
    this.element = e.target.parentElement.parentElement
    clearTimeout(this.element.dataset.timer)
    this.element.classList.add('hide')

    Notification.superclass.hide.call(this);
}


Notification.prototype.addTimer = function (notification) {
    this.setTimerId = setTimeout(function () {
        notification.classList.remove('show')
        notification.classList.add('hide')
    }, 5000)
    notification.dataset.timer = this.setTimerId
}

