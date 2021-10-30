/**
 * Shows a snackbar / toast
 * @param {string} messageToShow - String message to toast
 * @returns {void}
 */
 export const showSnackBar = (messageToShow) => {
    const snackbarTriggerEvent = new CustomEvent(
      'trigger-snackbar',
      {
        detail: {
          messageToShow
        }
      }
    );

    window.dispatchEvent(snackbarTriggerEvent)
  }