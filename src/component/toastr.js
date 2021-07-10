import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  export function toastrMessage(title, message, type){
    toastr[type](message, title)
  }

  export function toastrErrorMsg(message){
    toastrMessage('Error', message, 'error')
  }

  export function toastrSuccessMsg(message){
    toastrMessage('Success', message, 'sucess')
  }

  export function toastrWarningMsg(message){
    toastrMessage('Warning', message, 'warning')
  }

