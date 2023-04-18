/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as vscode from "vscode";
import WebExtensionContext from "../WebExtensionContext";

export const LINE_NUMBER_KEY = "line-number-key";
export const COLUMN_NUMBER_KEY = "column-number-key";

// import {
//     TinyliciousClient,
//     TinyliciousConnectionConfig,
// } from "@fluidframework/tinylicious-client";

//import { SharedMap } from "fluid-framework";

export async function loadContainer(id: string, line: number, column: number) {
    console.log("Inside loadContainer with ", id);
    console.log(`Line: ${line}`);
    console.log(`Column: ${column}`);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { SharedMap } = require("fluid-framework");

    const containerSchema = {
        initialObjects: { position: SharedMap },
    };

    const { TinyliciousClient } =
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("@fluidframework/tinylicious-client");
    const config = {
        connection: { port: 7070, domain: "http://localhost" },
    };

    const clientProps = {
        connection: config,
    };

    const tinyClient = new TinyliciousClient(clientProps);

    try {
        const { container } = await tinyClient.getContainer(
            WebExtensionContext.containerId,
            containerSchema
        );
        const map = container.initialObjects.position;
        const activeEditor = vscode.window.activeTextEditor;

        // Update active editor cursor location based on the container parameters
        if (activeEditor) {
            const newPosition = new vscode.Position(
                map.get(LINE_NUMBER_KEY) as number,
                map.get(COLUMN_NUMBER_KEY) as number
            ); // line 3, column 1
            const newSelection = new vscode.Selection(newPosition, newPosition);
            activeEditor.selection = newSelection;
            console.log(
                "New position updated to existing values",
                line,
                column
            );
        }
    } catch (error) {
        console.error(`Error retrieving container: ${error}`);
        console.error(`Creating new container`);

        const { container } = await tinyClient.createContainer(containerSchema);
        const map = container.initialObjects.position;
        map.set(LINE_NUMBER_KEY, line);
        map.set(COLUMN_NUMBER_KEY, column);
        WebExtensionContext.containerId = await container.attach();
        console.log("New position updated to new values", line, column);
    }
}
