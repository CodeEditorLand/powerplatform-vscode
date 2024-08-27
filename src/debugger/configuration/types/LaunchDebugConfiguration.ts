/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import type { FlattenType } from "./FlattenType";
import type { IPcfLaunchConfig } from "./IPcfLaunchConfig";

/**
 * Represents the {@link FlattenType flattened} type of the {@link IPcfLaunchConfig}.
 */
export type LaunchDebugConfiguration = FlattenType<IPcfLaunchConfig>;
