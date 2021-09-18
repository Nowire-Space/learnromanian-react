import React from 'react';
import classes from "./NotFound.css";
import Title from "../UI/Title/Title";

const notFound = () => (
    <div className={classes.NotFound}>
        <Title>404</Title>
        <div className={classes.Body}>
            Ne pare rău, pagina nu a fost găsită!
        </div>
    </div>
)

export default notFound;