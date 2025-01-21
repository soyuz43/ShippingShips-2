import { getHaulerShips, getDocks } from "./database.js";

export const HaulerShipList = () => {
    const haulerShips = getHaulerShips();
    const docks = getDocks();

    let haulersHTML = "<ul>";

    for (const hauler of haulerShips) {
        const dock = docks.find((d) => d.id === hauler.dockId);

        haulersHTML += `
            <li data-id="${hauler.id}" data-type="hauler">
                Name: ${hauler.name} - Assigned Dock: ${dock ? dock.location : "No Dock Assigned"}
            </li>
        `;
    }

    haulersHTML += "</ul>";

    return haulersHTML;
};
