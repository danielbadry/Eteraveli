describe("empty spec", () => {
  it("search mistake word", () => {
    // mocking request - GET method
    cy.intercept("GET", "https://swapi.dev/api/films/?format=json", {
      fixture: "mock/movie-list.json",
    }).as("GetMovieList");

    cy.visit("http://localhost:3000");
    cy.wait(5000);

    cy.get('[data-test="search-input"]').as("searchInput");

    cy.get("@searchInput").should("exist");
    cy.get("@searchInput").click();
    cy.get("@searchInput").type("testtets");

    cy.get('[data-test="movie-list"]')
      .find('[data-test="movie-list-item"]')
      .should("not.exist");
  });

  it("search 'the' world", () => {
    // mocking request - GET method
    cy.intercept("GET", "https://swapi.dev/api/films/?format=json", {
      fixture: "mock/movie-list.json",
    }).as("GetMovieList");

    cy.visit("http://localhost:3000");
    cy.wait(5000);

    cy.get('[data-test="search-input"]').as("searchInput");

    cy.get("@searchInput").click();
    cy.get("@searchInput").type("the");

    cy.get('[data-test="movie-list"]')
      .find('[data-test="movie-list-item"]')
      .should("have.length", 5);
  });
});
