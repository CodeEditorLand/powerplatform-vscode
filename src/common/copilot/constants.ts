/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export type WebViewMessage = {
    type: string;
    value?: string | number | boolean;
    envName?: string;
  };
  