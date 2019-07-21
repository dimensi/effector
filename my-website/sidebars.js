/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Introduction: [
      'introduction/installation',
      'introduction/core-concepts',
      'introduction/prior-art',
    ],
    Recipes: [
      'recipes/recipes',
      'recipes/usage-with-typescript',
      {
        type: 'category',
        label: 'Migrating to Effector',
        items: ['recipes/migrating-to-effector/from-redux'],
      },
      {
        type: 'category',
        label: 'React',
        items: ['recipes/react/example', 'recipes/react/example-effects'],
      },
      {
        type: 'category',
        label: 'React Native',
        items: ['recipes/react-native/example'],
      },
    ],
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
  },
}
