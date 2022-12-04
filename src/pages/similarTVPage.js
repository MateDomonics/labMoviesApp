import React from "react";
import { useParams } from 'react-router-dom';
import TVListPageTemplate from "../components/templateTVListPage";
import { getSimilarTV } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const SimilarTVPage = (props) => {
    const { id } = useParams();
    console.log(id)
    const { data, error, isLoading, isError } = useQuery(["similarSeries", { id: id }], getSimilarTV);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const series = data.results;

    // Redundant, but necessary to avoid app crashing.
    const favourites = series.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    const addToFavourites = (seriesId) => true


    return (
        <TVListPageTemplate
            title="Similar TV Series"
            series={series}
            action={(tv) => {
                return <AddToFavouritesIcon series={tv} />
            }}
        />
    );
};

export default SimilarTVPage;