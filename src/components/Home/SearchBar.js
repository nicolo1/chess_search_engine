import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
    return (
        <form action="/search">
        <Box id="searchbar-container" sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle id="searchbar-icon" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
                id='searchbar-textfield'
                name='q'
                label="Search"
                variant="standard"
                autoComplete='off'
                sx={{ width: '400px' }}
            />
        </Box>
    </form>
    );
}

export default SearchBar;