			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<!-- copyright -->
				<p class="copyright">
					&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
					<a href="//wordpress.org">WordPress</a> &amp; <a href="//html5blank.com" title="HTML5 Blank">HTML5 Blank</a>.
				</p>
				<!-- /copyright -->

			</footer>
			<!-- /footer -->
		</div>
		<!-- /End Slidebars container -->

		<!-- JS -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	    <script>window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/bower_components/jquery/dist/jquery.min.js"><\/script>')</script>

	    <!-- build:js dist/js/plugins.min.js -->   
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/Slidebars/dist/slidebars.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/SimpleStateManager/dist/ssm.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/bootstrapValidator/dist/js/bootstrapValidator.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/bower_components/respond/dest/respond.min.js"></script> 
	    <script src="<?php echo get_template_directory_uri(); ?>/bower_components/slick-carousel/slick/slick.min.js"></script>
	    <!-- endbuild -->

	    <!-- Production JS - Uncomment during go live -->
	    <!-- <script src="<?php echo get_template_directory_uri(); ?>/dist/js/plugins.min.js"></script>
	    <script src="<?php echo get_template_directory_uri(); ?>/dist/js/main.min.js"></script> -->
	    <!-- End Production JS -->

	    <script src="<?php echo get_template_directory_uri(); ?>/src/js/plugins.js"></script>
	    <script src="<?php echo get_template_directory_uri(); ?>/src/js/main.js"></script>

		<?php wp_footer(); ?>

		<!-- Analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
