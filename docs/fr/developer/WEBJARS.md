# WebJar

## Qu'est-ce qu'un WebJar ?

Les WebJars sont des bibliothèques Web côté client regroupées dans des fichiers JAR.

- Gérer explicitement et facilement les dépendances côté client dans les applications Web basées sur la JVM
- Utilisez des outils de compilation basés sur JVM (par exemple Maven, Gradle, sbt, ...) pour télécharger vos dépendances côté client.
- Sachez quelles dépendances côté client vous utilisez
- Les dépendances transitoires sont automatiquement résolues et éventuellement chargées via RequireJS
- Déployé sur Maven Central

## Utiliser un WebJar avec Maven

1. Visitez <https://www.webjars.org>
2. Entrez le nom du paquet dans la recherche
3. Sélectionnez " Maven ".
4. Copier l'extrait de l'exemple

[ Utiliser maven](.../assets/webjars-use-maven.png)

## Utiliser un WebJar avec Gradle

1. Visitez <https://www.webjars.org>
2. Entrez le nom du paquet dans la recherche
3. Sélectionnez " Gradle ".
4. Copier l'extrait de l'exemple

!utiliser Gradle](.../assets/webjars-use-gradle.png)

## Créer un WebJar à partir de NPM

1. Visitez <https://www.webjars.org>
2. Cliquez ici pour ajouter un WebJar ![WebJars home](.../assets/webjars-home.png)
3. Sélectionnez un package NPM à ajouter ![Selector](.../assets/webjars-add.png)
   - Sélectionner le type `NPM`.
   - Choisissez le nom du forfait
   - Choisissez la version à ajouter
4. Cliquez sur `Déployer!`

## Créer un WebJar à partir d'un répertoire local

1. Construire le projet (généralement `npm run build`)
2. Construisez un bocal du projet `zip project.jar`.
3. Obtenir le chemin absolu vers le dossier courant `pwd``.
4. Aller au projet maven
5. `mvn install:install-file \${chemin de l'étape 3}/project.jar`.

Traduit avec www.DeepL.com/Translator
