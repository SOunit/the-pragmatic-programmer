class InputStreamReader {}

// less orthogonality because it depends on InputStreamReader class
class Split1 {
  constructor(rdr: InputStreamReader) {}

  readNextLine(): void {}

  numFields(): number {
    return 0;
  }

  getField(fieldNo: number): string {
    return "";
  }
}

// higher orthogonality because is has no 3rd lib dependency
class Split2 {
  constructor(line: string) {}

  numFields(): number {
    return 0;
  }

  getField(fieldNo: number) {}
}
