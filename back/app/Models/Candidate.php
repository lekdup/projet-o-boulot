<?php 

namespace App\Models;

use App\Utils\Database;
use PDO;

class Candidate {
    private $id;
    private $gender;
    private $birthday;
    private $skills;
    private $firstname;
    private $lastname;
    private $phone;
    private $email;
    private $adress;
    private $postal_code;
    private $city;
    private $password;
    private $created_at;
    private $updated_at;

    public function findAll() {
        $pdo = Database::getPDO();
        $sql = "SELECT * FROM `candidate`";
        $pdoStatement = $pdo->query($sql);
        $candidates = $pdoStatement->fetchAll(PDO::FETCH_CLASS, self::class);

        return $candidates;
    }

    static public function find($id) {
        $pdo = Database::getPDO();
        $sql = "SELECT * FROM `candidate` WHERE `id` =" . $id;
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->bindValue(":id", $id, PDO::PARAM_INT);
        $pdoStatement->execute();
        $candidate = $pdoStatement->fetchObject(self::class);
        return $candidate;
    }

    public function insert() {
        $pdo = Database::getPDO();
        $sql = "INSERT INTO `candidate` (
                    `gender`, 
                    `birthday`, 
                    `skills`, 
                    `firstname`, 
                    `lastname`, 
                    `phone`, 
                    `email`, 
                    `adress`, 
                    `postal_code`, 
                    `city`, 
                    `password`, 
                    `created_at`, 
                    `updated_at`
                )
                VALUES (
                    :gender, 
                    :birthday, 
                    :skills, 
                    :firstname, 
                    :lastname, 
                    :phone, 
                    :email, 
                    :adress, 
                    :postal_code, 
                    :city, 
                    :password, 
                    :created_at, 
                    :updated_at
                )";
        $pdoStatement = $pdo->prepare($sql);
        $pdoStatement->bindValue(":gender",     $this->gender,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":birthday",   $this->birthday,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":skills",     $this->skills,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":firstname",  $this->firstname,   PDO::PARAM_STR);
        $pdoStatement->bindValue(":lastname",   $this->lastname,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":phone",      $this->phone,       PDO::PARAM_STR);
        $pdoStatement->bindValue(":email",      $this->email,       PDO::PARAM_STR);
        $pdoStatement->bindValue(":adress",     $this->adress,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":postal_code", $this->postal_code, PDO::PARAM_STR);
        $pdoStatement->bindValue(":city",       $this->city,        PDO::PARAM_STR);
        $pdoStatement->bindValue(":password",   $this->password,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":created_at", $this->created_at,  PDO::PARAM_STR);
        $pdoStatement->bindValue(":updated_at", $this->updated_at,  PDO::PARAM_STR);

        $pdoStatement->execute();

        if($pdoStatement->rowCount() > 0) {
            $this->id = $pdo->lastInsertId();
            return true;
        }
        return false;
    }

    public function update() {
        $pdo = Database::getPDO();
        $sql = "UPDATE `candidate` SET
                `gender` = :gender, 
                `birthday` = :birthday, 
                `skills` = :skills, 
                `firstname` = :firstname, 
                `lastname` = :lastname, 
                `phone` = :phone, 
                `email` = :email, 
                `adress` = :adress, 
                `postal_code` = :postal_code, 
                `city` = :city, 
                `password` = :password, 
                `created_at` = :created_at, 
                `updated_at` = :updated_at
        ";
        $pdoStatement = $pdo->prepare($sql);

        $pdoStatement->bindValue(":gender",     $this->gender,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":birthday",   $this->birthday,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":skills",     $this->skills,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":firstname",  $this->firstname,   PDO::PARAM_STR);
        $pdoStatement->bindValue(":lastname",   $this->lastname,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":phone",      $this->phone,       PDO::PARAM_STR);
        $pdoStatement->bindValue(":email",      $this->email,       PDO::PARAM_STR);
        $pdoStatement->bindValue(":adress",     $this->adress,      PDO::PARAM_STR);
        $pdoStatement->bindValue(":postal_code", $this->postal_code, PDO::PARAM_STR);
        $pdoStatement->bindValue(":city",       $this->city,        PDO::PARAM_STR);
        $pdoStatement->bindValue(":password",   $this->password,    PDO::PARAM_STR);
        $pdoStatement->bindValue(":created_at", $this->created_at,  PDO::PARAM_STR);
        $pdoStatement->bindValue(":updated_at", $this->updated_at,  PDO::PARAM_STR);

        $pdoStatement->execute();

        if($pdoStatement->rowCount() === 1) {
            return true;
        }
        return false;
    }

    public function delete() {
        $pdo = Database::getPDO();
        $pdoStatement = $pdo->prepare("DELETE FROM `product` WHERE `id` = :id");
        $pdoStatement->execute([
            "id" => $this->id
        ]);
        return $pdoStatement->rowCount() === 1;
    }

    public function save() {
        if($this->id) {
            return $this->update();
        } else {
            return $this->insert();
        }
    }


    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of gender
     */ 
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set the value of gender
     *
     * @return  self
     */ 
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get the value of birthday
     */ 
    public function getBirthday()
    {
        return $this->birthday;
    }

    /**
     * Set the value of birthday
     *
     * @return  self
     */ 
    public function setBirthday($birthday)
    {
        $this->birthday = $birthday;

        return $this;
    }

    /**
     * Get the value of skills
     */ 
    public function getSkills()
    {
        return $this->skills;
    }

    /**
     * Set the value of skills
     *
     * @return  self
     */ 
    public function setSkills($skills)
    {
        $this->skills = $skills;

        return $this;
    }

    /**
     * Get the value of firstname
     */ 
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set the value of firstname
     *
     * @return  self
     */ 
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get the value of lastname
     */ 
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set the value of lastname
     *
     * @return  self
     */ 
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get the value of phone
     */ 
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set the value of phone
     *
     * @return  self
     */ 
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of adress
     */ 
    public function getAdress()
    {
        return $this->adress;
    }

    /**
     * Set the value of adress
     *
     * @return  self
     */ 
    public function setAdress($adress)
    {
        $this->adress = $adress;

        return $this;
    }

    /**
     * Get the value of postal_code
     */ 
    public function getPostal_code()
    {
        return $this->postal_code;
    }

    /**
     * Set the value of postal_code
     *
     * @return  self
     */ 
    public function setPostal_code($postal_code)
    {
        $this->postal_code = $postal_code;

        return $this;
    }

    /**
     * Get the value of city
     */ 
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set the value of city
     *
     * @return  self
     */ 
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

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
}