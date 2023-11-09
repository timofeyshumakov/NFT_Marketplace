<footer class="footer">
        <div class="footer__container container">
          <div class="footer__content footer-block"><div class="footer__logo logo"><?php the_custom_logo(); ?></div>
            <div class="footer__column">
              <div class="footer__text">Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est. </div>
              <div class="footer__media">
                <div class="footer__social">
                  <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials1.svg" alt="some photo"></div>
                  <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials2.svg" alt="some photo"></div>
                  <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials3.svg" alt="some photo"></div>
                  <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials4.svg" alt="some photo"></div>
                </div>
                <div class="footer__license">All rights reserved@2021</div>
              </div>
            </div>
          </div>
          <div class="footer__nav footer-block">
            <div class="footer__list"><a class="footer__link" href="#">About Us</a><a class="footer__link" href="#">About NFTs</a><a class="footer__link" href="#">Live Auctions</a><a class="footer__link" href="#">NFT Blog</a><a class="footer__link" href="#">Activity</a></div>
            <div class="footer__list"><a class="footer__link" href="#">Support</a><a class="footer__link" href="#">Help &amp; Support</a><a class="footer__link" href="#">Item Details</a><a class="footer__link" href="#">Author Profile</a><a class="footer__link" href="#">Collection</a></div>
          </div>
          <div class="footer__media footer-bottom">
            <div class="footer__social">
              <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials1.svg" alt="some photo"></div>
              <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials2.svg" alt="some photo"></div>
              <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials3.svg" alt="some photo"></div>
              <div class="footer__social-img"><img src="<?php echo get_template_directory_uri() ?>/assets/img/social/socials4.svg" alt="some photo"></div>
            </div>
            <div class="footer__license">All rights reserved@2021</div>
          </div>
        </div>
</footer>
      <section class="popup" id="popup">
        <div class="popup__container container" id="popup__container">
          <div class="popup__title-container title-container">
            <h2 class="popup__block-title-text">Ready for Next NFT Drop?</h2>
          </div>
          <div class="popup__block subscribe-block">
            <form class="popup__email-input" action="http://foo.com" method="post"></form><input type="email" name="email" placeholder="example@email.ru"><button class="popup__button button bg-button">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  </div>
  <?php 
wp_footer();
?>
</body>
</html>