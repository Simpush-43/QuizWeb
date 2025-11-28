export type Question={
  id:number;
  question:string;
  options:string[];
  answer:string;
}

export const questions: Question[]=[
  {
    id: 1,
    question: 'What color is the sky?',
    options: ['Green', 'Blue', 'Red', 'Black'],
    answer: 'Blue',
  },
  {
    id: 2,
    question: 'How many legs does a cat have?',
    options: ['2', '3', '4', '6'],
    answer: '4',
  },
  {
    id: 3,
    question: 'Which is the king of the jungle?',
    options: ['Dog', 'Lion', 'Tiger', 'Monkey'],
    answer: 'Lion',
  },
];
