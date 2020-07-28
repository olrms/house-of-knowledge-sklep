<?php get_header(); ?>
<main>
  <h1>Index</h1>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <article>
      <div class="row">
        <div class="col-12">
          <a href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>
          <p><?php echo wp_trim_words( get_the_content(), 100, '...' ); ?></p>
          <a href="<?php the_permalink(); ?>">Czytaj dalej...</a>
        </div>
      </div>
    </article>
  <?php endwhile; ?>
  <div id="pagination">
    <?php
      $nav = get_the_posts_pagination(array(
        'screen_reader_text' => __( 'A' ),
        'prev_text' => __( 'Poprzednia strona' ),
        'next_text' => __( 'Następna strona' )
      ));
      $nav = str_replace('<h2 class="screen-reader-text">A</h2>', '', $nav);
      echo $nav;
    ?>
  </div>
  <?php else:?>
    <p><?php _e('Nie znaleziono postów spełniających podane kryteria.'); ?></p>
  <?php endif; ?>
</main>
<?php get_header(); ?>