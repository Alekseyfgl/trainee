function Notification(element, config) {
    Component.prototype.constructor.apply(this, arguments)
    this.actionNotification()
    this.config = config
    this.el = `<div class="notification fade" data-timer="">
                            <div class="notifications__content">
                                <div class="notifications__img"></div>
                                <div class="notifications__text">
                                    <p class="notification__title"></p>
                                    <p class="notification__message"></p>
                                </div>
                                <div class="notifications__close" data-btn="close">×</div>
                            </div>
                     </div>`
}


extend(Notification, Component)


Notification.prototype.show = function (obj) {
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


    this.setTimerId = setTimeout(function () {
        document.querySelectorAll('.notification').forEach(function (item, i) {
            if (i === document.querySelectorAll('.notification').length - 1) {

                item.classList.add('notification-del')

                setTimeout(function () {
                    item.remove()
                    if (!document.getElementsByClassName('notification').length) {
                        document.getElementsByClassName('block-notifications')[0].remove()
                    }
                }.bind(this), 200)
            }
        })
    }, this.config.duration)


    document.getElementsByClassName('block-notifications')[0].insertAdjacentHTML('afterbegin', this.el)

    this.notific = document.getElementsByClassName('notification')[0]

    this.notific.dataset.timer = this.setTimerId;
    this.notific.children[0].children[0].innerHTML = obj.img
    this.notific.classList.add(obj.type)
    this.notificMessage = this.notific.children[0].children[1]
    this.notificMessage.children[0].textContent = obj.title
    this.notificMessage.children[1].textContent = obj.message

}


Notification.prototype.hide = function (targetNotification) {
    Notification.superclass.hide.call(this);

    clearTimeout(targetNotification.dataset.timer)
    targetNotification.classList.add('notification-del')

    setTimeout(function () {
        targetNotification.remove()
        if (!document.getElementsByClassName('notification').length) {
            document.getElementsByClassName('block-notifications')[0].remove()
        }
    }.bind(this), 200)
}


Notification.prototype.actionNotification = function () {
    this.btnNotification = document.getElementsByClassName('page')[0]
    this.btnNotification.addEventListener('click', (e) => {

        if (e.target.dataset.btn === 'success') {
            this.show(this.config.success)

        } else if (e.target.dataset.btn === 'error') {
            this.show(this.config.error)

        } else if (e.target.dataset.btn === 'warning') {
            this.show(this.config.warning)

        } else if (e.target.dataset.btn === 'info') {
            this.show(this.config.info)
        } else if (e.target.dataset.btn === 'close') {
            this.hide(e.target.parentElement.parentElement)
        }
    })
}





