import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
           {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };

export const QUESTION_SPORT: Question = {
  label: 'Zidane joue du...',
  answers: [
    {
      value: 'football',
      isCorrect: true,
    },
    {
      value: 'rugby',
      isCorrect: false,
    },
    {
      value: 'foot',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Stars', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'JO',
        questions: [QUESTION_SPORT],
    }
];
