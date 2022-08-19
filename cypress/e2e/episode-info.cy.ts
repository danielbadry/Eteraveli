describe("empty spec", () => {
  it("check not selected movie", () => {
    cy.visit("http://localhost:3000");
    cy.wait(5000);
    cy.get('[data-test="no-movie-selected"]').should("exist");
  });

  it("select movie", () => {
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
