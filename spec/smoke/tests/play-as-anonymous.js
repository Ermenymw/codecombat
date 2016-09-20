//WAIT_TIMEOUT = 8000;
//DOMAIN = require('./domain');
//
//module.exports = {
//  'Start playing': function (browser) {
//
//    browser
//      // Go to home page
//      .url(DOMAIN+'/play/dungeon')
//      .resizeWindow(1250, 900)
//      .executeAsync(function(done) { window.currentView.supermodel.finishLoading.then(done)})
//      .click('a[data-level-slug="dungeons-of-kithgard"]')
//      .click('.start-level')
//      .executeAsync(function(done) { window.currentModal.supermodel.finishLoading.then(done)})
//      .click('#confirm-button')
//      .waitForElementVisible('.btn.equip-item', WAIT_TIMEOUT)
//      .click('.btn.equip-item')
//      .click('#play-level-button')
//      .pause(1000000)
//  }
//}
