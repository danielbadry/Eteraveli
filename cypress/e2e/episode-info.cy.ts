describe("empty spec", () => {
  it("check not selected movie", () => {
    // mocking request - GET method
    cy.intercept("GET", "https://swapi.dev/api/films/?format=json", {
      fixture: "mock/movie-list.json",
    }).as("GetMovieList");

    cy.visit("http://localhost:3000");
    cy.wait(500);
    cy.get('[data-test="no-movie-selected"]').should("exist");
  });

  it("select movie", () => {
    // mocking request - GET method
    cy.intercept("GET", "https://swapi.dev/api/films/?format=json", {
      fixture: "mock/movie-list.json",
    }).as("GetMovieList");

    cy.get('[data-test="movie-list"]')
      .find('[data-test="movie-list-item"]')
      .eq(0)
      .should("exist");

    cy.get('[data-test="movie-list"]')
      .find('[data-test="movie-list-item"]')
      .eq(0)
      .click();

    cy.get('[data-test="movie-info"]').should("exist");
  });
});
