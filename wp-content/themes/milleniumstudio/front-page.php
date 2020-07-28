<?php get_header(); ?>
<main id="front-page">
	<section class="hero">
		<a href="<?= get_field('hero_link') ?>">
			<figure class="hero__bg">
				<img src="<?= get_field('hero_image')['url'] ?>" alt="<?= get_field('hero_image')['alt'] ?>">
			</figure>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="hero__content">
							<h1 class="hero__title"><?= get_field('hero_title') ?></h1>
							<h2 class="hero__subtitle"><?= get_field('hero_subtitle') ?></h2>
						</div>
					</div>
				</div>
			</div>
		</a>
	</section>
</main>
<?php get_footer(); ?>