const skills = [
  {
    title: 'C',
    category: ['Languages'],
  },
  {
    title: 'DSA',
    category: ['Data Engineering'],
  },
  {
    title: 'Amazon Web Services',
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'SQL',
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    category: ['Web Development', 'Languages', 'Machine Learning'],
  },
  {
    title: 'React JS',
    category: ['Web Development', 'Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Color scheme for categories
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#40494e',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
