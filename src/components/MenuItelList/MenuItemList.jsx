import React from "react";
import { salads } from './data/salads.json'
import { MenuItem } from "components/MenuItem/MenuItem";

export const MenuItelList= () => {
    return (
        <div>
            {salads.map(salad => (
                <MenuItem/>
            ))}
        </div>
    )
}