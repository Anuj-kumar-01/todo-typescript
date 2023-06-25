import React, { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import TaskSelectField from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

// interface IProfile {}

const statusItems = [
    {
        value: Status.todo,
        label: Status.todo.toUpperCase(),
    },
    {
        value: Status.inProgress,
        label: Status.inProgress.toUpperCase(),
    },
    {
        value: Status.completed,
        label: Status.completed.toUpperCase(),
    },
];

const priorityItems = [
    {
        label: Priority.low.toUpperCase(),
        value: Priority.low,
    },
    {
        label: Priority.medium.toUpperCase(),
        value: Priority.medium,
    },
    {
        label: Priority.high.toUpperCase(),
        value: Priority.high,
    },
];

const CreateATask: FC = (): ReactElement => {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
                px={4}
                my={6}
            >
                <Typography component="h2" variant="h6" mb={2}>
                    Create A Task
                </Typography>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <TaskTitleField />
                    <TaskDescriptionField />
                    <TaskDateField />
                    <Stack direction="row" spacing={2} width="100%">
                        <TaskSelectField
                            label="Status"
                            name="status"
                            items={statusItems}
                        />
                        <TaskSelectField
                            label="Priority"
                            name="priority"
                            items={priorityItems}
                        />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

export default CreateATask;
