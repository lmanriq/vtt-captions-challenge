import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import CueCard from "./CueCard";
import "@testing-library/jest-dom";

describe("CueCard", () => {
  it("renders what we expect", () => {
    const { getByText } = render(
      <CueCard
        capt="Thank you very much"
        timeStamp="00:18:04.303 --> 00:18:08.303"
        updateCaption={jest.fn()}
        testId="0"
      />
    );
    expect(getByText("Thank you very much")).toBeInTheDocument();
  });

  it("can change a caption", async () => {
    const { getByText, getByTestId } = render(
      <CueCard
        capt="Thank you very much"
        timeStamp="00:18:04.303 --> 00:18:08.303"
        updateCaption={jest.fn()}
        testId="0"
      />
    );
    const input = getByTestId("caption-0");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(await waitForElement(() => getByText("Hello"))).toBeInTheDocument();
  });

  it("fires the updateCaption function when changed", async () => {
    const mockUpdate = jest.fn();
    const { getByTestId } = render(
      <CueCard
        capt="Thank you very much"
        timeStamp="00:18:04.303 --> 00:18:08.303"
        updateCaption={mockUpdate}
        testId="0"
      />
    );
    const input = getByTestId("caption-0");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(mockUpdate).toBeCalled();
  });
});
