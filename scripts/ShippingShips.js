import { getShippingShips, getHaulerShips } from "./database.js";

export const ShippingShipList = () => {
    const shippingShips = getShippingShips();
    const haulerShips = getHaulerShips();

    let shippingShipsHTML = "<ul>";

    for (const ship of shippingShips) {
        const hauler = haulerShips.find((h) => h.id === ship.haulerId);

        shippingShipsHTML += `
            <li data-id="${ship.id}" data-hauler-id="${ship.haulerId}" data-name="${ship.name}" data-type="shipping-ship">
                Name: ${ship.name} - Assigned Hauler: ${hauler ? hauler.name : "No Hauler Assigned"}
            </li>
        `;
    }

    shippingShipsHTML += "</ul>";

    return shippingShipsHTML;
};
