import React, { useContext, useState, useEffect} from 'react';

export const MenuContext = React.createContext();
export const setMenuContext = React.createContext();

const MenuProvider = ({ children }) => {

    const [menu, setMenu] = useState(false);

    const changeMenu = (change) => {
        setMenu(menu => change);
    }

    return(
        <MenuContext.Provider value={menu}>
            <setMenuContext.Provider value={changeMenu}>
            {children}
            </setMenuContext.Provider>
        </MenuContext.Provider>
    );
}

export default MenuProvider;

