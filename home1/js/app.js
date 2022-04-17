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



var configNotifications = {
    error: {
        status: 'error',
        title: 'Error!!!',
        message: 'Oops, something is wrong',
        type: 'error',
        img: img.error
    },
    success: {
        status: 'success',
        title: 'Success!!!',
        message: 'Lorem ipsum dolor.',
        type: 'success',
        img: img.success
    },
    warning: {
        status: 'warning',
        title: 'warning!!!!!!!',
        message: 'Lorem ipsum dolor.',
        type: 'warning',
        img: img.warning
    },
    info: {
        status: 'info',
        title: 'info!!!!!!!',
        message: 'Lorem ipsum dolor.',
        type: 'info',
        img: img.info
    },
    duration: 5000,
}


var element2 = document.getElementsByClassName('content')[0]
var someNotification = new Notification(element2, configNotifications)