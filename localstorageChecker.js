/**
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <gecko@dvp.io> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Antoine "Gecko" Pous
 */

LSChecker = function() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch(e) {
    return false;
  }
}

// Usage :
if(LSChecker()) {
  //... do the stuff
}