const user = {
    email: "user@email.com",
    password: "123456"
  }
  
  const userAccount = new Account(user)
  
  console.log(userAccount)
  console.log(userAccount.#password) // Gera erro
  console.log(userAccount.#balance) // Gera erro
  console.log(userAccount.#authenticate()) // Gera erro
  console.log(userAccount.getBalance("user@email.com", "123456"))
  console.log(userAccount.getBalance("user@email.com", "000000"))