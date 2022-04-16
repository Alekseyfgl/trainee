function Notification(element, config,) {
    Component.prototype.constructor.apply(this, arguments)
    this.actionNotification()
    this.config = config
}


extend(Notification, Component)


Notification.prototype.show = function ({status, title, message, duration, type}) {

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
            <div class="notification ${type}">
                            <div class="notifications__content">
                                <div class="notifications__img">
                                    <svg viewBox="0 0 512 512">
                                        <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/>
                                    </svg>
                                </div>
                                <div class="notifications__text" data-status="${status}">
                                    <p>${title}</p>
                                    <p>${message}</p>
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
    }, duration)

    document.getElementsByClassName('notification')[0].addEventListener('click', (e) => {
        if (e.target.dataset.btn === 'close') {
            this.hide(e.target.parentElement.parentElement)
            clearTimeout(this.timer)
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
        // else if (e.target.dataset.btn === 'close') {
        //
        //     this.targetNotification = e.target.parentElement.parentElement;
        //     this.hide(this.targetNotification)
        // }
    })
}





