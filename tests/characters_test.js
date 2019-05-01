Feature ('MyTest')

Before ((I) => {
  I.amOnPage('http://localhost:3000')
  I.seeInCurrentUrl('/')
})

Scenario ('test main screen', (I) => {
  I.see('Avengers END GAME')
})

Scenario ('test should search a hero', (I) => {
  I.fillField('searchHero', 'Iron man')
  I.click('#outlined-full-width')
  I.wait(2)
  I.see('A-Bomb (HAS)')
})

Scenario ('test should show a hero', (I) => {
  // I.click('#about-more')
  I.wait(1)
  I.click('#about-more')
  I.see('VOLTAR')
})
