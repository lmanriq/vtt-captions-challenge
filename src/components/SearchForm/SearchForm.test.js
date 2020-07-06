import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import SearchForm from "./SearchForm";
import "@testing-library/jest-dom";

describe("SearchForm", () => {
  it("renders what we expect", () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchForm saveUrl={jest.fn()} />
    );
    expect(
      getByPlaceholderText("enter a .vtt file url here")
    ).toBeInTheDocument();
    expect(getByText("load file")).toBeInTheDocument();
  });

  it("can change a caption", async () => {
    const { getByPlaceholderText } = render(
      <SearchForm saveUrl={jest.fn()} />
    );
    const input = getByPlaceholderText("enter a .vtt file url here");
    fireEvent.change(input, { target: { value: "file.vtt" } });
    expect(input.value).toBe("file.vtt");
  });

  it("can submit a url", async () => {
    const mockSave = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <SearchForm saveUrl={mockSave} />
    );
    const input = getByPlaceholderText("enter a .vtt file url here");
    fireEvent.change(input, { target: { value: "file.vtt" } });
    expect(input.value).toBe("file.vtt");
    const loadBtn = getByText("load file");
    fireEvent.click(loadBtn);
    expect(mockSave).toBeCalledWith("file.vtt");
  });
});
