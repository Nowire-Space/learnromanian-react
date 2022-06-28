import React, {useContext} from 'react';

import classes from './LanguageSelector.css';

const languageSelector = () => {
    return(
        <select className={classes.LanguageSelector}>
          <option value="en">EN</option>
          <option value="ro">RO</option>
          <option value="ru">RU</option>
        </select>
    );
};

export default languageSelector;