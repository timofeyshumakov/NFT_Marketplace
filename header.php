<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8"><!--meta(name='viewport' content="1440px")-->
  <meta name="format-detection" content="telephone=yes">
  <meta name="robots" content="all">
  <meta name="keywords" content="ключевые слова">
  <meta name="description" content="Описание страницы сайта.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri() ?>/assets/img/logo.webp">
  <title>NFT Marketplace</title>
  <?php 
wp_head();
?>
</head>

<body>
  <div class="wrapper">
    <header class="header">
      <div class="header__container container" id="header__container"><a class="header__logo logo" href="#" id="header__logo"> <img src="<?php echo get_template_directory_uri() ?>/assets/img/logo.webp" alt="some photo"></a>
        <nav class="header__menu menu menu-burger-content" id="menu-burger-content">
          <ul class="menu__list" id="menu__list">
            <li class="menu__item"><a class="menu__link active" href="#">Explore</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Creators</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Community</a></li>
          </ul>
          <div class="header__button button" id="header__button"><button class="header__button">Connect Wallet</button></div>
        </nav>
        <div class="menu-burger" id="menu-burger-container"><img src="<?php echo get_template_directory_uri() ?>/assets/img/menu_burger.svg" alt="some photo" id="menu-burger"></div>
      </div>
    </header>