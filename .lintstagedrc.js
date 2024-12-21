module.exports = {
  '*.{js,ts}': ['eslint eslint --fix --max-warnings=0 --no-error-on-unmatched-pattern'],
  '**/*': ['prettier --write --ignore-unknown'],
};
