<?php
/**
* @package Millenium_Studio_Theme
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="format-detection" content="telephone=no">
  <!-- Google -->
  <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
  <!-- Facebook -->
  <meta property="og:title" content="<?php echo get_bloginfo('name'); ?>">
  <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">
  <meta property="og:url" content="<?php echo get_home_url(); ?>">
  <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
  <meta property="og:type" content="website">
  <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/test.jpg">
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="<?php echo get_home_url(); ?>">
  <meta property="twitter:title" content="<?php echo get_bloginfo('name'); ?>">
  <meta property="twitter:description" content="<?php echo get_bloginfo('description'); ?>">
  <meta property="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/test.jpg">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php 
  if ( have_rows( 'header', 'options' ) ) {
    while ( have_rows( 'header', 'options' ) ) {
      the_row();
      $logo = esc_url( get_sub_field( 'logo', 'options' ) );
    }
  }
?>
<h1>test</h1>
<header class="header">
  <div class="header__box">
    <div class="container justify-content-between">
      <div class="header__content">
        <img class="header__logo" src="<?php echo $logo; ?>" alt="<?php echo get_bloginfo('name'); ?> - logo">
        <div id="hamburger" class="hamburger">
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
          <span class="hamburger__bar"></span>
        </div>
        <nav id="menu" class="menu menu--primary">
          <?php
            wp_nav_menu( array(
              'theme_location'    => 'main',
              'container'         => '',
              'menu_class'        => 'menu__items menu__items--primary',
            ) );
          ?>
        </nav>
      </div>
    </div>
  </div>
</header>