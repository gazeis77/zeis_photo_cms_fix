<?php 
#########################################################
#	Project Configuration File
#########################################################
$GLOBALS = array();

$GLOBALS["project_info"]["name"] = "CMS Framework";
$GLOBALS["project_info"]["alias"] = "cms";
$GLOBALS["project_info"]["dns"] = "cms.local";
$GLOBALS["project_info"]["company_name"] = "George Zeis";
$GLOBALS["project_info"]["default_email"] = "george";

#########################################################
#	Debug Options
#########################################################
$GLOBALS["debug_options"]["enabled"] = 1;				# Turn Debugging On - Use only in dev
$GLOBALS["debug_options"]["enabled_backtrace"] = 1;		# Enable full details on errors
$GLOBALS["debug_options"]["send_debug_mail"] = 1;		# Send an email with error messages - useful in production
$GLOBALS["debug_options"]["debug_email"] = "";

#########################################################
#	Database Options
#########################################################
// include($GLOBALS["app_path"] ."library/databases/all_in_one.php");
$GLOBALS["db_options"]["main_connections"] = array(
	"default" => array(
		"hostname" => "localhost"
		,"username" => "root"
		,"password" => ''
		,"database" => "database_name"
		,"type" => "mysqli"
	)
);

include_once($_SERVER["DOCUMENT_ROOT"]."/lib/error_handler.php");
include_once($_SERVER["DOCUMENT_ROOT"]."/lib/databases/all_in_one.php");
db_connect_all();