import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function gerarDadosUsuario(): UserData {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 8 }),
  };
}

export async function criarUsuarioAleatorio(page: Page): Promise<UserData> {
  const userData = gerarDadosUsuario();

  await page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");

  // Preencher o formulário
  await page.getByPlaceholder("First Name").fill(userData.firstName);
  await page.getByPlaceholder("Last Name").fill(userData.lastName);
  await page.getByPlaceholder("Email").fill(userData.email);
  await page.getByPlaceholder("Password").fill(userData.password);

  // Submeter o formulário
  await page.getByRole("button", { name: "Submit" }).click();

  // Retornar os dados do usuário criado
  return userData;
}
