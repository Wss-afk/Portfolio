import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LofiPlayer } from "./LofiPlayer";

test("switches the player button from reproducir to pausar", async () => {
  const user = userEvent.setup();

  render(<LofiPlayer focusMode={false} />);

  await user.click(screen.getByRole("button", { name: "Reproducir" }));

  expect(screen.getByRole("button", { name: "Pausar" })).toBeInTheDocument();
});
