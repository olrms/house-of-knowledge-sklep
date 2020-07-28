<?php
define('DISALLOW_FILE_EDIT', true);

class MsTheme
{
  function __construct()
  {
    add_action('init', array($this, 'editThemeSupports'));
    add_action('init', array($this, 'removeUnnecessaryActions'));
    add_action('wp_enqueue_scripts', array($this, 'addThemeAssets'));
    add_action('init', array($this, 'registerMenus'));
    add_action('admin_init', array($this, 'editPageSupports'));
  }

  public function editThemeSupports()
  {
    add_theme_support('woocommerce');
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support("menus"); // Add menu to theme
  }

  public function removeUnnecessaryActions()
  {
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
    add_action('admin_menu', function () {
      remove_menu_page('edit-comments.php');
    });
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');
  }

  public function addThemeAssets()
  {
    wp_deregister_script('jquery');
    wp_register_script('jquery', get_template_directory_uri() . '/assets/js/jquery-3.4.1.min.js', array(), '1.0.0', true);
    wp_enqueue_style('style', get_template_directory_uri() . '/assets/css/style.css', false, 1, 'all');
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), 1, true);
  }

  public function registerMenus()
  {
    register_nav_menus(array(
      'main' => esc_html__('Primary')
    ));

    add_filter('nav_menu_css_class', function ($classes, $item, $args, $depth) {
      $_classes = ['menu__item'];
      $theme_location = $args->theme_location ? $args->theme_location : 'default';
      $_classes[] = 'menu__item--' . $theme_location;
      // Add BEM version of wp class \/
      if (in_array('current-menu-item', $classes)) {
        $_classes[] = 'menu__item--active';
      }
      if (in_array('current-menu-item', $classes)) {
        $_classes[] = 'menu__item--active';
      }
      return $_classes;
    }, 10, 4);

    add_filter('nav_menu_link_attributes', function ($atts, $item, $args, $depth) {
      $atts['class'] = 'menu__anchor';
      if (in_array('button', $item->classes, true)) {
        $atts['class'] .= ' menu__anchor--button';
      }
      if (in_array('current-menu-item', $item->classes, true)) {
        $atts['class'] .= ' menu__anchor--active';
      }
      return $atts;
    }, 10, 4);
  }

  public function editPageSupports()
  {
    $post_ids = [8];
    if (isset($_GET['post']) && in_array($_GET['post'], $post_ids)) remove_post_type_support('page', 'editor');
    //OR
    //$post_templates = ['page-kontakt.php'];
    //if (isset($_GET['post']) && in_array(get_page_template_slug($_GET['post']), $post_templates)) remove_post_type_support('page', 'editor');

    remove_post_type_support('page', 'thumbnail');
    remove_post_type_support('page', 'comments');
    remove_post_type_support('page', 'author');
    remove_post_type_support('page', 'excerpt');
  }


  /* static functions for theme templates */
  public static function getProductsCategories()
  {
    $terms = get_terms('product_cat', array(
      'hide_empty' => false,
      'exclude' => array(15),
    ));

    foreach ($terms as $key => &$term) {
      $term->thumbnail = wp_get_attachment_url(get_term_meta( $term->term_id, 'thumbnail_id', true ));
      $term->link = get_term_link($term, 'product_cat');
    }

    return $terms;
  }
}

$_MsTheme = new MsTheme();
