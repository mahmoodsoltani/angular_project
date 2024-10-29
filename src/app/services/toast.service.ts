// src/app/services/toast.service.ts

import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showToast(
    message: string,
    backgroundColor: string = '#4CAF50',
    duration: number = 3000
  ) {
    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: 'top', // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      backgroundColor: backgroundColor,
      stopOnFocus: true,
    }).showToast();
  }

  showSuccess(message: string) {
    this.showToast(message, '#4CAF50'); // Green for success
  }

  showError(message: string) {
    this.showToast(message, '#FF5733'); // Red for errors
  }

  showInfo(message: string) {
    this.showToast(message, '#2196F3'); // Blue for info
  }
}
