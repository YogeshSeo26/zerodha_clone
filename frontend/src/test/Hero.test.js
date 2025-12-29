
import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {

    // Test Case 1:-
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    // Test Case 2:-
    test("renders signup button", () => {
        render(<Hero />);
        screen.debug();w
        const signupButton = screen.getByRole("button", {name: /signup now/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});