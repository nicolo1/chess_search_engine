
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
        width: 150,
        sortable:false,
        disableColumnMenu: true,
        cellClassName: 'match-history-user-cell',
    },
    {
        field: 'black',
        headerName: 'Black',
        width: 150,
        sortable:false,
        disableColumnMenu: true,
        cellClassName: 'match-history-user-cell',
      },
      {
        field: 'result',
        headerName: 'Result',
        width: 150,
        sortable:false,
        disableColumnMenu: true,
      },
      {
        field: 'gameType',
        headerName: 'Game Type',
        width: 150,
        disableColumnMenu: true,
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        disableColumnMenu: true,
        valueFormatter: (params) => {
            return `${getDateStringify(params.value)}`;
          },
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
                        height: 700, width: '100%',
                          '.currentUser': {
                            fontWeight:'700'
                          },
                          '.user:hover': {
                            backgroundColor:'yellow'
                          },
                          '.win': {
                            backgroundColor: 'green',
                            color: 'white',
                          },
                          '.loss': {
                            backgroundColor: 'red',
                            color: 'white',
                          },
                          '.draw': {
                            backgroundColor: 'blue',
                            color: 'white',
                          },
                    }}
                >
                    <h1 className='stats-list-heading'>Match History</h1>
                    <DataGrid
                        sx={{
                            ".match-history-user-cell:hover": {
                                cursor: 'pointer',
                                textDecoration:'underline'
                            }
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
                        onCellClick = {(e) => {
                            
                            setSearchParams({"q":e.row[e.field]})
                            window.location.reload();
                        }}
                    />
                </Box>
            </div>        
        );
    }
}
    
export default MatchHistory;