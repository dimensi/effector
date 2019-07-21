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
    Other: ['troubleshooting', 'glossary'],
    FAQ: ['faq'],
  },
  api: {
    effector: [
      'api/effector/effector',
      'api/effector/createEvent',
      'api/effector/event',
      'api/effector/createEffect',
      'api/effector/effect',
      'api/effector/createStore',
      'api/effector/store',
      'api/effector/sample',
      'api/effector/createDomain',
      'api/effector/domain',
      'api/effector/combine',
      'api/effector/createStoreObject',
      'api/effector/createApi',
      'api/effector/restore',
      'api/effector/forward',
      'api/effector/fromObservable',
      'api/effector/merge',
      'api/effector/split',
    ],
    'effector-react': [
      'api/effector-react/effector-react',
      'api/effector-react/createStoreConsumer',
      'api/effector-react/createComponent',
      'api/effector-react/createGate',
      'api/effector-react/useGate',
      'api/effector-react/useStore',
      'api/effector-react/useStoreMap',
      'api/effector-react/gate',
    ],
    'effector-vue': [
      'api/effector-vue/effector-vue',
      'api/effector-vue/vue-effector',
      'api/effector-vue/component-options',
      'api/effector-vue/vue',
    ],
  },
}
