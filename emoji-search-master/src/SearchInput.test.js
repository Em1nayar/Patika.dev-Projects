import React from "react";
import { render, screen , fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("EmojiList", () => {
  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn(() => Promise.resolve()),
      },
      writable:true,
    });
  });
  it("should filter emojis by text", () => {
    const { container } = render(<App />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Heart" } });
    const emojis = document.querySelectorAll(".emoji");
    expect(emojis).toHaveLength(20);
    expect(emojis[0].alt).toBe("Heart Eyes");
    expect(emojis[1].alt).toBe("Kissing Heart");
    expect(emojis[2].alt).toBe("Heart Eyes Cat");
  });

  it("should copy the emoji when clicked", async () => {
    let listElement;
    render(<App/>);
    listElement = screen.getByText("100");
    userEvent.click(listElement);
    expect(listElement.parentElement.getAttribute("data-clipboard-text")).toMatch("💯");
  })
});
