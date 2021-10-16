import * as React from 'react'

// icons
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from '@mui/icons-material/Delete';


// components
import {useHistory} from 'react-router-dom'
import {Fab, IconButton} from "@mui/material";
import {GetUsersQuery, namedOperations, useGetUsersQuery} from "../../schema";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {useState} from "react";


export default function UserList() {
    const history = useHistory()
    const {data, loading} = useGetUsersQuery()

    if (loading) {
        return <h1>Loading</h1>;
    }


    function handleCreateClick() {
        history.push('/signInForm')
    }


    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container alignItems={'center'}>
                <Grid item xs>
                    <h2>
                        Users
                    </h2>
                </Grid>
                <Grid item>
                    <Fab size={'small'} color="primary" aria-label="add" onClick={handleCreateClick}>
                        <AddIcon/>
                    </Fab>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.users.map((user) => (
                                    <UserRow
                                        key={user.username}
                                        user={user}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
}


function UserRow({user}: { user: GetUsersQuery["users"][number] }) {
    const [isDisabled, setDisabled] = useState(false)

    const history = useHistory()

    function handleEditClick(User: GetUsersQuery["users"][number]) {
        // history.push('/UserForm', {User})
    }


    async function onDelete(User: GetUsersQuery["users"][number]) {
        setDisabled(true)
    }

    return (
        <TableRow
            key={user.username}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell>
                {user.username}
            </TableCell>
        </TableRow>
    );
}