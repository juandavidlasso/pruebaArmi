import React from 'react';
import { Skeleton, Stack } from '@mui/material';

interface Props {}

const Loader: React.FC<Props> = ({}) => {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={60} height={60} />
            <Skeleton variant="rectangular" width={60} height={60} />
            <Skeleton variant="rectangular" width={60} height={60} />
        </Stack>
    );
};

export default Loader;
