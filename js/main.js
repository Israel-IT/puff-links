const href = document.location.href;

const link = document.getElementById('download-link');

const testLink = "https://download.thepuffapp.co.il/?Utm=test_campaign-test_source-test_medium.apk"



const getRightLink = (href) => {
  const sourceArray = href.split('_').slice(1);

  return `https://puff-android-builds.s3.amazonaws.com/puff-test_${sourceArray[0]}_${sourceArray[1]}_${sourceArray[2]}`
}

link.href = getRightLink(href);
