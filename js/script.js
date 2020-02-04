(function () {
  function test() {
    let sillySillyKitty = 20;
    let micMacAttacks = 10;

    const testElem = document.getElementById('test');
    testElem.innerHTML += sillySillyKitty + micMacAttacks;
    alert(testElem.innerText);
  }

  test();
})();
