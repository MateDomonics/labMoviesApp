import React from "react";
import TVList from "../components/tvList";
import SampleTV from "./tvSampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToTVFavouritesIcon from "../components/cardIcons/addToTVFavourites";
import Grid from "@mui/material/Grid";
import SeriesContextProvider from "../contexts/tvContext";

export default {
  title: "TV Page/TVList",
  component: TVList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
  ],
};

export const Basic = () => {
  const series = [
    { ...SampleTV, id: 1 },
    { ...SampleTV, id: 2 },
    { ...SampleTV, id: 3 },
    { ...SampleTV, id: 4 },
    { ...SampleTV, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVList
        series={series}
        action={(series) => <AddToTVFavouritesIcon series={series} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
