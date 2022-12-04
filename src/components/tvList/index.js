import React from "react";
import Series from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ({ series, action }) => {
  let tvCards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Series key={m.id} series={m} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;