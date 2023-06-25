import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createATask/enums/Status';
import { emitCorrectBorderColor, emitCorrectLabel } from './helpers/utils';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { status = Status.completed, count = 10 } = props;
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar
                    sx={{
                        backgroundColor: 'transparent',
                        border: '5px solid',
                        width: 96,
                        height: 96,
                        mb: 2,
                        borderColor: `${emitCorrectBorderColor(status)}`,
                    }}
                >
                    <Typography variant="h4" color="white">
                        {count}
                    </Typography>
                </Avatar>
                <Typography
                    color="white"
                    fontWeight="bold"
                    fontSize="20px"
                    variant="h5"
                >
                    {emitCorrectLabel(status)}
                </Typography>
            </Box>
        </>
    );
};

export default TaskCounter;

TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([Status.completed, Status.inProgress, Status.todo]),
};
