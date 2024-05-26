/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as vscode from "vscode";
import { PowerPagesCopilot } from "../../common/copilot/PowerPagesCopilot";
import type { PacWrapper } from "../pac/PacWrapper";
import type { ITelemetry } from "../telemetry/ITelemetry";
import { AuthTreeView } from "./AuthPanelView";
import { EnvAndSolutionTreeView } from "./EnvAndSolutionTreeView";

export function RegisterPanels(
	pacWrapper: PacWrapper,
	context: vscode.ExtensionContext,
	telemetry: ITelemetry,
): vscode.Disposable[] {
	const authPanel = new AuthTreeView(() => pacWrapper.authList(), pacWrapper);
	const envAndSolutionPanel = new EnvAndSolutionTreeView(
		() => pacWrapper.orgList(),
		(environmentUrl) =>
			pacWrapper.solutionListFromEnvironment(environmentUrl),
		authPanel.onDidChangeTreeData,
		pacWrapper,
	);

	const copilotPanel = new PowerPagesCopilot(
		context.extensionUri,
		context,
		telemetry,
		pacWrapper,
	);

	vscode.window.registerWebviewViewProvider(
		"powerpages.copilot",
		copilotPanel,
		{
			webviewOptions: {
				retainContextWhenHidden: true,
			},
		},
	);

	return [authPanel, envAndSolutionPanel, copilotPanel];
}
