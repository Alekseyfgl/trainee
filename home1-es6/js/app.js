import Modal from "./modal.js";
import Notification from "./notification.js";
import {img} from "./img.js";


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
const element = document.getElementsByClassName('modal')[0]
const someModal = new Modal(element, configModal)





const error = {
    title: 'Error!!!',
    message: 'Oops, something is wrong',
    img: img.error,
    type: 'error',
}
const success = {
    title: 'success!!!',
    message: 'Oops, something is wrong',
    img: img.success,
    type: 'success'
}
const warning = {
    title: 'warning!!!',
    message: 'Oops, something is wrong',
    img: img.warning,
    type: 'warning'
}
const info = {
    title: 'info!!!',
    message: 'Oops, something is wrong',
    img: img.info,
    type: 'info'
}


const errorNotific = document.getElementsByClassName('error')[0]
const successNotific = document.getElementsByClassName('success')[0]
const warningNotific = document.getElementsByClassName('warning')[0]
const infoNotific = document.getElementsByClassName('info')[0]



document.getElementsByClassName('page')[0].addEventListener('click', function (e) {
    if (e.target.dataset.btn === 'error') {
        const notificationError = new Notification(errorNotific, error, errorNotific)
        notificationError.show()

    } else if (e.target.dataset.btn === 'success') {
        const notificationSuccess = new Notification(successNotific, success)
        notificationSuccess.show()

    } else if (e.target.dataset.btn === 'warning') {
        const notificationWarning = new Notification(warningNotific, warning)
        notificationWarning.show()

    } else if (e.target.dataset.btn === 'info') {
        const notificationInfo = new Notification(infoNotific, info)
        notificationInfo.show()
    }
})