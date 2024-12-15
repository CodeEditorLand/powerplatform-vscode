/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import * as vscode from "vscode";

import { oneDSLoggerWrapper } from "../../../../OneDSLoggerTelemetry/oneDSLoggerWrapper";
import { Command } from "../../../CommandRegistry";
import {
	FAILED_TO_CREATE_SITE,
	NL2SITE_GENERATING_SITE,
} from "../../PowerPagesChatParticipantConstants";
import { VSCODE_EXTENSION_CREATE_SITE_COMMAND_FAILED } from "../../PowerPagesChatParticipantTelemetryConstants";
import { createSite } from "./CreateSiteHelper";

export class CreateSiteCommand implements Command {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	async execute(
		requestObject: any,
		stream: vscode.ChatResponseStream,
	): Promise<any> {
		const {
			request,
			intelligenceAPIEndpointInfo,
			intelligenceApiToken,
			powerPagesAgentSessionId,
			telemetry,
			orgID,
			envID,
			userId,
			extensionContext,
		} = requestObject;

		stream.progress(NL2SITE_GENERATING_SITE);
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const result = await createSite({
				intelligenceEndpoint:
					intelligenceAPIEndpointInfo.intelligenceEndpoint,
				intelligenceApiToken,
				userPrompt: request.prompt,
				sessionId: powerPagesAgentSessionId,
				stream,
				telemetry,
				orgId: orgID,
				envId: envID,
				userId,
				extensionContext,
			});
			// Process the result

			return {
				metadata: {
					command: "create-site",
				},
			};
		} catch (error) {
			stream.markdown(FAILED_TO_CREATE_SITE);
			telemetry.sendTelemetryEvent(
				VSCODE_EXTENSION_CREATE_SITE_COMMAND_FAILED,
				{
					sessionId: powerPagesAgentSessionId,
					orgId: orgID,
					envId: envID,
					userId: userId,
					error: error as string,
				},
			);
			oneDSLoggerWrapper
				.getLogger()
				.traceError(
					VSCODE_EXTENSION_CREATE_SITE_COMMAND_FAILED,
					error as string,
					error as Error,
					{
						sessionId: powerPagesAgentSessionId,
						orgId: orgID,
						envId: envID,
						userId: userId,
					},
					{},
				);
			return {
				metadata: {
					command: "",
				},
			};
		}
	}
}
