<?php

// Theme support
add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );
add_theme_support( "menus" ); // Add menu to theme
define('DISALLOW_FILE_EDIT', true); // Disable theme editor

// Google insights fix
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'feed_links', 2);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

// Remove comments
function my_remove_admin_menus() {
  remove_menu_page( 'edit-comments.php' );
}
add_action( 'admin_menu', 'my_remove_admin_menus' );
function remove_comment_support() {
  remove_post_type_support( 'post', 'comments' );
  remove_post_type_support( 'page', 'comments' );
}
add_action('init', 'remove_comment_support', 100);



// Load assets
function add_theme_assets() {
  wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css', false, 1, 'all');
  wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js', array ( 'jquery' ), 1, true);
}
add_action( 'wp_enqueue_scripts', 'add_theme_assets');



// Menu register
function register_menus() {
  register_nav_menus( array(
    'main' => esc_html__( 'Primary' )
  ) );
}
add_action( 'init', 'register_menus' );

function custom_menu_nav_class( $classes, $item, $args, $depth ) {
  $_classes = [ 'menu__item' ];
  $theme_location = $args->theme_location ? $args->theme_location : 'default';
  $_classes[] = 'menu__item--' . $theme_location;
  // Add BEM version of wp class \/
  if ( in_array( 'current-menu-item', $classes ) ) {
    $_classes[] = 'menu__item--active';
  }
  if ( in_array( 'current-menu-item', $classes ) ) {
    $_classes[] = 'menu__item--active';
  }
  return $_classes;
}
add_filter( 'nav_menu_css_class', 'custom_menu_nav_class', 10, 4 );

function custom_menu_link_class( $atts, $item, $args, $depth ) {
  $atts['class'] = 'menu__anchor';
  if ( in_array( 'button', $item->classes, true ) ) {
    $atts['class'] .= ' menu__anchor--button';
  }
  if ( in_array( 'current-menu-item', $item->classes, true ) ) {
    $atts['class'] .= ' menu__anchor--active';
  }
  return $atts;
}
add_filter( 'nav_menu_link_attributes', 'custom_menu_link_class', 10, 4 );



// Custom pages support
add_action('admin_init', 'edit_page_supports');
function edit_page_supports()
{
  if ( isset( $_GET['post'] ) && $_GET['post'] == 19) {
    remove_post_type_support('page', 'editor');
  }
  remove_post_type_support('page', 'thumbnail');
  remove_post_type_support('page', 'comments');
  remove_post_type_support('page', 'author');
  remove_post_type_support('page', 'excerpt');
}


// ACF Theme setting page
function my_acf_op_init() {
  if( function_exists('acf_add_options_page') ) {
    acf_add_options_sub_page(array(
      'parent_slug' => 'themes.php',
      'page_title'     => 'Ustawienia motywu',
      'menu_title'     => 'Ustawienia motywu',
      'menu_slug'     => 'theme-setting',
      'position' => '21',
    ));
  }
}
add_action('acf/init', 'my_acf_op_init');


?>