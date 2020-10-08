function PwaMetaTags () {
  return (
    <>
      <meta name='application-name' content='PWA App' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='PWA App' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#2B5797' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content='#000000' />

      <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png' />
      <link rel='manifest' href='/static/manifest.json' />
      <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/static/icons/favicon.ico' />
    </>
  )
}

export default PwaMetaTags
