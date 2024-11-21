import { webcrypto } from "node:crypto";
import { Readable } from "node:stream";

if (typeof globalThis.crypto === "undefined") {
  globalThis.crypto = webcrypto;
}

if (typeof globalThis.ReadableStream === "undefined") {
  globalThis.ReadableStream = Readable;
}