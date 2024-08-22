/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { statSync } from "fs";
import path from "path";
import * as vscode from "vscode";
import type { ITelemetry } from "../../../common/OneDSLoggerTelemetry/telemetry/ITelemetry";
import {
	UserFileCreateEvent,
	sendTelemetryEvent,
} from "../../../common/OneDSLoggerTelemetry/telemetry/telemetry";
import {
	TableFolder,
	Tables,
	YoSubGenerator,
} from "./CreateOperationConstants";
import {
	createFileWatcher,
	createRecord,
	formatFileName,
	formatFolderName,
	isNullOrEmpty,
} from "./utils/CommonUtils";

export const createWebTemplate = (
	context: vscode.ExtensionContext,
	selectedWorkspaceFolder: string | undefined,
	yoPath: string | null,
	telemetry: ITelemetry,
) => {
	try {
		if (!selectedWorkspaceFolder) {
			return;
		}
		vscode.window
			.showInputBox({
				placeHolder: vscode.l10n.t(
					"Enter the name of the web template",
				),
				validateInput: (name) =>
					validateTemplateName(name, selectedWorkspaceFolder),
			})
			.then(async (webTemplateName) => {
				if (!isNullOrEmpty(webTemplateName) && webTemplateName) {
					const webTemplateFile = formatFileName(webTemplateName);
					const webTemplateFolder = formatFolderName(webTemplateName);

					const watcherPattern = path.join(
						TableFolder.WEBTEMPLATE_FOLDER,
						webTemplateFolder,
						`${webTemplateFile}.webtemplate.source.html`,
					);

					const watcher = createFileWatcher(
						context,
						selectedWorkspaceFolder,
						watcherPattern,
					);

					const command = `"${yoPath}" ${YoSubGenerator.WEBTEMPLATE} "${webTemplateName}"`;

					await createRecord(
						Tables.WEBTEMPLATE,
						command,
						selectedWorkspaceFolder,
						watcher,
						telemetry,
					);
				}
			});
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		sendTelemetryEvent(telemetry, {
			methodName: createWebTemplate.name,
			eventName: UserFileCreateEvent,
			fileEntityType: Tables.WEBTEMPLATE,
			exception: error as Error,
		});
		throw new Error(error);
	}
};

function validateTemplateName(
	name: string,
	selectedWorkspaceFolder: string | undefined,
): string | undefined {
	if (!name) {
		return vscode.l10n.t("Please enter a name for the web template.");
	}
	const file = formatFileName(name);
	const folder = formatFolderName(name);
	if (selectedWorkspaceFolder) {
		const filePath = path.join(
			selectedWorkspaceFolder,
			TableFolder.WEBTEMPLATE_FOLDER,
			folder,
			`${file}.webtemplate.source.html`,
		);
		try {
			const stat = statSync(filePath);
			if (stat) {
				return vscode.l10n.t(
					"A webtemplate with the same name already exists. Please enter a different name.",
				);
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error.code === "ENOENT") {
				return undefined;
			}
		}
	}
}
