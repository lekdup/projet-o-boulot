<?php 

namespace App\Models;

use App\Utils\Database;
use PDO;

class Job {
    private $code_job;
    private $entitle;
    private $description;
    private $date_from;
    private $date_till;
    private $duration;
    private $place;
    private $is_valid;
    private $created_at;
    private $updated_at;
    private $code_company;

    /**
     * Get the value of id
     */ 
    public function getCode_job()
    {
        return $this->code_job;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setCode_job($id)
    {
        $this->code_job = $id;

        return $this;
    }

    /**
     * Get the value of entitle
     */ 
    public function getEntitle()
    {
        return $this->entitle;
    }

    /**
     * Set the value of entitle
     *
     * @return  self
     */ 
    public function setEntitle($entitle)
    {
        $this->entitle = $entitle;

        return $this;
    }

    /**
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of date_from
     */ 
    public function getDate_from()
    {
        return $this->date_from;
    }

    /**
     * Set the value of date_from
     *
     * @return  self
     */ 
    public function setDate_from($date_from)
    {
        $this->date_from = $date_from;

        return $this;
    }

    /**
     * Get the value of date_till
     */ 
    public function getDate_till()
    {
        return $this->date_till;
    }

    /**
     * Set the value of date_till
     *
     * @return  self
     */ 
    public function setDate_till($date_till)
    {
        $this->date_till = $date_till;

        return $this;
    }

    /**
     * Get the value of duration
     */ 
    public function getDuration()
    {
        return $this->duration;
    }

    /**
     * Set the value of duration
     *
     * @return  self
     */ 
    public function setDuration($duration)
    {
        $this->duration = $duration;

        return $this;
    }

    /**
     * Get the value of place
     */ 
    public function getPlace()
    {
        return $this->place;
    }

    /**
     * Set the value of place
     *
     * @return  self
     */ 
    public function setPlace($place)
    {
        $this->place = $place;

        return $this;
    }

    /**
     * Get the value of is_valid
     */ 
    public function getIs_valid()
    {
        return $this->is_valid;
    }

    /**
     * Set the value of is_valid
     *
     * @return  self
     */ 
    public function setIs_valid($is_valid)
    {
        $this->is_valid = $is_valid;

        return $this;
    }

    /**
     * Get the value of created_at
     */ 
    public function getCreated_at()
    {
        return $this->created_at;
    }

    /**
     * Set the value of created_at
     *
     * @return  self
     */ 
    public function setCreated_at($created_at)
    {
        $this->created_at = $created_at;

        return $this;
    }

    /**
     * Get the value of updated_at
     */ 
    public function getUpdated_at()
    {
        return $this->updated_at;
    }

    /**
     * Set the value of updated_at
     *
     * @return  self
     */ 
    public function setUpdated_at($updated_at)
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    /**
     * Get the value of code_company
     */ 
    public function getCode_company()
    {
        return $this->code_company;
    }

    /**
     * Set the value of code_company
     *
     * @return  self
     */ 
    public function setCode_company($code_company)
    {
        $this->code_company = $code_company;

        return $this;
    }

    public static function findall() {
        $pdo = Database::getPDO();
        $sql = "SELECT * FROM `job`";
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->execute();
        $jobs = $pdoStatement->fetchAll(PDO::FETCH_CLASS, self::class);

        return $jobs;
    }
}