/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export enum telemetryEventNames {
    WEB_EXTENSION_INIT_PATH_PARAMETERS = "WebExtensionInitPathParameters",
    WEB_EXTENSION_INIT_QUERY_PARAMETERS = "WebExtensionInitQueryParameters",
    WEB_EXTENSION_DATAVERSE_AUTHENTICATION_STARTED = "WebExtensionDataverseAuthenticationStarted",
    WEB_EXTENSION_DATAVERSE_AUTHENTICATION_FAILED = "WebExtensionDataverseAuthenticationFailed",
    WEB_EXTENSION_DATAVERSE_AUTHENTICATION_MISSING = "WebExtensionDataverseAuthenticationMissing",
    WEB_EXTENSION_DATAVERSE_AUTHENTICATION_COMPLETED = "WebExtensionDataverseAuthenticationCompleted",
    WEB_EXTENSION_MANDATORY_PATH_PARAMETERS_MISSING = "WebExtensionMandatoryPathParametersMissing",
    WEB_EXTENSION_MANDATORY_QUERY_PARAMETERS_MISSING = "WebExtensionMandatoryQueryParametersMissing",
    WEB_EXTENSION_API_REQUEST = "WebExtensionApiRequest",
    WEB_EXTENSION_API_REQUEST_FAILURE = "WebExtensionApiRequestFailure",
    WEB_EXTENSION_API_REQUEST_SUCCESS = "WebExtensionApiRequestSuccess",
    WEB_EXTENSION_EMPTY_FILE_NAME = "WebExtensionEmptyFileName",
    WEB_EXTENSION_CONTENT_FILE_CREATION_FAILED = "WebExtensionCreateContentFileFailed",
    WEB_EXTENSION_EMPTY_PORTAL_FOLDER_NAME = "WebExtensionEmptyPortalFolderName",
    WEB_EXTENSION_SET_CONTEXT_PERF = "WebExtensionSetContextPerf",
    WEB_EXTENSION_EDIT_LCID = "WebExtensionEditLcid",
    WEB_EXTENSION_WEBSITE_LANGUAGE_CODE = "WebExtensionWebsiteLanguageCode",
    WEB_EXTENSION_EDIT_LANGUAGE_CODE = "WebExtensionEditLanguageCode",
    WEB_EXTENSION_ENTITY_LANGUAGE_CODE = "WebExtensionEntityLanguageCode",
    WEB_EXTENSION_VSCODE_START_COMMAND = "WebExtensionVscodeStartCommand",
    WEB_EXTENSION_VSCODE_RELOAD_FILE = "webExtensionVscodeReloadFile",
    WEB_EXTENSION_SAVE_FILE_TRIGGERED = "WebExtensionSaveFileTriggered",
    WEB_EXTENSION_DATAVERSE_SAVE_FILE_TRIGGERED = "WebExtensionDataverseSaveFileTriggered",
    WEB_EXTENSION_DATAVERSE_SAVE_FILE_FAILED = "WebExtensionDataverseSaveFileFailed",
    WEB_EXTENSION_DATAVERSE_SAVE_FILE_SUCCESS = "WebExtensionDataverseSaveFileSuccess",
    WEB_EXTENSION_FETCH_FILE_TRIGGERED = "WebExtensionFetchFileTriggered",
    WEB_EXTENSION_FETCH_DIRECTORY_TRIGGERED = "WebExtensionFetchDirectoryTriggered",
    WEB_EXTENSION_CREATE_ROOT_FOLDER = "WebExtensionCreateRootFolder",
    WEB_EXTENSION_ENTITY_CONTENT_CHANGED = "WebExtensionEntityConentChanged",
    WEB_EXTENSION_ENTITY_CONTENT_SAME = "WebExtensionEntityContentSame",
    WEB_EXTENSION_ENTITY_CONTENT_UNEXPECTED_RESPONSE = "WebExtensionEntityContentUnexpectedResponse",
    NPS_AUTHENTICATION_STARTED = "WebExtensionNPSAuthenticationStarted",
    NPS_AUTHENTICATION_COMPLETED = "WebExtensionNPSAuthenticationCompleted",
    NPS_AUTHENTICATION_FAILED = "WebExtensionNPSAuthenticationFailed",
    NPS_USER_ELIGIBLE = "WebExtensionUserIsEligible",
    NPS_API_FAILED = "WebExtensionNPSApiFailed",
    RENDER_NPS = "WebExtensionNPSRenderSurveyForm",
    RENDER_NPS_FAILED = "WebExtensionNPSRenderSurveyFormFailed",
    WEB_EXTENSION_CREATE_ENTITY_FOLDER = "WebExtensionCreateEntityFolder",
    WEB_EXTENSION_FILE_HAS_DIRTY_CHANGES = "WebExtensionFileHasDirtyChanges",
    WEB_EXTENSION_DIFF_VIEW_TRIGGERED = "WebExtensionDiffViewTriggered",
    WEB_EXTENSION_DIFF_VIEW_FEATURE_FLAG_DISABLED = "WebExtensionDiffViewFeatureFlagDisabled",
    WEB_EXTENSION_CREATE_ENTITY_FOLDER_FAILED = "webExtensionCreateEntityFolderFailed",
    WEB_EXTENSION_PREPROCESS_DATA_FAILED = "webExtensionPreprocessDataFailed",
    WEB_EXTENSION_PREPROCESS_DATA_SUCCESS = "webExtensionPreprocessDataSuccess",
    WEB_EXTENSION_ATTRIBUTE_CONTENT_ERROR = "webExtensionAttributeContentError",
    WEB_EXTENSION_SET_FILE_CONTENT_ERROR = "webExtensionSetFileContentError",
    WEB_EXTENSION_FAILED_TO_PREPARE_WORKSPACE = "webExtensionFailedToPrepareWorkspace",
    WEB_EXTENSION_BULKHEAD_QUEUE_FULL = "webExtensionBulkheadQueueFull",
    WEB_EXTENSION_BULKHEAD_FETCH_REQUEST = "webExtensionBulkheadFetchRequest",
    WEB_EXTENSION_ETAG_HANDLER_SERVICE_ERROR = "webExtensionEtagHandlerServiceError",
    WEB_EXTENSION_ETAG_HANDLER_SERVICE = 'webExtensionEtagHandlerService',
    WEB_EXTENSION_ETAG_HANDLER_SERVICE_API_ERROR = 'webExtensionEtagHandlerServiceAPIFailedError',
    WEB_EXTENSION_POPULATE_LANGUAGE_ID_TO_CODE_API_ERROR = 'webExtensionPopulateLanguageIdToCodeAPIError',
    WEB_EXTENSION_POPULATE_LANGUAGE_ID_TO_CODE_SYSTEM_ERROR = 'webExtensionPopulateLanguageIdToCodeSystemError',
    WEB_EXTENSION_POPULATE_WEBSITE_LANGUAGE_ID_TO_PORTALLANGUAGE_API_ERROR = 'webExtensionPopulateWebsiteLanguageIdToPortalLanguageAPIError',
    WEB_EXTENSION_POPULATE_WEBSITE_LANGUAGE_ID_TO_PORTALLANGUAGE_SYSTEM_ERROR = 'webExtensionPopulateWebsiteLanguageIdToPortalLanguageSystemError',
    WEB_EXTENSION_POPULATE_WEBSITE_ID_TO_LANGUAGE_API_ERROR = 'webExtensionPopulateWebsiteIdToLanguageAPIError',
    WEB_EXTENSION_POPULATE_WEBSITE_ID_TO_LANGUAGE_SYSTEM_ERROR = 'webExtensionPopulateWebsiteIdToLanguageSystemError',
    WEB_EXTENSION_GET_MAPPING_ENTITY_CONTENT_API_ERROR = 'webExtensionGetMappingEntityContentAPIError',
    WEB_EXTENSION_FETCH_DATAVERSE_AND_UPDATE_VFS_API_ERROR = 'webExtensionFetchDataverseUpdateVFSAPIError',
    WEB_EXTENSION_FETCH_DATAVERSE_AND_UPDATE_VFS_SYSTEM_ERROR = 'webExtensionFetchDataverseUpdateVFSSystemError',
    WEB_EXTENSION_FETCH_DATAVERSE_AND_CREATE_FILES_API_ERROR = 'webExtensionFetchDataverseCreateFilesAPIError',
    WEB_EXTENSION_FETCH_DATAVERSE_AND_CREATE_FILES_SYSTEM_ERROR = 'webExtensionFetchDataverseCreateFilesSystemError',
    WEB_EXTENSION_SAVE_DATA_TO_DATAVERSE_API_ERROR = 'webExtensionSaveDataToDataverseAPIError',
    WEB_EXTENSION_GET_SAVE_PARAMETERS_ERROR = 'webExtensionGetSaveParametersError',
    WEB_EXTENSION_MULTI_FILE_FEATURE_FLAG_ENABLED = "WebExtensionMultiFileFeatureFlagEnabled",
    WEB_EXTENSION_MULTI_FILE_FEATURE_FLAG_DISABLED = "WebExtensionMultiFileFeatureFlagDisabled",
    WEB_EXTENSION_MULTI_FILE_MANDATORY_PARAMETERS_MISSING = "WebExtensionMultiFileMandatoryParametersMissing",
    WEB_EXTENSION_CO_PRESENCE_FEATURE_FLAG_DISABLED = "WebExtensionCoPresenceFeatureFlagDisabled",
    WEB_EXTENSION_CO_PRESENCE_FEATURE_FLAG_ENABLED = "WebExtensionCoPresenceFeatureFlagEnabled",
    WEB_EXTENSION_FILES_LOAD_SUCCESS = "WebExtensionFilesLoadSuccess",
    WEB_EXTENSION_PREPARE_WORKSPACE_SUCCESS = "webExtensionPrepareWorkspaceSuccess",
    WEB_EXTENSION_MULTI_FILE_FEATURE_AVAILABILITY = "WebExtensionMultiFileFeatureAvailability",
    WEB_EXTENSION_APP_NAME_NOT_FOUND = "WebExtensionAppNameNotFound",
    WEB_EXTENSION_SET_VSCODE_WORKSPACE_STATE_FAILED = "WebExtensionSetVscodeWorkspaceStateFailed",
    WEB_EXTENSION_SET_VSCODE_WORKSPACE_STATE_SUCCESS = "WebExtensionGetVscodeWorkspaceStateSuccess",
    WEB_EXTENSION_INTELLIGENCE_API_AUTHENTICATION_FAILED = "WebExtensionIntelligenceAPIAuthenticationFailed",
    WEB_EXTENSION_INTELLIGENCE_API_AUTHENTICATION_STARTED = "WebExtensionIntelligenceAPIAuthenticationStarted",
    WEB_EXTENSION_INTELLIGENCE_API_AUTHENTICATION_COMPLETED = "WebExtensionIntelligenceAPIAuthenticationCompleted",
    WEB_EXTENSION_SAVE_DATA_TO_DATAVERSE_SUCCESS = 'webExtensionSaveDataToDataverseAPISuccess',
    WEB_EXTENSION_UPDATE_FILE_ETAG = 'webExtensionUpdateFileEtagMethod',
    WEB_EXTENSION_LATEST_FILE_CONTENT_UPDATE_METADATA = 'webExtensiongetLatestFileContentAndUpdateMetadata',
    WEB_EXTENSION_DATAVERSE_API_CALL_FILE_FETCH_COUNT = 'webExtensionDataverseFileFetchCount',
    WEB_EXTENSION_WEBFILE_EXTENSION = 'webExtensionWebFileExtension',
    WEB_EXTENSION_FILE_NO_CONTENT = 'webExtensionFileNoContent',
    WEB_EXTENSION_WEB_COPILOT_REGISTRATION_FAILED = 'webExtensionCopilotRegisterFailed',
    WEB_EXTENSION_WEB_COPILOT_NOTIFICATION_SHOWN = 'webExtensionCopilotNotificationShown',
    WEB_EXTENSION_WEB_COPILOT_NOTIFICATION_EVENT_CLICKED = 'webExtensionCopilotNotificationEventClicked',
    WEB_EXTENSION_POWER_PAGES_WEB_VIEW_REGISTERED = 'webExtensionPowerPagesWebViewRegistered',
    WEB_EXTENSION_POWER_PAGES_WEB_VIEW_REGISTER_FAILED = 'webExtensionPowerPagesWebViewRegisterFailed',
    WEB_EXTENSION_BACK_TO_STUDIO_TRIGGERED = 'webExtensionBackToStudioTriggered',
    WEB_EXTENSION_PREVIEW_SITE_TRIGGERED = 'webExtensionPreviewSiteTriggered',
    WEB_EXTENSION_IMAGE_EDIT_SUPPORTED_FILE_EXTENSION = 'webExtensionImageEditSupportedFileExtension',
    WEB_EXTENSION_SAVE_IMAGE_FILE_TRIGGERED = 'webExtensionSaveImageFileTriggered',
}
