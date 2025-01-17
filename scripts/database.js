const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: 43.5 },
        { id: 2, location: "Busan, South Korea", volume: 21.6 },
        { id: 3, location: "Rotterdam, The Netherlands", volume: 14.35 },
        { id: 4, location: "Antwerp, Belgium", volume: 12.04 }
    ],
    haulerShips: [
        { id: 1, name: "Hauler One", dockId: 1 },
        { id: 2, name: "Hauler Two", dockId: 2 },
        { id: 3, name: "Hauler Three", dockId: 3 },
        { id: 4, name: "Hauler Four", dockId: 4 }
    ],
    shippingShips: [
        { id: 1, name: "Cargo Titan", haulerId: 1 },
        { id: 2, name: "Ocean Voyager", haulerId: 1 },
        { id: 3, name: "Sea Giant", haulerId: 2 },
        { id: 4, name: "Maritime Queen", haulerId: 3 },
        { id: 5, name: "Atlantic Star", haulerId: 3 },
        { id: 6, name: "Pacific Pearl", haulerId: 4 }
    ]
};

export const getDocks = () => {
    return database.docks.slice();
};

export const getHaulerShips = () => {
    return database.haulerShips.slice();
};

export const getShippingShips = () => {
    return database.shippingShips.slice();
};
