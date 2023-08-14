<?php 
namespace App\Controllers;
require_once __DIR__ . "./../Models/Job.php";

use App\Models\Job;

class JobController {
    public function list() {
        $jobs = Job::findAll();
        $formattedJobs = [];

        foreach ($jobs as $job) {
            $formattedJobs[] = [
                'code_job' => $job->getCode_job(),
                'entitle' => $job->getEntitle(),
                'description' => $job->getDescription(),
                'date_from' => $job->getDate_from(),
                'date_till' => $job->getDate_till(),
                'duration' => $job->getDuration(),
                'place' => $job->getPlace(),
                'is_valid' => $job->getIs_valid(),
                'created_at' => $job->getCreated_at(),
                'updated_at' => $job->getUpdated_at(),
                'code_company' => $job->getCode_company()
            ];
        }
        // var_dump($jobs);
        $response = ["data" => $formattedJobs];
        echo json_encode($response);
        // var_dump($response, JSON_FORCE_OBJECT);
        // return $jobs;
        // header("Content-Type: application/json");
        // echo json_encode($jobs);
        // var_dump($jobs);
    }
}