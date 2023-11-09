<?php 
get_header();
//поле из acf
$string='1,,2,,3';
$separator=',,';
$world=explode($separator, $string);
?>
    <main class="page">
      <section class="page__main-block main-block">
        <div class="main-block__container container">
          <div class="main-block__info">
            <h1 class="main-block__block-title">Explore, Buy and Sell the <span class='title-highlight'> Best NFTs!</span></h1>
            <div class="main-block__buttons buttons"><button class="main-block__button button bg-button">Explore</button><button class="main-block__button button">Create</button></div>
            <div class="main-block__stats">
              <?php foreach ($world as $value) {
                echo '<div class="main-block__stats-block">';
                echo '<div class="main-block__stats-title">'.$value.'</div>';
                echo '<div class="main-block__stats-txt">'.$value.'</div>';
                echo '</div>';
              }?>
              <div class="main-block__stats-block">
                <div class="main-block__stats-title">32k+</div>
                <div class="main-block__stats-txt">Artworks</div>
              </div>
              <div class="main-block__stats-block">
                <div class="main-block__stats-title">20k+</div>
                <div class="main-block__stats-txt">Auctions</div>
              </div>
              <div class="main-block__stats-block">
                <div class="main-block__stats-title">12k+</div>
                <div class="main-block__stats-txt">Creators</div>
              </div>
            </div>
          </div>
          <div class="main-card">
            <div class="main-card__wrapper">
              <div class="main-card__header">
                <div class="main-card__header-container">
                  <div class="main-card__text">
                    <div class="main-card__title">Current bid</div>
                    <div class="main-card__sub-title">0.99 ETH</div>
                  </div>
                  <div class="main-card__text">
                    <div class="main-card__title">Ends in</div>
                    <div class="main-card__sub-title">25 hrs</div>
                  </div>
                </div>
              </div>
              <div class="main-card__img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/nft/main_image.webp" alt="some photo">
                <div class="main-card__footer">
                  <div class="main-card__artist">
                    <div class="main-card__artist-txt">Artist</div>
                    <div class="main-card__artist-name">@wzard</div>
                  </div><button class="main-card__footer-button button bg-button">Start Bid</button>
                </div>
              </div>
            </div><button class="main-block__scroll-button button"><img src="<?php echo get_template_directory_uri() ?>/assets/img/Scroll_button.webp" alt></button>
          </div>
        </div>
        <div class="page__clients clients">
          <div class="clients__container container fdr cgap">
            <div class="clients__row">
              <div class="clients__img"> <img src="<?php echo get_template_directory_uri() ?>/assets/img/clients/clients1.svg" alt="some photo"></div>
              <div class="clients__img"> <img src="<?php echo get_template_directory_uri() ?>/assets/img/clients/clients2.svg" alt="some photo"></div>
            </div>
            <div class="clients__row">
              <div class="clients__img"> <img src="<?php echo get_template_directory_uri() ?>/assets/img/clients/clients3.svg" alt="some photo"></div>
              <div class="clients__img"> <img src="<?php echo get_template_directory_uri() ?>/assets/img/clients/clients4.svg" alt="some photo"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="page__live-auctions live-auctions">
        <div class="live-auctions__container container cgap">
          <div class="live-auctions__title">
            <div class="live-auctions__title-container title-container">
              <div class="live-auctions__title-circle title-circle"></div>
              <h2 class="live-auctions__block-title-text">Live Auctions</h2>
            </div>
            <div class="live-auctions__arrows">
              <div class="live-auctions__arrow"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/black-arrow.svg" alt="some photo"></div>
              <div class="live-auctions__arrow"><img src="<?php echo get_template_directory_uri() ?>/assets/img/arrows/white-arrow.svg" alt="some photo"></div>
            </div>
          </div>
          <div class="live-auctions__cards cards">

<?php
global $post;
$myposts = get_posts([
  'numberposts' => -1,
	'orderby'     => 'date',
	'order'       => 'DESC',
  'category'    => 3,
]);
$id = $post->ID;
if( $myposts ){
	foreach( $myposts as $post ){
		setup_postdata( $post );
		?>
		        <div class="live-auctions__card card">
              <div class="live-auctions__card-img-wrapper card-img">
                <?php the_post_thumbnail(
                  array(
                    'class' => 'live-auctions__card-img',
                    'alt' => 'some-text'
                  ));?>
                  <div class="live-auctions__timer timer" id="timer"><?php echo get_post_meta( $id, 'timer', true ); ?></div>
                </div>

              <div class="live-auctions__card-info card-info">
                <div class="live-auctions__card-autor card-autor">
                  <div class="live-auctions__card-img-data img-data">
                    <div class="live-auctions__card-autor-icon card-autor-icon"><img src="<?php echo get_template_directory_uri() ?>/assets/img/profiles/profile_image1.webp" alt="some photo"></div>
                    <div class="live-auctions__card-img-info card-img-info">
                      <div class="live-auctions__card-img-name card-img-name"><?php the_title();?></div>
                      <div class="live-auctions__card-autor-name card-autor-name"><?php the_content();?></div>
                    </div>
                  </div>
                  <div class="live-auctions__card-likes card-likes">
                    <div class="live-auctions__card-likes-icon card-likes-icon"><img src="<?php echo get_template_directory_uri() ?>/assets/img/likes_icon.svg" alt="some photo"></div>
                    <div class="live-auctions__card-likes-value"><?php echo get_post_meta( $id, 'likes', true ); ?></div>
                  </div>
                </div>
                <div class="live-auctions__card-bid card-bid">
                  <div class="live-auctions__card-bid-txt bid-txt">Current Bid</div>
                  <div class="live-auctions__card-bid-value"><?php echo get_post_meta( $id, 'bid', true ); ?></div>
                </div>
                <div class="live-auctions__card-button button">Place a bid</div>
              </div>
            </div>
		<?php } } wp_reset_postdata(); ?>
        </div>
      </section>

      <section class="page__explain explain">
        <div class="explain__container container cgap">
          <div class="explain__title-container title-container">
            <div class="explain__title-circle title-circle"></div>
            <h2 class="explain__block-title-text">How it works</h2>
          </div>
          <div class="explain__block">
<?php
$myposts = get_posts([
  'numberposts' => -1,
	'orderby'     => 'date',
	'order'       => 'DESC',
  'category'    =>  4,
]);
$id = $post->ID;
if( $myposts ){
	foreach( $myposts as $post ){
	setup_postdata( $post );
?>
            <div class="explain__illustration-item">
              <div class="explain__illustration-img">
              <?php the_post_thumbnail(
                  array(
                    'class' => '',
                    'alt' => 'some-text'
                  ));?>
                  </div>
              <h4 class="explain__illustration-txt"><?php the_title();?></h4>
              <div class="explain__illustration-arrow"><img src="<?php echo get_template_directory_uri() ?>/assets/img/how_it_works/Vector1.svg" alt="some photo"></div>
            </div>
<?php } } wp_reset_postdata(); ?>
          </div>
        </div>
      </section>
      <section class="page__popular-collections popular-collections">
        <div class="popular-collections__container container cgap">
          <div class="popular-collections__title-container title-container">
            <div class="popular-collections__title-circle title-circle"></div>
            <h2 class="popular-collections__block-title-text">Popular Collections</h2>
          </div>
          <div class="popular-collections__cards cards">
          <?php
global $post;
$myposts = get_posts([
  'numberposts' => -1,
	'orderby'     => 'date',
	'order'       => 'DESC',
  'category'    => 5,
]);
$id = $post->ID;
if( $myposts ){
	foreach( $myposts as $post ){
		setup_postdata( $post );
		?>
<div class="popular-collections__card card">
              <div class="popular-collections__card-img card-img">
                                <?php the_post_thumbnail(
                  array(
                    'class' => 'live-auctions__card-img',
                    'alt' => 'some-text'
                  ));?>
              </div>
              <div class="popular-collections__card-info">
                <div class="popular-collections__card-img-data img-data">
                  <div class="popular-collections__card-autor-icon card-autor-icon"><img src="<?php echo get_template_directory_uri() ?>/assets/img/profiles/profile_image2.webp" alt="some photo"></div>
                  <div class="popular-collections__card-info-name"><?php the_title();?></div></div>
                  <div class="popular-collections__card-info-txt"><?php the_content();?></div></div>
                </div>
              </div>
		<?php } } wp_reset_postdata(); ?>

          <div class="popular-collections__arrow"></div>
          <div class="popular-collections__button button view-button">View All</div>
        </div>
      </section>
      <section class="page__explore explore">
        <div class="explore__container container cgap">
          <div class="explore__title-container title-container">
            <div class="explore__title-circle title-circle"></div>
            <h2 class="explore__block-title-text">Explore By Categories</h2>
          </div>
          <div class="explore__cards cards">
<?php
$myposts = get_posts([
  'numberposts' => -1,
	'orderby'     => 'date',
	'order'       => 'DESC',
  'category'    =>  6,
]);
$id = $post->ID;
if( $myposts ){
	foreach( $myposts as $post ){
		setup_postdata( $post );
		?>
<div class="explore__card card">
              <div class="explore__card-img-wrapper">
                <div class="explore__card-img">
                <?php the_post_thumbnail(
                  array(
                    'class' => '',
                    'alt' => 'some-text'
                  ));?>
                </div>
                <div class="explore__card-button">Place a bid</div>
              </div>
              <div class="explore__card-info card-info">
                <div class="explore__card-autor card-autor">
                  <div class="explore__card-img-data img-data">
                    <div class="explore__card-autor-icon card-autor-icon"><img src="<?php echo get_template_directory_uri() ?>/assets/img/profiles/profile_image3.webp" alt="some photo"></div>
                    <div class="explore__card-img-info card-img-info">
                      <div class="explore__card-img-name card-img-name"><?php the_title();?></div>
                      <div class="explore__card-autor-name card-autor-name"><?php the_content();?></div>
                    </div>
                  </div>
                  <div class="explore__card-likes card-likes">
                    <div class="explore__card-likes-icon card-likes-icon"><img src="<?php echo get_template_directory_uri() ?>/assets/img/likes_icon.svg" alt="some photo"></div>
                    <div class="explore__card-likes-value"><?php echo get_post_meta( $id, 'likes', true ); ?></div>
                  </div>
                </div>
                <div class="explore__card-bid card-bid">
                  <div class="explore__card-bid-txt bid-txt">Current Bid</div>
                  <div class="explore__card-bid-value"><?php echo get_post_meta( $id, 'bid', true ); ?></div>
                </div>
              </div>
            </div>
<?php } } wp_reset_postdata(); ?>
          </div>
          <div class="explore__button button view-button">View All</div>
        </div>
      </section>
      <section class="page__top-creators top-creators">
        <div class="top-creators__container container cgap">
          <div class="top-creators__title-container title-container">
            <div class="top-creators__title-circle title-circle"></div>
            <h2 class="top-creators__block-title-text">Top Creators</h2>
          </div>
          <div class="top-creators__creators">
          <?php
$myposts = get_posts([
  'numberposts' => -1,
	'orderby'     => 'date',
	'order'       => 'DESC',
  'category'    =>  7,
]);
$id = $post->ID;
if( $myposts ){
	foreach( $myposts as $post ){
		setup_postdata( $post );
		?>
              <div class="top-creators__creators-card">
                <div class="top-creators__creator-photo"><img src="<?php echo get_template_directory_uri() ?>/assets/img/profiles/profile_image1.webp" alt="some photo"></div>
                <div class="top-creators__creator-info card-img-info">
                  <h3 class="top-creators__creator-name"><?php the_title();?></h3>
                  <div class="top-creators__creator-price"><?php the_content();?></div>
                </div>
                <div class="top-creators__creator-items creator-items">
                  <div class="top-creators__creator-items-value"><?php echo get_post_meta( $id, 'items', true ); ?></div>
                  <div class="top-creators__creator-items-txt">items</div>
                </div>
              </div>
              <?php } } wp_reset_postdata(); ?>
          </div><button class="top-creators__creators button view-button">View All</button>
        </div>
      </section>
      <section class="page__subscribe subscribe">
        <div class="subscribe__bg"></div>
        <div class="subscribe__container container">
          <div class="subscribe__title-container title-container">
            <h2 class="subscribe__block-title-text">Ready for Next NFT Drop?</h2>
          </div>
          <div class="subscribe__block subscribe-block">
            <?php echo do_shortcode('[contact-form-7 id="3c93e07" title="email form"]')?>
          </div>
        </div>
      </section>
<?php 
get_footer();
?>