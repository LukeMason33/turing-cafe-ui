describe('Turing Cafe', () => {
  it('Should throw an error on screen if fetch response is not ok', () => {
    cy.fixture('../fixtures/data.json')
    .then((response) => {
      cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
        statusCode: 500,
        body: response
      })
    })
    cy.visit('http://localhost:3000/')
    cy.get('.error')
  })

  it('Should display the main dashboard with the page title', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
  })

  it('Should display existing reservations on successful response', () => {
    cy.fixture('../fixtures/data.json')
    .then((response) => {
      cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
        statusCode: 200,
        body: response
      })
    })
    cy.visit('http://localhost:3000/')
    cy.get('.res-section #1').should('contain', 'Christie')
  })

  it('Should display our form', () => {
    cy.get('form')
  })

  it('Should be able to fill oput the form', () => {
    cy.get('.name-input').type('Luke')
    cy.get('.date-input').type('02/20')
    cy.get('.time-input').type('7:00')
    cy.get('.guest-input').type('9')
  })

  it('Should be able to make a submit a reservation by clicking the Make Reservation button on from and have it displayed on the screen', () => {
    cy.get('form button').click()
    cy.get('.res-section #4').should('contain', 'Luke')
  })

  it('Should clear input fields in form after making a reservation', () => {
    cy.get('.name-input').should('contain', '')
    cy.get('.date-input').should('contain', '')
    cy.get('.time-input').should('contain', '')
    cy.get('.guest-input').should('contain', '')
  })

  it('Should not be able to submit a reservation with empty input fields', () => {
    cy.get('form button').click()
    cy.get('.error')
  })
})
