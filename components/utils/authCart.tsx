import { Card, Grid } from "@mui/material";
import { styles } from "@styles/pages/auth";
import React, { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

const AuthCart: FC<props> = ({ children }) => {
  return (
    <>
      
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        sx={styles.container}
      >
        <Grid item xs={11} sm={8} lg={4} xl={3}>
          <Card>{children}</Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthCart;
