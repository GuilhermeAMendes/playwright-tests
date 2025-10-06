import { test, expect } from "@playwright/test";
import { criarUsuarioAleatorio } from "../utils";

const { describe, beforeEach } = test;

describe("Login", async () => {
  beforeEach(async ({ page }) => {
    await page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
  });

  test("Should perform the login successfully", async ({ page }) => {
    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();

    await expect(page.locator("#add-contact")).toBeVisible();
  });

  test("Should access sign up page when register a user", async ({ page }) => {
    await expect(page.locator("#signup")).toBeVisible();
    await page.locator("#signup").click();

    await expect(page.locator("#add-user")).toBeVisible();
  });

  test("Should create a new user with successfully", async ({ page }) => {
    await expect(page.locator("#signup")).toBeVisible();
    await page.locator("#signup").click();

    await expect(page.locator("#add-user")).toBeVisible();

    await expect(page.locator("#firstName")).toBeVisible();
    await page.locator("#firstName").fill("automacao");

    await expect(page.locator("#lastName")).toBeVisible();
    await page.locator("#lastName").fill("ifsp");

    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();
  });

  test("Should access with successfully and return to login page", async ({
    page,
  }) => {
    await expect(page.locator("#signup")).toBeVisible();
    await page.locator("#signup").click();

    await expect(page.locator("#add-user")).toBeVisible();

    await expect(page.locator("#cancel")).toBeVisible();
    await page.locator("#cancel").click();

    await expect(page.getByText("Log In:")).toBeVisible();
  });

  test("Should access contact list", async ({ page }) => {
    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();

    await expect(page.locator("#myTable")).toBeVisible();
  });

  test("Should access contact list and make logout", async ({ page }) => {
    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();

    await expect(page.locator("#myTable")).toBeVisible();
    await expect(page.locator("#logout")).toBeVisible();
    await page.locator("#logout").click();

    await expect(page.getByText("Log In:")).toBeVisible();
  });

  test("Should access create new contact page", async ({ page }) => {
    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();

    await expect(page.locator("#myTable")).toBeVisible();
    await expect(page.locator("#add-contact")).toBeVisible();
    await page.locator("#add-contact").click();
  });

  test("Should access create new contact page and create new contact", async ({
    page,
  }) => {
    await expect(page.locator("#email")).toBeVisible();
    await page.locator("#email").fill("automacao-ifsp@email.com");

    await expect(page.locator("#password")).toBeVisible();
    await page.locator("#password").fill("Automacao");

    await expect(page.locator("#submit")).toBeVisible();
    await page.locator("#submit").click();

    await expect(page.locator("#myTable")).toBeVisible();
    await expect(page.locator("#add-contact")).toBeVisible();
    await page.locator("#add-contact").click();
  });
});
