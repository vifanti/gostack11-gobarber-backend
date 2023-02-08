type Error = {
  inner: Array<{ path: string; message: string }>;
};

export class ValidationError {
  public readonly error: Error;

  constructor(error: Error) {
    this.error = error;
  }
}
