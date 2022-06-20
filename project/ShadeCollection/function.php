<?php

function connexionPDO()
{
    $login = 'eude';
    $mdp = 'eude';
    $bd = 'shade';
    $serveur = 'localhost:3308';

    try {
        $conn = new PDO("mysql:host=$serveur;dbname=$bd", $login, $mdp, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        print "Erreur de connexion PDO " . $e->getMessage();
        die();
    }
}

function getAllBlend() {

    try {
		$monPdo = connexionPDO();
		$req = 'SELECT id, color1, color2, color3, color4 FROM blend';
		$res = $monPdo->query($req);
		$lesLignes = $res->fetchAll();
		return $lesLignes;
	} catch (PDOException $e) {
		print "Erreur !: " . $e->getMessage();
		die();
	}
}

function getAllTag() {

    try {
		$monPdo = connexionPDO();
		$req = 'SELECT id, libelle FROM tag';
		$res = $monPdo->query($req);
		$lesLignes = $res->fetchAll();
		return $lesLignes;
	} catch (PDOException $e) {
		print "Erreur !: " . $e->getMessage();
		die();
	}
}

?>