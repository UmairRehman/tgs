import React, { useState } from 'react';

/** Third party dependencies */
import {
    IconButton,
    Snackbar as SnackBarMaterial,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';


const Snackbar = (props) => {
    
    const [isSnackBarOpen, triggerSnackBar] = useState(false);
    
    const [snackBarMessage, setSnackBarMessage] = useState('');
    
    const snackBarDefaultDuration = 4000;
    
    const {
        snackBarMessage: snackBarMessateToUse = snackBarMessage,
        snackBarDefaultDuration: defaultDuration = snackBarDefaultDuration,
    } = props;


    /**
       * @param  {...any} args - Arguments passed on snackbar close
       * @returns {void}
       */
    const handleClose = () => {
        /** State Setter first forwards a wrapper over the actual event in this case
         * which is referred to as a Synthetic Event.
         * For more information review React docs.
         */
        if (typeof triggerSnackBar !== 'function')
            return;

        return triggerSnackBar(false);
    }

    /** Event listeners */
    window.addEventListener('trigger-snackbar', ($e) => {
        const {
            detail: { messageToShow }
        } = $e;

        showSnackBar(messageToShow);

        return triggerSnackBar(true);
    });
    /********************************************************************* */

    /**
     * Shows a snackbar / toast
     * @param {string} message - String message to toast
     * @returns {void}
     */
    const showSnackBar = (message) => {
        setSnackBarMessage(message);

        return triggerSnackBar(true);
    }

    const snackbarAction = <React.Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </React.Fragment>;


    return <SnackBarMaterial
        open={isSnackBarOpen}
        autoHideDuration={defaultDuration}
        onClose={handleClose}
        message={snackBarMessateToUse}
        action={snackbarAction}
    />
};

export default Snackbar;