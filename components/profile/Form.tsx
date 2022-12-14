import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { FC, useEffect } from "react";
import { statesForms } from "../../src/constants/states";
import { useAppCtx } from "../../src/contexts/store";
import useForm from "../../src/hooks/useForm";
import { profileFields } from "../../src/types/forms";
import { pagesStyles } from "@styles/index";

const Form: FC<{}> = () => {
  const { modeTheme, user } = useAppCtx();

  const {
    fields,
    errors,
    process,
    updateField,
    submit,
    defaultValues,
    finishProcess,
  } = useForm<profileFields>(statesForms.profile);

  const {
    profileStyles: { formStyles },
  } = pagesStyles(modeTheme);

  useEffect(() => {
    defaultValues({
      user: user.user,
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: "",
    });
  }, []);

  return (
    
      <form
        onSubmit={(e) =>
          submit(e, "/api/profile").then(() => {
            console.log("it works!");
            finishProcess();
          })
        }
      >
        <Grid>
          <Typography
            sx={formStyles.title}
            gutterBottom
            variant="h5"
            component="h5"
          >
            Edita tu perfil
          </Typography>
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} lg={12} xl={6} sx={formStyles.fields}>
              <TextField
                error={errors.user}
                fullWidth
                id="input-with-sx"
                label="Usuario"
                variant="outlined"
                type="text"
                name="user"
                margin="normal"
                value={fields.user}
                sx={formStyles.textInput}
                helperText={errors.user ? "Debes ingresar tu usuario" : ""}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={6} sx={formStyles.fields}>
              <TextField
                error={errors.name}
                fullWidth
                id="input-with-sx"
                label="Nombre y Apellido"
                variant="outlined"
                type="text"
                name="name"
                margin="normal"
                value={fields.name}
                sx={formStyles.textInput}
                helperText={
                  errors.name ? "Debes ingresar tu nombre y appellido" : ""
                }
                onChange={updateField}
              />
            </Grid>
          </Grid>
          <Grid container direction={"row"} justifyContent={"space-between"}>
            <Grid item xs={12} sm={12} lg={12} xl={12} sx={formStyles.fields}>
              <TextField
                error={errors.phone}
                fullWidth
                id="input-with-sx"
                label="Telefono"
                variant="outlined"
                type="text"
                name="phone"
                margin="normal"
                value={fields.phone}
                sx={formStyles.textInput}
                helperText={errors.phone ? "Debes ingresar tu telefono" : ""}
                onChange={updateField}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} xl={12} sx={formStyles.fields}>
              <TextField
                error={errors.email}
                fullWidth
                id="input-with-sx"
                label="Correo Electronico"
                variant="outlined"
                type="email"
                name="email"
                margin="normal"
                value={fields.email}
                sx={formStyles.textInput}
                helperText={errors.email ? "Debes ingresar tu correo" : ""}
                onChange={updateField}
              />
            </Grid>
          </Grid>
          <Typography sx={formStyles.seccionTitle}>
            Cambia tu contrase??a
          </Typography>
        </Grid>
        <Grid container direction={"row"} justifyContent={"space-between"}>
          <Grid item xs={12} sm={12} lg={12} xl={6} sx={formStyles.fields}>
            <TextField
              error={errors.password}
              fullWidth
              id="input-with-sx"
              label="Elegi una contrase??a (opcional)"
              variant="outlined"
              type="password"
              name="password"
              margin="normal"
              value={fields.password}
              sx={formStyles.textInput}
              helperText={errors.password ? "Debes ingresar tu contrase??a" : ""}
              onChange={updateField}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} xl={6} sx={formStyles.fields}>
            <TextField
              error={errors.password}
              fullWidth
              id="input-with-sx"
              label="confirma tu contrase??a (opcional)"
              variant="outlined"
              type="password"
              name="password"
              margin="normal"
              value={fields.password}
              sx={formStyles.textInput}
              helperText={
                errors.password ? "Debes ingresar confirmar tu contrase??a" : ""
              }
              onChange={updateField}
            />
          </Grid>
        </Grid>
        <Grid sx={formStyles.actions.container}>
          <Button
            disabled={process.loading}
            type="submit"
            variant="contained"
            sx={formStyles.submiButton}
            color={process.loading ? "inherit" : "primary"}
          >
            Actualizar{" "}
            {process.loading && (
              <CircularProgress
                size={20}
                sx={formStyles.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </Grid>
        {!process.validate && (
          <div style={formStyles.errorMessage}>
            <Alert severity="error" sx={formStyles.alertComponent}>
              Hubo un error!
            </Alert>
          </div>
        )}
        {process.finish && (
          <div style={formStyles.errorMessage}>
            <Alert severity="success" sx={formStyles.alertComponent}>
              Se Modifico con exito tu perfil
            </Alert>
          </div>
        )}
      </form>
   
  );
};

export default Form;
