import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const SaveBtn = () => {
    return(
      <Fab color="primary" aria-label="add" className="save-btn">
        <AddIcon />
      </Fab>
    );
}

export default SaveBtn;