<?php
if (is_home() || is_front_page()) {
    require_once __DIR__ . '/front-page.php';
    exit();
} else {
    get_header(); ?>
    <main>
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
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
<?php get_footer();
} ?>