import login from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Show alert", () => {
    login();

    // Verificar se o alert foi chamado
    expect(mockAlert).toHaveBeenCalled();
    //expect(mockAlert).toHaveBeenCalledWith("Bem vindo");
  });
});
