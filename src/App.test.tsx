import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("shows the Spanish focus quote after toggling focus mode", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(screen.getByRole("button", { name: "Modo enfoque" }));

  expect(
    screen.getByText("Construyendo con calma. Aprendiendo siempre."),
  ).toBeInTheDocument();
});

test("keeps the Spanish portfolio copy concise and scannable", () => {
  render(<App />);

  expect(screen.getByText("Código claro. Interfaces limpias.")).toBeInTheDocument();
  expect(
    screen.queryByText(/Desarrollador Full Stack Junior especializado/i),
  ).not.toBeInTheDocument();
});

test("adds quiet cinematic details in Spanish without heavy copy", () => {
  render(<App />);

  expect(screen.getByText("api: conectada")).toBeInTheDocument();
  expect(screen.getByText("Flujo de chat")).toBeInTheDocument();
  expect(screen.getByText("01: construir")).toBeInTheDocument();
});

test("uses a Spanish immersive workspace structure across the page", () => {
  render(<App />);

  expect(screen.getByText("Espacio de trabajo")).toBeInTheDocument();
  expect(screen.getByText("Mapa de habilidades")).toBeInTheDocument();
  expect(screen.getByText("Construyamos el siguiente proyecto.")).toBeInTheDocument();
});

test("renders advanced cinematic motion layers", () => {
  render(<App />);

  expect(screen.getByTestId("scroll-progress")).toBeInTheDocument();
  expect(screen.getByTestId("hero-orbit")).toBeInTheDocument();
  expect(screen.getAllByTestId("project-scan")).toHaveLength(3);
});

test("differentiates the main sections with richer interfaces", () => {
  render(<App />);

  expect(screen.getByText("Trayectoria")).toBeInTheDocument();
  expect(screen.getByText("Stack operativo")).toBeInTheDocument();
  expect(screen.getByText("Caso destacado")).toBeInTheDocument();
  expect(screen.getByText("Terminal de contacto")).toBeInTheDocument();
});

test("uses section-specific elements instead of repeating cards", () => {
  render(<App />);

  expect(screen.getByTestId("profile-timeline")).toBeInTheDocument();
  expect(screen.getByTestId("skill-radar")).toBeInTheDocument();
  expect(screen.getByTestId("case-file")).toBeInTheDocument();
  expect(screen.getByTestId("terminal-prompt")).toBeInTheDocument();
});

test("uses distinct layout systems per section", () => {
  render(<App />);

  expect(screen.getByTestId("about-rail-layout")).toBeInTheDocument();
  expect(screen.getByTestId("skill-constellation-layout")).toBeInTheDocument();
  expect(screen.getByTestId("project-river-layout")).toBeInTheDocument();
  expect(screen.getByTestId("contact-strip-layout")).toBeInTheDocument();
});
