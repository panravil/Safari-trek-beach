<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
    rel="stylesheet">
  </script>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}" />

  <title>{{env('APP_NAME')}}</title>
</head>

<body>
  <div id="app">
  </div>

  <script src="{{ asset('js/app.js') }}"></script>

  <!-- <script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }
  </script>

  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
  </script> -->
  <style>
  .goog-te-banner-frame.skiptranslate {
    display: none !important;
  }

  body {
    top: 0px !important;
  }

  .goog-te-menu-frame {
    max-width: 100% !important;
  }

  .goog-te-menu2 {
    max-width: 100% !important;
    overflow-x: scroll !important;
    box-sizing: border-box !important;
    height: auto !important;
  }
  </style>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false,
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');

    function changeGoogleStyles() {
      if ($('.goog-te-menu-frame').contents().find('.goog-te-menu2').length) {
        $('.goog-te-menu-frame').contents().find('.goog-te-menu2').css({
          'max-width': '100%',
          'overflow-x': 'auto',
          'box-sizing': 'border-box',
          'height': 'auto'
        });
      } else {
        setTimeout(changeGoogleStyles, 50);
      }
    }
    changeGoogleStyles();
  }
  </script>

  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
  </script>

</body>

</html>