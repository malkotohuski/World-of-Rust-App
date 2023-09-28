const questions = [
  {
    question: 'Which company made the game Rust?',
    answers: ['Facepunch', 'Blizzard', 'EA Sport', 'Rockstar Games'],
    correctAnswer: 0,
    type: 'easy',
  },
  {
    question: 'How much wood do you need to make a Tool Cupboard?',
    answers: ['500', '1000', '750', '100'],
    correctAnswer: 1,
    type: 'easy',
  },
  {
    question: 'How many metal fragments are needed for a Sheet Metal Door?',
    answers: ['125', '100', '200', '150'],
    correctAnswer: 3,
    type: 'easy',
  },
  {
    question: 'Which of the monuments is not a save zone?',
    answers: ['Outpost', 'Military Tunnels', 'Bandit Camp', 'Large Barn'],
    correctAnswer: 1,
    type: 'easy',
  },
  {
    question: 'Which of the monuments is a save zone?',
    answers: ['Airfield', 'Harbor', 'Large Fishing Village', 'Launch Site'],
    correctAnswer: 2,
    type: 'easy',
  },
  {
    question: 'How many locked crates are there on the ship?',
    answers: ['3', '2', '4', '1'],
    correctAnswer: 0,
    type: 'easy',
  },
  {
    question: 'How many locked crates are there on a small oil rig?',
    answers: ['2', '1', '4', '3'],
    correctAnswer: 1,
    type: 'easy',
  },
  {
    question: 'How many locked crates are there on a large oil rig?',
    answers: ['0', '4', '2', '1'],
    correctAnswer: 3,
    type: 'easy',
  },
  {
    question: 'How many workbenches are there?',
    answers: ['4', '7', '3', '10'],
    correctAnswer: 2,
    type: 'easy',
  },
  {
    question: 'From which monument can you buy a boat?',
    answers: [
      'Fishing Villages',
      'Water Treatment Plant',
      ' Train Yard',
      ' Oxum’s Gas Station',
    ],
    correctAnswer: 0,
    type: 'easy',
  },
  {
    question: 'From which monument can you buy a Minicopter?',
    answers: ['Satellite Dish', 'Outpost', 'Airfield', 'Bandit Camp'],
    correctAnswer: 3,
    type: 'easy',
  },
  {
    question: 'With which tools can you get wood?',
    answers: ['Hammer', 'Rock', 'Jackhammer', 'Torch'],
    correctAnswer: 1,
    type: 'easy',
  },
  {
    question: 'With which tools can you get stone?',
    answers: [
      'Camera',
      'Handmade Fishing Rod',
      'Stone Hatchet',
      'Stone Pickaxe',
    ],
    correctAnswer: 3,
    type: 'easy',
  },
  {
    question:
      'How many metal fragments are needed for a Sheet Metal Double Door?',
    answers: ['190', '250', '200', '300'],
    correctAnswer: 2,
    type: 'easy',
  },
  {
    question: 'How much scrap is a single minicopter worth?',
    answers: ['750', '1250', '650', '850'],
    correctAnswer: 0,
    type: 'easy',
  },
  {
    question: 'How much scrap is a single Scrap Transport Helicopter worth?',
    answers: ['750', '1250', '650', '850'],
    correctAnswer: 1,
    type: 'easy',
  },
  {
    question: 'How many Military Crates are there on the Dome?',
    answers: ['5', '2', '3', '4'],
    correctAnswer: 3,
    type: 'medium',
  },
  {
    question:
      'How many Heavy Scientists come to the Small Oil Rig when The Locked Crate is released?',
    answers: ['8', '9', '6', '7'],
    correctAnswer: 2,
    type: 'medium',
  },
  {
    question:
      'How many Heavy Scientists come to the Large Oil Rig when The Locked Crate is released?',
    answers: ['10', '12', '14', '11'],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'How many Scientist is there on the Small Oil Rig?',
    answers: ['20', '17', '16', '14'],
    correctAnswer: 2,
    type: 'medium',
  },
  {
    question: 'How many Scientist is there on the Large Oil Rig?',
    answers: ['23', '30', '26', '27'],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'What is the name of the fastest horse in the game?',
    answers: [
      'White Thoroughbred',
      'Black Thoroughbred',
      'Buckskin',
      'Dapple Grey',
    ],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'How many Scientist is there on the Large Oil Rig?',
    answers: ['23', '30', '26', '27'],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'How many Scientist is there on the Large Oil Rig?',
    answers: ['23', '30', '26', '27'],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'How many Scientist is there on the Large Oil Rig?',
    answers: ['23', '30', '26', '27'],
    correctAnswer: 0,
    type: 'medium',
  },
  {
    question: 'What size ammo can Python use?',
    answers: [
      'Explosive 5.56 Rifle Ammo',
      '12 Gauge Buckshot',
      '40mm HE Grenade',
      'Incendiary Pistol Bullet',
    ],
    correctAnswerIndex: 3,
    difficulty: 'medium',
  },
  {
    question: 'What size ammo can the LR-300 Assault Rifle use?',
    answers: ['12 Gauge Slug', 'Pistol Bullet', '5.56 Rifle Ammo', 'Rocket'],
    correctAnswerIndex: 2,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make an F1 grenade?',
    answers: [
      'Gun Powder:30, Metal Fragments:25',
      'Sulfur:100, Gun Powder:50',
      'Metal Fragments:25, Gun Powder:30',
      'Gun Powder:25, Metal Fragments:30',
    ],
    correctAnswerIndex: 0,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make an 8x Zoom Scope?',
    answers: [
      'High Quality Metal:30',
      'High Quality Metal:50',
      'High Quality Metal:25, Tech Trash:5 ',
      'High Quality Metal:45, Tech Trash:10',
    ],
    correctAnswerIndex: 1,
    difficulty: 'medium',
  },
  {
    question:
      'What ingredients do you need to make a Medical Syringe Blueprint?',
    answers: [
      'Cloth:10, Metal Fragments:10, Low Grade Fuel:10',
      'Cloth:20, Metal Fragments:20, Low Grade Fuel:20',
      'Cloth:15, Metal Fragments:10, Low Grade Fuel:10',
      'Animal Fat:30, Metal Fragments:10, Low Grade Fuel:10',
    ],
    correctAnswerIndex: 2,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make a Holosight?',
    answers: [
      'High Quality Metal:12, Tech Trash:1',
      'High Quality Metal:10, Tech Trash:2',
      'High Quality Metal:1, Tech Trash:10',
      'High Quality Metal:10',
    ],
    correctAnswerIndex: 1,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make a Triangle Ladder Hatch?',
    answers: [
      'Wooden Ladder:1, Metal Fragments:200, Gears:3',
      'Wooden Ladder:2, Metal Fragments:300, Gears:5',
      'Wooden Ladder:1, Metal Fragments:300, Gears:3',
      'Wooden Ladder:3, Metal Fragments:100, Gears:2',
    ],
    correctAnswerIndex: 2,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make a Gears?',
    answers: [
      'Metal Fragments:50, Scrap:100',
      'Metal Fragments:100, Scrap:10',
      'Metal Fragments:10, Scrap:50',
      'Metal Fragments:25, Scrap:100',
    ],
    correctAnswerIndex: 3,
    difficulty: 'medium',
  },
  {
    question: 'What ingredients do you need to make a Key Lock?',
    answers: ['Wood:75', 'Wood:100', 'Wood:50', 'Metal Fragments:25, Wood:25'],
    correctAnswerIndex: 0,
    difficulty: 'medium',
  },
  {
    question:
      'How much scrap will it cost you to buy a Blue Keycard from Outpost?',
    answers: ['Scrap:150', 'Scrap:200', 'Scrap:100', 'Scrap:75'],
    correctAnswerIndex: 2,
    difficulty: 'medium',
  },
  {
    question: 'How much is the power consumption of the Auto Turret ?',
    answers: [
      'Consumption 5 Energy',
      'Consumption 10 Energy',
      'Consumption 12 Energy',
      'Consumption 8 Energy',
    ],
    correctAnswerIndex: 1,
    difficulty: 'medium',
  },
  {
    question: 'How much is the power consumption of Large Neon Sign ?',
    answers: [
      'Consumption 5 Energy',
      'Consumption 3 Energy',
      'Consumption 10 Energy',
      'Consumption 8 Energy',
    ],
    correctAnswerIndex: 3,
    difficulty: 'medium',
  },
  // Add more questions here
];

const shuffleQuestions = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Shuffle the questions array
shuffleQuestions(questions);

export default questions;
