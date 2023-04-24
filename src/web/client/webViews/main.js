/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

const CONTAINER_ID = "containerId";
const LINE_NUMBER_KEY = "lineNumber";
const COLUMN_NUMBER_KEY = "columnNumber";

async function loadContainer(vscode, tinylicious, fluid, id, line, column) {
    console.log("VSCODE WEBVIEW Inside loadContainer with ", id);
    console.log(`VSCODE WEBVIEW Line: ${line}`);
    console.log(`VSCODE WEBVIEW Column: ${column}`);

    const config = {
        connection: { port: 7070, domain: "http://localhost" },
    };

    const clientProps = {
        connection: config,
    };

    console.log("VSCODE WEBVIEW clientProps: ", clientProps);

    // await Promise.all([
    //     import("https://unpkg.com/@fluidframework/tinylicious-client@1.3.6"),
    //     import("https://unpkg.com/fluid-framework@1.3.6"),
    // ])
    //     .then(async ([tinylicious, fluid]) => {
    //         console.log(
    //             "VSCODE WEBVIEW inside the then for promise all imports load"
    //         );
    const { TinyliciousClient } = tinylicious;

    console.log("VSCODE WEBVIEW loaded the tiny client object");
    const tinyClient = new TinyliciousClient(clientProps);

    console.log("VSCODE WEBVIEW tiny client created");

    const { SharedMap } = fluid;

    const containerSchema = {
        initialObjects: { position: SharedMap },
    };

    console.log("VSCODE WEBVIEW containerschema creates");

    try {
        const { container } = await tinyClient.getContainer(
            id,
            containerSchema
        );
        const map = container.initialObjects.position;
        const activeEditor = vscode.window.activeTextEditor;

        // Update active editor cursor location based on the container parameters
        if (activeEditor) {
            const newPosition = new vscode.Position(
                map.get(LINE_NUMBER_KEY),
                map.get(COLUMN_NUMBER_KEY)
            ); // line 3, column 1
            const newSelection = new vscode.Selection(newPosition, newPosition);
            activeEditor.selection = newSelection;
            console.log(
                "VSCODE WEBVIEW New position updated to existing values",
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
        const containerId = await container.attach();
        map.set(CONTAINER_ID, containerId);
        console.log(
            "VSCODE WEBVIEW New position updated to new values",
            containerId,
            line,
            column
        );
    }
    // })
    // .catch((error) => {
    //     console.error(error);
    // });
}

function runFluidApp() {
    // eslint-disable-next-line no-undef
    const vscode = acquireVsCodeApi();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var exports = {};

    console.log(`VSCODE WEBVIEW  Running script`);
    // require.config({
    //     paths: {
    //         "@fluidframework/tinylicious-client":
    //             "https://unpkg.com/@fluidframework/tinylicious-client@1.3.6/dist/index",
    //         "fluid-framework":
    //             "https://unpkg.com/fluid-framework@1.3.6/dist/index",
    //     },
    // });

    // require([
    //     "@fluidframework/tinylicious-client",
    //     "fluid-framework",
    // ], async function (tinyliciousClient, fluidFramework) {
    // console.log("VSCODE WEBVIEW init require module");
    // const { TinyliciousClient } = tinyliciousClient;

    // console.log("VSCODE WEBVIEW loaded the tiny client object");

    // const { SharedMap } = fluidFramework;

    // console.log("VSCODE WEBVIEW shared map loaded");
    Promise.all([
        import("https://unpkg.com/@fluidframework/tinylicious-client@1.3.6"),
        import("https://unpkg.com/fluid-framework@1.3.6"),
    ])
        .then(async ([tinylicious, fluid]) => {
            console.log(
                "VSCODE WEBVIEW inside the then for promise all imports load"
            );

            // Listen for messages from the extension
            // eslint-disable-next-line no-undef
            window.addEventListener("message", async (event) => {
                const message = event.data;

                console.log(
                    `VSCODE WEBVIEW Received greeting from extension: ${JSON.stringify(
                        message
                    )}`
                );

                await loadContainer(
                    vscode,
                    tinylicious,
                    fluid,
                    message.containerId,
                    message.lineNumber,
                    message.columnNumber
                );

                console.log("VSCODE WEBVIEW Sending message back");

                // Send a message to the extension
                await vscode.postMessage({
                    containerId: message.containerId,
                    lineNumber: message.lineNumber,
                    columnNumber: message.lineNumber,
                });
            });
        })
        .catch((error) => {
            console.error(error);
        });
    //});
}

runFluidApp();
