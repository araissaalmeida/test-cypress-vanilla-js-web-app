import RegisterForm from "../support/pages/RegisterForm";

  const registerForm = new RegisterForm()
  const colors ={
    errors: 'rgb(220, 53, 69)',
    success: 'rgb(25, 135, 84)'
  }

  describe('Image Registration', () => {
    
    describe('Submitting an image with invalid inputs', () => {
  
      const input = {
        title: '',
        url: ''
      }

      it('Given I am on the image registration page', () => {
        cy.visit('/')
      })

      it(`When I enter "${input.title}" in the title field`, () => {
        registerForm.typeTitle(input.title)
      })
  
      it(`Then I enter "${input.url}" in the URL field`, () => {
        registerForm.typeUrl(input.url)
      })
  
      it(`Then I click the submit button`, () => {
        registerForm.clickSubmit()
      })
  
      it(`Then I should see "Please type a title for the image" message above the title field`, () => {
        registerForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image')
      })
  
      it(`And I should see "Please type a valid URL" message above the imageUrl field`, () => {
        registerForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
      })
  
      it(`And I should see an exclamation icon in the title and URL fields`, () => {
        registerForm.elements.titleInput().should(([element]) => {
          const styles = window.getComputedStyle(element)
          const border = styles.getPropertyValue('border-right-color')
          assert.strictEqual(border, colors.errors);
        })
      })
    })

    describe('Submitting an image with valid inputs using enter key', () => {

        const input = {
            title: 'Alien BR',
            url: 'https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg'
        }
        
        it(`When I enter "${input.title}" in the title field`, () => {
            registerForm.typeTitle(input.title)
        })

        it(`Then I should see a check icon in the title field`, () => {
            registerForm.elements.titleInput().should(([element]) => {
                const styles = window.getComputedStyle(element)
                const border = styles.getPropertyValue('border-right-color')
                assert.strictEqual(border, colors.success);
            })
        })

        it(`When I enter "${input.url}" in the URL field`, () => {
            registerForm.typeUrl(input.url)
        })

        it(`Then I should see a check icon in the imageUrl field`, () => {
            registerForm.elements.imageUrlInput().should(([element]) => {
                const styles = window.getComputedStyle(element)
                const border = styles.getPropertyValue('border-right-color')
                assert.strictEqual(border, colors.success);
            })
        })

        it('Then I can hit enter to submit the form', () => {
            registerForm.elements.submitBtn().type('{enter}')
        })

        it('And the list of registered images should be updated with the new item', () => {
            registerForm.elements.cardList().contains(input.title)
        })

        it('And the new item should be stored in the localStorage', () => {
            cy.window().then((win) => {
                const storedItems = win.localStorage.getItem('tdd-ew-db');
                
                if (storedItems) {
                    const parsedItems = JSON.parse(storedItems);
                    expect(parsedItems).to.deep.include({ title: input.title, imageUrl: input.url });
                } else {
                    throw new Error('localStorage does not contain "tdd-ew-db"');
                    
                }

            })
        })

        it('Then The inputs should be cleared', () => {
            registerForm.elements.titleInput().should('have.value', '');
            registerForm.elements.imageUrlInput().should('have.value', '');
        })

        after(() => {
            cy.clearAllLocalStorage();
        })
    })

    describe('Submitting an image and updating the list', () => {

        const input = {
        title: 'Alpaca',
        url: 'https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/408/68-alpaca-3.png?ims=600x600'
        }

        it('Given I am on the image registration page', () => {
          cy.visit('/')
        })
    
        it(`Then I have entered "${input.title}" in the title field`, () => {
          registerForm.typeTitle(input.title)
        })

        it(`Then I have entered "${input.url}" in the URL field`, () => {
          registerForm.typeUrl(input.url)
        })

        it('When I click the submit button', () => {
          registerForm.clickSubmit()
        })

        it ('And the list of registered images should be updated with the new item', () => {
          registerForm.elements.cardList().contains(input.title)
        })

        it('And the new item should be stored in the localStorage', () => {
          cy.window().then((win) => {
            const storedItems = win.localStorage.getItem('tdd-ew-db');
            
            if (storedItems) {
                const parsedItems = JSON.parse(storedItems);
                expect(parsedItems).to.deep.include({ title: input.title, imageUrl: input.url });
            } else {
                throw new Error('localStorage does not contain "tdd-ew-db"');
              }
          })
        })
        
        it('Then The inputs should be cleared', () => {
          registerForm.elements.titleInput().should('have.value', '')
          registerForm.elements.imageUrlInput().should('have.value', '')
        })

        after(() => {
          cy.clearAllLocalStorage();
        })
    })

    describe('Refreshing the page after submitting an image clicking in the submit button', () => {

        const input = {
        title: 'Lhama',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lama_glama_01_by_Line1.jpg/280px-Lama_glama_01_by_Line1.jpg'
        }

        it('Given I am on the image registration page', () => {
          cy.visit('/')
        })   
      
        it('Then I have submitted an image by clicking the submit button', () => {
          registerForm.typeTitle(input.title)
          registerForm.typeUrl(input.url)
          registerForm.clickSubmit()
          registerForm.elements.cardList().contains(input.title)
        })

        it('When I refresh the page', () => {
          cy.reload();
        })

        it('Then I should still see the submitted image in the list of registered images', () => {
          registerForm.elements.cardList().contains(input.title)
        })

        after(() => {
          cy.clearAllLocalStorage();
        })
    })
})


