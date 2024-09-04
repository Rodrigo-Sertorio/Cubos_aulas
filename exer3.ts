function validarLogin(username: string | null | undefined, password: string | null | undefined): void {
    if (!username) { // Verifica se o username é falsy
        console.log("O campo 'username' é obrigatório.");
    } else if (!password) { // Verifica se o password é falsy
        console.log("O campo 'password' é obrigatório.");
    } else if (password.length < 6) { // Verifica se a senha tem menos de 6 caracteres
        console.log("A senha é muito curta. Deve ter pelo menos 6 caracteres.");
    } else {
        console.log("Login bem-sucedido!");
    }
}

// Testando a função
validarLogin("usuario", "12345"); // A senha é muito curta. Deve ter pelo menos 6 caracteres.
validarLogin("", "senha123"); // O campo 'username' é obrigatório.
validarLogin("usuario", ""); // O campo 'password' é obrigatório.
validarLogin("usuario", "senha123"); // Login bem-sucedido!
