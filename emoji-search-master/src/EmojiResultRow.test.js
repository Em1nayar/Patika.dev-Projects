import React from "react"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "./App";

describe('Emoji Result Row', () => {
    test('should render successfully', () => {
        render(<App/>);
        expect(screen.getAllByText("Click to copy emoji").length).toEqual(20);
    })
})