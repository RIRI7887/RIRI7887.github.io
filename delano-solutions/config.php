<?php
// config.php
return [
    'db' => [
        'host' => 'localhost',
        'dbname' => 'delano',
        'user' => 'localhost',
        'pass' => ''
    ],
    'jwt' => [
        'key' => 'your_secret_key',
        'iss' => 'http://localhost',
        'aud' => 'http://localhost',
        'iat' => 1356999524,
        'nbf' => 1357000000
    ],
    'email' => [
        'to' => 'contact@delano-solution.com',
        'from' => 'no-reply@yourdomain.com'
    ]
];
