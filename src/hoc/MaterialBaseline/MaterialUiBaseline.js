import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

const MaterialUiBaseline = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            {...props.children}
        </React.Fragment>
    );
}

export default MaterialUiBaseline;