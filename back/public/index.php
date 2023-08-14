<?php

require_once "../vendor/autoload.php";

require "../app/Utils/Database.php";

use App\Controllers\CandidateController;
use App\Controllers\JobController;
use App\Utils\Database;
// var_dump(Database::getPDO());
// var_dump($_SERVER);

require_once __DIR__ . "./../app/Controllers/JobController.php";
// require_once

$requestUri = $_SERVER["REQUEST_URI"];

if ($requestUri === "/api/jobs") {
    $jobController = new JobController();
    $jobController->list();

    // var_dump($jobController);
    // header("Content-Type: application/json");
    // echo json_encode($jobs);
} else if ($requestUri === "/api/candidate") {
    $candidateController = new CandidateController();
}

?>