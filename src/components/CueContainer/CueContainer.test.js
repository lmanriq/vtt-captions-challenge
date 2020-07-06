import React from "react";
import { render, waitForElement } from "@testing-library/react";
import CueContainer from "./CueContainer";
import "@testing-library/jest-dom";
import { fetchVttFile } from "../../apiCalls";
jest.mock("../../apiCalls");

describe("CueContainer", () => {
  it("renders what we expect", async () => {
    const mockVtt = `WEBVTT

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
It will perforate your stomach.`;
    fetchVttFile.mockResolvedValueOnce(mockVtt);
    const { getByText } = render(<CueContainer url="test" />);
    const sampleCaption = await waitForElement(() =>
      getByText("Never drink liquid nitrogen.")
    );
    const sampleStartTime = await waitForElement(() => getByText("00:01.000"));
    const sampleEndTime = await waitForElement(() => getByText("00:04.000"));
    expect(sampleCaption).toBeInTheDocument();
    expect(sampleStartTime).toBeInTheDocument();
    expect(sampleEndTime).toBeInTheDocument();
    expect(getByText("Download")).toBeInTheDocument();
  });

  it("initially shows the user that it is loading", () => {
    const { getByText } = render(<CueContainer url="test" />);
    expect(getByText("Loading... (may take a minute)")).toBeInTheDocument();
  });
});
