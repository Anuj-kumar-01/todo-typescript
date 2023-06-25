import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskTitleField: FC<ITextField> = ({
    onChange = (e) => {
        console.log('e', { e });
    },
    disabled = false,
}): ReactElement => {
    return (
        <>
            <TextField
                id="title"
                label="Task Title"
                placeholder="Task Title"
                variant="outlined"
                size="small"
                name="title"
                fullWidth
                onChange={onChange}
                disabled={disabled}
            />
        </>
    );
};

export default TaskTitleField;
