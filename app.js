const DB_NAME = "sunny-math-time-db";
const DB_VERSION = 1;
const STARS_PER_CORRECT = 2;
const STARS_PER_STREAK_BONUS = 3;
const ROUND_TARGET = 10;
const ROUND_COMPLETION_BONUS = 20;
const APP_NAME = "Jennings Learning";
const MATH_SUBJECT_ID = "math";
const SPELLING_SUBJECT_ID = "spelling";
const GRAMMAR_SUBJECT_ID = "grammar";
const BIBLE_SUBJECT_ID = "bible";
const SPELLING_SKILL_ID = "spelling-core";
const SPELLING_RECENT_LIMIT = 12;
const GRAMMAR_RECENT_LIMIT = 10;
const BIBLE_RECENT_LIMIT = 10;
const GRADE_SPELLING_FILES = {
  "5": "data/grade_5_spelling_units_complete.json",
};
const BADGES = [
  { id: "rising-star", title: "Rising Star", requirement: 50, description: "Earn 50 stars" },
  { id: "steady-scholar", title: "Steady Scholar", requirement: 150, description: "Earn 150 stars" },
  { id: "skill-builder", title: "Skill Builder", requirement: 400, description: "Earn 400 stars" },
  { id: "learning-mountain", title: "Learning Mountain", requirement: 1000, description: "Earn 1,000 stars" },
  { id: "lesson-navigator", title: "Lesson Navigator", requirement: 2500, description: "Earn 2,500 stars" },
  { id: "logic-legend", title: "Logic Legend", requirement: 5000, description: "Earn 5,000 stars" },
  { id: "master-learner", title: "Master Learner", requirement: 10000, description: "Earn 10,000 stars" },
];
const SUBJECTS = [
  {
    id: MATH_SUBJECT_ID,
    title: "Math",
    description: "Jump into math practice with profiles, rewards, rounds, and spoken questions.",
    icon: "fa-calculator",
    status: "Ready Now",
    available: true,
    highlights: ["5 skills live", "Profiles and rewards ready"],
  },
  {
    id: SPELLING_SUBJECT_ID,
    title: "Spelling",
    description: "Practice grade-based spelling lists with spoken words, hints, and guided review.",
    icon: "fa-spell-check",
    status: "Ready Now",
    available: true,
    highlights: ["Grade-based lists live", "Hints and clues included"],
  },
  {
    id: GRAMMAR_SUBJECT_ID,
    title: "Grammar",
    description: "Practice capitals, punctuation, parts of speech, and sentence repair with guided review.",
    icon: "fa-pen-nib",
    status: "Ready Now",
    available: true,
    highlights: ["Traditional grammar drills live", "Rule hints and sentence repair"],
  },
  {
    id: BIBLE_SUBJECT_ID,
    title: "Bible",
    description: "Practice doctrine words, Bible facts, and verse fill-ins with guided review.",
    icon: "fa-cross",
    status: "Ready Now",
    available: true,
    highlights: ["Doctrine and verse review live", "Multiple-choice practice ready"],
  },
];
const SKILLS = [
  { id: "addition", title: "Addition", description: "Add numbers together." },
  { id: "subtraction", title: "Subtraction", description: "Take numbers away." },
  { id: "multiplication", title: "Multiplication", description: "Practice multiplying numbers." },
  { id: "division", title: "Division", description: "Practice division with whole-number answers." },
  { id: "times-tables", title: "Times Tables", description: "Build multiplication fact fluency." },
];
const GRAMMAR_SKILLS = [
  { id: "capitalization", title: "Capital Letters", description: "Choose sentences with correct capitalization." },
  { id: "punctuation", title: "End Punctuation", description: "Pick the sentence with the correct ending mark." },
  { id: "nouns", title: "Nouns", description: "Identify people, places, animals, and things." },
  { id: "verbs", title: "Verbs", description: "Find the action word in each sentence." },
  { id: "sentence-fix", title: "Sentence Fix-It", description: "Repair a sentence by choosing the best version." },
];
const BIBLE_SKILLS = [
  { id: "doctrine", title: "Doctrine Words", description: "Learn clear biblical definitions taught in a Reformed way." },
  { id: "bible-facts", title: "Bible Facts", description: "Practice books, numbers, and big-picture Bible facts." },
  { id: "verse-fill", title: "Verse Fill-Ins", description: "Choose the missing word from a Bible verse." },
];
const SPELLING_WORDS = {
  easy: [
    { word: "apple", clue: "A crunchy fruit that can be red or green.", category: "Food" },
    { word: "basket", clue: "You can carry eggs or fruit in this woven container.", category: "Home" },
    { word: "cabin", clue: "A small house often found in the woods.", category: "Places" },
    { word: "candle", clue: "A wax stick with a wick that gives light.", category: "Home" },
    { word: "dolphin", clue: "A smart sea animal that jumps from the water.", category: "Animals" },
    { word: "garden", clue: "A place where flowers and vegetables can grow.", category: "Nature" },
    { word: "jacket", clue: "A piece of clothing worn when the weather is cool.", category: "Clothing" },
    { word: "kitten", clue: "A baby cat.", category: "Animals" },
    { word: "lantern", clue: "A light you might carry outside at night.", category: "Objects" },
    { word: "market", clue: "A place where people buy food and supplies.", category: "Places" },
    { word: "monkey", clue: "An animal known for climbing and swinging.", category: "Animals" },
    { word: "pencil", clue: "A classroom tool used for writing and drawing.", category: "School" },
    { word: "picnic", clue: "A meal eaten outdoors on a blanket or table.", category: "Life" },
    { word: "pillow", clue: "You rest your head on this at night.", category: "Home" },
    { word: "planet", clue: "Earth is one of these in space.", category: "Science" },
    { word: "pumpkin", clue: "A round orange squash used in fall.", category: "Food" },
    { word: "rabbit", clue: "A small animal with long ears that likes to hop.", category: "Animals" },
    { word: "rainbow", clue: "A colorful arc that can appear after rain.", category: "Nature" },
    { word: "rocket", clue: "A machine that blasts into outer space.", category: "Science" },
    { word: "school", clue: "A place where children learn every day.", category: "Places" },
    { word: "summer", clue: "The hottest season of the year.", category: "Time" },
    { word: "sunset", clue: "The colorful time when the sun goes down.", category: "Nature" },
    { word: "window", clue: "You can look through this part of a wall.", category: "Home" },
    { word: "winter", clue: "The coldest season, often with snow.", category: "Time" },
  ],
  medium: [
    { word: "astronaut", clue: "A person trained to travel into space.", category: "People" },
    { word: "bicycle", clue: "A two-wheeled ride powered by pedaling.", category: "Transportation" },
    { word: "chapter", clue: "One section of a book.", category: "Reading" },
    { word: "compass", clue: "A tool that shows north, south, east, and west.", category: "Tools" },
    { word: "curious", clue: "Eager to learn or know more.", category: "Describing" },
    { word: "diamond", clue: "A very hard gem that can sparkle.", category: "Science" },
    { word: "festival", clue: "A special event with music, food, or celebration.", category: "Life" },
    { word: "fraction", clue: "A math value showing part of a whole.", category: "Math" },
    { word: "harvest", clue: "The gathering of crops from a field.", category: "Nature" },
    { word: "journey", clue: "A trip from one place to another.", category: "Travel" },
    { word: "kingdom", clue: "A land or realm ruled by a king or queen.", category: "History" },
    { word: "language", clue: "A system of words people use to speak and write.", category: "Learning" },
    { word: "library", clue: "A quiet place filled with books.", category: "Places" },
    { word: "measure", clue: "To find the size, weight, or amount of something.", category: "Actions" },
    { word: "mineral", clue: "A natural solid found in the earth.", category: "Science" },
    { word: "notebook", clue: "A book of blank pages for writing notes.", category: "School" },
    { word: "orchard", clue: "A place where fruit trees are grown.", category: "Nature" },
    { word: "pattern", clue: "A design or sequence that repeats.", category: "Learning" },
    { word: "question", clue: "Something asked to get an answer.", category: "Language" },
    { word: "science", clue: "The study of the world through testing and observation.", category: "School" },
    { word: "shelter", clue: "A safe place that gives protection.", category: "Places" },
    { word: "tropical", clue: "Warm, humid, and often found near the equator.", category: "Nature" },
    { word: "volcano", clue: "A mountain that can erupt with lava.", category: "Science" },
    { word: "whisper", clue: "To speak very softly.", category: "Actions" },
  ],
  hard: [
    { word: "appreciate", clue: "To be thankful for something or someone.", category: "Actions" },
    { word: "architecture", clue: "The art and science of designing buildings.", category: "Arts" },
    { word: "astronomy", clue: "The study of stars, planets, and space.", category: "Science" },
    { word: "boundary", clue: "A line or limit that marks an edge.", category: "Geography" },
    { word: "characteristic", clue: "A feature or quality that helps identify something.", category: "Describing" },
    { word: "consequence", clue: "A result that follows an action or decision.", category: "Learning" },
    { word: "courageous", clue: "Brave in a difficult situation.", category: "Describing" },
    { word: "destination", clue: "The place someone is traveling to.", category: "Travel" },
    { word: "dictionary", clue: "A book that explains words and meanings.", category: "Language" },
    { word: "electricity", clue: "The energy that powers lights and many machines.", category: "Science" },
    { word: "environment", clue: "The world and conditions around living things.", category: "Science" },
    { word: "exaggerate", clue: "To make something seem bigger or more than it really is.", category: "Language" },
    { word: "experience", clue: "Something that happens to you or that you do yourself.", category: "Life" },
    { word: "extraordinary", clue: "Very unusual and impressive.", category: "Describing" },
    { word: "geography", clue: "The study of places, land, and people around the world.", category: "School" },
    { word: "independent", clue: "Able to do things on your own.", category: "Describing" },
    { word: "invisible", clue: "Unable to be seen.", category: "Describing" },
    { word: "laboratory", clue: "A room where science experiments are done.", category: "Science" },
    { word: "masterpiece", clue: "An artist's finest or most famous work.", category: "Arts" },
    { word: "microscope", clue: "A tool used to see very tiny things.", category: "Science" },
    { word: "necessary", clue: "Something needed or required.", category: "Describing" },
    { word: "opportunity", clue: "A good chance to do something important.", category: "Life" },
    { word: "orchestra", clue: "A large group of musicians playing together.", category: "Music" },
    { word: "persistent", clue: "Continuing even when something feels hard.", category: "Character" },
    { word: "pronunciation", clue: "The way a word is spoken aloud.", category: "Language" },
    { word: "restaurant", clue: "A place where meals are prepared and served.", category: "Places" },
    { word: "responsible", clue: "Trusted to do what is expected of you.", category: "Character" },
    { word: "satellite", clue: "An object that moves around a planet.", category: "Science" },
    { word: "scientist", clue: "A person who studies the world through experiments.", category: "People" },
    { word: "temperature", clue: "A measure of how hot or cold something is.", category: "Science" },
    { word: "throughout", clue: "In every part of something.", category: "Language" },
  ],
};
const GRAMMAR_PROMPTS = {
  capitalization: [
    { id: "cap-1", level: 1, sentence: "Sarah fed the rabbit.", properWords: ["Sarah"], rule: "Every sentence begins with a capital letter, and names of people begin with capitals.", strongHint: "Check the first word and the person's name." },
    { id: "cap-2", level: 1, sentence: "Max carried the red ball.", properWords: ["Max"], rule: "Names of people and pets begin with capital letters.", strongHint: "The pet's name needs a capital letter." },
    { id: "cap-3", level: 1, sentence: "We visited Grandma on Sunday.", properWords: ["Grandma", "Sunday"], rule: "Special family names and days of the week begin with capital letters.", strongHint: "Look at the family title and the day." },
    { id: "cap-4", level: 1, sentence: "Lily and I packed lunch.", properWords: ["Lily", "I"], rule: "The first word and the pronoun I must be capitalized.", strongHint: "One answer choice fixes both Lily and I." },
    { id: "cap-5", level: 2, sentence: "Dad drove to Dallas in June.", properWords: ["Dad", "Dallas", "June"], rule: "Family titles, places, and months begin with capital letters.", strongHint: "Notice the family title, city, and month." },
    { id: "cap-6", level: 2, sentence: "Our family read Genesis on Monday.", properWords: ["Genesis", "Monday"], rule: "Book titles and days of the week begin with capital letters.", strongHint: "The book name and the day should stand out." },
    { id: "cap-7", level: 2, sentence: "Maria painted a lighthouse in Florida.", properWords: ["Maria", "Florida"], rule: "Names of people and states begin with capitals.", strongHint: "Check the girl’s name and the state." },
    { id: "cap-8", level: 2, sentence: "We sailed across Lake Michigan.", properWords: ["Lake", "Michigan"], rule: "Names of lakes and other places use capital letters.", strongHint: "The place name has two capitalized words." },
    { id: "cap-9", level: 3, sentence: "Professor Adams taught us about Mars in October.", properWords: ["Professor", "Adams", "Mars", "October"], rule: "Titles, names, planets, and months begin with capital letters.", strongHint: "Look for the title, last name, planet, and month." },
    { id: "cap-10", level: 3, sentence: "Aunt Rachel mailed a postcard from New Mexico.", properWords: ["Aunt", "Rachel", "New", "Mexico"], rule: "Family titles, names, and states begin with capital letters.", strongHint: "The state name has two capitalized words." },
    { id: "cap-11", level: 3, sentence: "Jonathan studied the Mississippi River in Geography.", properWords: ["Jonathan", "Mississippi", "River", "Geography"], rule: "Names of rivers and school subjects used as titles begin with capitals.", strongHint: "The river name is capitalized as a title." },
    { id: "cap-12", level: 3, sentence: "The choir sang in Nashville on Christmas Eve.", properWords: ["Nashville", "Christmas", "Eve"], rule: "City names and special holidays begin with capital letters.", strongHint: "The city and holiday phrase need capitals." },
  ],
  punctuation: [
    { id: "punct-1", level: 1, stem: "The baby lamb is sleeping", correctMark: ".", rule: "A telling sentence ends with a period.", strongHint: "Read it in a calm voice. It is telling something." },
    { id: "punct-2", level: 1, stem: "Where did Noah build the ark", correctMark: "?", rule: "A question ends with a question mark.", strongHint: "Read it with a wondering voice." },
    { id: "punct-3", level: 1, stem: "What a bright rainbow", correctMark: "!", rule: "A sentence with strong feeling may end with an exclamation point.", strongHint: "This sentence shows excitement." },
    { id: "punct-4", level: 1, stem: "Please open your workbook", correctMark: ".", rule: "A gentle command often ends with a period.", strongHint: "This sentence gives a calm direction." },
    { id: "punct-5", level: 2, stem: "Can we visit the library after lunch", correctMark: "?", rule: "A question asks something and ends with a question mark.", strongHint: "The speaker is asking for an answer." },
    { id: "punct-6", level: 2, stem: "The bluebird built a nest by the gate", correctMark: ".", rule: "A statement ends with a period.", strongHint: "It is simply telling what happened." },
    { id: "punct-7", level: 2, stem: "Watch out for the icy step", correctMark: "!", rule: "Warnings often end with an exclamation point.", strongHint: "It sounds urgent." },
    { id: "punct-8", level: 2, stem: "How many chapters did you finish", correctMark: "?", rule: "A sentence that asks how, what, or why ends with a question mark.", strongHint: "The sentence begins with a question word." },
    { id: "punct-9", level: 3, stem: "Please hand me the atlas before class begins", correctMark: ".", rule: "A polite request can end with a period.", strongHint: "This one sounds calm and respectful." },
    { id: "punct-10", level: 3, stem: "Did you remember your science notebook", correctMark: "?", rule: "Questions always end with a question mark.", strongHint: "Someone is checking for an answer." },
    { id: "punct-11", level: 3, stem: "What an enormous waterfall", correctMark: "!", rule: "Strong feeling or surprise can end with an exclamation point.", strongHint: "The sentence sounds amazed." },
    { id: "punct-12", level: 3, stem: "The orchestra practiced before the concert", correctMark: ".", rule: "A plain statement ends with a period.", strongHint: "The sentence is only telling information." },
  ],
  nouns: [
    { id: "noun-1", level: 1, sentence: "The puppy chased the ball across the yard.", answer: "puppy", choices: ["puppy", "chased", "across", "the"], rule: "A noun names a person, place, animal, or thing.", strongHint: "Look for the word that names the animal." },
    { id: "noun-2", level: 1, sentence: "Mom set the plates on the table.", answer: "table", choices: ["set", "on", "table", "the"], rule: "A noun can name a thing.", strongHint: "Which word names a piece of furniture?" },
    { id: "noun-3", level: 1, sentence: "Jacob carried water to the garden.", answer: "Jacob", choices: ["carried", "water", "Jacob", "to"], rule: "A noun can name a person.", strongHint: "Which word is the person's name?" },
    { id: "noun-4", level: 1, sentence: "The kite floated above the trees.", answer: "kite", choices: ["floated", "above", "kite", "the"], rule: "A noun can name a thing you can see or hold.", strongHint: "Which word names the object in the sky?" },
    { id: "noun-5", level: 2, sentence: "The farmer loaded hay into the wagon.", answer: "wagon", choices: ["loaded", "into", "wagon", "the"], rule: "A noun names a person, place, animal, or thing.", strongHint: "Look for the thing being filled." },
    { id: "noun-6", level: 2, sentence: "Emily found a shell near the shore.", answer: "shell", choices: ["found", "near", "shell", "the"], rule: "A noun may name a thing.", strongHint: "Which word names the object Emily found?" },
    { id: "noun-7", level: 2, sentence: "Our class visited the museum on Friday.", answer: "museum", choices: ["visited", "museum", "on", "our"], rule: "A noun can name a place.", strongHint: "Which word names the place they visited?" },
    { id: "noun-8", level: 2, sentence: "The captain thanked the crew after supper.", answer: "captain", choices: ["thanked", "after", "captain", "the"], rule: "A noun may name a person.", strongHint: "Which word names the leader?" },
    { id: "noun-9", level: 3, sentence: "The scientist peered through the microscope carefully.", answer: "microscope", choices: ["peered", "through", "microscope", "carefully"], rule: "A noun can name a tool or object.", strongHint: "Which word names the scientific tool?" },
    { id: "noun-10", level: 3, sentence: "My brother sketched the lighthouse at sunset.", answer: "lighthouse", choices: ["sketched", "lighthouse", "at", "sunset"], rule: "A noun can name a place or thing.", strongHint: "Which word names the tall structure?" },
    { id: "noun-11", level: 3, sentence: "The pilgrims crossed the ocean on a ship.", answer: "ocean", choices: ["crossed", "ocean", "on", "ship"], rule: "A noun can name a place or thing.", strongHint: "Which word names the large body of water?" },
    { id: "noun-12", level: 3, sentence: "Rachel placed the lantern beside the doorway.", answer: "lantern", choices: ["placed", "beside", "lantern", "the"], rule: "A noun names a thing.", strongHint: "Which word names the object that gives light?" },
  ],
  verbs: [
    { id: "verb-1", level: 1, sentence: "The duck splashed in the pond.", answer: "splashed", choices: ["duck", "splashed", "pond", "the"], rule: "A verb tells what someone or something does.", strongHint: "Look for the action word." },
    { id: "verb-2", level: 1, sentence: "Hannah baked bread for supper.", answer: "baked", choices: ["Hannah", "bread", "for", "baked"], rule: "A verb shows action.", strongHint: "Which word tells what Hannah did?" },
    { id: "verb-3", level: 1, sentence: "The boys laughed at the joke.", answer: "laughed", choices: ["boys", "laughed", "joke", "the"], rule: "A verb tells the action in a sentence.", strongHint: "Find the word that shows the action." },
    { id: "verb-4", level: 1, sentence: "Our candles flickered in the wind.", answer: "flickered", choices: ["candles", "wind", "flickered", "our"], rule: "A verb tells what happened.", strongHint: "Which word tells what the candles did?" },
    { id: "verb-5", level: 2, sentence: "The choir practiced before church.", answer: "practiced", choices: ["choir", "before", "church", "practiced"], rule: "A verb tells what a person or group does.", strongHint: "Which word tells the choir's action?" },
    { id: "verb-6", level: 2, sentence: "The river sparkled under the moonlight.", answer: "sparkled", choices: ["river", "sparkled", "under", "moonlight"], rule: "A verb can tell what a thing does.", strongHint: "Find the action of the river." },
    { id: "verb-7", level: 2, sentence: "David measured the board with care.", answer: "measured", choices: ["David", "board", "with", "measured"], rule: "A verb may show an action done by a person.", strongHint: "Which word tells what David did?" },
    { id: "verb-8", level: 2, sentence: "The guests arrived before sunset.", answer: "arrived", choices: ["guests", "before", "sunset", "arrived"], rule: "A verb tells an action or event.", strongHint: "Which word tells what happened?" },
    { id: "verb-9", level: 3, sentence: "The astronomer observed the comet last night.", answer: "observed", choices: ["astronomer", "comet", "observed", "night"], rule: "A verb tells the action performed in the sentence.", strongHint: "Which word tells what the astronomer did?" },
    { id: "verb-10", level: 3, sentence: "Grandfather repaired the gate after breakfast.", answer: "repaired", choices: ["Grandfather", "gate", "after", "repaired"], rule: "A verb is the action word.", strongHint: "Look for the word that tells the work Grandfather did." },
    { id: "verb-11", level: 3, sentence: "The audience applauded the soloist warmly.", answer: "applauded", choices: ["audience", "soloist", "warmly", "applauded"], rule: "A verb tells the action.", strongHint: "Which word tells what the audience did?" },
    { id: "verb-12", level: 3, sentence: "The horse galloped across the field.", answer: "galloped", choices: ["horse", "galloped", "across", "field"], rule: "A verb shows action.", strongHint: "Find the word that shows movement." },
  ],
  "sentence-fix": [
    { id: "fix-1", level: 1, broken: "my brother likes to read after dinner.", correct: "My brother likes to read after dinner.", choices: ["my brother likes to read after dinner.", "My brother likes to read after dinner.", "My Brother likes to read after dinner.", "My brother likes to read after dinner"], rule: "A complete sentence begins with a capital letter and ends with punctuation.", strongHint: "Only one choice has both the correct capital and ending mark." },
    { id: "fix-2", level: 1, broken: "can you help me carry these books.", correct: "Can you help me carry these books?", choices: ["Can you help me carry these books.", "can you help me carry these books?", "Can you help me carry these books?", "Can you help me carry these books!"], rule: "Questions begin with a capital letter and end with a question mark.", strongHint: "This sentence asks something." },
    { id: "fix-3", level: 1, broken: "what a tall sunflower.", correct: "What a tall sunflower!", choices: ["What a tall sunflower.", "what a tall sunflower!", "What a tall sunflower!", "What a tall Sunflower!"], rule: "Strong feeling may end with an exclamation point.", strongHint: "This sentence sounds excited." },
    { id: "fix-4", level: 1, broken: "we played a game before lunch", correct: "We played a game before lunch.", choices: ["We played a game before lunch.", "we played a game before lunch.", "We Played a game before lunch.", "We played a game before lunch"], rule: "Every complete sentence begins with a capital letter and ends with punctuation.", strongHint: "Look for the choice that fixes the beginning and ending." },
    { id: "fix-5", level: 2, broken: "dad drove us to texas in july.", correct: "Dad drove us to Texas in July.", choices: ["Dad drove us to Texas in July.", "dad drove us to Texas in july.", "Dad drove us to texas in July.", "Dad drove us to Texas in July"], rule: "Names, places, and months begin with capital letters.", strongHint: "Check the family title, state, and month." },
    { id: "fix-6", level: 2, broken: "where is my blue notebook.", correct: "Where is my blue notebook?", choices: ["Where is my blue notebook.", "where is my blue notebook?", "Where is my blue notebook?", "Where is my blue notebook!"], rule: "Questions begin with a capital letter and end with a question mark.", strongHint: "This sentence is asking a question." },
    { id: "fix-7", level: 2, broken: "please set the atlas on the shelf", correct: "Please set the atlas on the shelf.", choices: ["Please set the atlas on the shelf.", "please set the atlas on the shelf.", "Please set the Atlas on the shelf.", "Please set the atlas on the shelf!"], rule: "A calm command usually ends with a period.", strongHint: "The sentence gives a calm direction." },
    { id: "fix-8", level: 2, broken: "our class visited the museum on monday.", correct: "Our class visited the museum on Monday.", choices: ["Our class visited the museum on monday.", "Our class visited the museum on Monday.", "our class visited the museum on Monday.", "Our Class visited the museum on Monday."], rule: "The first word and days of the week begin with capital letters.", strongHint: "Check the beginning and the day." },
    { id: "fix-9", level: 3, broken: "professor adams taught us about mars in october.", correct: "Professor Adams taught us about Mars in October.", choices: ["Professor Adams taught us about Mars in October.", "professor Adams taught us about mars in October.", "Professor adams taught us about Mars in october.", "Professor Adams taught us about Mars in October"], rule: "Titles, names, planets, and months begin with capital letters.", strongHint: "Four special words need capitals here." },
    { id: "fix-10", level: 3, broken: "did you finish your grammar workbook.", correct: "Did you finish your grammar workbook?", choices: ["Did you finish your grammar workbook?", "did you finish your grammar workbook?", "Did you finish your Grammar workbook?", "Did you finish your grammar workbook."], rule: "Questions begin with a capital letter and end with a question mark.", strongHint: "Listen for the asking voice." },
    { id: "fix-11", level: 3, broken: "what an enormous waterfall.", correct: "What an enormous waterfall!", choices: ["What an enormous waterfall!", "what an enormous waterfall!", "What an enormous Waterfall!", "What an enormous waterfall."], rule: "An excited sentence begins with a capital letter and may end with an exclamation point.", strongHint: "This sentence shows wonder and excitement." },
    { id: "fix-12", level: 3, broken: "the orchestra practiced before the concert", correct: "The orchestra practiced before the concert.", choices: ["The orchestra practiced before the concert.", "the orchestra practiced before the concert.", "The Orchestra practiced before the concert.", "The orchestra practiced before the concert!"], rule: "A plain statement begins with a capital letter and ends with a period.", strongHint: "The sentence is only telling information." },
  ],
};

const BIBLE_PROMPTS = {
  doctrine: [
    {
      id: "doctrine-1",
      level: 1,
      questionText: "What is grace?",
      displayText: "What is grace?",
      answer: "God's undeserved favor toward sinners",
      choices: [
        "God's undeserved favor toward sinners",
        "A list of rules we keep to earn salvation",
        "A feeling that only comes on Sundays",
        "The money people give at church",
      ],
      spokenText: "What is grace?",
      supportText: "Think about a gift from God that we could never earn.",
      ruleText: "Grace means God is kind to sinners even though they do not deserve it.",
      strongHintText: "Grace is God's undeserved favor toward sinners.",
      historyText: "Doctrine Words - Grace",
    },
    {
      id: "doctrine-2",
      level: 1,
      questionText: "What is faith?",
      displayText: "What is faith?",
      answer: "Trusting in Christ alone to save us",
      choices: [
        "Trusting in Christ alone to save us",
        "Trying to save ourselves with good behavior",
        "Guessing without knowing anything",
        "Wanting God to give us everything we ask",
      ],
      spokenText: "What is faith?",
      supportText: "Biblical faith rests on Jesus, not on ourselves.",
      ruleText: "Saving faith receives and rests on Christ and His promises.",
      strongHintText: "Faith is trusting in Christ alone to save us.",
      historyText: "Doctrine Words - Faith",
    },
    {
      id: "doctrine-3",
      level: 1,
      questionText: "What is repentance?",
      displayText: "What is repentance?",
      answer: "Turning from sin to God",
      choices: [
        "Turning from sin to God",
        "Being sorry without changing direction",
        "Hiding our sin from other people",
        "Promising to do better without needing Jesus",
      ],
      spokenText: "What is repentance?",
      supportText: "Repentance changes both the heart and direction of life.",
      ruleText: "Repentance means turning away from sin and turning to God.",
      strongHintText: "Repentance is turning from sin to God.",
      historyText: "Doctrine Words - Repentance",
    },
    {
      id: "doctrine-4",
      level: 1,
      questionText: "What is sin?",
      displayText: "What is sin?",
      answer: "Any lack of conformity to, or transgression of, God's law",
      choices: [
        "Any lack of conformity to, or transgression of, God's law",
        "Only the very worst crimes people commit",
        "Anything that makes us feel ashamed",
        "A mistake that does not matter to God",
      ],
      spokenText: "What is sin?",
      supportText: "Sin is measured by God's holy law, not by our opinions.",
      ruleText: "Sin is anything that breaks God's law or falls short of it.",
      strongHintText: "Sin is any lack of conformity to, or transgression of, God's law.",
      historyText: "Doctrine Words - Sin",
    },
    {
      id: "doctrine-5",
      level: 2,
      questionText: "What is justification?",
      displayText: "What is justification?",
      answer: "God declaring sinners righteous because of Christ",
      choices: [
        "God declaring sinners righteous because of Christ",
        "God slowly making believers more holy over time",
        "People proving themselves worthy before God",
        "The church deciding who is innocent",
      ],
      spokenText: "What is justification?",
      supportText: "Think about a judge's verdict that comes from Christ's finished work.",
      ruleText: "Justification is God's act of declaring sinners righteous because of Christ.",
      strongHintText: "Justification means God declares sinners righteous because of Christ, not because they earned it.",
      historyText: "Doctrine Words - Justification",
    },
    {
      id: "doctrine-6",
      level: 2,
      questionText: "What is sanctification?",
      displayText: "What is sanctification?",
      answer: "God's work of making believers more holy",
      choices: [
        "God's work of making believers more holy",
        "The moment a sinner is first forgiven",
        "A ceremony that guarantees salvation",
        "Trying harder without the Holy Spirit",
      ],
      spokenText: "What is sanctification?",
      supportText: "Sanctification is a growing work in the believer's life.",
      ruleText: "Sanctification is God's work of making believers more and more holy.",
      strongHintText: "Sanctification is God's ongoing work of making believers more holy.",
      historyText: "Doctrine Words - Sanctification",
    },
    {
      id: "doctrine-7",
      level: 2,
      questionText: "What is adoption?",
      displayText: "What is adoption?",
      answer: "God bringing believers into His family",
      choices: [
        "God bringing believers into His family",
        "Believers earning a place in heaven",
        "Parents dedicating a child at church",
        "Joining a church membership class",
      ],
      spokenText: "What is adoption?",
      supportText: "In salvation, God welcomes us as His children.",
      ruleText: "Adoption means God receives believers as His children.",
      strongHintText: "Adoption is God bringing believers into His family.",
      historyText: "Doctrine Words - Adoption",
    },
    {
      id: "doctrine-8",
      level: 2,
      questionText: "What is redemption?",
      displayText: "What is redemption?",
      answer: "Being bought back from slavery to sin by Christ",
      choices: [
        "Being bought back from slavery to sin by Christ",
        "Remembering what God has done in the past",
        "Trying to fix our own hearts",
        "Receiving a reward for good works",
      ],
      spokenText: "What is redemption?",
      supportText: "Redemption is rescue at a cost, and Christ paid that cost.",
      ruleText: "Redemption means Christ bought His people back from slavery to sin.",
      strongHintText: "Redemption is being bought back from slavery to sin by Christ.",
      historyText: "Doctrine Words - Redemption",
    },
    {
      id: "doctrine-9",
      level: 3,
      questionText: "What is propitiation?",
      displayText: "What is propitiation?",
      answer: "The removal of the wrath of God through Christ's sacrifice",
      choices: [
        "The removal of the wrath of God through Christ's sacrifice",
        "A promise that believers will never suffer",
        "A way of proving our love to God",
        "The outward sign of baptism",
      ],
      spokenText: "What is propitiation?",
      supportText: "Think about what Christ's death did to God's holy wrath against sin.",
      ruleText: "Propitiation means Christ's sacrifice turned away the wrath of God.",
      strongHintText: "Propitiation is the removal of the wrath of God through Christ's sacrifice.",
      historyText: "Doctrine Words - Propitiation",
    },
    {
      id: "doctrine-10",
      level: 3,
      questionText: "What is regeneration?",
      displayText: "What is regeneration?",
      answer: "The new birth worked by the Holy Spirit",
      choices: [
        "The new birth worked by the Holy Spirit",
        "The believer's promise to obey better",
        "A stage of church membership",
        "The final resurrection only",
      ],
      spokenText: "What is regeneration?",
      supportText: "Jesus spoke of being born again.",
      ruleText: "Regeneration is the new birth given by the Holy Spirit.",
      strongHintText: "Regeneration means the new birth worked by the Holy Spirit.",
      historyText: "Doctrine Words - Regeneration",
    },
    {
      id: "doctrine-11",
      level: 3,
      questionText: "What is imputation?",
      displayText: "What is imputation?",
      answer: "Counting Christ's righteousness to believers",
      choices: [
        "Counting Christ's righteousness to believers",
        "Making people perfect immediately",
        "Teaching children to memorize verses",
        "A feeling of peace after prayer",
      ],
      spokenText: "What is imputation?",
      supportText: "In the gospel, God counts something to our account.",
      ruleText: "Imputation means sin was counted to Christ and His righteousness is counted to believers.",
      strongHintText: "Imputation is God counting Christ's righteousness to believers.",
      historyText: "Doctrine Words - Imputation",
    },
    {
      id: "doctrine-12",
      level: 3,
      questionText: "What is glorification?",
      displayText: "What is glorification?",
      answer: "God making believers perfectly holy forever",
      choices: [
        "God making believers perfectly holy forever",
        "The first step of turning from sin",
        "A church leader being honored by people",
        "A believer learning more Bible facts",
      ],
      spokenText: "What is glorification?",
      supportText: "Glorification is the final step of salvation.",
      ruleText: "Glorification is when God makes believers perfectly holy forever.",
      strongHintText: "Glorification means God will make believers perfectly holy forever.",
      historyText: "Doctrine Words - Glorification",
    },
  ],
  "bible-facts": [
    {
      id: "facts-1",
      level: 1,
      questionText: "How many books are in the Old Testament?",
      displayText: "How many books are in the Old Testament?",
      answer: "39",
      choices: ["39", "27", "66", "12"],
      spokenText: "How many books are in the Old Testament?",
      supportText: "The Old Testament is the larger part of the Bible before the New Testament.",
      ruleText: "The Old Testament has 39 books.",
      strongHintText: "The correct number is 39.",
      historyText: "Bible Facts - Old Testament books",
    },
    {
      id: "facts-2",
      level: 1,
      questionText: "How many books are in the New Testament?",
      displayText: "How many books are in the New Testament?",
      answer: "27",
      choices: ["27", "39", "66", "7"],
      spokenText: "How many books are in the New Testament?",
      supportText: "The New Testament begins with the Gospels.",
      ruleText: "The New Testament has 27 books.",
      strongHintText: "The correct number is 27.",
      historyText: "Bible Facts - New Testament books",
    },
    {
      id: "facts-3",
      level: 1,
      questionText: "How many books are in the whole Bible?",
      displayText: "How many books are in the whole Bible?",
      answer: "66",
      choices: ["66", "39", "27", "70"],
      spokenText: "How many books are in the whole Bible?",
      supportText: "Think of the Old Testament and New Testament together.",
      ruleText: "The whole Bible has 66 books.",
      strongHintText: "The correct number is 66.",
      historyText: "Bible Facts - Total books",
    },
    {
      id: "facts-4",
      level: 1,
      questionText: "Which book comes first in the Bible?",
      displayText: "Which book comes first in the Bible?",
      answer: "Genesis",
      choices: ["Genesis", "Matthew", "Psalms", "Revelation"],
      spokenText: "Which book comes first in the Bible?",
      supportText: "The first book tells us about creation, the fall, and the patriarchs.",
      ruleText: "Genesis is the first book of the Bible.",
      strongHintText: "The answer is Genesis.",
      historyText: "Bible Facts - First book",
    },
    {
      id: "facts-5",
      level: 1,
      questionText: "Which book comes last in the Bible?",
      displayText: "Which book comes last in the Bible?",
      answer: "Revelation",
      choices: ["Revelation", "Malachi", "Romans", "Acts"],
      spokenText: "Which book comes last in the Bible?",
      supportText: "The final book contains visions given to John.",
      ruleText: "Revelation is the last book of the Bible.",
      strongHintText: "The answer is Revelation.",
      historyText: "Bible Facts - Last book",
    },
    {
      id: "facts-6",
      level: 1,
      questionText: "How many Gospels are there?",
      displayText: "How many Gospels are there?",
      answer: "4",
      choices: ["4", "3", "5", "12"],
      spokenText: "How many Gospels are there?",
      supportText: "Matthew, Mark, Luke, and John are the Gospels.",
      ruleText: "There are 4 Gospels.",
      strongHintText: "The correct number is 4.",
      historyText: "Bible Facts - Gospels",
    },
    {
      id: "facts-7",
      level: 2,
      questionText: "How many books are in the Pentateuch?",
      displayText: "How many books are in the Pentateuch?",
      answer: "5",
      choices: ["5", "4", "10", "12"],
      spokenText: "How many books are in the Pentateuch?",
      supportText: "The Pentateuch is the first group of books in the Bible.",
      ruleText: "The Pentateuch has 5 books.",
      strongHintText: "The correct number is 5.",
      historyText: "Bible Facts - Pentateuch",
    },
    {
      id: "facts-8",
      level: 2,
      questionText: "How many days did God create before He rested?",
      displayText: "How many days did God create before He rested?",
      answer: "6",
      choices: ["6", "7", "5", "40"],
      spokenText: "How many days did God create before He rested?",
      supportText: "God rested on the seventh day after finishing His work.",
      ruleText: "God created in 6 days and rested on the seventh.",
      strongHintText: "The correct number is 6.",
      historyText: "Bible Facts - Creation days",
    },
    {
      id: "facts-9",
      level: 2,
      questionText: "How many commandments did God give on the stone tablets?",
      displayText: "How many commandments did God give on the stone tablets?",
      answer: "10",
      choices: ["10", "12", "7", "40"],
      spokenText: "How many commandments did God give on the stone tablets?",
      supportText: "These commandments were given through Moses.",
      ruleText: "God gave 10 commandments.",
      strongHintText: "The correct number is 10.",
      historyText: "Bible Facts - Ten Commandments",
    },
    {
      id: "facts-10",
      level: 2,
      questionText: "How many people from Noah's family were on the ark?",
      displayText: "How many people from Noah's family were on the ark?",
      answer: "8",
      choices: ["8", "6", "10", "12"],
      spokenText: "How many people from Noah's family were on the ark?",
      supportText: "Think of Noah, his wife, his three sons, and their wives.",
      ruleText: "There were 8 people from Noah's family on the ark.",
      strongHintText: "The correct number is 8.",
      historyText: "Bible Facts - Noah's family",
    },
    {
      id: "facts-11",
      level: 3,
      questionText: "Which apostle wrote many New Testament letters?",
      displayText: "Which apostle wrote many New Testament letters?",
      answer: "Paul",
      choices: ["Paul", "Moses", "David", "Luke"],
      spokenText: "Which apostle wrote many New Testament letters?",
      supportText: "This apostle was once called Saul.",
      ruleText: "Paul wrote many letters in the New Testament.",
      strongHintText: "The answer is Paul.",
      historyText: "Bible Facts - New Testament letters",
    },
    {
      id: "facts-12",
      level: 3,
      questionText: "Which book tells about the early church after the Gospels?",
      displayText: "Which book tells about the early church after the Gospels?",
      answer: "Acts",
      choices: ["Acts", "Romans", "Hebrews", "Psalms"],
      spokenText: "Which book tells about the early church after the Gospels?",
      supportText: "This book begins right after John.",
      ruleText: "Acts tells about the early church after the Gospels.",
      strongHintText: "The answer is Acts.",
      historyText: "Bible Facts - Acts",
    },
  ],
  "verse-fill": [
    {
      id: "verse-1",
      level: 1,
      questionText: "Which word completes this verse?",
      displayText: "The Lord is my shepherd; I shall not ____.\nPsalm 23:1",
      answer: "want",
      choices: ["want", "wander", "fear", "sleep"],
      spokenText: "Which word completes this verse? The Lord is my shepherd; I shall not blank. Psalm 23 verse 1.",
      supportText: "This verse teaches the Lord's care for His people.",
      ruleText: "Psalm 23 begins by saying the Lord is our shepherd.",
      strongHintText: "The missing word is want.",
      historyText: "Verse Fill-Ins - Psalm 23:1",
    },
    {
      id: "verse-2",
      level: 1,
      questionText: "Which word completes this verse?",
      displayText: "In the beginning, God created the heavens and the ____.\nGenesis 1:1",
      answer: "earth",
      choices: ["earth", "sea", "garden", "stars"],
      spokenText: "Which word completes this verse? In the beginning, God created the heavens and the blank. Genesis 1 verse 1.",
      supportText: "This is the opening verse of the Bible.",
      ruleText: "Genesis 1:1 tells us God created the heavens and the earth.",
      strongHintText: "The missing word is earth.",
      historyText: "Verse Fill-Ins - Genesis 1:1",
    },
    {
      id: "verse-3",
      level: 1,
      questionText: "Which word completes this verse?",
      displayText: "Children, obey your parents in the Lord, for this is ____.\nEphesians 6:1",
      answer: "right",
      choices: ["right", "easy", "fun", "kind"],
      spokenText: "Which word completes this verse? Children, obey your parents in the Lord, for this is blank. Ephesians 6 verse 1.",
      supportText: "This verse teaches children to honor God by obeying parents.",
      ruleText: "Ephesians 6:1 says obedience is right.",
      strongHintText: "The missing word is right.",
      historyText: "Verse Fill-Ins - Ephesians 6:1",
    },
    {
      id: "verse-4",
      level: 1,
      questionText: "Which word completes this verse?",
      displayText: "Your word is a lamp to my feet and a light to my ____.\nPsalm 119:105",
      answer: "path",
      choices: ["path", "heart", "tent", "home"],
      spokenText: "Which word completes this verse? Your word is a lamp to my feet and a light to my blank. Psalm 119 verse 105.",
      supportText: "God's Word guides us like light in the dark.",
      ruleText: "Psalm 119:105 says God's Word is a light to our path.",
      strongHintText: "The missing word is path.",
      historyText: "Verse Fill-Ins - Psalm 119:105",
    },
    {
      id: "verse-5",
      level: 2,
      questionText: "Which word completes this verse?",
      displayText: "Trust in the Lord with all your heart, and do not lean on your own ____.\nProverbs 3:5",
      answer: "understanding",
      choices: ["understanding", "strength", "wisdom", "plans"],
      spokenText: "Which word completes this verse? Trust in the Lord with all your heart, and do not lean on your own blank. Proverbs 3 verse 5.",
      supportText: "This verse teaches us not to trust our own thinking above God's wisdom.",
      ruleText: "Proverbs 3:5 warns us not to lean on our own understanding.",
      strongHintText: "The missing word is understanding.",
      historyText: "Verse Fill-Ins - Proverbs 3:5",
    },
    {
      id: "verse-6",
      level: 2,
      questionText: "Which word completes this verse?",
      displayText: "For all have sinned and fall short of the glory of ____.\nRomans 3:23",
      answer: "God",
      choices: ["God", "man", "heaven", "Moses"],
      spokenText: "Which word completes this verse? For all have sinned and fall short of the glory of blank. Romans 3 verse 23.",
      supportText: "This verse reminds us that every person needs salvation.",
      ruleText: "Romans 3:23 says all have sinned and fall short of the glory of God.",
      strongHintText: "The missing word is God.",
      historyText: "Verse Fill-Ins - Romans 3:23",
    },
    {
      id: "verse-7",
      level: 2,
      questionText: "Which word completes this verse?",
      displayText: "But God shows his love for us in that while we were still sinners, Christ died for ____.\nRomans 5:8",
      answer: "us",
      choices: ["us", "many", "Israel", "all"],
      spokenText: "Which word completes this verse? But God shows his love for us in that while we were still sinners, Christ died for blank. Romans 5 verse 8.",
      supportText: "This verse points to God's love shown in Christ's death.",
      ruleText: "Romans 5:8 says Christ died for us.",
      strongHintText: "The missing word is us.",
      historyText: "Verse Fill-Ins - Romans 5:8",
    },
    {
      id: "verse-8",
      level: 2,
      questionText: "Which word completes this verse?",
      displayText: "For by grace you have been saved through ____.\nEphesians 2:8",
      answer: "faith",
      choices: ["faith", "works", "effort", "obedience"],
      spokenText: "Which word completes this verse? For by grace you have been saved through blank. Ephesians 2 verse 8.",
      supportText: "Salvation is a gift from God, not something we earn.",
      ruleText: "Ephesians 2:8 says we are saved through faith.",
      strongHintText: "The missing word is faith.",
      historyText: "Verse Fill-Ins - Ephesians 2:8",
    },
    {
      id: "verse-9",
      level: 3,
      questionText: "Which word completes this verse?",
      displayText: "The wages of sin is death, but the free gift of God is eternal life in Christ Jesus our ____.\nRomans 6:23",
      answer: "Lord",
      choices: ["Lord", "Savior", "King", "Redeemer"],
      spokenText: "Which word completes this verse? The wages of sin is death, but the free gift of God is eternal life in Christ Jesus our blank. Romans 6 verse 23.",
      supportText: "This verse contrasts sin's wages with God's free gift.",
      ruleText: "Romans 6:23 ends with Christ Jesus our Lord.",
      strongHintText: "The missing word is Lord.",
      historyText: "Verse Fill-Ins - Romans 6:23",
    },
    {
      id: "verse-10",
      level: 3,
      questionText: "Which word completes this verse?",
      displayText: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all ____.\n1 John 1:9",
      answer: "unrighteousness",
      choices: ["unrighteousness", "weakness", "sadness", "confusion"],
      spokenText: "Which word completes this verse? If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all blank. First John 1 verse 9.",
      supportText: "This verse speaks of forgiveness and cleansing in Christ.",
      ruleText: "1 John 1:9 says God cleanses us from all unrighteousness.",
      strongHintText: "The missing word is unrighteousness.",
      historyText: "Verse Fill-Ins - 1 John 1:9",
    },
    {
      id: "verse-11",
      level: 3,
      questionText: "Which word completes this verse?",
      displayText: "There is therefore now no condemnation for those who are in Christ ____.\nRomans 8:1",
      answer: "Jesus",
      choices: ["Jesus", "grace", "glory", "truth"],
      spokenText: "Which word completes this verse? There is therefore now no condemnation for those who are in Christ blank. Romans 8 verse 1.",
      supportText: "This verse points to the believer's safety in Christ.",
      ruleText: "Romans 8:1 ends with Christ Jesus.",
      strongHintText: "The missing word is Jesus.",
      historyText: "Verse Fill-Ins - Romans 8:1",
    },
    {
      id: "verse-12",
      level: 3,
      questionText: "Which word completes this verse?",
      displayText: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in ____.\n2 Timothy 3:16",
      answer: "righteousness",
      choices: ["righteousness", "kindness", "patience", "music"],
      spokenText: "Which word completes this verse? All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in blank. Second Timothy 3 verse 16.",
      supportText: "This verse tells us what Scripture is and what it does.",
      ruleText: "2 Timothy 3:16 ends with training in righteousness.",
      strongHintText: "The missing word is righteousness.",
      historyText: "Verse Fill-Ins - 2 Timothy 3:16",
    },
  ],
};

const state = {
  db: null,
  profiles: [],
  activeProfileId: null,
  activeProfile: null,
  activeSubjectId: null,
  activeSkillId: null,
  lastMathSkillId: null,
  lastGrammarSkillId: null,
  lastBibleSkillId: null,
  skillPickerExpanded: true,
  headerMenuOpen: false,
  showProfileForm: false,
  isMuted: false,
  currentAudio: null,
  pendingSpeech: null,
  successLinePool: [],
  lastSuccessLine: "",
  recentSpellingWords: [],
  recentGrammarPrompts: [],
  recentBiblePrompts: [],
  spellingCurriculumByGrade: {},
  round: { number: 1, solved: 0, target: ROUND_TARGET, completed: false },
  currentProblem: null,
  currentSessionId: null,
};

const successLines = [
  "Correct.",
  "That's right.",
  "You got it.",
  "Yes.",
  "Exactly.",
  "Nice job.",
  "Well done.",
  "Right answer.",
];

const retryLines = [
  "Not quite yet, but that was a brave try.",
  "Almost there. Take another look.",
  "That one is tricky. Try the same one again.",
];
const SPELLING_KEY_ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const STATIC_SPEECH = {
  instructions: `Welcome to ${APP_NAME}. First choose or create a learner profile on the home page. Then choose a subject. Math, Spelling, Grammar, and Bible are ready now, and more subjects are on the way.`,
  homeGuide: `Welcome to ${APP_NAME}. First choose or create a learner profile. Then pick a subject below. Math, Spelling, Grammar, and Bible are ready now.`,
  mathGuide: "Welcome to Math. Select a math skill to work on below. Notice what you last used and what is currently recommended.",
  spellingGuide: "Welcome to Spelling. Listen to the word, spell it carefully, and practice words that match your grade level.",
  grammarGuide: "Welcome to Grammar. Choose a grammar skill below. You can practice capitals, punctuation, parts of speech, and sentence fixing.",
  bibleGuide: "Welcome to Bible. Choose a Bible skill below. You can practice doctrine words, Bible facts, and verse fill-ins.",
  createProfile: (name) => `Profile created for ${name}. Now choose a subject like Math, Spelling, Grammar, or Bible.`,
  selectProfile: (name) => `${name} is selected. Now choose a subject like Math, Spelling, Grammar, or Bible.`,
  selectSkill: (title) => `${title} is ready. Let's begin.`,
  promptReady: "Listen carefully and type the answer.",
  spellingPromptReady: "Listen to the word and spell it carefully.",
  grammarPromptReady: "Read the sentence and choose the best grammar answer.",
  biblePromptReady: "Read the Bible question and choose the best answer.",
};
const MUTE_STORAGE_KEY = "sunny-math-muted";
const LOCAL_SERVER_ORIGIN = "http://localhost:3000";
const SERVER_ORIGIN = window.location.protocol === "file:" ? LOCAL_SERVER_ORIGIN : window.location.origin;

const els = {
  goHome: document.getElementById("go-home"),
  headerLearnerPill: document.getElementById("header-learner-pill"),
  headerStarsPill: document.getElementById("header-stars-pill"),
  headerStreakPill: document.getElementById("header-streak-pill"),
  headerRoundPill: document.getElementById("header-round-pill"),
  headerMenuToggle: document.getElementById("header-menu-toggle"),
  appHeaderActions: document.getElementById("app-header-actions"),
  toggleProfileForm: document.getElementById("toggle-profile-form"),
  profileFormPanel: document.getElementById("profile-form-panel"),
  profileForm: document.getElementById("profile-form"),
  childName: document.getElementById("child-name"),
  childGrade: document.getElementById("child-grade"),
  avatarColor: document.getElementById("avatar-color"),
  profilesList: document.getElementById("profiles-list"),
  refreshProfiles: document.getElementById("refresh-profiles"),
  chooseLearner: document.getElementById("choose-learner"),
  readInstructions: document.getElementById("read-instructions"),
  toggleMute: document.getElementById("toggle-mute"),
  homeView: document.getElementById("home-view"),
  homeCurrentLearner: document.getElementById("home-current-learner"),
  curriculumCard: document.getElementById("curriculum-card"),
  subjectView: document.getElementById("subject-view"),
  subjectsGrid: document.getElementById("subjects-grid"),
  subjectEyebrow: document.getElementById("subject-eyebrow"),
  subjectTitleText: document.getElementById("subject-title-text"),
  subjectDescriptionText: document.getElementById("subject-description-text"),
  currentLearnerAvatar: document.getElementById("current-learner-avatar"),
  currentLearnerName: document.getElementById("current-learner-name"),
  learnerStarsChip: document.getElementById("learner-stars-chip"),
  learnerStreakChip: document.getElementById("learner-streak-chip"),
  emptyStateCard: document.getElementById("empty-state-card"),
  skillPickerCard: document.getElementById("skill-picker-card"),
  skillPickerBody: document.getElementById("skill-picker-body"),
  selectedSkillChip: document.getElementById("selected-skill-chip"),
  toggleSkillPicker: document.getElementById("toggle-skill-picker"),
  recommendationNote: document.getElementById("recommendation-note"),
  skillsList: document.getElementById("skills-list"),
  dashboardCard: document.getElementById("dashboard-card"),
  rewardProgress: document.getElementById("reward-progress"),
  rewardProgressText: document.getElementById("reward-progress-text"),
  lessonCard: document.getElementById("lesson-card"),
  activityCard: document.getElementById("activity-card"),
  activityList: document.getElementById("activity-list"),
  voiceStatus: document.getElementById("voice-status"),
  difficultyField: document.getElementById("difficulty-field"),
  difficulty: document.getElementById("difficulty"),
  lessonTitle: document.getElementById("lesson-title"),
  lessonBadge: document.getElementById("lesson-badge"),
  roundStatus: document.getElementById("round-status"),
  roundProgress: document.getElementById("round-progress"),
  nextRound: document.getElementById("next-round"),
  newProblem: document.getElementById("new-problem"),
  repeatProblem: document.getElementById("repeat-problem"),
  hintProblem: document.getElementById("hint-problem"),
  promptLabel: document.getElementById("prompt-label"),
  problemHelper: document.getElementById("problem-helper"),
  problemText: document.getElementById("problem-text"),
  spellingHintPanel: document.getElementById("spelling-hint-panel"),
  hintStatus: document.getElementById("hint-status"),
  clueText: document.getElementById("clue-text"),
  grammarPanel: document.getElementById("grammar-panel"),
  grammarRuleChip: document.getElementById("grammar-rule-chip"),
  grammarExampleText: document.getElementById("grammar-example-text"),
  choicePanel: document.getElementById("choice-panel"),
  choiceGrid: document.getElementById("choice-grid"),
  answerForm: document.getElementById("answer-form"),
  answerRepeatProblem: document.getElementById("answer-repeat-problem"),
  answerHintProblem: document.getElementById("answer-hint-problem"),
  answerInputShell: document.getElementById("answer-input-shell"),
  answerInput: document.getElementById("answer-input"),
  spellingPreview: document.getElementById("spelling-preview"),
  spellingKeyboard: document.getElementById("spelling-keyboard"),
  feedback: document.getElementById("feedback"),
};

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseRandom(items) {
  return items[randomNumber(0, items.length - 1)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = randomNumber(0, index);
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function nextSuccessLine() {
  if (state.successLinePool.length === 0) {
    state.successLinePool = shuffle(successLines);
    if (state.successLinePool[state.successLinePool.length - 1] === state.lastSuccessLine && state.successLinePool.length > 1) {
      [state.successLinePool[0], state.successLinePool[state.successLinePool.length - 1]] = [
        state.successLinePool[state.successLinePool.length - 1],
        state.successLinePool[0],
      ];
    }
  }
  const line = state.successLinePool.pop();
  state.lastSuccessLine = line;
  return line;
}

function resetRound(roundNumber = 1) {
  state.round = { number: roundNumber, solved: 0, target: ROUND_TARGET, completed: false };
}

function renderRound() {
  const progressPercent = Math.min(100, Math.round((state.round.solved / state.round.target) * 100));
  els.roundStatus.textContent = state.round.completed
    ? `Round ${state.round.number} complete`
    : `Round ${state.round.number} - ${state.round.solved} / ${state.round.target} correct`;
  els.roundProgress.style.width = `${progressPercent}%`;
  els.nextRound.classList.toggle("hidden", !state.round.completed);
  renderHeaderLearner();
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getSkillsForSubject(subjectId = state.activeSubjectId) {
  if (subjectId === GRAMMAR_SUBJECT_ID) {
    return GRAMMAR_SKILLS;
  }

  if (subjectId === BIBLE_SUBJECT_ID) {
    return BIBLE_SKILLS;
  }

  if (subjectId === MATH_SUBJECT_ID) {
    return SKILLS;
  }

  return [];
}

function getSkillDefinition(skillId, subjectId = state.activeSubjectId) {
  const allSkills = [...SKILLS, ...GRAMMAR_SKILLS, ...BIBLE_SKILLS];
  return allSkills.find((skill) => skill.id === skillId) || getSkillsForSubject(subjectId)[0] || SKILLS[0];
}

function getSkillUsage(answers, subjectId = state.activeSubjectId) {
  const skills = getSkillsForSubject(subjectId);
  const skillIds = new Set(skills.map((skill) => skill.id));
  return answers.reduce((usage, answer) => {
    const skillId = answer.skillId || answer.operation || "addition";
    if (!skillIds.has(skillId)) {
      return usage;
    }
    const previous = usage[skillId];

    if (!previous || answer.createdAt > previous) {
      usage[skillId] = answer.createdAt;
    }

    return usage;
  }, {});
}

function getSkillStats(answers, subjectId = state.activeSubjectId) {
  const skills = getSkillsForSubject(subjectId);
  return skills.reduce((stats, skill) => {
    const entries = answers.filter((answer) => (answer.skillId || answer.operation || "addition") === skill.id);
    const correct = entries.filter((answer) => answer.correct).length;
    const attempts = entries.length;
    const accuracy = attempts > 0 ? correct / attempts : 0;
    const lastUsed = entries.reduce((latest, entry) => {
      if (!latest || entry.createdAt > latest) {
        return entry.createdAt;
      }
      return latest;
    }, "");

    stats[skill.id] = {
      attempts,
      correct,
      accuracy,
      lastUsed,
    };
    return stats;
  }, {});
}

function getSkillProgression(subjectId = state.activeSubjectId) {
  if (subjectId === GRAMMAR_SUBJECT_ID) {
    return [
      { id: "capitalization", minimumAttempts: 6, minimumAccuracy: 0.8 },
      { id: "punctuation", minimumAttempts: 6, minimumAccuracy: 0.8 },
      { id: "nouns", minimumAttempts: 8, minimumAccuracy: 0.78 },
      { id: "verbs", minimumAttempts: 8, minimumAccuracy: 0.78 },
      { id: "sentence-fix", minimumAttempts: 10, minimumAccuracy: 0.76 },
    ];
  }

  if (subjectId === BIBLE_SUBJECT_ID) {
    return [
      { id: "doctrine", minimumAttempts: 6, minimumAccuracy: 0.8 },
      { id: "bible-facts", minimumAttempts: 8, minimumAccuracy: 0.78 },
      { id: "verse-fill", minimumAttempts: 10, minimumAccuracy: 0.76 },
    ];
  }

  return [
    { id: "addition", minimumAttempts: 8, minimumAccuracy: 0.8 },
    { id: "subtraction", minimumAttempts: 8, minimumAccuracy: 0.8 },
    { id: "multiplication", minimumAttempts: 10, minimumAccuracy: 0.78 },
    { id: "times-tables", minimumAttempts: 10, minimumAccuracy: 0.78 },
    { id: "division", minimumAttempts: 10, minimumAccuracy: 0.75 },
  ];
}

function getRecommendedSkillId(answers, subjectId = state.activeSubjectId) {
  const stats = getSkillStats(answers, subjectId);
  const progression = getSkillProgression(subjectId);
  const skills = getSkillsForSubject(subjectId);

  for (const step of progression) {
    const skillStats = stats[step.id];
    if (!skillStats || skillStats.attempts < step.minimumAttempts || skillStats.accuracy < step.minimumAccuracy) {
      return step.id;
    }
  }

  return Object.entries(stats)
    .sort((left, right) => {
      const leftDate = left[1].lastUsed || "";
      const rightDate = right[1].lastUsed || "";
      return leftDate.localeCompare(rightDate);
    })[0]?.[0] || skills[0]?.id || "addition";
}

function getRecommendationReason(stats, skillId) {
  const skill = getSkillDefinition(skillId);
  const skillStats = stats[skillId];

  if (!skillStats || skillStats.attempts === 0) {
    return `${skill.title} is a great next step because it has not been practiced yet.`;
  }

  if (skillStats.accuracy < 0.8) {
    return `${skill.title} is recommended because a little more practice will build confidence.`;
  }

  return `${skill.title} is recommended to keep skills balanced and fresh.`;
}

function getSkillIcon(skillId) {
  if (skillId === "addition") {
    return "fa-plus";
  }
  if (skillId === "subtraction") {
    return "fa-minus";
  }
  if (skillId === "multiplication") {
    return "fa-xmark";
  }
  if (skillId === "division") {
    return "fa-divide";
  }
  if (skillId === "capitalization") {
    return "fa-font";
  }
  if (skillId === "punctuation") {
    return "fa-question";
  }
  if (skillId === "nouns") {
    return "fa-tag";
  }
  if (skillId === "verbs") {
    return "fa-person-running";
  }
  if (skillId === "sentence-fix") {
    return "fa-screwdriver-wrench";
  }
  if (skillId === "doctrine") {
    return "fa-book-bible";
  }
  if (skillId === "bible-facts") {
    return "fa-list-check";
  }
  if (skillId === "verse-fill") {
    return "fa-quote-left";
  }
  return "fa-table-cells-large";
}

function getLastUsedMeta(dateString) {
  if (!dateString) {
    return {
      label: "Not practiced yet",
      className: "last-used-never",
      icon: "fa-seedling",
    };
  }

  const usedDate = new Date(dateString);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (usedDate.toDateString() === today.toDateString()) {
    return {
      label: "Last used today",
      className: "last-used-today",
      icon: "fa-bolt",
    };
  }

  if (usedDate.toDateString() === yesterday.toDateString()) {
    return {
      label: "Last used yesterday",
      className: "last-used-yesterday",
      icon: "fa-clock-rotate-left",
    };
  }

  return {
    label: `Last used ${formatDate(dateString)}`,
    className: "last-used-earlier",
    icon: "fa-calendar-check",
  };
}

function getSubjectDefinition(subjectId) {
  return SUBJECTS.find((subject) => subject.id === subjectId) || SUBJECTS[0];
}

function isMathView() {
  return state.activeSubjectId === MATH_SUBJECT_ID;
}

function isSpellingView() {
  return state.activeSubjectId === SPELLING_SUBJECT_ID;
}

function isGrammarView() {
  return state.activeSubjectId === GRAMMAR_SUBJECT_ID;
}

function isBibleView() {
  return state.activeSubjectId === BIBLE_SUBJECT_ID;
}

function isMathSkillId(skillId) {
  return SKILLS.some((skill) => skill.id === skillId);
}

function isGrammarSkillId(skillId) {
  return GRAMMAR_SKILLS.some((skill) => skill.id === skillId);
}

function isChoiceView() {
  return isGrammarView() || isBibleView();
}

function getRecordSubjectId(record) {
  return record.subjectId || MATH_SUBJECT_ID;
}

function normalizeGradeValue(value) {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const normalized = String(value).trim().toUpperCase();
  if (normalized === "K") {
    return "K";
  }

  const gradeNumber = Number(normalized);
  if (!Number.isInteger(gradeNumber) || gradeNumber < 1 || gradeNumber > 12) {
    return null;
  }

  return String(gradeNumber);
}

function inferGradeFromAge(age) {
  const numericAge = Number(age);
  if (!Number.isFinite(numericAge) || numericAge <= 5) {
    return "K";
  }

  return String(Math.max(1, Math.min(12, numericAge - 5)));
}

function formatGradeLabel(grade) {
  const normalized = normalizeGradeValue(grade);
  if (!normalized) {
    return "Grade not set";
  }

  if (normalized === "K") {
    return "Kindergarten";
  }

  const gradeNumber = Number(normalized);
  const teen = gradeNumber % 100;
  const suffix = teen >= 11 && teen <= 13
    ? "th"
    : gradeNumber % 10 === 1
      ? "st"
      : gradeNumber % 10 === 2
        ? "nd"
        : gradeNumber % 10 === 3
          ? "rd"
          : "th";

  return `${gradeNumber}${suffix} Grade`;
}

function getProfileGrade(profile) {
  if (!profile) {
    return "K";
  }

  return normalizeGradeValue(profile.grade) || inferGradeFromAge(profile.age);
}

function normalizeProfile(profile) {
  if (!profile) {
    return profile;
  }

  return {
    ...profile,
    grade: getProfileGrade(profile),
  };
}

function getDifficultyWords(difficulty) {
  return SPELLING_WORDS[difficulty] || SPELLING_WORDS.medium;
}

function getRecommendedSpellingDifficulty(profile = state.activeProfile) {
  if (!profile) {
    return "medium";
  }

  const grade = getProfileGrade(profile);
  if (grade === "K" || Number(grade) <= 2) {
    return "easy";
  }

  if (Number(grade) <= 4) {
    return "medium";
  }

  return "hard";
}

function getSpellingCurriculumForGrade(grade) {
  const normalized = normalizeGradeValue(grade);
  return normalized ? state.spellingCurriculumByGrade[normalized] || null : null;
}

function getSpellingEntriesForGrade(grade) {
  const normalized = normalizeGradeValue(grade) || "5";
  const curriculum = getSpellingCurriculumForGrade(normalized);

  if (curriculum) {
    return curriculum.units.flatMap((unit) => unit.words
      .filter((entry) => /^[A-Za-z]+$/.test(entry.word))
      .map((entry) => ({
        ...entry,
        clue: entry.definition,
        category: unit.title,
        unitTitle: unit.title,
        grade: normalized,
      })));
  }

  return getDifficultyWords(getRecommendedSpellingDifficulty({ grade: normalized })).map((entry) => ({
    ...entry,
    definition: entry.clue,
    sentence: "",
    unit: null,
    unitTitle: `${formatGradeLabel(normalized)} Core Words`,
    grade: normalized,
    type: "core",
    pattern: "grade-list",
  }));
}

function getSpellingBadgeText(profile = state.activeProfile, problem = state.currentProblem) {
  const gradeLabel = formatGradeLabel(getProfileGrade(profile));
  if (!problem || !problem.unit) {
    return `${gradeLabel} Spelling`;
  }

  return `${gradeLabel} - Unit ${problem.unit}`;
}

function applyRecommendedSpellingDifficulty(profile = state.activeProfile) {
  if (!profile) {
    return;
  }

  els.difficulty.value = getRecommendedSpellingDifficulty(profile);
}

function rememberSpellingWord(word) {
  const normalized = word.toLowerCase();
  state.recentSpellingWords = [
    normalized,
    ...state.recentSpellingWords.filter((entry) => entry !== normalized),
  ].slice(0, SPELLING_RECENT_LIMIT);
}

async function getRecentSpellingWords() {
  if (!state.activeProfile) {
    return [];
  }

  const answers = await getAll("answers");
  const recentWords = [];
  const recentEntries = answers
    .filter((answer) => (
      answer.profileId === state.activeProfile.id
      && getRecordSubjectId(answer) === SPELLING_SUBJECT_ID
      && typeof answer.expectedAnswer === "string"
    ))
    .sort((left, right) => (right.createdAt || "").localeCompare(left.createdAt || ""));

  for (const entry of recentEntries) {
    const word = entry.expectedAnswer.toLowerCase();
    if (!recentWords.includes(word)) {
      recentWords.push(word);
    }
    if (recentWords.length >= SPELLING_RECENT_LIMIT) {
      break;
    }
  }

  return recentWords;
}

function getSpellingMask(word, hintLevel) {
  const revealIndexes = new Set();

  if (hintLevel >= 1) {
    revealIndexes.add(0);
  }

  if (hintLevel >= 2) {
    revealIndexes.add(1);
    revealIndexes.add(word.length - 1);
  }

  if (hintLevel >= 3) {
    revealIndexes.add(2);
    revealIndexes.add(word.length - 2);
  }

  return word
    .split("")
    .map((letter, index) => (revealIndexes.has(index) ? letter.toUpperCase() : "_"))
    .join(" ");
}

function getSpellingHintMessage(problem) {
  if (problem.hintLevel === 0) {
    return `This word has ${problem.answer.length} letters. Tap Hint to reveal a few characters.`;
  }

  if (problem.hintLevel === 1) {
    return `Hint: ${getSpellingMask(problem.answer, 1)}. ${problem.clue}`;
  }

  if (problem.hintLevel === 2) {
    return `Hint: ${getSpellingMask(problem.answer, 2)}. ${problem.clue}`;
  }

  return `Strong hint: ${getSpellingMask(problem.answer, 3)}. ${problem.clue}`;
}

function getSpellingHintSpeech(problem) {
  if (problem.hintLevel === 1) {
    return `Here is a hint. The word starts with ${problem.answer[0]}. ${problem.clue}`;
  }

  if (problem.hintLevel === 2) {
    return `Here is a stronger hint. ${problem.answer[0]} ${problem.answer[1]} and it ends with ${problem.answer.at(-1)}. ${problem.clue}`;
  }

  return `Here is a strong hint. ${getSpellingMask(problem.answer, 3).replaceAll("_", "blank")}. ${problem.clue}`;
}

function getSpellingLetterState(expectedLetter, typedLetter) {
  if (!expectedLetter && typedLetter) {
    return "extra";
  }

  if (!typedLetter) {
    return "missing";
  }

  return expectedLetter === typedLetter ? "correct" : "wrong";
}

function getSpellingLetterChip(letter, stateName) {
  return `<span class="spelling-letter spelling-letter-${stateName}">${escapeHtml(letter)}</span>`;
}

function getSpellingReviewMarkup(problem) {
  if (!problem?.lastSubmittedAnswer) {
    return "";
  }

  const typedWord = String(problem.lastSubmittedAnswer).toLowerCase();
  const answerWord = String(problem.answer || "").toLowerCase();
  const reviewLength = Math.max(answerWord.length, typedWord.length);
  const typedLetters = [];
  const answerLetters = [];

  for (let index = 0; index < reviewLength; index += 1) {
    const typedLetter = typedWord[index] || "";
    const answerLetter = answerWord[index] || "";
    const letterState = getSpellingLetterState(answerLetter, typedLetter);

    if (typedLetter || answerLetter) {
      typedLetters.push(getSpellingLetterChip(typedLetter || "_", letterState));
    }

    if (answerLetter) {
      answerLetters.push(getSpellingLetterChip(answerLetter, letterState === "correct" ? "correct" : "wrong"));
    }
  }

  const clueLine = problem.clue
    ? `<p class="spelling-review-clue">Clue: ${escapeHtml(problem.clue)}</p>`
    : "";
  const hintLine = problem.hintLevel > 0
    ? `<p class="spelling-review-clue">Hint: ${escapeHtml(getSpellingMask(problem.answer, problem.hintLevel))}</p>`
    : "";

  return `
    <div class="spelling-review">
      <p class="spelling-review-note">Green letters were right. Red letters need fixing.</p>
      <div class="spelling-review-row">
        <span class="spelling-review-label">Your try</span>
        <div class="spelling-letter-strip">${typedLetters.join("")}</div>
      </div>
      <div class="spelling-review-row">
        <span class="spelling-review-label">Correct word</span>
        <div class="spelling-letter-strip">${answerLetters.join("")}</div>
      </div>
      ${clueLine}
      ${hintLine}
    </div>
  `;
}

function applyRecommendedGrammarDifficulty(profile = state.activeProfile) {
  if (!profile) {
    return;
  }

  els.difficulty.value = getRecommendedSpellingDifficulty(profile);
}

function applyRecommendedBibleDifficulty(profile = state.activeProfile) {
  if (!profile) {
    return;
  }

  els.difficulty.value = getRecommendedSpellingDifficulty(profile);
}

function rememberGrammarPrompt(promptId) {
  state.recentGrammarPrompts = [
    promptId,
    ...state.recentGrammarPrompts.filter((entry) => entry !== promptId),
  ].slice(0, GRAMMAR_RECENT_LIMIT);
}

function rememberBiblePrompt(promptId) {
  state.recentBiblePrompts = [
    promptId,
    ...state.recentBiblePrompts.filter((entry) => entry !== promptId),
  ].slice(0, BIBLE_RECENT_LIMIT);
}

function getGrammarDifficultyLevel(difficulty) {
  if (difficulty === "easy") {
    return 1;
  }

  if (difficulty === "medium") {
    return 2;
  }

  return 3;
}

function getGrammarPool(skillId, difficulty) {
  const maxLevel = getGrammarDifficultyLevel(difficulty);
  return (GRAMMAR_PROMPTS[skillId] || []).filter((entry) => {
    if (difficulty === "easy") {
      return entry.level === 1;
    }

    if (difficulty === "medium") {
      return entry.level <= maxLevel;
    }

    return true;
  });
}

function getBiblePool(skillId, difficulty) {
  const maxLevel = getGrammarDifficultyLevel(difficulty);
  return (BIBLE_PROMPTS[skillId] || []).filter((entry) => {
    if (difficulty === "easy") {
      return entry.level === 1;
    }

    if (difficulty === "medium") {
      return entry.level <= maxLevel;
    }

    return true;
  });
}

function lowercaseSentenceStart(sentence) {
  return sentence.charAt(0).toLowerCase() + sentence.slice(1);
}

function lowercaseWordInSentence(sentence, word) {
  return sentence.replace(word, word.toLowerCase());
}

function lowercaseWordsInSentence(sentence, words) {
  return words.reduce((updated, word) => lowercaseWordInSentence(updated, word), sentence);
}

function uniqueTextChoices(choices) {
  return [...new Set(choices)];
}

function pickGrammarEntry(skillId, difficulty) {
  const pool = getGrammarPool(skillId, difficulty);
  const currentPromptId = state.currentProblem?.promptId;
  let candidates = pool.filter((entry) => !state.recentGrammarPrompts.includes(entry.id) && entry.id !== currentPromptId);

  if (candidates.length === 0) {
    candidates = pool.filter((entry) => entry.id !== currentPromptId);
  }

  const entry = chooseRandom(candidates.length > 0 ? candidates : pool);
  rememberGrammarPrompt(entry.id);
  return entry;
}

function pickBibleEntry(skillId, difficulty) {
  const pool = getBiblePool(skillId, difficulty);
  const currentPromptId = state.currentProblem?.promptId;
  let candidates = pool.filter((entry) => !state.recentBiblePrompts.includes(entry.id) && entry.id !== currentPromptId);

  if (candidates.length === 0) {
    candidates = pool.filter((entry) => entry.id !== currentPromptId);
  }

  const entry = chooseRandom(candidates.length > 0 ? candidates : pool);
  rememberBiblePrompt(entry.id);
  return entry;
}

function buildCapitalizationProblem(difficulty) {
  const entry = pickGrammarEntry("capitalization", difficulty);
  const brokenSentence = lowercaseWordsInSentence(lowercaseSentenceStart(entry.sentence), entry.properWords);
  const choiceVariants = uniqueTextChoices([
    entry.sentence,
    lowercaseSentenceStart(entry.sentence),
    lowercaseWordInSentence(entry.sentence, entry.properWords[0]),
    entry.properWords.length > 1 ? lowercaseWordsInSentence(entry.sentence, entry.properWords.slice(0, 2)) : brokenSentence,
    brokenSentence,
  ]).slice(0, 4);

  return {
    subjectId: GRAMMAR_SUBJECT_ID,
    skillId: "capitalization",
    difficulty,
    promptId: entry.id,
    answer: entry.sentence,
    questionText: "Which sentence has the correct capitalization?",
    displayText: brokenSentence,
    promptText: "Choose the sentence with correct capitalization.",
    spokenText: `Which sentence has the correct capitalization? ${brokenSentence}`,
    historyText: `Capital Letters - ${entry.sentence}`,
    choices: shuffle(choiceVariants),
    ruleText: entry.rule,
    supportText: "Look at the first word and any names, places, or special titles.",
    strongHintText: entry.strongHint,
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
  };
}

function buildPunctuationProblem(difficulty) {
  const entry = pickGrammarEntry("punctuation", difficulty);
  const choices = uniqueTextChoices([
    `${entry.stem}${entry.correctMark}`,
    `${entry.stem}.`,
    `${entry.stem}?`,
    `${entry.stem}!`,
    entry.stem,
  ]).slice(0, 4);

  return {
    subjectId: GRAMMAR_SUBJECT_ID,
    skillId: "punctuation",
    difficulty,
    promptId: entry.id,
    answer: `${entry.stem}${entry.correctMark}`,
    questionText: "Which sentence has the correct ending mark?",
    displayText: entry.stem,
    promptText: "Choose the sentence with correct punctuation.",
    spokenText: `Which sentence has the correct ending punctuation? ${entry.stem}`,
    historyText: `End Punctuation - ${entry.stem}${entry.correctMark}`,
    choices: shuffle(choices),
    ruleText: entry.rule,
    supportText: "Read the sentence aloud and listen for a telling, asking, or excited voice.",
    strongHintText: entry.strongHint,
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
  };
}

function buildWordClassProblem(skillId, difficulty) {
  const entry = pickGrammarEntry(skillId, difficulty);
  const questionText = skillId === "nouns" ? "Which word is the noun?" : "Which word is the verb?";
  const spokenLead = skillId === "nouns"
    ? "Which word is the noun in this sentence?"
    : "Which word is the verb in this sentence?";

  return {
    subjectId: GRAMMAR_SUBJECT_ID,
    skillId,
    difficulty,
    promptId: entry.id,
    answer: entry.answer,
    questionText,
    displayText: entry.sentence,
    promptText: questionText,
    spokenText: `${spokenLead} ${entry.sentence}`,
    historyText: `${getSkillDefinition(skillId, GRAMMAR_SUBJECT_ID).title} - ${entry.sentence}`,
    choices: shuffle(entry.choices),
    ruleText: entry.rule,
    supportText: skillId === "nouns"
      ? "Nouns name people, places, animals, or things."
      : "Verbs tell what someone or something does.",
    strongHintText: entry.strongHint,
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
  };
}

function buildSentenceFixProblem(difficulty) {
  const entry = pickGrammarEntry("sentence-fix", difficulty);

  return {
    subjectId: GRAMMAR_SUBJECT_ID,
    skillId: "sentence-fix",
    difficulty,
    promptId: entry.id,
    answer: entry.correct,
    questionText: "Which sentence is written correctly?",
    displayText: entry.broken,
    promptText: "Choose the sentence that is fixed correctly.",
    spokenText: `Which sentence is written correctly? ${entry.broken}`,
    historyText: `Sentence Fix-It - ${entry.correct}`,
    choices: shuffle(entry.choices),
    ruleText: entry.rule,
    supportText: "Check the beginning, any special words, and the ending mark.",
    strongHintText: entry.strongHint,
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
  };
}

function buildGrammarProblem(skillId, difficulty) {
  if (skillId === "capitalization") {
    return buildCapitalizationProblem(difficulty);
  }

  if (skillId === "punctuation") {
    return buildPunctuationProblem(difficulty);
  }

  if (skillId === "nouns" || skillId === "verbs") {
    return buildWordClassProblem(skillId, difficulty);
  }

  return buildSentenceFixProblem(difficulty);
}

function getGrammarHintMessage(problem) {
  if (problem.hintLevel === 0) {
    return "Need help? Tap Hint for a grammar rule reminder.";
  }

  if (problem.hintLevel === 1) {
    return problem.ruleText;
  }

  return problem.strongHintText;
}

function buildBibleProblem(skillId, difficulty) {
  const entry = pickBibleEntry(skillId, difficulty);

  return {
    subjectId: BIBLE_SUBJECT_ID,
    skillId,
    difficulty,
    promptId: entry.id,
    answer: entry.answer,
    questionText: entry.questionText,
    displayText: entry.displayText,
    promptText: entry.questionText,
    spokenText: entry.spokenText,
    historyText: entry.historyText,
    choices: shuffle(entry.choices),
    ruleText: entry.ruleText,
    supportText: entry.supportText,
    strongHintText: entry.strongHintText,
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
  };
}

function getBibleHintMessage(problem) {
  if (problem.hintLevel === 0) {
    return "Need help? Tap Hint for a Bible clue.";
  }

  if (problem.hintLevel === 1) {
    return problem.ruleText;
  }

  return problem.strongHintText;
}

function renderSubjects() {
  const hasProfile = Boolean(state.activeProfile);

  els.homeCurrentLearner.textContent = hasProfile
    ? `${state.activeProfile.name} - ${formatGradeLabel(getProfileGrade(state.activeProfile))}`
    : "No learner selected";

  els.subjectsGrid.innerHTML = SUBJECTS.map((subject) => {
    const readyClass = subject.available ? "subject-card-ready" : "subject-card-soon";
    const statusClass = subject.available ? "subject-status-ready" : "subject-status-soon";
    const canOpen = subject.available && hasProfile;
    const buttonLabel = !subject.available
      ? "Coming Soon"
      : !hasProfile
        ? "Choose Learner First"
        : `Open ${subject.title}`;
    const buttonClass = canOpen ? "primary-button" : "secondary-button";

    return `
      <article class="subject-card ${readyClass}">
        <div class="subject-card-head">
          <span class="subject-icon"><i class="fa-solid ${subject.icon}"></i></span>
          <span class="subject-status ${statusClass}">${subject.status}</span>
        </div>
        <div>
          <h3>${subject.title}</h3>
          <p>${subject.description}</p>
        </div>
        <div class="subject-meta-row">
          <span class="subject-meta"><i class="fa-solid fa-circle-check"></i> ${subject.highlights[0]}</span>
          <span class="subject-meta"><i class="fa-solid fa-wand-magic-sparkles"></i> ${subject.highlights[1]}</span>
        </div>
        <button
          class="${buttonClass}"
          type="button"
          data-subject-id="${subject.id}"
          ${canOpen ? "" : "disabled"}
        ><i class="fa-solid ${subject.icon}"></i> ${buttonLabel}</button>
      </article>
    `;
  }).join("");
}

function renderHeaderLearner() {
  if (!state.activeProfile) {
    els.headerLearnerPill.innerHTML = '<i class="fa-solid fa-user"></i> No learner selected';
    els.headerStarsPill.classList.add("hidden");
    els.headerStreakPill.classList.add("hidden");
    els.headerRoundPill.classList.add("hidden");
    return;
  }

  els.headerLearnerPill.innerHTML = `<i class="fa-solid fa-user-graduate"></i> ${escapeHtml(state.activeProfile.name)}`;
  els.headerStarsPill.innerHTML = `<i class="fa-solid fa-star"></i> ${state.activeProfile.stars}`;
  els.headerStreakPill.innerHTML = `<i class="fa-solid fa-fire"></i> ${state.activeProfile.streak}`;
  els.headerStarsPill.classList.remove("hidden");
  els.headerStreakPill.classList.remove("hidden");

  if (state.activeSubjectId) {
    const roundText = state.round.completed
      ? `R${state.round.number} done`
      : `R${state.round.number} ${state.round.solved}/${state.round.target}`;
    els.headerRoundPill.innerHTML = `<i class="fa-solid fa-flag-checkered"></i> ${roundText}`;
    els.headerRoundPill.classList.remove("hidden");
  } else {
    els.headerRoundPill.classList.add("hidden");
  }
}

function scrollToLearningPaths() {
  requestAnimationFrame(() => {
    els.curriculumCard.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function toggleProfileFormPanel() {
  closeHeaderMenu();
  state.showProfileForm = !state.showProfileForm;
  renderProfiles();

  if (state.showProfileForm) {
    requestAnimationFrame(() => {
      els.childName.focus();
      els.profileFormPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }
}

function updateSpellingPreview() {
  if (!isSpellingView() || !usesCustomSpellingKeyboard()) {
    els.spellingPreview.textContent = "";
    els.spellingPreview.classList.add("hidden");
    els.spellingPreview.classList.remove("placeholder");
    return;
  }

  const previewText = els.answerInput.value || (state.currentProblem ? "Type the word" : "Tap here to type the word");
  els.spellingPreview.textContent = previewText;
  els.spellingPreview.classList.remove("hidden");
  els.spellingPreview.classList.toggle("placeholder", !els.answerInput.value);
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function usesCustomSpellingKeyboard() {
  return isSpellingView() && isMobileViewport();
}

function renderSpellingKeyboard() {
  const topRow = SPELLING_KEY_ROWS[0].split("").map((letter) => `
    <button class="secondary-button spelling-key" type="button" data-key="${letter.toLowerCase()}">${letter}</button>
  `).join("");
  const middleRow = SPELLING_KEY_ROWS[1].split("").map((letter) => `
    <button class="secondary-button spelling-key" type="button" data-key="${letter.toLowerCase()}">${letter}</button>
  `).join("");
  const bottomLetters = SPELLING_KEY_ROWS[2].split("").map((letter) => `
    <button class="secondary-button spelling-key" type="button" data-key="${letter.toLowerCase()}">${letter}</button>
  `).join("");

  els.spellingKeyboard.innerHTML = `
    <div class="spelling-key-row spelling-key-row-top">${topRow}</div>
    <div class="spelling-key-row spelling-key-row-middle">${middleRow}</div>
    <div class="spelling-key-row spelling-key-row-bottom">
      ${bottomLetters}
      <button class="secondary-button spelling-key spelling-key-utility" type="button" data-key-action="backspace" aria-label="Backspace"><i class="fa-solid fa-delete-left"></i></button>
    </div>
    <div class="spelling-key-actions">
      <button class="secondary-button spelling-key spelling-key-clear" type="button" data-key-action="clear"><i class="fa-solid fa-eraser"></i> Clear Word</button>
    </div>
  `;
}

function configureAnswerInputForSpelling() {
  const customKeyboard = usesCustomSpellingKeyboard();
  els.answerForm.setAttribute("autocomplete", "off");
  els.answerForm.setAttribute("autocorrect", "off");
  els.answerForm.setAttribute("autocapitalize", "off");
  els.answerForm.setAttribute("spellcheck", "false");
  els.answerInput.type = "text";
  els.answerInput.inputMode = customKeyboard ? "none" : "text";
  els.answerInput.placeholder = customKeyboard ? "" : "Type the word";
  els.answerInput.name = "spelling-answer";
  els.answerInput.setAttribute("autocomplete", "off");
  els.answerInput.setAttribute("autocorrect", "off");
  els.answerInput.setAttribute("autocapitalize", "none");
  els.answerInput.setAttribute("spellcheck", "false");
  els.answerInput.setAttribute("aria-autocomplete", "none");
  els.answerInput.setAttribute("enterkeyhint", "done");
  els.answerInput.setAttribute("data-form-type", "other");
  els.answerInput.setAttribute("data-lpignore", "true");
  els.answerInput.readOnly = customKeyboard;
  els.answerInput.tabIndex = customKeyboard ? -1 : 0;
  els.answerForm.classList.toggle("custom-spelling-keyboard", customKeyboard);
  els.spellingKeyboard.classList.toggle("hidden", !customKeyboard);
  updateSpellingPreview();
}

function configureAnswerInputForMath() {
  els.answerForm.setAttribute("autocomplete", "off");
  els.answerForm.setAttribute("autocorrect", "off");
  els.answerForm.setAttribute("autocapitalize", "off");
  els.answerForm.setAttribute("spellcheck", "false");
  els.answerInput.type = "number";
  els.answerInput.inputMode = "numeric";
  els.answerInput.placeholder = "Type your answer";
  els.answerInput.name = "answer";
  els.answerInput.setAttribute("autocomplete", "off");
  els.answerInput.setAttribute("autocorrect", "off");
  els.answerInput.setAttribute("autocapitalize", "none");
  els.answerInput.setAttribute("spellcheck", "false");
  els.answerInput.removeAttribute("aria-autocomplete");
  els.answerInput.removeAttribute("enterkeyhint");
  els.answerInput.removeAttribute("data-form-type");
  els.answerInput.removeAttribute("data-lpignore");
  els.answerInput.readOnly = false;
  els.answerInput.tabIndex = 0;
  els.answerForm.classList.remove("custom-spelling-keyboard");
  els.spellingKeyboard.classList.add("hidden");
  updateSpellingPreview();
}

function updateHeaderMenu() {
  document.body.classList.toggle("header-menu-open", state.headerMenuOpen);
  els.headerMenuToggle.setAttribute("aria-expanded", String(state.headerMenuOpen));
  els.headerMenuToggle.setAttribute("aria-label", state.headerMenuOpen ? "Close menu" : "Open menu");
  els.headerMenuToggle.innerHTML = state.headerMenuOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
}

function closeHeaderMenu() {
  if (!state.headerMenuOpen) {
    return;
  }

  state.headerMenuOpen = false;
  updateHeaderMenu();
}

function toggleHeaderMenu() {
  state.headerMenuOpen = !state.headerMenuOpen;
  updateHeaderMenu();
}

function renderSubjectHeader() {
  const subject = getSubjectDefinition(state.activeSubjectId || MATH_SUBJECT_ID);

  els.subjectEyebrow.textContent = state.activeSubjectId ? `${subject.title} Workspace` : "Current Subject";
  if (subject.id === MATH_SUBJECT_ID) {
    els.subjectTitleText.textContent = "Math Studio";
    els.subjectDescriptionText.textContent = "Choose a math skill, work through a round, and keep building confidence one problem at a time.";
  } else if (subject.id === SPELLING_SUBJECT_ID) {
    els.subjectTitleText.textContent = "Spelling Studio";
    els.subjectDescriptionText.textContent = "Hear the word, type the spelling, and practice words that match the learner's grade level.";
  } else if (subject.id === GRAMMAR_SUBJECT_ID) {
    els.subjectTitleText.textContent = "Grammar Studio";
    els.subjectDescriptionText.textContent = "Practice grammar the traditional way with capitals, punctuation, parts of speech, and sentence repair.";
  } else if (subject.id === BIBLE_SUBJECT_ID) {
    els.subjectTitleText.textContent = "Bible Studio";
    els.subjectDescriptionText.textContent = "Practice doctrine words, Bible facts, and verse fill-ins with guided multiple-choice review.";
  }

  if (!state.activeProfile) {
    els.currentLearnerName.textContent = "No learner selected";
    els.learnerStarsChip.innerHTML = '<i class="fa-solid fa-star"></i> 0 stars';
    els.learnerStreakChip.innerHTML = '<i class="fa-solid fa-fire"></i> 0 streak';
    els.currentLearnerAvatar.className = "avatar-dot sunrise";
    return;
  }

  els.currentLearnerName.textContent = `${state.activeProfile.name}, ${formatGradeLabel(getProfileGrade(state.activeProfile))}`;
  els.learnerStarsChip.innerHTML = `<i class="fa-solid fa-star"></i> ${state.activeProfile.stars} stars`;
  els.learnerStreakChip.innerHTML = `<i class="fa-solid fa-fire"></i> ${state.activeProfile.streak} streak`;
  els.currentLearnerAvatar.className = `avatar-dot ${state.activeProfile.avatarColor}`;
}

function setFeedback(message) {
  els.feedback.textContent = message;
}

function getServerUrl(relativePath) {
  return new URL(relativePath, `${SERVER_ORIGIN}/`).toString();
}

async function loadSpellingCurriculum() {
  const loadedCurriculum = {};

  await Promise.all(Object.entries(GRADE_SPELLING_FILES).map(async ([grade, path]) => {
    try {
      const response = await fetch(getServerUrl(path));
      if (!response.ok) {
        throw new Error(`Unable to load ${path}`);
      }

      loadedCurriculum[grade] = await response.json();
    } catch (error) {
      console.warn(`Could not load spelling curriculum for grade ${grade}.`, error);
    }
  }));

  state.spellingCurriculumByGrade = loadedCurriculum;
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains("profiles")) {
        const profiles = db.createObjectStore("profiles", { keyPath: "id" });
        profiles.createIndex("updatedAt", "updatedAt");
      }

      if (!db.objectStoreNames.contains("sessions")) {
        const sessions = db.createObjectStore("sessions", { keyPath: "id" });
        sessions.createIndex("profileId", "profileId");
        sessions.createIndex("startedAt", "startedAt");
      }

      if (!db.objectStoreNames.contains("answers")) {
        const answers = db.createObjectStore("answers", { keyPath: "id" });
        answers.createIndex("profileId", "profileId");
        answers.createIndex("sessionId", "sessionId");
        answers.createIndex("createdAt", "createdAt");
      }
    };
  });
}

function runStore(storeName, mode, action) {
  return new Promise((resolve, reject) => {
    const transaction = state.db.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);
    const request = action(store);

    transaction.oncomplete = () => resolve(request?.result);
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

async function getAll(storeName) {
  return runStore(storeName, "readonly", (store) => store.getAll());
}

async function putRecord(storeName, value) {
  return runStore(storeName, "readwrite", (store) => store.put(value));
}

async function addRecord(storeName, value) {
  return runStore(storeName, "readwrite", (store) => store.add(value));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function updateLayout() {
  const inSubject = Boolean(state.activeSubjectId);
  const inMath = isMathView();
  const inSpelling = isSpellingView();
  const inGrammar = isGrammarView();
  const inBible = isBibleView();
  const needsSkillPicker = getSkillsForSubject(state.activeSubjectId).length > 0;
  const hasProfile = Boolean(state.activeProfile);
  const hasSkill = Boolean(state.activeSkillId);
  const collapsed = hasSkill && !state.skillPickerExpanded;
  const shouldShowSkillPicker = needsSkillPicker && hasProfile;
  const shouldShowLesson = inSubject && hasProfile && hasSkill;

  els.homeView.classList.toggle("hidden", inSubject);
  els.subjectView.classList.toggle("hidden", !inSubject);
  els.goHome.classList.toggle("hidden", !inSubject);
  els.difficultyField.classList.toggle("hidden", inSpelling);
  els.chooseLearner.innerHTML = inSubject
    ? '<i class="fa-solid fa-user-pen"></i> Change Learner'
    : '<i class="fa-solid fa-child-reaching"></i> Choose Learner';
  renderHeaderLearner();

  if (!inSubject) {
    if (!state.isMuted) {
      els.voiceStatus.textContent = window.location.protocol === "file:"
        ? "Opened as a file. Audio requests will target http://localhost:3000 when a subject starts."
        : `${APP_NAME} voice is ready. Choose a learner and a subject to begin.`;
    }
    return;
  }

  renderSubjectHeader();
  els.emptyStateCard.classList.toggle("hidden", hasProfile);
  els.skillPickerCard.classList.toggle("hidden", !shouldShowSkillPicker);
  els.dashboardCard.classList.toggle("hidden", !hasProfile);
  els.activityCard.classList.toggle("hidden", !hasProfile);
  els.lessonCard.classList.toggle("hidden", !shouldShowLesson);
  els.toggleSkillPicker.classList.toggle("hidden", !needsSkillPicker || !hasProfile || !hasSkill);
  els.skillPickerBody.classList.toggle("hidden", collapsed);
  els.skillPickerCard.classList.toggle("collapsed", collapsed);
  els.hintProblem.classList.toggle("hidden", !(inSpelling || isChoiceView()));
  els.spellingHintPanel.classList.toggle("hidden", !inSpelling);
  els.grammarPanel.classList.toggle("hidden", !isChoiceView());
  els.choicePanel.classList.toggle("hidden", !isChoiceView());
  els.answerForm.classList.toggle("hidden", isChoiceView());

  if (!hasProfile) {
    els.selectedSkillChip.textContent = "No skill selected";
    els.recommendationNote.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Pick a learner to unlock a recommendation.';
    els.lessonBadge.textContent = needsSkillPicker ? "Choose a skill" : "Choose a learner";
    els.problemText.textContent = inMath ? "4 + 3 = ?" : inSpelling ? "_ _ _ _ _" : inBible ? "Bible study" : "Grammar practice";
    els.promptLabel.textContent = inMath ? "Solve this problem" : inSpelling ? "Listen and spell this word" : inBible ? "Choose a Bible skill" : "Choose a grammar skill";
    els.problemHelper.textContent = inMath
      ? STATIC_SPEECH.promptReady
      : inSpelling
        ? STATIC_SPEECH.spellingPromptReady
        : inBible
          ? STATIC_SPEECH.biblePromptReady
          : STATIC_SPEECH.grammarPromptReady;
    if (!state.isMuted) {
      els.voiceStatus.textContent = "Choose a learner to activate the studio voice.";
    }
  } else if (needsSkillPicker && !hasSkill) {
    els.selectedSkillChip.textContent = "No skill selected";
    els.lessonBadge.textContent = "Choose a skill";
    els.problemText.textContent = inMath ? "Choose a skill" : inBible ? "Choose a Bible skill" : "Choose a grammar skill";
    els.promptLabel.textContent = inMath ? "Choose a math skill" : inBible ? "Choose a Bible skill" : "Choose a grammar skill";
    els.problemHelper.textContent = inMath ? STATIC_SPEECH.promptReady : inBible ? STATIC_SPEECH.biblePromptReady : STATIC_SPEECH.grammarPromptReady;
  } else if (inSpelling && !state.currentProblem) {
    els.promptLabel.textContent = "Listen and spell this word";
    els.problemHelper.textContent = STATIC_SPEECH.spellingPromptReady;
    els.problemText.textContent = "_ _ _ _ _";
    els.lessonBadge.textContent = getSpellingBadgeText();
    els.hintStatus.classList.remove("review-chip");
    els.hintStatus.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Use Hint to reveal a few letters.';
    els.clueText.innerHTML = "";
  } else if (inGrammar && !state.currentProblem) {
    els.promptLabel.textContent = "Choose the best grammar answer";
    els.problemHelper.textContent = STATIC_SPEECH.grammarPromptReady;
    els.problemText.textContent = "Grammar practice";
    els.lessonBadge.textContent = state.activeSkillId ? `${getSkillDefinition(state.activeSkillId, GRAMMAR_SUBJECT_ID).title} - ${capitalize(els.difficulty.value)}` : "Choose a skill";
    els.grammarRuleChip.innerHTML = '<i class="fa-solid fa-book-open"></i> Use Hint to see a grammar rule.';
    els.grammarExampleText.textContent = "";
    els.choiceGrid.innerHTML = "";
  } else if (inBible && !state.currentProblem) {
    els.promptLabel.textContent = "Choose the best Bible answer";
    els.problemHelper.textContent = STATIC_SPEECH.biblePromptReady;
    els.problemText.textContent = "Bible study";
    els.lessonBadge.textContent = state.activeSkillId ? `${getSkillDefinition(state.activeSkillId, BIBLE_SUBJECT_ID).title} - ${capitalize(els.difficulty.value)}` : "Choose a skill";
    els.grammarRuleChip.innerHTML = '<i class="fa-solid fa-book-bible"></i> Use Hint to hear a Bible clue.';
    els.grammarExampleText.textContent = "";
    els.choiceGrid.innerHTML = "";
  }

  if (needsSkillPicker && hasSkill) {
    els.toggleSkillPicker.innerHTML = collapsed
      ? '<i class="fa-solid fa-pen"></i> Change Skill'
      : '<i class="fa-solid fa-chevron-up"></i> Hide Skills';
  }
}

function renderProfiles() {
  const hasProfiles = state.profiles.length > 0;
  const shouldShowForm = !hasProfiles || state.showProfileForm;

  els.profileFormPanel.classList.toggle("hidden", !shouldShowForm);
  els.toggleProfileForm.classList.toggle("hidden", !hasProfiles);
  els.toggleProfileForm.innerHTML = shouldShowForm
    ? '<i class="fa-solid fa-xmark"></i> Cancel'
    : '<i class="fa-solid fa-user-plus"></i> Add New Child';

  if (!hasProfiles) {
    els.profilesList.innerHTML = '<div class="profile-item"><div class="profile-meta"><strong>No profiles yet</strong><span>Create your first learner profile below.</span></div></div>';
    return;
  }

  els.profilesList.innerHTML = state.profiles.map((profile) => {
    const activeLabel = profile.id === state.activeProfileId ? "Selected" : "Choose";
    return `
      <article class="profile-item">
        <div class="avatar-dot ${profile.avatarColor}"></div>
        <div class="profile-meta">
          <strong>${escapeHtml(profile.name)}</strong>
          <span><i class="fa-solid fa-school"></i> ${formatGradeLabel(getProfileGrade(profile))} - <i class="fa-solid fa-star"></i> ${profile.stars} stars</span>
        </div>
        <button class="secondary-button small-button profile-select" type="button" data-profile-id="${profile.id}"><i class="fa-solid fa-hand-pointer"></i> ${activeLabel}</button>
      </article>
    `;
  }).join("");
}

function renderSkills(answers) {
  const skills = getSkillsForSubject();

  if (!state.activeProfile) {
    els.skillsList.innerHTML = "";
    els.selectedSkillChip.textContent = "No skill selected";
    els.recommendationNote.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Pick a learner to unlock a recommendation.';
    return;
  }

  if (skills.length === 0) {
    els.skillsList.innerHTML = "";
    els.selectedSkillChip.textContent = "No skill selected";
    els.recommendationNote.innerHTML = '<i class="fa-solid fa-lightbulb"></i> This subject is loading its next lesson path.';
    return;
  }

  const usage = getSkillUsage(answers, state.activeSubjectId);
  const stats = getSkillStats(answers, state.activeSubjectId);
  const recommendedSkillId = getRecommendedSkillId(answers, state.activeSubjectId);
  const recommendedSkill = getSkillDefinition(recommendedSkillId, state.activeSubjectId);
  const recommendationReason = getRecommendationReason(stats, recommendedSkillId);
  const selectedSkill = state.activeSkillId ? getSkillDefinition(state.activeSkillId, state.activeSubjectId) : null;
  els.selectedSkillChip.textContent = selectedSkill ? selectedSkill.title : "No skill selected";
  els.recommendationNote.innerHTML = `<i class="fa-solid fa-lightbulb"></i> Recommended next: <strong>${recommendedSkill.title}</strong>. ${recommendationReason}`;

  els.skillsList.innerHTML = skills.map((skill) => {
    const activeClass = state.activeSkillId === skill.id ? "active-skill" : "";
    const recommendedClass = recommendedSkillId === skill.id ? "recommended-skill" : "";
    const label = state.activeSkillId === skill.id ? "Continue Skill" : recommendedSkillId === skill.id ? "Start Recommended" : "Choose Skill";
    const lastUsed = getLastUsedMeta(usage[skill.id]);
    const skillStats = stats[skill.id];
    const accuracyText = skillStats.attempts > 0 ? `${Math.round(skillStats.accuracy * 100)}% correct` : "New skill";
    return `
      <article class="skill-item ${activeClass} ${recommendedClass}">
        <div class="skill-title-row">
          <div class="skill-heading">
            <span class="skill-icon"><i class="fa-solid ${getSkillIcon(skill.id)}"></i></span>
            <h3>${skill.title}</h3>
          </div>
          ${recommendedSkillId === skill.id ? '<span class="recommend-badge"><i class="fa-solid fa-star"></i> Recommended</span>' : ""}
        </div>
        <p>${skill.description}</p>
        <span class="skill-meta"><i class="fa-solid fa-chart-line"></i> ${accuracyText}</span>
        <span class="skill-meta skill-usage-badge ${lastUsed.className}"><i class="fa-solid ${lastUsed.icon}"></i> ${lastUsed.label}</span>
        <button class="secondary-button skill-select" type="button" data-skill-id="${skill.id}">${label}</button>
      </article>
    `;
  }).join("");
}

function renderActivity(answers) {
  if (answers.length === 0) {
    els.activityList.innerHTML = '<article class="activity-item"><strong>No activity yet</strong><span>Answered problems will appear here.</span></article>';
    return;
  }

  const recent = answers
    .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || ""))
    .slice(0, 8);

  els.activityList.innerHTML = recent.map((answer) => {
    const subjectId = getRecordSubjectId(answer);
    const subject = getSubjectDefinition(subjectId);
    const skill = subjectId === SPELLING_SUBJECT_ID
      ? { title: "Spelling Practice", id: SPELLING_SKILL_ID }
      : getSkillDefinition(answer.skillId || answer.operation || "addition", subjectId);
    const levelText = subjectId === SPELLING_SUBJECT_ID
      ? formatGradeLabel(answer.grade || getProfileGrade(state.activeProfile))
      : capitalize(answer.difficulty);
    return `
      <article class="activity-item">
        <strong><i class="fa-solid ${answer.correct ? "fa-circle-check" : "fa-rotate-right"}"></i> ${escapeHtml(answer.problemText)} ${answer.correct ? "Correct" : "Try Again"}</strong>
        <span><i class="fa-solid ${subject.icon}"></i> ${subject.title} - ${skill.title} - ${levelText} - ${formatDate(answer.createdAt)}</span>
      </article>
    `;
  }).join("");
}

async function refreshDashboard() {
  const profile = state.activeProfile;

  if (!profile) {
    els.rewardProgress.style.width = "0%";
    els.rewardProgressText.textContent = "0 / 10 stars to next badge";
    renderActivity([]);
    renderSkills([]);
    renderRound();
    updateLayout();
    return;
  }

  const activeSubjectId = state.activeSubjectId || MATH_SUBJECT_ID;
  const answers = (await getAll("answers")).filter((answer) => answer.profileId === profile.id && getRecordSubjectId(answer) === activeSubjectId);
  const nextBadge = BADGES.find((badge) => profile.stars < badge.requirement) || BADGES[BADGES.length - 1];
  const previousRequirement = BADGES
    .filter((badge) => badge.requirement < nextBadge.requirement)
    .reduce((max, badge) => Math.max(max, badge.requirement), 0);
  const progressBase = Math.max(0, profile.stars - previousRequirement);
  const progressNeeded = nextBadge.requirement - previousRequirement;
  const progressPercent = progressNeeded > 0
    ? Math.min(100, Math.round((progressBase / progressNeeded) * 100))
    : 100;

  els.rewardProgress.style.width = `${progressPercent}%`;
  els.rewardProgressText.textContent = profile.stars >= BADGES[BADGES.length - 1].requirement
    ? `${BADGES[BADGES.length - 1].title} unlocked`
    : `${profile.stars} / ${nextBadge.requirement} stars to ${nextBadge.title}`;
  renderActivity(answers);
  renderSkills(getSkillsForSubject(activeSubjectId).length > 0 ? answers : []);
  renderRound();
  updateLayout();
}

async function refreshProfiles() {
  const profiles = await getAll("profiles");
  state.profiles = profiles
    .map((profile) => normalizeProfile(profile))
    .sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  state.activeProfile = state.profiles.find((profile) => profile.id === state.activeProfileId) || null;

  if (!state.activeProfile) {
    state.activeSkillId = null;
    state.currentProblem = null;
  }

  renderProfiles();
  renderHeaderLearner();
  renderSubjects();
  await refreshDashboard();
}

function getNumberRange(difficulty) {
  if (difficulty === "easy") {
    return { min: 1, max: 10 };
  }
  if (difficulty === "hard") {
    return { min: 10, max: 30 };
  }
  return { min: 1, max: 20 };
}

function getFactMax(difficulty) {
  if (difficulty === "easy") {
    return 5;
  }
  if (difficulty === "hard") {
    return 12;
  }
  return 10;
}

function getTimesTableRange(difficulty) {
  if (difficulty === "easy") {
    return { min: 2, max: 5 };
  }
  if (difficulty === "hard") {
    return { min: 2, max: 12 };
  }
  return { min: 2, max: 9 };
}

function buildMathProblem(skillId, difficulty) {
  if (skillId === "addition") {
    const { min, max } = getNumberRange(difficulty);
    const left = randomNumber(min, max);
    const right = randomNumber(min, max);
    return {
      subjectId: MATH_SUBJECT_ID,
      skillId,
      difficulty,
      answer: left + right,
      promptText: `${left} + ${right} = ?`,
      spokenText: `What is ${left} plus ${right}?`,
      historyText: `${left} + ${right}`,
      hadMistake: false,
      usedHint: false,
    };
  }

  if (skillId === "subtraction") {
    const { min, max } = getNumberRange(difficulty);
    let left = randomNumber(min, max);
    let right = randomNumber(min, max);
    if (right > left) {
      [left, right] = [right, left];
    }
    return {
      subjectId: MATH_SUBJECT_ID,
      skillId,
      difficulty,
      answer: left - right,
      promptText: `${left} - ${right} = ?`,
      spokenText: `What is ${left} minus ${right}?`,
      historyText: `${left} - ${right}`,
      hadMistake: false,
      usedHint: false,
    };
  }

  if (skillId === "multiplication") {
    const max = getFactMax(difficulty);
    const left = randomNumber(1, max);
    const right = randomNumber(1, max);
    return {
      subjectId: MATH_SUBJECT_ID,
      skillId,
      difficulty,
      answer: left * right,
      promptText: `${left} x ${right} = ?`,
      spokenText: `What is ${left} times ${right}?`,
      historyText: `${left} x ${right}`,
      hadMistake: false,
      usedHint: false,
    };
  }

  if (skillId === "division") {
    const max = getFactMax(difficulty);
    const divisor = randomNumber(1, max);
    const quotient = randomNumber(1, max);
    const dividend = divisor * quotient;
    return {
      subjectId: MATH_SUBJECT_ID,
      skillId,
      difficulty,
      answer: quotient,
      promptText: `${dividend} / ${divisor} = ?`,
      spokenText: `What is ${dividend} divided by ${divisor}?`,
      historyText: `${dividend} / ${divisor}`,
      hadMistake: false,
      usedHint: false,
    };
  }

  const tableRange = getTimesTableRange(difficulty);
  const table = randomNumber(tableRange.min, tableRange.max);
  const factor = randomNumber(1, 12);
  return {
    subjectId: MATH_SUBJECT_ID,
    skillId,
    difficulty,
    answer: table * factor,
    promptText: `${table} x ${factor} = ?`,
    spokenText: `What is ${table} times ${factor}?`,
    historyText: `${table} x ${factor}`,
    hadMistake: false,
    usedHint: false,
  };
}

function buildSpellingProblem(difficulty, recentWords = []) {
  const grade = getProfileGrade(state.activeProfile);
  const words = getSpellingEntriesForGrade(grade);
  const recentSet = new Set(
    [...recentWords, ...state.recentSpellingWords, state.currentProblem?.answer]
      .filter(Boolean)
      .map((word) => String(word).toLowerCase()),
  );
  let candidates = words.filter((wordEntry) => !recentSet.has(wordEntry.word.toLowerCase()));

  if (candidates.length === 0) {
    const fallbackCandidates = words.filter((wordEntry) => wordEntry.word.toLowerCase() !== state.currentProblem?.answer);
    candidates = fallbackCandidates.length > 0 ? fallbackCandidates : words;
  }

  const entry = chooseRandom(candidates);
  rememberSpellingWord(entry.word);

  return {
    subjectId: SPELLING_SUBJECT_ID,
    skillId: SPELLING_SKILL_ID,
    difficulty: getRecommendedSpellingDifficulty(state.activeProfile),
    grade,
    answer: entry.word.toLowerCase(),
    promptText: `${entry.word.length} letters`,
    spokenText: `Spell ${entry.word}. ${entry.definition || entry.clue}`,
    historyText: `Spelling word - ${formatGradeLabel(grade)} - ${entry.unitTitle || entry.category} - ${entry.word.length} letters`,
    clue: entry.definition || entry.clue,
    category: entry.category,
    unit: entry.unit || null,
    unitTitle: entry.unitTitle || entry.category || "",
    pattern: entry.pattern || "",
    exampleSentence: entry.sentence || "",
    hintLevel: 0,
    hadMistake: false,
    usedHint: false,
    lastSubmittedAnswer: "",
  };
}

function renderCurrentProblem() {
  els.lessonCard.classList.toggle("spelling-view", isSpellingView());
  els.problemText.classList.toggle("grammar-problem-text", isChoiceView());
  els.answerRepeatProblem.classList.toggle("hidden", !isSpellingView());
  els.answerHintProblem.classList.toggle("hidden", !isSpellingView());

  if (isSpellingView()) {
    els.lessonTitle.innerHTML = '<i class="fa-solid fa-spell-check"></i> Spelling Studio';
    els.promptLabel.textContent = "Listen and spell this word";
    els.problemHelper.textContent = STATIC_SPEECH.spellingPromptReady;
    configureAnswerInputForSpelling();
    els.newProblem.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> New Word';
    els.repeatProblem.innerHTML = '<i class="fa-solid fa-volume-high"></i> Hear Word Again';
    els.hintProblem.classList.remove("hidden");
    els.spellingHintPanel.classList.remove("hidden");
    els.grammarPanel.classList.add("hidden");
    els.choicePanel.classList.add("hidden");
    els.answerForm.classList.remove("hidden");

    if (!state.currentProblem) {
      els.lessonBadge.textContent = getSpellingBadgeText();
      els.problemText.textContent = "_ _ _ _ _";
      els.hintStatus.classList.remove("review-chip");
      els.hintStatus.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Use Hint to reveal a few letters.';
      els.clueText.innerHTML = "";
      updateSpellingPreview();
      return;
    }

    els.lessonBadge.textContent = getSpellingBadgeText(state.activeProfile, state.currentProblem);
    els.problemText.textContent = getSpellingMask(state.currentProblem.answer, state.currentProblem.hintLevel);
    if (state.currentProblem.lastSubmittedAnswer) {
      els.hintStatus.classList.add("review-chip");
      els.hintStatus.innerHTML = '<i class="fa-solid fa-spell-check"></i> Let&apos;s fix this word together.';
      els.clueText.innerHTML = getSpellingReviewMarkup(state.currentProblem);
    } else {
      els.hintStatus.classList.remove("review-chip");
      els.hintStatus.innerHTML = `<i class="fa-solid fa-lightbulb"></i> ${getSpellingHintMessage(state.currentProblem)}`;
      els.clueText.textContent = state.currentProblem.hintLevel > 0
        ? `Clue: ${state.currentProblem.clue}`
        : state.currentProblem.unit
          ? `Unit ${state.currentProblem.unit}: ${state.currentProblem.unitTitle}`
          : `Grade Focus: ${state.currentProblem.unitTitle || state.currentProblem.category}`;
    }
    updateSpellingPreview();
    return;
  }

  if (isGrammarView()) {
    els.lessonTitle.innerHTML = '<i class="fa-solid fa-pen-nib"></i> Grammar Studio';
    els.promptLabel.textContent = state.currentProblem?.questionText || "Choose the best grammar answer";
    els.problemHelper.textContent = STATIC_SPEECH.grammarPromptReady;
    els.newProblem.innerHTML = '<i class="fa-solid fa-book"></i> New Sentence';
    els.repeatProblem.innerHTML = '<i class="fa-solid fa-volume-high"></i> Read Again';
    els.hintProblem.classList.remove("hidden");
    els.grammarPanel.classList.remove("hidden");
    els.choicePanel.classList.remove("hidden");
    els.answerForm.classList.add("hidden");
    els.answerForm.classList.remove("custom-spelling-keyboard");
    els.spellingHintPanel.classList.add("hidden");
    els.spellingKeyboard.classList.add("hidden");
    updateSpellingPreview();

    if (!state.currentProblem) {
      els.lessonBadge.textContent = state.activeSkillId ? `${getSkillDefinition(state.activeSkillId, GRAMMAR_SUBJECT_ID).title} - ${capitalize(els.difficulty.value)}` : "Choose a skill";
      els.problemText.textContent = "Grammar practice";
      els.grammarRuleChip.innerHTML = '<i class="fa-solid fa-book-open"></i> Use Hint to see a grammar rule.';
      els.grammarExampleText.textContent = "";
      els.choiceGrid.innerHTML = "";
      return;
    }

    els.lessonBadge.textContent = `${getSkillDefinition(state.activeSkillId, GRAMMAR_SUBJECT_ID).title} - ${capitalize(state.currentProblem.difficulty)}`;
    els.problemText.textContent = state.currentProblem.displayText;
    els.grammarRuleChip.innerHTML = `<i class="fa-solid fa-book-open"></i> ${getGrammarHintMessage(state.currentProblem)}`;
    els.grammarExampleText.textContent = state.currentProblem.hintLevel > 0
      ? state.currentProblem.strongHintText
      : state.currentProblem.supportText;
    els.choiceGrid.innerHTML = state.currentProblem.choices.map((choice, index) => `
      <button class="secondary-button choice-button" type="button" data-choice-value="${escapeHtml(choice)}">
        <strong>${String.fromCharCode(65 + index)}.</strong>${escapeHtml(choice)}
      </button>
    `).join("");
    return;
  }

  if (isBibleView()) {
    els.lessonTitle.innerHTML = '<i class="fa-solid fa-cross"></i> Bible Studio';
    els.promptLabel.textContent = state.currentProblem?.questionText || "Choose the best Bible answer";
    els.problemHelper.textContent = STATIC_SPEECH.biblePromptReady;
    els.newProblem.innerHTML = '<i class="fa-solid fa-book-bible"></i> New Question';
    els.repeatProblem.innerHTML = '<i class="fa-solid fa-volume-high"></i> Read Again';
    els.hintProblem.classList.remove("hidden");
    els.grammarPanel.classList.remove("hidden");
    els.choicePanel.classList.remove("hidden");
    els.answerForm.classList.add("hidden");
    els.answerForm.classList.remove("custom-spelling-keyboard");
    els.spellingHintPanel.classList.add("hidden");
    els.spellingKeyboard.classList.add("hidden");
    updateSpellingPreview();

    if (!state.currentProblem) {
      els.lessonBadge.textContent = state.activeSkillId ? `${getSkillDefinition(state.activeSkillId, BIBLE_SUBJECT_ID).title} - ${capitalize(els.difficulty.value)}` : "Choose a skill";
      els.problemText.textContent = "Bible study";
      els.grammarRuleChip.innerHTML = '<i class="fa-solid fa-book-bible"></i> Use Hint to hear a Bible clue.';
      els.grammarExampleText.textContent = "";
      els.choiceGrid.innerHTML = "";
      return;
    }

    els.lessonBadge.textContent = `${getSkillDefinition(state.activeSkillId, BIBLE_SUBJECT_ID).title} - ${capitalize(state.currentProblem.difficulty)}`;
    els.problemText.textContent = state.currentProblem.displayText;
    els.grammarRuleChip.innerHTML = `<i class="fa-solid fa-book-bible"></i> ${getBibleHintMessage(state.currentProblem)}`;
    els.grammarExampleText.textContent = state.currentProblem.hintLevel > 0
      ? state.currentProblem.strongHintText
      : state.currentProblem.supportText;
    els.choiceGrid.innerHTML = state.currentProblem.choices.map((choice, index) => `
      <button class="secondary-button choice-button" type="button" data-choice-value="${escapeHtml(choice)}">
        <strong>${String.fromCharCode(65 + index)}.</strong>${escapeHtml(choice)}
      </button>
    `).join("");
    return;
  }

  els.lessonTitle.innerHTML = '<i class="fa-solid fa-calculator"></i> Math Studio';
  els.promptLabel.textContent = "Solve this problem";
  els.problemHelper.textContent = STATIC_SPEECH.promptReady;
  configureAnswerInputForMath();
  els.newProblem.innerHTML = '<i class="fa-solid fa-dice"></i> New Problem';
  els.repeatProblem.innerHTML = '<i class="fa-solid fa-volume-high"></i> Speak Again';
  els.hintProblem.classList.add("hidden");
  els.spellingHintPanel.classList.add("hidden");
  els.grammarPanel.classList.add("hidden");
  els.choicePanel.classList.add("hidden");
  els.answerForm.classList.remove("hidden");

  if (!state.currentProblem) {
    els.lessonBadge.textContent = state.activeSkillId ? `${getSkillDefinition(state.activeSkillId).title} - ${capitalize(els.difficulty.value)}` : "Choose a skill";
    els.problemText.textContent = state.activeSkillId ? "Get ready" : "Choose a skill";
    return;
  }

  els.lessonBadge.textContent = `${getSkillDefinition(state.activeSkillId).title} - ${capitalize(state.currentProblem.difficulty)}`;
  els.problemText.textContent = state.currentProblem.promptText;
}

async function createProblem(options = {}) {
  const { autoSpeak = true } = options;

  if (!state.activeProfile) {
    setFeedback("Choose a learner profile first.");
    return;
  }

  if ((isMathView() || isGrammarView() || isBibleView()) && !state.activeSkillId) {
    setFeedback("Choose a skill first.");
    return;
  }

  if (state.round.completed) {
    setFeedback(`Round ${state.round.number} is complete. Start the next round when ready.`);
    renderRound();
    return;
  }

  const ready = await ensureSession();
  if (!ready) {
    return;
  }

  const difficulty = els.difficulty.value;
  const recentSpellingWords = isSpellingView() ? await getRecentSpellingWords() : [];
  state.currentProblem = isSpellingView()
    ? buildSpellingProblem(difficulty, recentSpellingWords)
    : isGrammarView()
      ? buildGrammarProblem(state.activeSkillId, difficulty)
      : isBibleView()
        ? buildBibleProblem(state.activeSkillId, difficulty)
      : buildMathProblem(state.activeSkillId, difficulty);

  renderCurrentProblem();
  els.answerInput.value = "";
  updateSpellingPreview();
  if (!isChoiceView() && !usesCustomSpellingKeyboard()) {
    els.answerInput.focus();
  }
  setFeedback(
    isSpellingView()
      ? STATIC_SPEECH.spellingPromptReady
      : isGrammarView()
        ? STATIC_SPEECH.grammarPromptReady
        : isBibleView()
          ? STATIC_SPEECH.biblePromptReady
        : STATIC_SPEECH.promptReady,
  );

  if (autoSpeak) {
    await speakProblem();
  }
}

async function ensureSession() {
  if (!state.activeProfile) {
    setFeedback("Please choose a learner profile first.");
    return false;
  }

  if (state.currentSessionId) {
    return true;
  }

  const now = new Date().toISOString();
  const sessionId = crypto.randomUUID();
  await addRecord("sessions", {
    id: sessionId,
    profileId: state.activeProfile.id,
    subjectId: state.activeSubjectId || MATH_SUBJECT_ID,
    startedAt: now,
  });
  state.currentSessionId = sessionId;
  await refreshDashboard();
  return true;
}

async function createProfile(event) {
  event.preventDefault();
  closeHeaderMenu();

  const name = els.childName.value.trim();
  const grade = normalizeGradeValue(els.childGrade.value);
  const avatarColor = els.avatarColor.value;

  if (!name || !grade) {
    setFeedback("Please enter a learner name and choose a grade.");
    return;
  }

  const now = new Date().toISOString();
  const profile = {
    id: crypto.randomUUID(),
    name,
    grade,
    avatarColor,
    stars: 0,
    streak: 0,
    createdAt: now,
    updatedAt: now,
  };

  await putRecord("profiles", profile);
  state.activeProfileId = profile.id;
  state.showProfileForm = false;
  state.activeSkillId = null;
  state.lastMathSkillId = null;
  state.lastGrammarSkillId = null;
  state.lastBibleSkillId = null;
  state.skillPickerExpanded = true;
  state.recentSpellingWords = [];
  state.recentGrammarPrompts = [];
  state.recentBiblePrompts = [];
  resetRound();
  state.currentProblem = null;
  state.currentSessionId = null;
  els.profileForm.reset();
  els.childGrade.value = "";
  els.avatarColor.value = "sunrise";
  setFeedback(STATIC_SPEECH.createProfile(name));
  await refreshProfiles();
  scrollToLearningPaths();
  void speak(STATIC_SPEECH.selectProfile(name), "profile-selected-home");
}

async function selectProfile(profileId) {
  closeHeaderMenu();
  state.activeProfileId = profileId;
  state.showProfileForm = false;
  state.recentSpellingWords = [];
  state.recentGrammarPrompts = [];
  state.recentBiblePrompts = [];
  resetRound();
  state.currentProblem = null;
  state.currentSessionId = null;
  await refreshProfiles();

  if (state.activeProfile) {
    if (isMathView()) {
      state.activeSkillId = state.lastMathSkillId;
      state.skillPickerExpanded = !state.activeSkillId;
      await refreshDashboard();
      setFeedback(STATIC_SPEECH.selectProfile(state.activeProfile.name));
      if (state.activeSkillId) {
        await createProblem();
      } else {
        void speak(STATIC_SPEECH.mathGuide, "math-guide");
      }
      return;
    }

    if (isSpellingView()) {
      state.activeSkillId = SPELLING_SKILL_ID;
      state.skillPickerExpanded = false;
      applyRecommendedSpellingDifficulty(state.activeProfile);
      await refreshDashboard();
      setFeedback(`${state.activeProfile.name} is selected. Now let's spell a word.`);
      await createProblem();
      return;
    }

    if (isGrammarView()) {
      state.activeSkillId = state.lastGrammarSkillId;
      state.skillPickerExpanded = !state.activeSkillId;
      applyRecommendedGrammarDifficulty(state.activeProfile);
      await refreshDashboard();
      setFeedback(STATIC_SPEECH.selectProfile(state.activeProfile.name));
      if (state.activeSkillId) {
        await createProblem();
      } else {
        void speak(STATIC_SPEECH.grammarGuide, "grammar-guide");
      }
      return;
    }

    if (isBibleView()) {
      state.activeSkillId = state.lastBibleSkillId;
      state.skillPickerExpanded = !state.activeSkillId;
      applyRecommendedBibleDifficulty(state.activeProfile);
      await refreshDashboard();
      setFeedback(STATIC_SPEECH.selectProfile(state.activeProfile.name));
      if (state.activeSkillId) {
        await createProblem();
      } else {
        void speak(STATIC_SPEECH.bibleGuide, "bible-guide");
      }
      return;
    }

    setFeedback(STATIC_SPEECH.selectProfile(state.activeProfile.name));
    scrollToLearningPaths();
    void speak(STATIC_SPEECH.selectProfile(state.activeProfile.name), "profile-selected-home");
  }
}

async function selectSkill(skillId) {
  closeHeaderMenu();
  if (!state.activeProfile) {
    setFeedback("Choose a learner profile first.");
    return;
  }

  state.activeSkillId = skillId;
  if (isMathView()) {
    state.lastMathSkillId = skillId;
  } else if (isGrammarView()) {
    state.lastGrammarSkillId = skillId;
  } else if (isBibleView()) {
    state.lastBibleSkillId = skillId;
  }
  state.skillPickerExpanded = false;
  resetRound();
  state.currentProblem = null;
  state.currentSessionId = null;
  await refreshDashboard();
  setFeedback(STATIC_SPEECH.selectSkill(getSkillDefinition(skillId).title));
  await createProblem();
}

function goHome() {
  closeHeaderMenu();
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio.currentTime = 0;
    state.currentAudio = null;
  }
  state.activeSubjectId = null;
  state.activeSkillId = null;
  state.currentProblem = null;
  state.currentSessionId = null;
  state.skillPickerExpanded = true;
  state.recentSpellingWords = [];
  state.recentGrammarPrompts = [];
  state.recentBiblePrompts = [];
  resetRound();
  updateLayout();
  if (!state.isMuted) {
    void speak(STATIC_SPEECH.homeGuide, "home-guide", { allowDeferred: true });
  }
}

async function openSubject(subjectId, options = {}) {
  closeHeaderMenu();
  const subject = getSubjectDefinition(subjectId);

  if (!state.activeProfile) {
    goHome();
    focusLearnerPanel();
    return;
  }

  if (!subject.available) {
    if (!state.isMuted) {
      void speak(`${subject.title} is coming soon.`, makeSpeechKey("subject-soon", subject.title));
    }
    return;
  }

  state.activeSubjectId = subject.id;
  state.currentProblem = null;
  state.currentSessionId = null;
  state.recentSpellingWords = [];
  state.recentGrammarPrompts = [];
  state.recentBiblePrompts = [];
  resetRound();

  if (subject.id === MATH_SUBJECT_ID) {
    state.activeSkillId = state.lastMathSkillId;
    state.skillPickerExpanded = !state.activeSkillId;
  } else if (subject.id === SPELLING_SUBJECT_ID) {
    state.activeSkillId = SPELLING_SKILL_ID;
    state.skillPickerExpanded = false;
    applyRecommendedSpellingDifficulty(state.activeProfile);
  } else if (subject.id === GRAMMAR_SUBJECT_ID) {
    state.activeSkillId = state.lastGrammarSkillId;
    state.skillPickerExpanded = !state.activeSkillId;
    applyRecommendedGrammarDifficulty(state.activeProfile);
  } else if (subject.id === BIBLE_SUBJECT_ID) {
    state.activeSkillId = state.lastBibleSkillId;
    state.skillPickerExpanded = !state.activeSkillId;
    applyRecommendedBibleDifficulty(state.activeProfile);
  } else {
    state.activeSkillId = null;
  }

  await refreshDashboard();

  if (options.focusLearner) {
    goHome();
    requestAnimationFrame(() => {
      els.profileForm.scrollIntoView({ behavior: "smooth", block: "start" });
      if (state.profiles.length === 0) {
        els.childName.focus();
      }
    });
    return;
  }

  if (!state.isMuted) {
    if (subject.id === MATH_SUBJECT_ID && !state.activeSkillId) {
      void speak(STATIC_SPEECH.mathGuide, "math-guide", { allowDeferred: true });
    } else if (subject.id === GRAMMAR_SUBJECT_ID && !state.activeSkillId) {
      void speak(STATIC_SPEECH.grammarGuide, "grammar-guide", { allowDeferred: true });
    } else if (subject.id === BIBLE_SUBJECT_ID && !state.activeSkillId) {
      void speak(STATIC_SPEECH.bibleGuide, "bible-guide", { allowDeferred: true });
    } else if (subject.id === SPELLING_SUBJECT_ID) {
      await speak(STATIC_SPEECH.spellingGuide, "spelling-guide", { allowDeferred: true });
    }
  }

  if (subject.id === SPELLING_SUBJECT_ID || ((subject.id === MATH_SUBJECT_ID || subject.id === GRAMMAR_SUBJECT_ID || subject.id === BIBLE_SUBJECT_ID) && state.activeSkillId)) {
    await createProblem();
  }
}

function makeSpeechKey(prefix, text) {
  return `${prefix}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80)}`;
}

async function speak(text, key = makeSpeechKey("speech", text), options = {}) {
  const { allowDeferred = false } = options;

  if (state.isMuted) {
    els.voiceStatus.textContent = "Voice is muted.";
    return;
  }

  try {
    const response = await fetch(getServerUrl("/api/speech"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, text }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      els.voiceStatus.textContent = payload.error || "ElevenLabs voice is unavailable.";
      return;
    }

    const payload = await response.json();
    els.voiceStatus.textContent = payload.cached
      ? "Playing cached ElevenLabs voice."
      : "Playing ElevenLabs voice.";
    state.pendingSpeech = null;
    if (state.currentAudio) {
      state.currentAudio.pause();
      state.currentAudio.currentTime = 0;
    }
    const audioSource = payload.url
      ? getServerUrl(payload.url)
      : payload.audioBase64
        ? `data:${payload.contentType || "audio/mpeg"};base64,${payload.audioBase64}`
        : "";

    if (!audioSource) {
      els.voiceStatus.textContent = "Speech audio could not be loaded.";
      return;
    }

    const audio = new Audio(audioSource);
    state.currentAudio = audio;
    await audio.play();
    await new Promise((resolve) => {
      audio.addEventListener("ended", resolve, { once: true });
      audio.addEventListener("error", resolve, { once: true });
    });
    if (state.currentAudio === audio) {
      state.currentAudio = null;
    }
  } catch (error) {
    if (allowDeferred && error?.name === "NotAllowedError") {
      state.pendingSpeech = { text, key };
      els.voiceStatus.textContent = "Tap a button to hear voice guidance.";
      return;
    }
    els.voiceStatus.textContent = window.location.protocol === "file:"
      ? "Opened as a file. Start the local server and use http://localhost:3000."
      : "ElevenLabs voice is unavailable.";
  }
}

async function flushPendingSpeech() {
  if (!state.pendingSpeech || state.isMuted) {
    return;
  }

  const pending = state.pendingSpeech;
  state.pendingSpeech = null;
  await speak(pending.text, pending.key);
}

async function speakProblem() {
  if (!state.currentProblem) {
    return;
  }
  await speak(state.currentProblem.spokenText, makeSpeechKey("problem", state.currentProblem.spokenText));
}

function playTone(success) {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    return;
  }

  const context = new AudioContextCtor();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;

  oscillator.type = success ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(success ? 523.25 : 220, now);
  oscillator.frequency.exponentialRampToValueAtTime(success ? 783.99 : 180, now + 0.24);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.14, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.32);
  oscillator.onended = () => context.close();
}

async function recordAnswer(correct, submittedAnswer) {
  if (!state.activeProfile || !state.currentProblem) {
    return;
  }

  await ensureSession();
  const now = new Date().toISOString();
  await addRecord("answers", {
    id: crypto.randomUUID(),
    profileId: state.activeProfile.id,
    sessionId: state.currentSessionId,
    subjectId: state.activeSubjectId || MATH_SUBJECT_ID,
    createdAt: now,
    skillId: state.currentProblem.skillId,
    difficulty: state.currentProblem.difficulty,
    grade: state.currentProblem.grade || getProfileGrade(state.activeProfile),
    unit: state.currentProblem.unit || null,
    unitTitle: state.currentProblem.unitTitle || "",
    correct,
    submittedAnswer,
    expectedAnswer: state.currentProblem.answer,
    problemText: state.currentProblem.historyText || state.currentProblem.promptText,
  });
}

async function submitAnswer(rawAnswer) {
  if (!state.activeProfile) {
    setFeedback("Please create or choose a learner profile first.");
    return;
  }

  if (!state.activeSkillId) {
    setFeedback("Please choose a skill first.");
    return;
  }

  if (!state.currentProblem) {
    await createProblem();
    return;
  }

  const rawValue = String(rawAnswer ?? "").trim();
  if (rawValue === "") {
    setFeedback(isChoiceView() ? "Choose an answer first." : "Type an answer first.");
    return;
  }

  const submittedAnswer = isSpellingView()
    ? rawValue.toLowerCase()
    : isChoiceView()
      ? rawValue
      : Number(rawValue);
  if (!isSpellingView() && !isChoiceView() && Number.isNaN(submittedAnswer)) {
    setFeedback("Please type a number.");
    return;
  }

  const correct = submittedAnswer === state.currentProblem.answer;
  await recordAnswer(correct, rawValue);

  if (!correct) {
    state.currentProblem.hadMistake = true;
    if (isSpellingView()) {
      state.currentProblem.lastSubmittedAnswer = rawValue.toLowerCase();
    }
    const updatedProfile = { ...state.activeProfile, streak: 0, updatedAt: new Date().toISOString() };
    await putRecord("profiles", updatedProfile);
    state.activeProfile = updatedProfile;
    const retryLine = chooseRandom(retryLines);
    setFeedback(`${retryLine} Stay with this same ${isSpellingView() ? "word" : isGrammarView() ? "grammar challenge" : isBibleView() ? "Bible question" : "problem"} and try again.`);
    playTone(false);
    els.answerInput.value = "";
    updateSpellingPreview();
    if (!isChoiceView() && !usesCustomSpellingKeyboard()) {
      els.answerInput.focus();
    }
    renderCurrentProblem();
    await refreshDashboard();
    await speak(retryLine, makeSpeechKey("retry", retryLine));
    if (isSpellingView() || isChoiceView()) {
      await speakProblem();
    }
    return;
  }

  const updatedProfile = { ...state.activeProfile };
  const cleanSolve = !state.currentProblem.hadMistake && !state.currentProblem.usedHint;
  updatedProfile.stars += STARS_PER_CORRECT;

  if (cleanSolve) {
    updatedProfile.streak += 1;
    if (updatedProfile.streak > 0 && updatedProfile.streak % 5 === 0) {
      updatedProfile.stars += STARS_PER_STREAK_BONUS;
    }
  }

  state.round.solved += 1;
  const roundJustCompleted = state.round.solved >= state.round.target;
  if (roundJustCompleted) {
    state.round.completed = true;
    updatedProfile.stars += ROUND_COMPLETION_BONUS;
  }

  const line = nextSuccessLine();
  const streakMessage = roundJustCompleted
    ? `Round ${state.round.number} complete. +${STARS_PER_CORRECT} stars and +${ROUND_COMPLETION_BONUS} round bonus stars.`
    : cleanSolve
      ? `${line} +${STARS_PER_CORRECT}${updatedProfile.streak % 5 === 0 && updatedProfile.streak > 0 ? ` and +${STARS_PER_STREAK_BONUS} streak bonus` : ""} stars.`
      : `${line} +${STARS_PER_CORRECT} stars. This one does not add to the streak because a retry or hint was used.`;

  setFeedback(streakMessage);
  playTone(true);
  updatedProfile.updatedAt = new Date().toISOString();
  await putRecord("profiles", updatedProfile);
  state.activeProfile = updatedProfile;
  if (roundJustCompleted) {
    state.currentProblem = null;
  }
  await refreshProfiles();

  if (roundJustCompleted) {
    renderRound();
    void speak(`Round ${state.round.number} complete.`, makeSpeechKey("round-complete", `round-${state.round.number}`));
    return;
  }

  await speak(line, makeSpeechKey("success", line));
  await createProblem();
}

async function handleAnswer(event) {
  event.preventDefault();
  await submitAnswer(els.answerInput.value);
}

function handleProfileListClick(event) {
  const button = event.target.closest(".profile-select");
  if (!button) {
    return;
  }
  void selectProfile(button.dataset.profileId);
}

function handleSubjectGridClick(event) {
  const button = event.target.closest("[data-subject-id]");
  if (!button) {
    return;
  }
  void openSubject(button.dataset.subjectId);
}

function handleSkillListClick(event) {
  const button = event.target.closest(".skill-select");
  if (!button) {
    return;
  }
  void selectSkill(button.dataset.skillId);
}

function handleChoiceGridClick(event) {
  const button = event.target.closest(".choice-button");
  if (!button) {
    return;
  }

  void submitAnswer(button.dataset.choiceValue);
}

function handleHintClick() {
  if ((!isSpellingView() && !isChoiceView()) || !state.currentProblem) {
    return;
  }

  if (isGrammarView()) {
    if (state.currentProblem.hintLevel >= 2) {
      setFeedback("That is the strongest grammar hint for this sentence. Read each choice carefully and try again.");
      void speak("That is the strongest grammar hint for this sentence. Read each choice carefully and try again.", makeSpeechKey("grammar-hint-max", state.currentProblem.promptId));
      return;
    }

    state.currentProblem.hintLevel += 1;
    state.currentProblem.usedHint = true;
    renderCurrentProblem();
    setFeedback(getGrammarHintMessage(state.currentProblem));
    void speak(
      getGrammarHintMessage(state.currentProblem),
      makeSpeechKey("grammar-hint", `${state.currentProblem.promptId}-${state.currentProblem.hintLevel}`),
    );
    return;
  }

  if (isBibleView()) {
    if (state.currentProblem.hintLevel >= 2) {
      setFeedback("That is the strongest Bible hint for this question. Read the choices carefully and try again.");
      void speak("That is the strongest Bible hint for this question. Read the choices carefully and try again.", makeSpeechKey("bible-hint-max", state.currentProblem.promptId));
      return;
    }

    state.currentProblem.hintLevel += 1;
    state.currentProblem.usedHint = true;
    renderCurrentProblem();
    setFeedback(getBibleHintMessage(state.currentProblem));
    void speak(
      getBibleHintMessage(state.currentProblem),
      makeSpeechKey("bible-hint", `${state.currentProblem.promptId}-${state.currentProblem.hintLevel}`),
    );
    return;
  }

  if (state.currentProblem.hintLevel >= 3) {
    setFeedback("That is the biggest hint for this word. Listen again and give it another try.");
    void speak("That is the biggest hint for this word. Listen again and give it another try.", makeSpeechKey("spell-hint-max", state.currentProblem.answer));
    return;
  }

  state.currentProblem.hintLevel += 1;
  state.currentProblem.usedHint = true;
  renderCurrentProblem();
  setFeedback(getSpellingHintMessage(state.currentProblem));
  void speak(
    getSpellingHintSpeech(state.currentProblem),
    makeSpeechKey("spell-hint", `${state.currentProblem.answer}-${state.currentProblem.hintLevel}`),
  );
}

function handleSpellingKeyboardClick(event) {
  const button = event.target instanceof Element ? event.target.closest("button") : null;
  if (!button || !usesCustomSpellingKeyboard() || !state.currentProblem) {
    return;
  }

  const key = button.dataset.key;
  const action = button.dataset.keyAction;

  if (key) {
    els.answerInput.value += key;
  } else if (action === "backspace") {
    els.answerInput.value = els.answerInput.value.slice(0, -1);
  } else if (action === "clear") {
    els.answerInput.value = "";
  } else {
    return;
  }

  updateSpellingPreview();
}

function toggleSkillPicker() {
  if (!state.activeSkillId) {
    return;
  }
  state.skillPickerExpanded = !state.skillPickerExpanded;
  updateLayout();
}

function startNextRound() {
  resetRound(state.round.number + 1);
  renderRound();
  setFeedback(`Round ${state.round.number} is ready. Solve ${state.round.target} problems to finish it.`);
  void createProblem();
}

function updateMuteButton() {
  els.toggleMute.innerHTML = state.isMuted
    ? '<i class="fa-solid fa-volume-high"></i> Unmute Voice'
    : '<i class="fa-solid fa-volume-xmark"></i> Mute Voice';
}

function toggleMute() {
  closeHeaderMenu();
  state.isMuted = !state.isMuted;
  localStorage.setItem(MUTE_STORAGE_KEY, String(state.isMuted));

  if (state.isMuted) {
    if (state.currentAudio) {
      state.currentAudio.pause();
      state.currentAudio.currentTime = 0;
      state.currentAudio = null;
    }
    els.voiceStatus.textContent = "Voice is muted.";
  } else {
    els.voiceStatus.textContent = "Voice is unmuted.";
  }

  updateMuteButton();
}

function focusLearnerPanel() {
  closeHeaderMenu();
  if (state.activeSubjectId) {
    goHome();
  }

  requestAnimationFrame(() => {
    if (state.profiles.length === 0) {
      state.showProfileForm = true;
      renderProfiles();
      els.profileFormPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      els.childName.focus();
      return;
    }

    els.profilesList.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

async function init() {
  state.isMuted = localStorage.getItem(MUTE_STORAGE_KEY) === "true";
  state.db = await openDatabase();
  renderSpellingKeyboard();
  await loadSpellingCurriculum();
  await refreshProfiles();
  renderSubjects();
  updateMuteButton();
  updateHeaderMenu();
  renderHeaderLearner();
  els.voiceStatus.textContent = state.isMuted
    ? "Voice is muted."
    : window.location.protocol === "file:"
      ? "Opened as a file. Audio requests will target http://localhost:3000."
      : `${APP_NAME} voice is configured and ready to play.`;
  if (!state.isMuted) {
    void speak(STATIC_SPEECH.homeGuide, "home-guide", { allowDeferred: true });
  }
}

els.headerMenuToggle.addEventListener("click", toggleHeaderMenu);
els.goHome.addEventListener("click", goHome);
els.toggleProfileForm.addEventListener("click", toggleProfileFormPanel);
els.profileForm.addEventListener("submit", (event) => void createProfile(event));
els.refreshProfiles.addEventListener("click", () => void refreshProfiles());
els.subjectsGrid.addEventListener("click", handleSubjectGridClick);
els.profilesList.addEventListener("click", handleProfileListClick);
els.skillsList.addEventListener("click", handleSkillListClick);
els.choiceGrid.addEventListener("click", handleChoiceGridClick);
els.toggleSkillPicker.addEventListener("click", toggleSkillPicker);
els.nextRound.addEventListener("click", startNextRound);
els.toggleMute.addEventListener("click", toggleMute);
els.chooseLearner.addEventListener("click", focusLearnerPanel);
els.hintProblem.addEventListener("click", handleHintClick);
els.readInstructions.addEventListener("click", () => {
  closeHeaderMenu();
  void speak(STATIC_SPEECH.instructions, "instructions");
});
els.newProblem.addEventListener("click", () => void createProblem());
els.repeatProblem.addEventListener("click", () => void speakProblem());
els.answerRepeatProblem.addEventListener("click", () => void speakProblem());
els.answerHintProblem.addEventListener("click", handleHintClick);
els.answerForm.addEventListener("submit", (event) => void handleAnswer(event));
els.answerInput.addEventListener("input", updateSpellingPreview);
els.spellingKeyboard.addEventListener("click", handleSpellingKeyboardClick);
els.difficulty.addEventListener("change", () => {
  if (state.activeSkillId) {
    void createProblem();
  }
});
document.addEventListener("pointerdown", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (state.headerMenuOpen && (!target || !target.closest(".app-header"))) {
    closeHeaderMenu();
  }
  void flushPendingSpeech();
}, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    closeHeaderMenu();
  }
  if (state.activeSubjectId) {
    renderCurrentProblem();
  }
});

void init();
