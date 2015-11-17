<?php include_once($_SERVER["DOCUMENT_ROOT"]."/lib/production_config.php"); ?>

I AM A CONTENT

<?php echo ($GLOBALS['debug_options']['enabled'] == 1 ? show_debug() : ''); ?>