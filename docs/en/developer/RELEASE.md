# Releasing uPortal-web-components

1. `git pull upstream master`
   - synchronizes with latest official version
2. Update the "unreleased" section of `CHANGELOG.md` with an overview of changes
3. `npm run build`
   - build needs to happen before `publish` because it takes longer than the 30s otp timeout
4. `lerna version --conventional-commits --force-publish`
   - determine new release number based off commit messages
   - applies version number to all the packages
5. `NPM_CONFIG_OTP={npm otp token} lerna publish from-git`
   - :notebook: This module requires [two factor authentication][] to cut a release

[two factor authentication]: https://docs.npmjs.com/getting-started/using-two-factor-authentication
