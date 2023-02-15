
import SquareIcon from '@mui/icons-material/Square';
import Box from '@mui/material/Box';
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
    },
    {
        field: 'black',
        headerName: 'Black',
        width: 150,
        sortable:false,
        disableColumnMenu: true,
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
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(getMatches(matchHistory))
    }, [matchHistory]);

    if(matchHistory) {
        return (
            <div id='match-component-container'> 
                <Box sx={{ 
                        height: 700, width: '100%',
                        '.cold': {
                            backgroundColor: '#b9d5ff91',
                            color: '#1a3e72',
                          },
                          '.hot': {
                            backgroundColor: '#ff943975',
                            color: '#1a3e72',
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
                    <DataGrid
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
                                return params.value.toLowerCase() == searchedUser.toLowerCase() ? 'hot' : 'cold';
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
                    />
                </Box>
            </div>        
        );
    }
}
    
export default MatchHistory;