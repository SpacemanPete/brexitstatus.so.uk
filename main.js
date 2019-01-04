(function() {

  const statusButton = document.getElementById('check-status');
  statusButton.addEventListener('click', checkStatus);

  let clickCounter = 0;

  function checkStatus () {

    if (clickCounter < 25) {
      this.innerHTML = "Check again";
    } else if ( clickCounter < 50 ) {
      this.innerHTML = "Maybe it'll change this time...";
    } else if ( clickCounter < 100 ) {
      this.innerHTML = "No, probably not, but just to be sure...";
    } else if ( clickCounter < 150 ) {
      this.innerHTML = "I got a lot riding on this, let's check again to be extra sure...";
    } else if ( clickCounter < 200 ) {
      this.innerHTML = "Seriously, don't you have anything better to do?";
    }

    let status = document.getElementById('status');
    let statusVisibility = status.style.display;

    if (statusVisibility == 'inline') {

      if ( clickCounter < 25 ) {
        status.classList.toggle('mirror');
      } else {
        let effectList = [
          'mirror',
          'flipped',
          'rotate',
          'small',
          'large',
          'skew90left',
          'skew90right',
        ];
        let randomEffect = effectList[Math.floor(Math.random() * effectList.length)];

        status.className = '';
        status.classList.add(randomEffect);
      }
    } else {
      status.style.display = 'inline';
    }

    clickCounter++;

  }

})()