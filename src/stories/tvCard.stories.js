import React from "react";
import TVCard from "../components/tvCard";
import SampleTV from "./tvSampleData";
import { MemoryRouter } from "react-router";
import SeriesContextProvider from "../contexts/tvContext";
import { action } from "@storybook/addon-actions";
import AddToTVFavouritesIcon from "../components/cardIcons/addToTVFavourites";

export default {
  title: "TV Page/TVCard",
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      series={SampleTV}
      action={(series) => <AddToTVFavouritesIcon series={series} />}
      taging={(series) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TVCard
      series={sampleNoPoster}
      action={(series) => <AddToTVFavouritesIcon series={series} />}
      taging={(series) => null}
    />
  );
};
Exceptional.storyName = "exception";
