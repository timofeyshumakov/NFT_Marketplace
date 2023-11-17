<!DOCTYPE html>
<html lang="<?php bloginfo('language'); ?>">

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="format-detection" content="telephone=yes">
  <meta name="robots" content="all">
  <meta name="keywords" content="ключевые слова">
  <meta name="<?php bloginfo('description'); ?>">
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
      <div class="header__container container" id="header__container"><div class="header__logo logo" ><?php the_custom_logo(); ?></div>
        <nav class="header__menu menu menu-burger-content" id="menu-burger-content">
          <?php wp_nav_menu( array( 'theme_location' => 'main_menu' ) ); ?>
          <div class="header__button button" id="header__button"><button class="header__button">Connect Wallet</button></div>
        </nav>
        <div class="menu-burger" id="menu-burger-container"><img src="<?php echo get_template_directory_uri() ?>/assets/img/menu_burger.svg" alt="some photo" id="menu-burger"></div>
      </div>
    </header>