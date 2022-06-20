class Debug {
  log(value) {
    console.log(value);
  }

  error(value) {
    console.error(value);
  }

  /**
   *
   * @param value - um dado que deseje visualizar no console
   * @returns o value formatado
   * @example
   * formatView({"id": 01, "name": "any_name"})
   * {
   *    "id": 01,
   *    "name": "any_name"
   * }
   */
  formatView(value) {
    console.log(JSON.stringify(value, null, 2));
  }
}

export default Debug;
