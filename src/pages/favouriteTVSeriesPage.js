import React, { useContext } from "react";
import TVListPageTemplate from "../components/templateTVListPage";
import { TVContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTVDetails } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";

const FavouriteTVSeriesPage = () => {
  const { favourites: seriesIds } = useContext(TVContext);

  // Create an array of queries and run in parallel.
  const favouriteSeriesQueries = useQueries(
    seriesIds.map((seriesId) => {
      return {
        queryKey: ["series", { id: seriesId }],
        queryFn: getTVDetails,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteSeriesQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const series = favouriteSeriesQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <TVListPageTemplate
      title="Favourite TV Series"
      series={series}
      action={(series) => {
        return (
          <>
            <RemoveFromFavourites series={series} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTVSeriesPage;