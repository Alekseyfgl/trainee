var configModal = {
    title: 'we will contact you as soon as possible!',
    firstName: {
        type: 'text',
        required: false,
    },
    lastName: {
        type: 'text',
        required: true,
    },
    typeButton: {
        type: 'submit',
    }
}

var element = document.getElementsByClassName('content')[0]
var someModal = new Modal(element, configModal)


var error = {
    status: 'error',
    title: 'Error!!!',
    message: 'Oops, something is wrong',
    type: 'error',
    img: img.error,
}
var success = {
    status: 'success',
    title: 'success!!!',
    message: 'Oops, something is wrong',
    type: 'success',
    img: img.success
}
var warning = {
    status: 'warning',
    title: 'warning!!!',
    message: 'Oops, something is wrong',
    type: 'warning',
    img: img.warning
}
var info = {
    status: 'info',
    title: 'info!!!',
    message: 'Oops, something is wrong',
    type: 'info',
    img: img.info
}


var element2 = document.getElementsByClassName('content')[0]


document.getElementsByClassName('page')[0].addEventListener('click', function (e) {
    if (e.target.dataset.btn === 'error') {
        var notificationError = new Notification(element2, error)
        notificationError.show()

    } else if (e.target.dataset.btn === 'success') {
        var notificationSuccess = new Notification(element2, success)
        notificationSuccess.show()

    } else if (e.target.dataset.btn === 'warning') {
        var notificationWarning = new Notification(element2, warning)
        notificationWarning.show()

    } else if (e.target.dataset.btn === 'info') {
        var notificationInfo = new Notification(element2, info)
        notificationInfo.show()
    }
})