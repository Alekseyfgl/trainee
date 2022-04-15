function Notification(selector, config) {
    Component.prototype.constructor.apply(this, arguments)
    this.actionNotification()
    this.config = config

}

Notification.prototype = Object.create(Component.prototype)
Notification.prototype.constructor = Notification

Notification.prototype.show = function ({status, title, message, type, duration, timer}) {
    Component.prototype.show.call(this);

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
            <div class="notification ${type}" 
            data-duration="${duration}" 
            data-timer="${timer}">
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


    setTimeout(function () {
        var notfCollection = document.getElementsByClassName('notification')
        var blockNotifc = document.getElementsByClassName('block-notifications')

        if (notfCollection.length) {
            notfCollection[notfCollection.length - 1].remove()

            if (!notfCollection.length) {
                document.getElementsByClassName('block-notifications')[0].remove()
            }
        }
        console.log('setTimeout')
    }, 3000)
}

// Component.prototype.timer = function (el1, el2) {
//     Component.prototype.timer.call(this);
//     setTimeout(function () {
//         this.notfCollection = document.getElementsByClassName('notification')
//         this.blockNotifc = document.getElementsByClassName('block-notifications')
//
//         if (notfCollection.length) {
//             notfCollection[notfCollection.length - 1].remove()
//         }
//
//         if (!notfCollection.length) {
//             blockNotifc[0].remove()
//         }
//
//     }, 3000)
// }


Notification.prototype.hide = function (targetNotification) {
    Component.prototype.hide.call(this);

    // clearTimeout(this.timer)
    targetNotification.remove()

    if (!document.getElementsByClassName('notification').length) {
        this.notificBlock.remove()
    }
}


Notification.prototype.actionNotification = function () {

    this.btnOpenModal = document.getElementsByClassName('page')[0]
    this.btnOpenModal.addEventListener('click', (e) => {

        // console.log(222)
        if (e.target.dataset.btn === 'success') {
            this.show(this.config.success)

        } else if (e.target.dataset.btn === 'error') {

            this.show(this.config.error)

        } else if (e.target.dataset.btn === 'warning') {
            this.show(this.config.warning)

        } else if (e.target.dataset.btn === 'info') {
            this.show(this.config.info)

        } else if (e.target.dataset.btn === 'close') {

            this.targetNotification = e.target.parentElement.parentElement;
            this.hide(this.targetNotification)
        }
    })
}
