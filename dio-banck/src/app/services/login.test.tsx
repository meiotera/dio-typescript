import login from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Login", () => {
    login("email", "senha");

    // Verificar se o alert foi chamado
    expect(mockAlert).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledWith(`Olá email sua senha é senha`);
  });
});
