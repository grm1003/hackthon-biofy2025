export class ErrorGettingMessages extends Error {
  constructor() {
    super("Failed to get messages");
  }
}
