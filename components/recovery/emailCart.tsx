import AuthCart from "@components/utils/authCart";
import {
  Alert,
  Button,
  CardActions,
  CardContent,
  CircularProgress,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "@styles/pages/login";
import useForm from "../../src/hooks/useForm";
import { FormResetEmailData } from "../../src/types/forms";
import { initialResetFormState } from "../../src/constants/states";
import { FC } from "react";
import buildReducer from "../../src/reducers";

type props = {
  changeSteper(step: number): void;
  changeEmail(email: string): void;
};

const EmailCart: FC<props> = ({ changeSteper, changeEmail }) => {
  const { fields, errors, process, updateField, submit } =
    useForm<FormResetEmailData>(
      buildReducer<FormResetEmailData>(initialResetFormState),
      initialResetFormState
    );

  const handleSubmit = (e: React.FormEvent) => {
    submit(e, "/api/reset/email").then(() => {
      changeEmail(fields.email);
      changeSteper(1);
    });
  };

  return (
    <AuthCart>
      {process.loading && <LinearProgress color="primary" />}
      <form onSubmit={handleSubmit}>
        <CardContent sx={styles.content}>
          <Typography gutterBottom variant="h5" component="div">
            Restablecer Contraseña
          </Typography>
          <div style={styles.semiFullWidth}>
            <TextField
              error={errors.email}
              fullWidth
              id="input-with-sx"
              label="Email"
              variant="standard"
              type="email"
              name="email"
              margin="normal"
              value={fields.email}
              helperText={
                errors.email ? "Debes ingresar tu usuario/correo" : ""
              }
              onChange={updateField}
            />
          </div>
        </CardContent>
        <CardActions sx={styles.actions.container}>
          <Button
            disabled={process.loading}
            type="submit"
            variant="contained"
            size="medium"
            color={process.loading ? "inherit" : "primary"}
          >
            Enviar{" "}
            {process.loading && (
              <CircularProgress
                size={20}
                sx={styles.circularProgress}
                color="inherit"
              />
            )}
          </Button>
        </CardActions>
      </form>
      {!process.validate && (
        <div style={styles.error_message}>
          <Alert severity="error">
            No encontramos un registro con el correo electronico ingresado.
          </Alert>
        </div>
      )}
      <div style={styles.error_message}>
        <small>
          *Te enviaremos un correo electronico con un codigo unico para que
          puedas restablecer tu contraseña.
        </small>
      </div>
    </AuthCart>
  );
};

export default EmailCart;