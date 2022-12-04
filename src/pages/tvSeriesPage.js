import React from "react";
import { getTVSeries } from "../api/tmdb-api";
import TVListPageTemplate from "../components/templateTVListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToTVFavouritesIcon from '../components/cardIcons/addToTVFavourites'

const TVSeriesPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('tvSeries', getTVSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const series = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = series.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true

  return (
    <TVListPageTemplate
      title="TV Series"
      series={series}
      action={(tv) => {
        return <AddToTVFavouritesIcon series={tv} />
      }}
    />
  );
};
export default TVSeriesPage;