export const GptModels = [
  {
    model: 'text-davinci-003',
    description:
      'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.',
    maxRequest: '4,000 tokens',
    trainingData: 'Up to Jun 2021',
  },
  {
    model: 'text-curie-001',
    description: 'Very capable, but faster and lower cost than Davinci.',
    maxRequest: '2,048 tokens',
    trainingData: 'Up to Oct 2019',
  },
  {
    model: 'text-babbage-001',
    description: 'Capable of straightforward tasks, very fast, and lower cost.',
    maxRequest: '2,048 tokens',
    trainingData: 'Up to Oct 2019',
  },
  {
    model: 'text-ada-001',
    description:
      'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
    maxRequest: '2,048 tokens',
    trainingData: 'Up to Oct 2019',
  },
];
