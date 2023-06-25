import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

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
                Sidebar
            </Grid>
        </>
    );
};

export default Sidebar;

const d = {};
