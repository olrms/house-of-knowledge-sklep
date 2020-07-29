<?php get_header(); ?>
<main id="front-page">
	<section class="hero">
		<a href="<?= get_field('hero_link', 8) ?>">
			<figure class="hero__bg">
				<img src="<?= get_field('hero_image', 8)['url'] ?>" alt="<?= get_field('hero_image', 8)['alt'] ?>">
			</figure>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="hero__content">
							<h1 class="hero__title"><?= get_field('hero_title', 8) ?></h1>
							<h2 class="hero__subtitle"><?= get_field('hero_subtitle', 8) ?></h2>
						</div>
					</div>
				</div>
			</div>
		</a>
	</section>
	<section class="offer">
		<div class="container">
			<div class="row">
				<div class="col-12 offer__categories">
					<?php
					$categories = MsTheme::getProductsCategories();
					foreach ($categories as $key => $category) { ?>
						<a href="<?= $category->link ?>" class="offer__cateogry" style="background: url('<?= $category->thumbnail ?>');">
							<h2 class="offer__title"><?= $category->name ?></h2>
						</a>
					<?php }
					?>
				</div>
			</div>
		</div>
	</section>
	<section class="content">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<?= get_field('page_content', 8) ?>
				</div>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>