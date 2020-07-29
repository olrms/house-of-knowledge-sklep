<?php get_header(); ?>
<main>
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <?php 
        if(is_product_category()) {
          require_once __DIR__.'/woocommerce/taxonomy-product_cat-baner.php';
        }
      ?>
      <article id="page">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1><?php the_title(); ?></h1>
              <div><?php the_content(); ?></div>
            </div>
          </div>
        </div>
      </article>
    <?php endwhile;
  else : ?>
    <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
  <?php endif; ?>
</main>
<?php get_footer(); ?>