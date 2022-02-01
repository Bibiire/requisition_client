import React, { Component } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastType: 'success',
    };
    this.showToast.bind(this);
  }

  componentDidMount() {
    if(this.props?.title) {
      this.showToast(this.state.toastType); 
    }
  }


  showToast(toastType = 'success') {
    toastr.options = {
      positionClass: 'toast-top-right',
      timeOut: 5000,
      extendedTimeOut: 1000,
      progressBar: true,
      newestOnTop: true,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut',
      showDuration: 300,
      hideDuration: 1000,
    };
    //Toaster Types
    if (toastType === 'error') toastr.error('Error Found');
    else toastr.success('Successfully Updated');
  }

  

  render() {
    console.log(this.props)
    return null;
  }
}

export default Notification;
