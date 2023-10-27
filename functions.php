<?php


function strategy_assets() {
    wp_enqueue_style( 'fonts', get_template_directory_uri() . '/assets/css/fonts.css' );
    wp_enqueue_style( 'reset', get_template_directory_uri() . '/assets/css/reset.css' );
	wp_enqueue_style( 'maincss', get_template_directory_uri() . '/assets/css/style.css' );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js');
}
add_action( 'wp_enqueue_scripts', 'strategy_assets' );
show_admin_bar(false);