import React, { FC, ReactElement } from 'react';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = ({
    onChange = (date) => {
        console.log('Date', { date });
    },
    value = new Date(),
    disabled = false,
}): ReactElement => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Task Date"
                    inputFormat="dd/MM/yyyy"
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </>
    );
};

export default TaskDateField;

TaskDateField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date) || null,
    disabled: PropTypes.bool,
};
