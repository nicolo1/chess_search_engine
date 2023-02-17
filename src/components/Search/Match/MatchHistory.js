
import Box from '@mui/material/Box';
import { useSearchParams } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getDateStringify } from '../../../service/app.service';
import { getMatches } from '../../../service/match.service';

const columns = [
    {
        field: 'white',
        headerName: 'White',
        sortable:false,
        disableColumnMenu: true,
        cellClassName: 'match-history-user-cell',
        headerAlign: 'center',
        width:'200'
    },
    {
        field: 'black',
        headerName: 'Black',
        sortable:false,
        disableColumnMenu: true,
        cellClassName: 'match-history-user-cell',
        headerAlign: 'center',
        width:'200'
    },
    {
        field: 'result',
        headerName: 'Result',
        sortable:false,
        disableColumnMenu: true,
        headerAlign: 'center',
        align:'center',
    },
    {
        field: 'gameType',
        headerName: 'Game Type',
        disableColumnMenu: true,
        headerAlign: 'center',
        align:'center',
        width:'150',
    },
    {
        field: 'date',
        headerName: 'Date',
        disableColumnMenu: true,
        valueFormatter: (params) => {
            return `${getDateStringify(params.value)}`;
        },
        headerAlign: 'center',
        align:'center',
    },
    ];

const MatchHistory = ({ searchedUser, matchHistory }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(getMatches(matchHistory))
    }, [matchHistory]);

    if(matchHistory) {
        return (
            <div id='match-component-container'> 
                <Box sx={{ 
                            height: 700, 
                            width: '100%',
                            '.currentUser': {
                                fontWeight:'700'
                            },
                            '.win': {
                                color: 'green',
                            },
                            '.loss': {
                                color: 'red',
                            },
                            '.draw': {
                                color: 'blue',
                            },
                    }}
                >
                    <h1 className='main-heading'>Match History</h1>
                    <DataGrid
                        sx={{
                            ".match-history-user-cell:hover": {
                                cursor: 'pointer',
                                textDecoration:'underline',
                            },
                        }}
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        initialState={{
                            sorting: {
                                sortModel: [{ field: 'date', sort: 'desc' }],
                            },
                        }}
                        getCellClassName={(params) => {
                            if (params.field == 'white' || params.field == 'black') {
                                return params.value.toLowerCase() == searchedUser.toLowerCase() ? 'currentUser' : '';
                            }
                            if(params.field == 'result') {
                                switch(params.value) {
                                    case '1-0':
                                        return 'win';
                                    case '0-1':
                                        return 'loss';
                                    default:
                                        return 'draw';
                                }
                            }
                            return '';
                        }}

                        // event for when user is clicked
                        onCellClick = {(e) => {
                            setSearchParams({
                                "q": e.row[e.field]
                            })
                            window.location.reload();
                        }}
                    />
                </Box>
            </div>        
        );
    }
}
    
export default MatchHistory;