import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatarImg from '../../assets/images/avatar img 1.jpg'

export default function ImageAvatars() {
    return (
        <Stack direction="row" spacing={2} className='pe-2'>
            <Avatar alt="Travis Howard" src={avatarImg} sx={{ width: 50, height: 50 }} />
        </Stack>
    );
}
