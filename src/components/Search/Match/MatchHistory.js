import SquareIcon from '@mui/icons-material/Square';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { getMatches } from '../../../service/match.service';

const columns = [
    {
        field: 'white',
        headerName: 'White',
        width: 150,
        editable: false,
    },
    {
        field: 'black',
        headerName: 'Black',
        width: 150,
        editable: false,
      },
      {
        field: 'result',
        headerName: 'Result',
        width: 150,
        editable: false,
      },
      {
        field: 'gameType',
        headerName: 'Game Type',
        width: 150,
        editable: false,
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        editable: false,
      },
  ];

const MatchHistory = ({ matchHistory }) => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(getMatches(matchHistory))
    }, [matchHistory]);

    if(matchHistory) {
        return (
            <div id='match-component-container'> 
                <Box sx={{ height: 800, width: '100%' }}>
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
                    />
                </Box>
            </div>        
        );
    }
}
    
export default MatchHistory;