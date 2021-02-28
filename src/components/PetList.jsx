import { Box, Button, Card, Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import "../assets/styles/App.scss";
import {
  PetFriendly,
  Paws,
  Dog,
  DesignThinking,
  Delete,
  Tools,
} from "../assets/icons";

import { handlePetChange, getPetObservable } from "../services/petObserv";
import { getCollection, deleteDocument } from "../services/actions";
import appConstants from "../util/constants";

import swal from "sweetalert";

const columns = [
  { id: "petName", label: "Nombre" },
  { id: "petType", label: "Tipo" },
  {
    id: "petBreed",
    label: "Raza",
  },
  {
    id: "petBirthday",
    label: "Fecha de nacimiento",
  },
  { id: "ownerFullname", label: "Nombre" },
  {
    id: "ownerCellphone",
    label: "Celular",
  },
  {
    id: "ownerAddress",
    label: "Dirección",
  },
  {
    id: "ownerEmail",
    label: "Email",
  },
];

const PetList = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [list, setList] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    listPets();
    const sub = getPetObservable().subscribe((data) => {
      listPets();
    });

    return function () {
      sub.unsubscribe();
    };
  }, []);

  const listPets = () => {
    (async () => {
      const result = await getCollection(appConstants.COLLECTION_PETS);
      setList(result.data);
    })();
  };

  const handleEdit = (itemSelected) => {
    console.log(itemSelected);
    handlePetChange(itemSelected);
  };

  const handleDelete = (itemSelected) => {
    swal({
      title: "¿Estas seguro ?",
      text: "Una vez eliminado, no podrás recuperar este registro!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        (async () => {
          const result = await deleteDocument(
            appConstants.COLLECTION_PETS,
            itemSelected.id
          );
          if (!result.statusResponse) {
            swal({
              text: result.error,
              title: "Lo sentimos",
              icon: "message",
            });
          } else {
            swal(
              `el registro de la mascota ${itemSelected.petName} fue eliminado exitosamente`,
              {
                icon: "success",
              }
            );
            listPets();
          }
        })();
      } else {
        swal("Tu registro esta a salvo!");
      }
    });
  };

  return (
    <Box width={1} height={1}>
      <Card className="border-10">
        <TableContainer className="table-master">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                >
                  <Grid container spacing={0}>
                    <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                      <Box
                        height={1}
                        width={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <Typography variant="h3" component="h4">
                          Listado de mascotas
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Box height={1} width={1}>
                        <PetFriendly height="70px" width="70px" />
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  colSpan={4}
                  className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                >
                  <Grid container spacing={0}>
                    <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                      <Box
                        height={1}
                        width={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <Typography variant="h5" component="h4">
                          Información de la mascota
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Box height={1} width={1}>
                        <Paws height="50px" width="50px" />
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>

                <TableCell
                  colSpan={4}
                  className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                >
                  <Grid container spacing={0}>
                    <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                      <Box
                        height={1}
                        width={1}
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                      >
                        <Typography variant="h5" component="h4">
                          Información del propietario
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                      <Box height={1} width={1}>
                        <Dog height="50px" width="50px" />
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell
                  colSpan={1}
                  className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                >
                  <Tools height="50px" width="50px" />
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}

                <TableCell
                  className="bg-secundary fc-third ff-poppins fw-bold fs-Large "
                  key={"action"}
                >
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell key={"action"}>
                      <Button
                        color="primary"
                        className="btn-rounded-secundary ff-poppins"
                        onClick={(e) => handleEdit(row)}
                      >
                        <DesignThinking className="mr-2" /> Editar
                      </Button>
                      <Button
                        color="primary"
                        className="btn-rounded-danger  ff-poppins mt-2"
                        onClick={(e) => handleDelete(row)}
                      >
                        <Delete className="mr-2" /> Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Card>
    </Box>
  );
};

export default PetList;
