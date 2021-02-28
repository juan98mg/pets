import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import {
  PetFriendly,
  Dog,
  Paws,
  Diskette,
  DesignThinking,
  CalcelButon,
} from "../assets/icons/";
import "../assets/styles/App.scss";
import swal from "sweetalert";
import { addDocument, updateDocument } from "../services/actions";
import appConstants from "../util/constants";
import { getPetObservable, handlePetChange } from "../services/petObserv";

const PetForm = (props) => {
  const [register, setRegister] = useState({
    petName: "",
    petType: "",
    petBreed: "",
    petBirthday: "",
    ownerFullname: "",
    ownerCellphone: "",
    ownerAddress: "",
    ownerEmail: "",
  });

  useEffect(() => {
    const sub = getPetObservable().subscribe((data) => {
      let info = {
        id: data.id ? data.id : "",
        petName: data.petName ? data.petName : "",
        petType: data.petType ? data.petType : "",
        petBreed: data.petBreed ? data.petBreed : "",
        petBirthday: data.petBirthday ? data.petBirthday : "",
        ownerFullname: data.ownerFullname ? data.ownerFullname : "",
        ownerCellphone: data.ownerCellphone ? data.ownerCellphone : "",
        ownerAddress: data.ownerAddress ? data.ownerAddress : "",
        ownerEmail: data.ownerEmail ? data.ownerEmail : "",
      };

      setRegister(info);
    });

    return function () {
      sub.unsubscribe();
    };
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    let msnValid = validInfo();

    if (msnValid !== "") {
      swal({ text: msnValid, title: "Lo sentimos!", icon: "error" });
    } else {
      const result = register.id
        ? await updateDocument(appConstants.COLLECTION_PETS, register)
        : await addDocument(appConstants.COLLECTION_PETS, register);

      if (result.error) {
        swal({ text: result.error, title: "Error!", icon: "error" });
        return;
      } else {
        swal({
          text: register.id
            ? appConstants.SUCCES_UPDATD_MESSAGE
            : appConstants.SUCCES_SAVED_MESSAGE,
          title: "Excelente!",
          icon: "success",
        });
      }
    }
    cleanRegister();
  };

  const cleanRegister = () => {
    setRegister({
      petName: "",
      petType: "",
      petBreed: "",
      petBirthday: "",
      ownerFullname: "",
      ownerCellphone: "",
      ownerAddress: "",
      ownerEmail: "",
    });
  };

  const handleClose = () => {
    cleanRegister();
    handlePetChange({});

    props.handleClose();
  };

  const validInfo = () => {
    let msn = "";

    msn +=
      !register.petName || register.petName === ""
        ? "Debe ingresar un nombre para la mascota \n"
        : "";
    msn +=
      !register.petType || register.petType === ""
        ? "Debe ingresar un tipo para la mascota \n"
        : "";

    msn +=
      !register.petBreed || register.petBreed === ""
        ? "Debe ingresar una raza para la mascota \n"
        : "";

    msn += !register.petBirthday
      ? "Debe ingresar la fecha de nacimiento para la mascota \n"
      : "";

    msn +=
      !register.ownerFullname || register.ownerFullname === ""
        ? "Debe ingresar un nombre del propietario \n"
        : "";

    msn +=
      !register.ownerAddress || register.ownerAddress === ""
        ? "Debe ingresar una dirección del propietario \n"
        : "";

    msn +=
      !register.ownerEmail || register.ownerEmail === ""
        ? "Debe ingresar un email del propietario \n"
        : "";

    return msn;
  };

  return (
    <Box width={1} boxShadow={3} justifyContent="center" display="flex">
      <Grid container spacing={1} className="center-items">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box boxShadow={3} width={1} justifyContent="center" display="flex">
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
                    {register.petName.length > 0
                      ? `CREANDO A ${register.petName.toUpperCase()}`
                      : "CREACIÓN DE UNA MASCOTA"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                <Box height={1} width={1}>
                  <PetFriendly height="100px" width="100px" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box boxShadow={3} justifyContent="center" padding={1} display="flex">
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
                    {register.petName.length > 0
                      ? `Información de ${register.petName}`
                      : " Información de la mascota"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                <Box height={1} width={1}>
                  <Paws height="50px" width="50px" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="petName"
              label="¿Cuéntanos como se llama tú mascota?"
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              value={register.petName}
              onChange={(e) => {
                console.log("haciendo cambios");
                setRegister({ ...register, petName: e.target.value });
              }}
            />
          </Box>
        </Grid>
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="petType"
              label={`¿Qué tipo de mascota es ${register.petName}?`}
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 20,
              }}
              value={register.petType}
              onChange={(e) =>
                setRegister({ ...register, petType: e.target.value })
              }
            />
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="petBreed"
              label={`¿Qué raza es ${register.petName}?`}
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              value={register.petBreed}
              onChange={(e) =>
                setRegister({ ...register, petBreed: e.target.value })
              }
            />
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="petBirthday"
              label={
                register.petName
                  ? `¿Cuál es la fecha de nacimiento de ${register.petName} ?`
                  : "Fecha de nacimiento"
              }
              fullWidth
              className="border-none"
              variant="outlined"
              type="date"
              value={register.petBirthday}
              onChange={(e) =>
                setRegister({ ...register, petBirthday: e.target.value })
              }
            />
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box boxShadow={3} justifyContent="start" display="flex">
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
                    {register.ownerFullname.length > 0
                      ? `Información de ${register.ownerFullname.split(" ")[0]}`
                      : " Información del propietario"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                <Box height={1} width={1}>
                  <Dog height="50px" width="50px" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="ownerFullName"
              label="¿Cual es el nombre completo del propietario?"
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              value={register.ownerFullname}
              onChange={(e) =>
                setRegister({ ...register, ownerFullname: e.target.value })
              }
            />
          </Box>
        </Grid>

        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="ownerCellphone"
              label={
                register.ownerFullname.length > 0
                  ? `¿Cuál es el número celular de ${
                      register.ownerFullname.split(" ")[0]
                    }?`
                  : "¿Cual es el número celular del propietarios?"
              }
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              type="number"
              value={register.ownerCellphone}
              onChange={(e) =>
                setRegister({
                  ...register,
                  ownerCellphone: e.target.value,
                })
              }
            />
          </Box>
        </Grid>
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="ownerAddress"
              label={
                register.ownerFullname.length > 0
                  ? `¿Cuál es la dirección  de ${
                      register.ownerFullname.split(" ")[0]
                    }?`
                  : "¿Cual es la dirección del propietarios?"
              }
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              value={register.ownerAddress}
              onChange={(e) =>
                setRegister({
                  ...register,
                  ownerAddress: e.target.value,
                })
              }
            />
          </Box>
        </Grid>
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box
            height={1}
            width={1}
            boxShadow={5}
            borderRadius={10}
            className="input-element"
          >
            <TextField
              required
              id="ownerMail"
              label={
                register.ownerFullname.length > 0
                  ? `¿Cuál es el email  de ${
                      register.ownerFullname.split(" ")[0]
                    }?`
                  : "¿Cual es el email del propietarios?"
              }
              fullWidth
              className="border-none"
              variant="outlined"
              inputProps={{
                maxLength: 100,
              }}
              value={register.ownerEmail}
              onChange={(e) =>
                setRegister({
                  ...register,
                  ownerEmail: e.target.value,
                })
              }
            />
          </Box>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="mt-2 mb-2"
        >
          <Box width={1} margin={2}>
            <Grid container spacing={2}>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="center-items"
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  {register.id ? (
                    <>
                      <DesignThinking
                        className="mr-2"
                        height="25px"
                        width="25px"
                      />
                      Editar
                    </>
                  ) : (
                    <>
                      <Diskette className="mr-2" height="25px" width="25px" />
                      Guardar
                    </>
                  )}
                </Button>
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="center-items"
              >
                <Button
                  onClick={(e) => handleClose()}
                  variant="contained"
                  color="secondary"
                >
                  <CalcelButon className="mr-2" height="25px" width="25px" />
                  Cerrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetForm;
