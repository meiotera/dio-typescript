import wellcome from "./wellcome";

describe("wellcome", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Show alert", () => {
    wellcome("Renan");

    // Verificar se o alert foi chamado
    expect(mockAlert).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo Renan");
  });
});
