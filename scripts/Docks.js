import { getDocks } from "./database.js"

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `
            <li data-id="${dock.id}" data-location="${dock.location}" data-volume="${dock.volume}">
                ID: ${dock.id} - Location: ${dock.location} - Volume: ${dock.volume}
            </li>
        `
    }

    docksHTML += "</ul>"

    return docksHTML
}