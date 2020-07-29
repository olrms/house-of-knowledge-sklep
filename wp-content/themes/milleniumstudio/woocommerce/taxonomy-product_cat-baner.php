<div id="category_baner">
    <figure>
        <?php 
            $currentTermID = (get_queried_object()->term_id); 
            $currentTermName = (get_queried_object()->name); 
            $currentTermThumbnail = wp_get_attachment_url(get_term_meta( $currentTermID, 'thumbnail_id', true ));
        ?>
        <img src="<?= $currentTermThumbnail ?>" alt="<?= $currentTermName ?>">
    </figure>
</div>