import { getDocks } from "./database.js";

export const DockList = () => {
    const docks = getDocks();

    let docksHTML = "<ul>";

    for (const dock of docks) {
        docksHTML += `
            <li data-id="${dock.id}" data-location="${dock.location}" data-volume="${dock.volume}" data-type="dock">
                ID: ${dock.id} - Location: ${dock.location} - Volume: ${dock.volume}
            </li>
        `;
    }

    docksHTML += "</ul>";

    return docksHTML;
};

// Add click event listener for docks
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "dock") {
        const dockId = itemClicked.dataset.id;
        const dockLocation = itemClicked.dataset.location;
        const dockVolume = itemClicked.dataset.volume;

        alert(`Dock ID: ${dockId}\nLocation: ${dockLocation}\nVolume: ${dockVolume}`);
    }
});
