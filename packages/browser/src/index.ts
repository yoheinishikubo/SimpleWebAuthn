/**
 * @packageDocumentation
 * @module @simplewebauthn/browser
 */
import startRegistration from './methods/startRegistration';
import startAuthentication from './methods/startAuthentication';
import { browserSupportsWebauthn } from './helpers/browserSupportsWebauthn';
import { platformAuthenticatorIsAvailable } from './helpers/platformAuthenticatorIsAvailable';
import utf8StringToBuffer from './helpers/utf8StringToBuffer';
import bufferToBase64URLString from './helpers/bufferToBase64URLString';
import base64URLStringToBuffer from './helpers/base64URLStringToBuffer';

export {
  startRegistration,
  startAuthentication,
  browserSupportsWebauthn,
  platformAuthenticatorIsAvailable,
  utf8StringToBuffer,
  bufferToBase64URLString,
  base64URLStringToBuffer
};
