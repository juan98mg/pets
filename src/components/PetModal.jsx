import React, { useEffect, useState } from "react";
import PetForm from "./PetForm";
import { Box, Button, makeStyles, Modal } from "@material-ui/core/index";
import { Diskette } from "../assets/icons";
import "../assets/styles/App.scss";
import { getPetObservable } from "../services/petObserv";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    height: "500px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const PetModal = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  useEffect(() => {
    const subscription = getPetObservable().subscribe((data) => {
      if (data.id) setOpen(true);
    });
    return function () {
      subscription.unsubscribe();
    };
  }, []);

  const handleChange = () => {
    console.log("chandiviris");
    setOpen(!open);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <PetForm handleClose={handleChange} />
    </div>
  );

  return (
    <>
      <Box
        width={1}
        height={1}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Button
          key={"buttonModal"}
          onClick={handleChange}
          variant="contained"
          color="primary"
        >
          <Diskette className="mr-2" />
          Crear Mascota
        </Button>
        <Modal
          open={open}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Box>
    </>
  );
};

export default PetModal;
