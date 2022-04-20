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
var element = document.getElementsByClassName('modal')[0]
var someModal = new Modal(element, configModal)


var error = {
    title: 'Error!!!',
    message: 'Oops, something is wrong',
    img: img.error,
    type: 'error',
}
var success = {
    title: 'success!!!',
    message: 'Oops, something is wrong',
    img: img.success,
    type: 'success'
}
var warning = {
    title: 'warning!!!',
    message: 'Oops, something is wrong',
    img: img.warning,
    type: 'warning'
}
var info = {
    title: 'info!!!',
    message: 'Oops, something is wrong',
    img: img.info,
    type: 'info'
}


var errorNotific = document.getElementsByClassName('error')[0]
var successNotific = document.getElementsByClassName('success')[0]
var warningNotific = document.getElementsByClassName('warning')[0]
var infoNotific = document.getElementsByClassName('info')[0]

document.getElementsByClassName('page')[0].addEventListener('click', function (e) {
    if (e.target.dataset.btn === 'error') {
        var notificationError = new Notification(errorNotific, error, errorNotific)
        notificationError.show()

    } else if (e.target.dataset.btn === 'success') {
        var notificationSuccess = new Notification(successNotific, success)
        notificationSuccess.show()

    } else if (e.target.dataset.btn === 'warning') {
        var notificationWarning = new Notification(warningNotific, warning)
        notificationWarning.show()

    } else if (e.target.dataset.btn === 'info') {
        var notificationInfo = new Notification(infoNotific, info)
        notificationInfo.show()
    }
})