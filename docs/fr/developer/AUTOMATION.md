# Automatisation dans les composants uPortal

## Formatage

Ce projet suit le [Style de code Google][], pour simplifier le processus
plus joli][] un script au format `npm run' est fourni qui s'adaptera automatiquement
pour respecter la majorité des conventions [Style de code Google][].

## Analyse statique

ESLint][][],[Remarklint][], et[Stylelint][] sont utilisés pour trouver automatiquement
les erreurs de syntaxe et les anti-modèles courants dans le code et fournissent une rétroaction sur la résolution des problèmes.
questions.

## Gestion des sous-projets

Chaque composant du projet est son propre sous-projet, pour gérer l'installation et la mise en service.
la libération de ces sous-projets[Lerna][][] est utilisée. [Lerna][] centralise
à travers les paquets, ce qui permet de mettre à jour tous les sous-projets à l'aide de
une seule commande.

[eslint]: https://eslint.org/

[style de code google] : https://google.github.io/styleguide/jsguide.html
[lerna] : https://lernajs.io/
[plus jolie] : https://prettier.io/
[remarklint] : https://github.com/remarkjs/remark-lint
[stylelint]: https://stylelint.io/
