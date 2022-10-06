import { nanoid } from 'nanoid';

const cards = [
    {
        id: nanoid(),
        question: 'What property flips the axes in flexbox...1',
        answer: 'test1',
        tags: ['random1', 'random2', 'random3'],
        bookmarked: false
    },
    {
        id: nanoid(),
        question: 'What property flips the axes in flexbox...2',
        answer: 'test2',
        tags: ['random1', 'random2', 'random3'],
        bookmarked: true
    },
    {
        id: nanoid(),
        question: 'What property flips the axes in flexbox...3',
        answer: 'test3',
        tags: ['random1', 'random2', 'random3'],
        bookmarked: true
    },
    {
        id: nanoid(),
        question: 'What property flips the axes in flexbox...4',
        answer: 'test4',
        tags: ['random1', 'random2', 'random3'],
        bookmarked: false
    },
    {
        id: nanoid(),
        question: 'What property flips the axes in flexbox...5',
        answer: 'test5',
        tags: ['random1', 'random2', 'random3'],
        bookmarked: true
    }
]

export default cards;