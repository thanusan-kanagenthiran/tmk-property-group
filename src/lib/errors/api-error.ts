/**
 * Custom error class for API-related errors
 * Provides better error handling and debugging information
 */
export class ApiError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.details = details;

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  /**
   * Convert error to JSON for API responses
   */
  toJSON() {
    return {
      error: this.name,
      message: this.message,
      statusCode: this.statusCode,
      ...(this.details && { details: this.details }),
    };
  }
}

/**
 * Error for not found resources (404)
 */
export class NotFoundError extends ApiError {
  constructor(resource: string, id?: string) {
    const message = id 
      ? `${resource} with id ${id} not found`
      : `${resource} not found`;
    super(message, 404);
    this.name = "NotFoundError";
  }
}

/**
 * Error for validation failures (400)
 */
export class ValidationError extends ApiError {
  constructor(message: string, details?: any) {
    super(message, 400, details);
    this.name = "ValidationError";
  }
}

/**
 * Error for unauthorized access (401)
 */
export class UnauthorizedError extends ApiError {
  constructor(message: string = "Unauthorized access") {
    super(message, 401);
    this.name = "UnauthorizedError";
  }
}

/**
 * Error for forbidden access (403)
 */
export class ForbiddenError extends ApiError {
  constructor(message: string = "Access forbidden") {
    super(message, 403);
    this.name = "ForbiddenError";
  }
}
