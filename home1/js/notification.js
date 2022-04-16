function Notification(element, config,) {
    Component.prototype.constructor.apply(this, arguments)
    this.actionNotification()
    this.config = config
}


extend(Notification, Component)


Notification.prototype.show = function (dataNotification) {
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

    document.getElementsByClassName('block-notifications')[0].insertAdjacentHTML('afterbegin', `
            <div class="notification fade ${dataNotification.type}">
                            <div class="notifications__content">
                                <div class="notifications__img">
                                    ${dataNotification.img}
                                </div>
                                <div class="notifications__text" data-status="${dataNotification.status}">
                                    <p>${dataNotification.title}</p>
                                    <p>${dataNotification.message}</p>
                                </div>
                                <div class="notifications__close" data-btn="close">×</div>
                            </div>
                        </div>`)

    this.timer = setTimeout(function () {

        document.querySelectorAll('.notification').forEach(function (item, i) {
            if (i === document.querySelectorAll('.notification').length - 1) {
                item.remove()
            }
        })
        console.log('setTimeout')
    }.bind(this.timer), this.config.duration)

    document.getElementsByClassName('notification')[0].addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'close') {
            clearTimeout(this.timer)
            this.hide(e.target.parentElement.parentElement)
        }
    })

}


Notification.prototype.hide = function (targetNotification) {
    Notification.superclass.hide.call(this);

    targetNotification.remove()

    if (!document.getElementsByClassName('notification').length) {
        document.getElementsByClassName('block-notifications')[0].remove()
    }
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

        }
    })
}