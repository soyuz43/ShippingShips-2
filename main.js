import { DockList } from "./scripts/Docks.js";
import { HaulerShipList } from "./scripts/HaulerShips.js";
import { ShippingShipList } from "./scripts/ShippingShips.js";
import { getShippingShips, getHaulerShips } from "./scripts/database.js";

document.addEventListener("DOMContentLoaded", () => {
    const docksContainer = document.getElementById("docks-container");
    const haulersContainer = document.getElementById("haulers-container");
    const shippingContainer = document.getElementById("shipping-container");

    docksContainer.innerHTML += DockList();
    haulersContainer.innerHTML += HaulerShipList();
    shippingContainer.innerHTML += ShippingShipList();

    document.addEventListener("click", (clickEvent) => {
        const itemClicked = clickEvent.target;

        if (itemClicked.dataset.type === "hauler") {
            const haulerId = parseInt(itemClicked.dataset.id);
            const shippingShips = getShippingShips();
            let shipCount = 0;

            for (const ship of shippingShips) {
                if (ship.haulerId === haulerId) {
                    shipCount++;
                }
            }

            alert(`Hauler ${haulerId} is carrying ${shipCount} ships.`);
        }

        if (itemClicked.dataset.type === "shipping-ship") {
            const haulerId = parseInt(itemClicked.dataset.haulerId);
            const shipName = itemClicked.dataset.name;
            const haulers = getHaulerShips();

            let haulingShip = { name: "Unknown Hauler" };

            for (const hauler of haulers) {
                if (hauler.id === haulerId) {
                    haulingShip = hauler;
                    break;
                }
            }

            alert(`${shipName} is being hauled by ${haulingShip.name}`);
        }
    });
});
