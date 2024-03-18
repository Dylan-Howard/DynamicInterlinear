/**
 * Types used for Text Rendering
 */

type ChapterCollection = {
  [key: string]: Chapter | undefined;
};

export interface Text {
  [key: string]: ChapterCollection | string;
  title: string;
  label: string;
  chapters: ChapterCollection;
}

type MorphologicalForm = {
  grammarId: number;
  name: string;
  abreviation: string;
  lessonId: number;
};

export type Declension = {
  morphologyId: number;
  posId: number;
  caseId?: number;
  tenseId?: number;
  voiceId?: number;
  moodId?: number;
  personId?: number;
  numberId?: number;
  genderId?: number;
  patternId?: number;
  degreeId?: number;
  wordId: number;
};

export type DeclensionDetails = {
  pos: MorphologicalForm,
  tense: MorphologicalForm | undefined | null,
  voice: MorphologicalForm | undefined | null,
  mood: MorphologicalForm | undefined | null,
  person: MorphologicalForm | undefined | null,
  number: MorphologicalForm | undefined | null,
  gender: MorphologicalForm | undefined | null,
  case: MorphologicalForm | undefined | null,
  degree: MorphologicalForm | undefined | null,
  pattern: MorphologicalForm | undefined | null,
  root: string,
  gloss: string,
};

type FormKey = keyof Form;

// type Form = {
//   formId: FormKey;
//   name: string;
//   abreviation: string;
//   lessonId: LessonKey;
// };

type LessonKey = keyof Lesson;

type Lesson = {
  lessonId: LessonKey,
  grammerId: FormKey,
  title: string,
  tag: string,
};

export type Form = {
  grammarId: number;
  name: string;
  abreviation: string;
  lessonId: number;
};

export type Vocab = {
  wordId: number;
  content: string;
  gloss: string;
  occurances: number;
  gkRef: string;
};

export type Unit = {
  unitId: number;
  content: string;
  morphologyId: number;
  en?: string;
  verseId: number;
};

export type Verse = {
  verseId: number;
  verseNumber: number;
  chapterId: number;
  unitIndicies: {
    start: number;
    end: number;
  };
};

export type Chapter = {
  chapterId: number;
  chapterNumber: number;
  title: string;
  bookId: number;
  verseIndicies: {
    start: number;
    end: number;
  };
};

export type Book = {
  bookId: number;
  bookNumber: number;
  title: string;
  chapterIndicies: {
    start: number;
    end: number;
  };
};

/* Should be a unique combination of unitId and langauge */
export type Translation = {
  unitId: number;
  content: string;
  language: string;
};