export class CriticalError extends Error {
  readonly error: Error;

  constructor(err: Error) {
    super("Algo deu errado. Por favor, tente novamente mais tarde.");
    this.error = err;
  }
}
