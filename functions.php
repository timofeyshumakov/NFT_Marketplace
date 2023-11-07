<?php


function strategy_assets() {
    wp_enqueue_style( 'font-Work-Sans', 'https://fonts.googleapis.com/css?family=Work+Sans:wght@400;500;600;700&amp;display=swap' );
    wp_enqueue_style( 'font-Oxanium', 'https://fonts.googleapis.com/css?family=Oxanium:wght@400;500;600&amp;display=swap' );
    wp_enqueue_style( 'reset', get_template_directory_uri() . '/assets/css/reset.css' );
	wp_enqueue_style( 'maincss', get_template_directory_uri() . '/assets/css/style.css',false,'');
    wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js',array(),false,'');
}

add_action( 'wp_enqueue_scripts', 'strategy_assets' );
show_admin_bar(false);

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');