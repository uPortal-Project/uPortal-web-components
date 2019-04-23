/**
 * A decoded JSON Web Token
 */
export interface JWT {
  /**
   * custom attributes will usually be an array of strings
   */
  [customAttributes: string]: unknown;

  /**
   * The server issued this token
   */
  iss: string;

  /**
   * User that the token refers to
   */
  sub: string;

  /**
   * The server intended to use the token
   */
  aud: string;

  /**
   * Expiration time of token
   */
  exp: number;

  /**
   * Time that token was issued at
   */
  iat: number;

  /**
   * A user's given name and family name
   */
  name: string;

  /**
   * A user's phone number
   */
  phone_number: string;

  /**
   * A user's family name
   */
  family_name: string;

  /**
   * A user's given name
   */
  given_name: string;

  /**
   * User's email address
   */
  email: string;
}

export interface Response {
  /**
   * An encoded JSON Web Token
   */
  encoded: string;

  /**
   * A decoded JSON Web Token
   */
  decoded: JWT;
}

/**
 * Takes in the  original value,
 * the return value will replace the original value of the property
 */
export type PropertyTransform = (value: unknown) => unknown;

/**
 * Options for request
 */
export interface Options {
  /**
   * URL for OIDC endpoint
   */
  userInfoApiUrl?: string;

  /**
   * Timeout in milliseconds for request
   */
  timeout?: number;

  /**
   * property name and function pairs
   */
  propertyTransforms?: {
    [propertyName: string]: PropertyTransform;
  };
}

/**
 * get an Open ID Connect token
 */
export function oidc(options?: Options): Promise<Response>;

export default oidc;
