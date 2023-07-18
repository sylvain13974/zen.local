<?php
// Emplacement du dépôt Git
$repoPath = '/var/www/zen.local';

// Branch à mettre à jour
$branch = 'main';


//Mettre à jour le dépôt
exec("cd $repoPath && git checkout $branch && git pull");

// Afficher un message de confirmation
echo "Mise à jour effectuée avec succès !";
?>
