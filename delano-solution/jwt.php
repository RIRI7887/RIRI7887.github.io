<?php
// jwt.php
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;

$config = include('config.php');

function generateJWT($payload) {
    global $config;
    return JWT::encode($payload, $config['jwt']['key']);
}

function validateJWT($jwt) {
    global $config;
    try {
        return JWT::decode($jwt, $config['jwt']['key'], array('HS256'));
    } catch (Exception $e) {
        return null;
    }
}
