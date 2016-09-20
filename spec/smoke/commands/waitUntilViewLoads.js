exports.command = function(file, callback) {
  return this.executeAsync(function(done) {
    window.currentView.supermodel.finishLoading.then(done);
  });
};
