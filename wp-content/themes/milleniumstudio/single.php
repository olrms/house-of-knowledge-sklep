<?php get_header(); ?>
<main>
  <h1>Single</h1>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <article>
    <div class="row">
      <div class="col-12">
        <h1><?php the_title(); ?></h1>
        <div><?php the_content(); ?></div>
      </div>
    </div>
  </article>
  <?php endwhile; else: ?>
    <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
  <?php endif; ?>
  </main>
<?php get_footer(); ?>