import React from "react";
import TVDetails from "../components/tvDetails"
import SampleTV from "./tvSampleData";
import { MemoryRouter } from "react-router";
import SeriesContextProvider from "../contexts/tvContext";

export default {
  title: "TV Details Page/TVDetails",
  component: TVDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <SeriesContextProvider>{Story()}</SeriesContextProvider>,
  ],
};

export const Basic = () => <TVDetails series={SampleTV} />;

Basic.storyName = "Default";
