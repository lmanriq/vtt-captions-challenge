import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { fetchVttFile } from "../../apiCalls";
jest.mock("../../apiCalls");

describe("App", () => {
  it("renders what we expect", () => {
    const { getByText } = render(<App />);
    expect(getByText("VTT Caption Editor")).toBeInTheDocument();
  });

  it("can load data", async () => {
    const mockVtt = `WEBVTT

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
It will perforate your stomach.`;
    fetchVttFile.mockResolvedValueOnce(mockVtt);
    const { getByText, getByPlaceholderText } = render(<App />);


    const input = getByPlaceholderText("enter a .vtt file url here");
    fireEvent.change(input, { target: { value: "file.vtt" } });
    const loadBtn = getByText("load file");
    fireEvent.click(loadBtn);    
    const sampleCaption = await waitForElement(() => getByText("Never drink liquid nitrogen."))
    expect(sampleCaption).toBeInTheDocument();
  });
});
