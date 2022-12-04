import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/tvDetails";
import TemplateTVPage from "../components/templateTVPage";
import { getTVDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVDetailsPage = (props) => {
    const { id } = useParams();
    const { data: series, error, isLoading, isError } = useQuery(
        ["series", { id: id }],
        getTVDetails
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {series ? (
                <>
                    <TemplateTVPage series={series}>
                        <TVDetails series={series} />
                    </TemplateTVPage>
                </>
            ) : (
                <p>Waiting for movie details</p>
            )}
        </>
    );
};

export default TVDetailsPage;