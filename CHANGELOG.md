## [1.3.6](https://github.com/mirta-com/github-action-slack-notify-build/compare/v1.3.5...v1.3.6) (2020-12-01)


### Bug Fixes

* **event:** set default on input event_show ([19018c8](https://github.com/mirta-com/github-action-slack-notify-build/commit/19018c83a73fa321617e8316d335cd1cf5785e7e))

## [1.3.5](https://github.com/mirta-com/github-action-slack-notify-build/compare/v1.3.4...v1.3.5) (2020-12-01)


### Bug Fixes

* **event:** set default on input event_show ([0c2d079](https://github.com/mirta-com/github-action-slack-notify-build/commit/0c2d079899583650205284a61c428a91dbf23a59))

## [1.3.4](https://github.com/mirta-com/github-action-slack-notify-build/compare/v1.3.3...v1.3.4) (2020-12-01)


### Bug Fixes

* **event:** boolean input for showing event ([2823313](https://github.com/mirta-com/github-action-slack-notify-build/commit/28233135b0a762388780cd1dacf08153710477df))

## [1.3.3](https://github.com/mirta-com/github-action-slack-notify-build/compare/v1.3.2...v1.3.3) (2020-11-30)


### Bug Fixes

* **cicd:** push on v1 only in deploys ([6348097](https://github.com/mirta-com/github-action-slack-notify-build/commit/634809762030b25a549fc976f006a70ce6ace4a6))

## [1.3.2](https://github.com/mirta-com/github-action-slack-notify-build/compare/v1.3.1...v1.3.2) (2020-11-30)


### Bug Fixes

* **event:** handle workflow events ([33f15d6](https://github.com/mirta-com/github-action-slack-notify-build/commit/33f15d6b2748f74d7ec06495203dbbf95ceadacc))

## [1.3.1](https://github.com/daleMirta/github-action-slack-notify-build/compare/v1.3.0...v1.3.1) (2020-11-30)


### Bug Fixes

* **message:** remove event field ([39c1fd3](https://github.com/daleMirta/github-action-slack-notify-build/commit/39c1fd3b0a017eb6bb667440e8ff1e929d08ad7a))

# [1.3.0](https://github.com/daleMirta/github-action-slack-notify-build/compare/v1.2.0...v1.3.0) (2020-11-27)


### Features

* **message:** add custom message to action ([0225736](https://github.com/daleMirta/github-action-slack-notify-build/commit/0225736f198788968effe1056a2b872b7cff833f))

# [1.2.0](https://github.com/voxmedia/github-action-slack-notify-build/compare/v1.1.3...v1.2.0) (2020-11-20)


### Features

* Add semantic release ([6d56e60](https://github.com/voxmedia/github-action-slack-notify-build/commit/6d56e60b7083b18466446dcf4b45f1b566235400))

# v1.1.3 - 11/10/2020

- Bump version of @actions/core

# v1.1.2 - 6/22/2020

- Describes which OAuth scopes are required in the docs.
- Prints out the entire Error object instead of just the message, for better debugging purposes (e.g. additional OAuth scopes needed).
- Adds note to docs about rate limiting concerns

# v1.1.1 - 2/3/2020

- Fixes bug where owner/repo can not be determined with certain events (like scheduled jobs)

# v1.1.0 - 11/19/2019

- Add footer containing repo and timestamp

# v1.0.0 - 10/24/2019

- Initial version
