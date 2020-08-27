import React from 'react';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
const SaveBtn = () => {
    return(
      <Fab color="primary" aria-label="add" className="save-btn">
        <SaveIcon />
      </Fab>
    );
}

export default SaveBtn;