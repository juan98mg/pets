import { Box, Grid, Typography } from "@material-ui/core";
import { PetCom } from "./assets/icons";
import PetModal from "./components/PetModal";
import PetList from "./components/PetList";
import "./assets/styles/App.scss";

import { getPetObservable } from "./services/petObserv";

function App() {
  return (
    <Box
      justifyContent="center"
      display="flex"
      padding={4}
      height="90vh"
      className="background-pet"
    >
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box boxShadow={3} style={{ background: "white" }}>
            <Grid container spacing={2}>
              <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                <Grid container spacing={0}>
                  <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                    <Box
                      height={1}
                      width={1}
                      justifyContent="center"
                      alignItems="center"
                      display="flex"
                    >
                      <Typography variant="h3" component="h3">
                        Bienvenido a TuMascota.com
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                    <Box height={1} width={1}>
                      <PetCom height="130px" width="130px" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                <Box
                  height={1}
                  width={1}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                >
                  <PetModal />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box boxShadow={3} style={{ background: "white" }}>
            <PetList />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
