import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Profile from '../profile';
import CreateATask from '../createATask';

const Sidebar: FC = (): ReactElement => {
    return (
        <>
            <Grid
                item
                md={4}
                sx={{
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '100%',
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Profile name="John Doe" />
                <CreateATask />
            </Grid>
        </>
    );
};

export default Sidebar;
