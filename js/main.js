document.addEventListener('DOMContentLoaded', () => {
  const href = document.location.href;

  const links = document.querySelectorAll('#download-link');

  const testLink = "https://download.thepuffapp.co.il/?Utm=PuffLaunch-Ginga-GingaLink.apk"



  const getRightLink = (href) => {
    const sourceArray = href.split('-');

    const thirdPart = sourceArray[2].split('.').length === 2 ? sourceArray[2] : sourceArray[2] + '.apk'

    const firstPart = sourceArray[0].split('=')[1];

    return `https://puff-android-builds.s3.amazonaws.com/puff-${firstPart
      }-${sourceArray[1]}-${thirdPart
      }`
  }

  const newLink = getRightLink(href);

  links.forEach(link => {
    link.href = newLink;
  });

})




// https://download.thepuffapp.co.il/?utm_source=Ginga&utm_medium=GingaLink&utm_campaign=PuffLaunch
