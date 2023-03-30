import React from "react"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "./App";

describe('Header', ()=> {
    test('Header rendered successfully.', () => {
        render(<App/>);
        expect(screen.getByText("Emoji Search")).toBeInTheDocument();
    })
})