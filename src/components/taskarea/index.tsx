import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import TaskCounter from '../taskCounter/taskCounter';

const TaskArea: FC = (): ReactElement => {
    return (
        <>
            <Grid item md={8} px={4}>
                <Box mb={8} px={4}>
                    {/* <Typography variant="h5" component="h2" gutterBottom>
                        Status of Your Tasks As On {format(new Date(), 'PPPP')}
                    </Typography> */}
                    <h2>
                        Status of Your Tasks As On {format(new Date(), 'PPPP')}
                    </h2>
                </Box>
                <Grid container display="flex" justifyContent="center">
                    <Grid
                        item
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-around"
                        alignItems="center"
                        mb={8}
                        md={10}
                        xs={12}
                    >
                        <TaskCounter />
                        <TaskCounter />
                        <TaskCounter />
                    </Grid>
                    <Grid
                        item
                        display="flex"
                        flexDirection="column"
                        xs={10}
                        md={8}
                    >
                        <Box>Bx Task Bx</Box>
                        <Box>Bx Task Bx</Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default TaskArea;
