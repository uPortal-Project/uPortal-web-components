# Releasing uPortal-web-components

1. `git pull upstream master`
   - se synchronise avec la dernière version officielle
2. Mettre à jour la section "unreleased" de _CHANGELOG.md_ avec une vue d'ensemble des modifications.
   - chaque type de livraison va dans une sous-section avec le type comme en-tête
   - après l'écriture du journal des modifications `git add . && git commit -m "docs : update changelog"` `.
   - `git push upstream master`
3. `npm run build`
   - le build doit avoir lieu avant `publish' parce que cela prend plus de temps que le délai d'attente de 30s.
4. `lerna version {patch or minor or major}`
   - déterminer le nouveau numéro de version sur la base des messages de livraison non validés
     - `patch` pour une version ne contenant aucun commit `feat` ou `BREAKING CHANGE`.
     - `minor` pour une version contenant `feat` mais pas de `BREAKING CHANGE` commits
     - `major` pour une version contenant `BREAKING CHANGE` commits
5. `NPM_CONFIG_OTP={npm otp token} lerna publish from-git`
   - Pousse la modification à npm
   - :notebook: Ce module nécessite une[authentification à deux facteurs][] pour couper une modification (release)
6. `git push upstream master`
   - pousse le commit avec la modification
7. `git push upstream --tags`
   - pousse le tag de modification
8. Ajouter un nouvel en-tête de version à _CHANGELOG.md_
   - mettez également à jour les liens en bas de la page
9. `npm run publish-webjar`
   - copie les paquets npm dans webjars

[authentification à deux facteurs]: https://docs.npmjs.com/getting-started/using-two-factor-authentication
