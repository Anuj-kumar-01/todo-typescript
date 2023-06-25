import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = ({
    value = '',
    label = 'Select Box',
    name = 'Select Box',
    items = [{ value: 1, label: 'Pending' }],
    disabled = false,
    onChange = (e) => {
        console.log('select', { e });
    },
}): ReactElement => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id={`${name}-${label}`}>{label}</InputLabel>
                <Select
                    labelId={`${name}-${label}`}
                    id={`${name}-${label}-select`}
                    value={value}
                    label={label}
                    name={name}
                    onChange={onChange}
                    disabled={disabled}
                >
                    {items.map((item, index) => (
                        <MenuItem
                            key={`${item.value}-${index}`}
                            value={item.value}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default TaskSelectField;

TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }).isRequired,
    ),
};
