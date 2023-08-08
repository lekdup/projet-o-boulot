# Dictionnaire de données

## Utilisateur (`USER`)

| Champ | Type | Spécificités | Description |
| ----- | ---- | ------------ | ------------|
| id    | INT  | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre auteur |
| firstname | VARCHAR(260) | NOT NULL | Prénom de l'utilisateur |
| lastname | VARCHAR(260) | NOT NULL | Nom de l'utilisateur |
| phone | VARCHAR(260) | NOT NULL | Numéro de téléphone |
| adress | VARCHAR(260) | NOT NULL | Addresse |
| postal_code | VARCHAR(260) | NOT NULL | Code Postale |
| city | VARCHAR(260) | NOT NULL | Ville |
| email | VARCHAR(260) | NOT NULL, UNIQUE | E-mail |
| password | VARCHAR(1000) | NOT NULL | Mot de passe |
| created_at | DATETIME | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création |
| updated_at | DATETIME | NULL | La date de modification |

## Entreprise (`COMPANY`)
| Champ | Type | Spécificités | Description |
| ----- | ---- | ------------ | ------------|
| id    | INT  | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre auteur |
| company_name | VARCHAR(260) | NULL | Nom de l'entreprise |
| siret | VARCHAR(260) | NULL | Numéro de Siret |

## Candidat (`CANDIDATE`)
| Champ | Type | Spécificités | Description |
| ----- | ---- | ------------ | ------------|
| id    | INT  | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre auteur |
| gender | VARCHAR(100) | NOT NULL | Genre |
| birthday | DATETIME | NOT NULL | Date de Naissance |
| skills | VARCHAR(260) | NULL | 2-3 mots pour vous décrire |

## Emploi (`JOB`)
| Champ | Type | Spécificités | Description |
| ----- | ---- | ------------ | ------------|
| id    | INT  | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | L'identifiant de notre auteur |
| entitle | VARCHAR(260) | NOT NULL | Titre du boulot |
| description | TEXT(65000) | NOT NULL | Description des taches |
| date_from | DATETIME | NOT NULL | Date du début |
| date_till | DATETIME | NOT NULL | Date de fin |
| duration | VARCHAR(260) | NULL | La durée du boulot |
| place | VARCHAR(260) | NOT NULL | Lieux |
| is_valid | TINYINT(1) | NOT NULL | Si l'offre est toujours disponible ou pas |
| created_at | DATETIME | NOT NULL, DEFAULT CURRENT_TIMESTAMP | La date de création |
| updated_at | DATETIME | NULL | La date de modification |
