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
— It will perforate your stomach.
— You could die.

00:10.000 --> 00:14.000
The Organisation for Sample Public Service Announcements accepts no liability for the content of this advertisement, or for the consequences of any actions taken on the basis of the information provided.`;
    fetchVttFile.mockResolvedValueOnce(mockVtt);
    const { getByText } = render(
      <CueContainer url="test" />
    );
    const sampleCaption = await waitForElement(() =>
      getByText("Never drink liquid nitrogen.")
    );
    expect(sampleCaption).toBeInTheDocument();
  });

  it("initially shows the user that it is loading", () => {
    const mockVtt = `WEBVTT

00:01.000 --> 00:04.000
Never drink liquid nitrogen.

00:05.000 --> 00:09.000
— It will perforate your stomach.
— You could die.

00:10.000 --> 00:14.000
The Organisation for Sample Public Service Announcements accepts no liability for the content of this advertisement, or for the consequences of any actions taken on the basis of the information provided.`;
    fetchVttFile.mockResolvedValueOnce(mockVtt);
    const { getByText } = render(
      <CueContainer url="test" />
    );
    expect(getByText("Loading... (may take a minute)")).toBeInTheDocument();
  });
});
