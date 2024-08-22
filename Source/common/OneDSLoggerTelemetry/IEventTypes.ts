/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import type { IProDevCopilotTelemetryData } from "../copilot/telemetry/ITelemetry";
import type {
	CustomEventModifier,
	CustomEventSubType,
	CustomType,
	EventType,
	SeverityLevel,
} from "./EventContants";
import type { IWebExtensionTelemetryData } from "./web/client/webExtensionTelemetryInterface";

export interface IUserInfo {
	oid: string;
	tid: string;
	puid?: string;
}

export interface IEvent {
	eventName: string;
	eventType: EventType | string;
	eventMessage?: object;
	customDimension?:
		| IWebExtensionTelemetryData
		| IProDevCopilotTelemetryData
		| object; // TODO: Use IPortalTelemetryData
	customMeasurements?: IWebExtensionTelemetryData | object; // TODO: Use IPortalTelemetryData
	eventSeverity?: SeverityLevel;
	correlationId?: string;
}

export interface ICustomEvent {
	customEventType: CustomType;
	customEventId?: string;
	customEventSubType?: CustomEventSubType;
	customEventModifier?: CustomEventModifier;
}
export interface IException {
	exceptionName?: string;
	exceptionStack?: string;
	exceptionSource?: string;
	exceptionCauseCode?: string | number;
	exceptionDetails?: string;
}

export interface IContextInfo {
	orgId?: string;
	portalId?: string;
	websiteId?: string;
	dataSource?: string;
	schema?: string;
	correlationId?: string;
	referrer?: string;
	envId?: string;
	referrerSource?: string;
	orgGeo?: string;
	sku?: string;
}
