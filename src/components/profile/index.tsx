import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface IProfile {
    name: string;
}

const Profile: FC<IProfile> = ({ name = '' }): ReactElement => {
    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
            >
                <Avatar
                    sx={{
                        width: 96,
                        height: 96,
                        mb: 2,
                        backgroundColor: 'primary.main',
                    }}
                >
                    <Typography variant="h4" color="text.primary">
                        {name.substring(0, 1).toUpperCase()}
                    </Typography>
                </Avatar>

                <Typography variant="h5" color="text.primary">
                    Welcome, {name}
                </Typography>
                <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ textWrap: 'balance' }}
                >
                    This is your personal profile page. You can see the progress
                    you&apos;ve made with your work and manage your projects or
                    assigned tasks.
                </Typography>
            </Box>
        </>
    );
};

export default Profile;
