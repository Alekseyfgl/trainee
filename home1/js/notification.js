function Notification(element, config) {
    Notification.superclass.constructor.apply(this, arguments)

    this.config = config
    this.el = `<div class="notification ${this.config.type} fade" data-timer="">
                            <div class="notifications__content">
                                <div class="notifications__img">${this.config.img}</div>
                                <div class="notifications__text">
                                    <p class="notification__title">${this.config.title}</p>
                                    <p class="notification__message">${this.config.message}</p>
                                </div>
                                <div class="notifications__close" data-btn="close">×</div>
                            </div>
                     </div>`
}


extend(Notification, Component)


Notification.prototype.show = function () {
    Notification.superclass.show.call(this);

    this.block = document.getElementsByClassName('block')[0]
    this.blockNotification = document.getElementsByClassName('block-notifications')[0];

    if (this.blockNotification) {
        if (this.block) {
            this.block.remove()
        }
    }
    if (this.block) {
        this.block.classList.add('block-notifications');
        this.block.classList.remove('block')
    }

    document.getElementsByClassName('block-notifications')[0].insertAdjacentHTML('afterbegin', this.el)
    this.addTimer(document.getElementsByClassName('notification')[0])
    document.getElementsByClassName('notifications__close')[0].addEventListener('click', this.hide)
}


Notification.prototype.hide = function (e) {

    this.targetEl = e.target.parentElement.parentElement
    clearTimeout(this.targetEl.dataset.timer)

    Notification.superclass.hide.call(this);
}


Notification.prototype.addTimer = function (notification) {
    this.setTimerId = setTimeout(function () {
        document.querySelectorAll('.notification').forEach(function (item, i) {
            if (i === document.querySelectorAll('.notification').length - 1) {
                item.remove()
                if (!document.getElementsByClassName('notification').length) {
                    document.getElementsByClassName('block-notifications')[0].remove()
                }
            }
        })
    }, 5000)
    notification.dataset.timer = this.setTimerId
}


