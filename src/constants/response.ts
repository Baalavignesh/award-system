export const STATUS_CODE = {
    SUCCESS: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN:403,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
    NO_CONTENT: 204,
    VALIDATION_ERROR: 422,
  };


export const COMMON_RESPONSE_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
};