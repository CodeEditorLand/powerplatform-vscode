/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as vscode from 'vscode';
import { PacWrapper } from '../pac/PacWrapper';
import { AuthTreeView } from './AuthPanelView';
import { EnvAndSolutionTreeView } from './EnvAndSolutionTreeView';
import { PowerPagesCopilot } from '../../common/copilot/PowerPagesCopilot';
import { PowerPagesChatParticipant } from '../../common/chat-participants/powerpages/PowerPagesChatParticipant';

export function RegisterPanels(pacWrapper: PacWrapper, context: vscode.ExtensionContext): vscode.Disposable[] {
    const authPanel = new AuthTreeView(() => pacWrapper.authList(), pacWrapper);
    const envAndSolutionPanel = new EnvAndSolutionTreeView(
        () => pacWrapper.orgList(),
        (environmentUrl) => pacWrapper.solutionListFromEnvironment(environmentUrl),
        authPanel.onDidChangeTreeData,
        pacWrapper);

    const copilotPanel = new PowerPagesCopilot(context.extensionUri, context, pacWrapper);

    const powerPagesChatParticipant = PowerPagesChatParticipant.getInstance(context, pacWrapper);

    vscode.window.registerWebviewViewProvider('powerpages.copilot', copilotPanel, {
        webviewOptions: {
            retainContextWhenHidden: true,
        },
    });

    return [authPanel, envAndSolutionPanel, copilotPanel, powerPagesChatParticipant];
}
