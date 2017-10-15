<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/src/images/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/src/images/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>

		<!-- header -->
		<header class="header fullwidth fullwidth-sm clear" canvas="" role="banner">

			<div class="container header_container">

				<!-- logo -->
				<div class="logo">

					<a href="<?php echo home_url(); ?>">

						<img src="<?php echo get_template_directory_uri(); ?>/src/images/logo.png" alt="Logo" class="logo_img">
					</a>

				</div>
				<!-- /logo -->

				<!-- nav -->
				<nav class="main-nav" role="navigation">

					<?php html5blank_nav(); ?>

				</nav>
				<!-- /nav -->

				<!-- Mobile Nav Toggle -->
				<a href="#" class="mobile-nav__toggle">

                    <img src="<?php echo get_template_directory_uri(); ?>/src/images/nav-icon.png" alt="Nav Icon">
                    
                </a>

			</div>

		</header>
		<!-- /header -->

		<!-- Mobile Nav via Slidebars-->
        <div off-canvas="id-1 right push" class="mobile-nav">

            <div class="container">

                <div class="mobile-nav_content">

                	<div class="mobile-nav_logo">

	                    <a href="/" class="">
	                    	<img src="<?php echo get_template_directory_uri(); ?>/src/images/logo.png" class="" alt="Mobile Nav Logo">
	                    </a>

                    </div>
                    
                    <?php html5blank_mobile_nav(); ?>

                </div>

            </div>

        </div>
