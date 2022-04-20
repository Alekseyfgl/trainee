function Notification(element, config,) {
    Notification.superclass.constructor.apply(this, arguments)

    this.config = config
    if (!this.element.classList.contains('show')) {
        this.element = element;
        // console.log(this.element)
        this.contentEl = this.element.children[0]
        this.addTimer(this.element)
        this.contentEl.children[0].innerHTML = this.config.img
        this.contentEl.children[1].children[0].textContent = this.config.title
        this.contentEl.children[1].children[1].textContent = this.config.message
        this.contentEl.children[2].addEventListener('click', this.hide)
    }
}


extend(Notification, Component)



Notification.prototype.hide = function (e) {
    this.element = e.target.parentElement.parentElement
    clearTimeout(this.element.dataset.timer)
    Notification.superclass.hide.call(this);
}


Notification.prototype.addTimer = function (notification) {
    this.setTimerId = setTimeout(function () {
        notification.classList.remove('show')
    }, 5000)
    notification.dataset.timer = this.setTimerId
}

