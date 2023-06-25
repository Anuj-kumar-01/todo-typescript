import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

const TaskDescriptionField: FC<ITextField> = ({
    onChange = (e) => {
        console.log('e', { e });
    },
    disabled = false,
}): ReactElement => {
    return (
        <>
            <TextField
                id="description"
                name="description"
                label="Description"
                placeholder="Description"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                fullWidth
                onChange={onChange}
                disabled={disabled}
            />
        </>
    );
};

export default TaskDescriptionField;
