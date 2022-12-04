import React, { useState } from "react";

export const TVContext = React.createContext(null);

const SeriesContextProvider = (props) => {
    const [favourites, setFavourites] = useState([])

    const addToFavourites = (series) => {
        let newFavourites = [...favourites];
        if (!favourites.includes(series.id)) {
            newFavourites.push(series.id);
        }
        setFavourites(newFavourites);
    };


    // We will use this function in a later section
    const removeFromFavourites = (series) => {
        setFavourites(favourites.filter(
            (mId) => mId !== series.id
        ))
    };

    return (
        <TVContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites
            }}
        >
            {props.children}
        </TVContext.Provider>
    );
};

export default SeriesContextProvider;