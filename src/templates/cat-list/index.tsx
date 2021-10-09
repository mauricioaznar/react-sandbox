import * as React from 'react'

// icons
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from '@mui/icons-material/Delete';


// components
import {useHistory} from 'react-router-dom'
import {Fab, IconButton} from "@mui/material";
import {GetCatsQuery, useDeleteCatMutation, useGetCatsQuery} from "../../schema";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


export default function CatList () {
    const history = useHistory()
    const { data, loading } = useGetCatsQuery()
    const [deleteCatMutation] = useDeleteCatMutation()




    if (loading) {
        return <h1>Loading</h1>;
    }


    async function onDelete(cat: GetCatsQuery["cats"][number]) {
        await deleteCatMutation({
                variables: {
                    id: cat._id
                }
            })
    }

    function handleCreateClick() {
        history.push('/catForm')
    }

    function handleEditClick(cat: GetCatsQuery["cats"][number]) {
        history.push('/catForm', { cat })
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container alignItems={'center'}>
                <Grid item xs>
                    <h2>
                        Cats
                    </h2>
                </Grid>
                <Grid item>
                    <Fab color="primary" aria-label="add" onClick={handleCreateClick}>
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Breed</TableCell>
                                        <TableCell>Color</TableCell>
                                        <TableCell>Coat</TableCell>
                                        <TableCell>Lifespan</TableCell>
                                        <TableCell>Size</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data?.cats.map((cat) => (
                                        <TableRow
                                            key={cat.breed}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>
                                                {cat.breed}
                                            </TableCell>
                                            <TableCell>
                                                {cat.characteristics.color}
                                            </TableCell>
                                            <TableCell>{cat.characteristics.coat}</TableCell>
                                            <TableCell>

                                                {cat.characteristics.lifespan}
                                            </TableCell>
                                            <TableCell>
                                                {cat.characteristics.size}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    size={'small'}
                                                    onClick={ () => {
                                                        handleEditClick(cat)
                                                    } }>
                                                    <CreateIcon fontSize={'small'}/>
                                                </IconButton>
                                                <IconButton
                                                    size={'small'}
                                                    onClick={ () => { onDelete(cat) } }>
                                                    <DeleteIcon fontSize={'small'}/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}