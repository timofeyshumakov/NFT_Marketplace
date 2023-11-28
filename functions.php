<?php

function strategy_assets() {
    wp_enqueue_style( 'font-Work-Sans', 'https://fonts.googleapis.com/css?family=Work+Sans:wght@400;500;600;700&amp;display=swap' );
    wp_enqueue_style( 'font-Oxanium', 'https://fonts.googleapis.com/css?family=Oxanium:wght@400;500;600&amp;display=swap' );
    wp_enqueue_style( 'reset', get_template_directory_uri() . '/assets/css/reset.css' );
	wp_enqueue_style( 'maincss', get_template_directory_uri() . '/assets/css/style.css',false,time());
    wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/script.js',false,time());
}

add_action( 'wp_enqueue_scripts', 'strategy_assets' );
show_admin_bar(false);

add_filter('acf/settings/remove_wp_meta_box', '__return_false');
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

add_filter('upload_mimes','svg_upload_allow');
function svg_upload_allow($mimes){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
function register_my_menus() {
    register_nav_menus(
        array(
            'main_menu' => 'Главное меню',
            'footer_menu' => 'Меню footer',
            'sections_headers' => 'заголовки секций'
        )
    );
}
add_action( 'init', 'register_my_menus' );

add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) ){
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	}
	else {
		$dosvg = ( '.svg' === strtolower( substr( $filename, -4 ) ) );
	}

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if( $dosvg ){

		// разрешим
		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}

	}

	return $data;
}
?>
