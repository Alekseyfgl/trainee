const configModal = {
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





const configNotifications = {
    error: {
        status: 'error',
        title: 'Error!!!',
        message: 'Oops, something is wrong',
        type: 'error',
        duration: 5000,
        timer: false,
    },
    success: {
        status: 'success',
        title: 'Success!!!',
        message: '2',
        type: 'success',
        duration: 5000,
        timer: false,
    },
    warning: {
        status: 'warning',
        title: 'warning',
        message: '3',
        type: 'warning',
        duration: 5000,
        timer: false,
    },
    info: {
        status: 'info',
        title: 'info',
        message: '4',
        type: 'info',
        duration: 5000,
        timer: false,
    },
}
var element2 = document.getElementsByClassName('content')[0]
var someNotification = new Notification(element2, configNotifications)
