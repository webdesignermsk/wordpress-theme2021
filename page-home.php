<?php
/*
    Template Name: Home Page
 */
get_header(); 

// ACF VARIABLES ================

?>

<div class="content">
    
    <!-- =====  ABOUT SECTION ===== -->
    <section>
        <h1><?php the_title(); ?></h1>
        <?php if(have_rows('content')) : ?>

                <?php while( have_rows('content') ) : the_row(); ?>
                    <?php if(get_row_layout() == 'column_section'): 
                        
                        $columns = get_sub_field('columns')
                        ?>

                       <!-- <pre><?php // echo print_r( get_sub_field('columns') ); ?></pre> -->
                        <?php foreach($columns as $column):?>
                                <h2><?php echo $column['title'];?></h2>
                                <p><?php echo $column['content'];?></p>
                                <a href="<?php echo $column['link']['url']; ?>"
                                /> <?php $column['link']['title']; ?> </a>
                        <?php endforeach;?>

                    <?php endif; ?>

                    
                <?php endwhile;?>
        
        <?php endif; ?>
    </section>

</div>
	

<?php get_footer(); ?>
