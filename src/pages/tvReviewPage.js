import React from "react";
import { useLocation } from "react-router-dom";
import TemplateTVPage from "../components/templateTVPage";
import MovieReview from "../components/movieReview";

const TVReviewPage = (props) => {
    let location = useLocation();
    const { series, review } = location.state;

    return (
        <TemplateTVPage series={series}>
            <MovieReview review={review} />
        </TemplateTVPage>
    );
};

export default TVReviewPage;