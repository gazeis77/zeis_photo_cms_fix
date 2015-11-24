<div class="container">
      <div class="jumbotron">

        <h1>Recent Events</h1>

        <div class="row">
          <div>
            <h2>Here is what we've been up to.</h2>
          </div>
        </div>
      </div>
    </div>



<?php


require("config.php");
$action = isset($_GET['action']) ?$_GET['action'] : "";

switch ($action) {
	case 'archive':
		archive();
		break;
	case 'viewArticle':
		viewArticle();
		break;
	default:
		homepage();
}

		function archive() {
			$results = array();
			$data = Article::getList();
			$results['articles'] = $data['results'];
			$results['totalRows'] = $data['totalRows'];
			$results['pageTitle'] = "Article Archive | Widget News";
			require("templates/archive.php");
		}


		function viewArticle(){
			if(!isset($_GET["articleId"]) || !$_GET["articleId"]) {
				homepage();
				return;
			}

			$results = array();
		  	$results['article'] = Article::getById( (int)$_GET["articleId"] );
		  	$results['pageTitle'] = $results['article']->title;
		 	 require("templates/viewArticle.php" );	
		}

		function homepage() {
		  $results = array();
		  $data = Article::getList( HOMEPAGE_NUM_ARTICLES );
		  $results['articles'] = $data['results'];
		  $results['totalRows'] = $data['totalRows'];
		  $results['pageTitle'] = "Widget News";
		  require("templates/homepage.php" );
		}
	?>
