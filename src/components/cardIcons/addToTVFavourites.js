import React, { useContext } from "react";
import { TVContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToTVFavouritesIcon = ({ series }) => {
    const context = useContext(TVContext);

    const handleAddToFavourites = (e) => {
        e.preventDefault();
        context.addToFavourites(series);
        console.log(context.favourites)
    };

    return (
        <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
            <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
    );
};

export default AddToTVFavouritesIcon;