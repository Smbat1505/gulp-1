// WEBP Support Checking, adding a Webp class or NO-Webp for HTML
export function isWebp() {
  function testWebP(callback) {
    // WEBP Support Checking
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Adding a Webp class or NO-Webp for HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
    // if (support == true) {
    //   document.querySelector('body').classList.add('webp');
    // } else {
    //   document.querySelector('body').classList.add('no-webp');
    // }
  });
}
