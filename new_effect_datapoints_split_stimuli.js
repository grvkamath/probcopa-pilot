const COPA_DATA = [
  [
    {
      "UID": 4,
      "original_id": 853,
      "premise": "I became enthralled in the book.",
      "hypothesis": "I lost track of time.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I became enthralled in the book.|I lost track of time.|effect"
    },
    {
      "UID": 5,
      "original_id": 853,
      "premise": "I became enthralled in the book.",
      "hypothesis": "I returned the book.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I became enthralled in the book.|I returned the book.|effect"
    },
    {
      "UID": 6,
      "original_id": 967,
      "premise": "I bit into a slice of watermelon.",
      "hypothesis": "I accidentally chipped my tooth.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I bit into a slice of watermelon.|I accidentally chipped my tooth.|effect"
    },
    {
      "UID": 7,
      "original_id": 967,
      "premise": "I bit into a slice of watermelon.",
      "hypothesis": "I accidentally swallowed a seed.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I bit into a slice of watermelon.|I accidentally swallowed a seed.|effect"
    },
    {
      "UID": 8,
      "original_id": 542,
      "premise": "I bit into the peach.",
      "hypothesis": "Juice spilled out.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I bit into the peach.|Juice spilled out.|effect"
    },
    {
      "UID": 9,
      "original_id": 542,
      "premise": "I bit into the peach.",
      "hypothesis": "The peach bruised.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I bit into the peach.|The peach bruised.|effect"
    },
    {
      "UID": 12,
      "original_id": 576,
      "premise": "I entered my combination on the lock.",
      "hypothesis": "I shut the lock.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I entered my combination on the lock.|I shut the lock.|effect"
    },
    {
      "UID": 13,
      "original_id": 576,
      "premise": "I entered my combination on the lock.",
      "hypothesis": "The lock popped open.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I entered my combination on the lock.|The lock popped open.|effect"
    },
    {
      "UID": 14,
      "original_id": 993,
      "premise": "I had to wait in line.",
      "hypothesis": "I skimmed a magazine.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I had to wait in line.|I skimmed a magazine.|effect"
    },
    {
      "UID": 15,
      "original_id": 993,
      "premise": "I had to wait in line.",
      "hypothesis": "I took a seat.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I had to wait in line.|I took a seat.|effect"
    },
    {
      "UID": 18,
      "original_id": 658,
      "premise": "I knocked on my neighbor's door.",
      "hypothesis": "My neighbor invited me in.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I knocked on my neighbor's door.|My neighbor invited me in.|effect"
    },
    {
      "UID": 19,
      "original_id": 658,
      "premise": "I knocked on my neighbor's door.",
      "hypothesis": "My neighbor left her house.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I knocked on my neighbor's door.|My neighbor left her house.|effect"
    },
    {
      "UID": 26,
      "original_id": 603,
      "premise": "I pricked myself with the pin.",
      "hypothesis": "A bead of sweat dripped from my face.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I pricked myself with the pin.|A bead of sweat dripped from my face.|effect"
    },
    {
      "UID": 27,
      "original_id": 603,
      "premise": "I pricked myself with the pin.",
      "hypothesis": "A drop of blood formed on my finger.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I pricked myself with the pin.|A drop of blood formed on my finger.|effect"
    },
    {
      "UID": 28,
      "original_id": 583,
      "premise": "I pulled the drain plug in the bathtub.",
      "hypothesis": "The water drained out of the tub.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I pulled the drain plug in the bathtub.|The water drained out of the tub.|effect"
    },
    {
      "UID": 29,
      "original_id": 583,
      "premise": "I pulled the drain plug in the bathtub.",
      "hypothesis": "The water splashed onto the floor.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I pulled the drain plug in the bathtub.|The water splashed onto the floor.|effect"
    },
    {
      "UID": 30,
      "original_id": 544,
      "premise": "I pushed the door.",
      "hypothesis": "The door locked.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I pushed the door.|The door locked.|effect"
    },
    {
      "UID": 31,
      "original_id": 544,
      "premise": "I pushed the door.",
      "hypothesis": "The door opened.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I pushed the door.|The door opened.|effect"
    },
    {
      "UID": 34,
      "original_id": 905,
      "premise": "I slept through my alarm.",
      "hypothesis": "I made breakfast.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I slept through my alarm.|I made breakfast.|effect"
    },
    {
      "UID": 35,
      "original_id": 905,
      "premise": "I slept through my alarm.",
      "hypothesis": "I missed breakfast.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I slept through my alarm.|I missed breakfast.|effect"
    },
    {
      "UID": 36,
      "original_id": 938,
      "premise": "I squeezed the lemon wedge.",
      "hypothesis": "The lemon got moldy.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I squeezed the lemon wedge.|The lemon got moldy.|effect"
    },
    {
      "UID": 37,
      "original_id": 938,
      "premise": "I squeezed the lemon wedge.",
      "hypothesis": "The lemon squirted.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I squeezed the lemon wedge.|The lemon squirted.|effect"
    },
    {
      "UID": 38,
      "original_id": 997,
      "premise": "I thought carefully about the problem.",
      "hypothesis": "I asked for advice.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I thought carefully about the problem.|I asked for advice.|effect"
    },
    {
      "UID": 39,
      "original_id": 997,
      "premise": "I thought carefully about the problem.",
      "hypothesis": "I came up with a solution.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I thought carefully about the problem.|I came up with a solution.|effect"
    },
    {
      "UID": 42,
      "original_id": 784,
      "premise": "I was furious.",
      "hypothesis": "I checked the mailbox upon leaving the house.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "I was furious.|I checked the mailbox upon leaving the house.|effect"
    },
    {
      "UID": 43,
      "original_id": 784,
      "premise": "I was furious.",
      "hypothesis": "I slammed the door upon leaving the house.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "I was furious.|I slammed the door upon leaving the house.|effect"
    },
    {
      "UID": 50,
      "original_id": 562,
      "premise": "The accountant mismanaged the company's funds.",
      "hypothesis": "She was fired from her position.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The accountant mismanaged the company's funds.|She was fired from her position.|effect"
    },
    {
      "UID": 51,
      "original_id": 562,
      "premise": "The accountant mismanaged the company's funds.",
      "hypothesis": "She went on maternity leave.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The accountant mismanaged the company's funds.|She went on maternity leave.|effect"
    }
  ],
  [
    {
      "UID": 54,
      "original_id": 803,
      "premise": "The artist mixed yellow paint into blue paint.",
      "hypothesis": "The paint splattered everywhere.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The artist mixed yellow paint into blue paint.|The paint splattered everywhere.|effect"
    },
    {
      "UID": 55,
      "original_id": 803,
      "premise": "The artist mixed yellow paint into blue paint.",
      "hypothesis": "The paint turned green.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The artist mixed yellow paint into blue paint.|The paint turned green.|effect"
    },
    {
      "UID": 56,
      "original_id": 509,
      "premise": "The band played their hit song.",
      "hypothesis": "The audience clapped along to the music.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The band played their hit song.|The audience clapped along to the music.|effect"
    },
    {
      "UID": 57,
      "original_id": 509,
      "premise": "The band played their hit song.",
      "hypothesis": "The audience politely listened in silence.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The band played their hit song.|The audience politely listened in silence.|effect"
    },
    {
      "UID": 60,
      "original_id": 876,
      "premise": "The bird flapped its wings.",
      "hypothesis": "It ascended upwards.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The bird flapped its wings.|It ascended upwards.|effect"
    },
    {
      "UID": 61,
      "original_id": 876,
      "premise": "The bird flapped its wings.",
      "hypothesis": "It laid eggs.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The bird flapped its wings.|It laid eggs.|effect"
    },
    {
      "UID": 62,
      "original_id": 540,
      "premise": "The boy squeezed the balloon.",
      "hypothesis": "The balloon flew away.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The boy squeezed the balloon.|The balloon flew away.|effect"
    },
    {
      "UID": 63,
      "original_id": 540,
      "premise": "The boy squeezed the balloon.",
      "hypothesis": "The balloon popped.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The boy squeezed the balloon.|The balloon popped.|effect"
    },
    {
      "UID": 66,
      "original_id": 554,
      "premise": "The boy was in a mischievous mood.",
      "hypothesis": "He decided to play a card game with his sister.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The boy was in a mischievous mood.|He decided to play a card game with his sister.|effect"
    },
    {
      "UID": 67,
      "original_id": 554,
      "premise": "The boy was in a mischievous mood.",
      "hypothesis": "He decided to play a practical joke on his sister.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The boy was in a mischievous mood.|He decided to play a practical joke on his sister.|effect"
    },
    {
      "UID": 68,
      "original_id": 590,
      "premise": "The boy was lost in the woods.",
      "hypothesis": "He pitched a tent.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The boy was lost in the woods.|He pitched a tent.|effect"
    },
    {
      "UID": 69,
      "original_id": 590,
      "premise": "The boy was lost in the woods.",
      "hypothesis": "He screamed for help.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The boy was lost in the woods.|He screamed for help.|effect"
    },
    {
      "UID": 72,
      "original_id": 812,
      "premise": "The cat chased the bird.",
      "hypothesis": "The bird caught a worm.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The cat chased the bird.|The bird caught a worm.|effect"
    },
    {
      "UID": 73,
      "original_id": 812,
      "premise": "The cat chased the bird.",
      "hypothesis": "The bird flew away.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The cat chased the bird.|The bird flew away.|effect"
    },
    {
      "UID": 76,
      "original_id": 555,
      "premise": "The child complained that he had to go to the bathroom.",
      "hypothesis": "His father gave him a soda to drink.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The child complained that he had to go to the bathroom.|His father gave him a soda to drink.|effect"
    },
    {
      "UID": 77,
      "original_id": 555,
      "premise": "The child complained that he had to go to the bathroom.",
      "hypothesis": "His father stopped the car at a gas station.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The child complained that he had to go to the bathroom.|His father stopped the car at a gas station.|effect"
    },
    {
      "UID": 78,
      "original_id": 823,
      "premise": "The child landed on the trampoline.",
      "hypothesis": "She decided to try to do a flip.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The child landed on the trampoline.|She decided to try to do a flip.|effect"
    },
    {
      "UID": 79,
      "original_id": 823,
      "premise": "The child landed on the trampoline.",
      "hypothesis": "She sprung back up into the air.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The child landed on the trampoline.|She sprung back up into the air.|effect"
    },
    {
      "UID": 80,
      "original_id": 623,
      "premise": "The country declared war on the neighboring territory.",
      "hypothesis": "Soldiers were reunited with their families.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The country declared war on the neighboring territory.|Soldiers were reunited with their families.|effect"
    },
    {
      "UID": 81,
      "original_id": 623,
      "premise": "The country declared war on the neighboring territory.",
      "hypothesis": "Soldiers were sent out to fight.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The country declared war on the neighboring territory.|Soldiers were sent out to fight.|effect"
    },
    {
      "UID": 90,
      "original_id": 942,
      "premise": "The father caught his son lying.",
      "hypothesis": "His son confessed the truth.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The father caught his son lying.|His son confessed the truth.|effect"
    },
    {
      "UID": 91,
      "original_id": 942,
      "premise": "The father caught his son lying.",
      "hypothesis": "The father trusted his son.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The father caught his son lying.|The father trusted his son.|effect"
    },
    {
      "UID": 92,
      "original_id": 728,
      "premise": "The girl dropped the rubber ball.",
      "hypothesis": "The ball bounced.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl dropped the rubber ball.|The ball bounced.|effect"
    },
    {
      "UID": 93,
      "original_id": 728,
      "premise": "The girl dropped the rubber ball.",
      "hypothesis": "The ball glowed.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl dropped the rubber ball.|The ball glowed.|effect"
    },
    {
      "UID": 94,
      "original_id": 749,
      "premise": "The girl flashed a smile.",
      "hypothesis": "Her cheeks reddened.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl flashed a smile.|Her cheeks reddened.|effect"
    },
    {
      "UID": 95,
      "original_id": 749,
      "premise": "The girl flashed a smile.",
      "hypothesis": "Her dimples showed.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl flashed a smile.|Her dimples showed.|effect"
    },
    {
      "UID": 96,
      "original_id": 979,
      "premise": "The girl looked pale.",
      "hypothesis": "Her father felt her forehead.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl looked pale.|Her father felt her forehead.|effect"
    },
    {
      "UID": 97,
      "original_id": 979,
      "premise": "The girl looked pale.",
      "hypothesis": "Her father read her a story.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl looked pale.|Her father read her a story.|effect"
    }
  ],
  [
    {
      "UID": 98,
      "original_id": 729,
      "premise": "The girl made a mistake on her exam.",
      "hypothesis": "She erased her answer.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl made a mistake on her exam.|She erased her answer.|effect"
    },
    {
      "UID": 99,
      "original_id": 729,
      "premise": "The girl made a mistake on her exam.",
      "hypothesis": "She guessed at the answer.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl made a mistake on her exam.|She guessed at the answer.|effect"
    },
    {
      "UID": 100,
      "original_id": 710,
      "premise": "The girl squeezed the tube of toothpaste.",
      "hypothesis": "The girl spit out the toothpaste.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl squeezed the tube of toothpaste.|The girl spit out the toothpaste.|effect"
    },
    {
      "UID": 101,
      "original_id": 710,
      "premise": "The girl squeezed the tube of toothpaste.",
      "hypothesis": "The toothpaste squirted out of the tube.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl squeezed the tube of toothpaste.|The toothpaste squirted out of the tube.|effect"
    },
    {
      "UID": 102,
      "original_id": 510,
      "premise": "The girl wanted to thank her math teacher.",
      "hypothesis": "The girl brought the teacher an apple.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The girl wanted to thank her math teacher.|The girl brought the teacher an apple.|effect"
    },
    {
      "UID": 103,
      "original_id": 510,
      "premise": "The girl wanted to thank her math teacher.",
      "hypothesis": "The girl stayed after school for detention.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The girl wanted to thank her math teacher.|The girl stayed after school for detention.|effect"
    },
    {
      "UID": 106,
      "original_id": 940,
      "premise": "The glass toppled off the table.",
      "hypothesis": "It landed in a pile of laundry.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The glass toppled off the table.|It landed in a pile of laundry.|effect"
    },
    {
      "UID": 107,
      "original_id": 940,
      "premise": "The glass toppled off the table.",
      "hypothesis": "It shattered all over the floor.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The glass toppled off the table.|It shattered all over the floor.|effect"
    },
    {
      "UID": 114,
      "original_id": 864,
      "premise": "The immigrants were caught illegally residing in the country.",
      "hypothesis": "They found employment.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The immigrants were caught illegally residing in the country.|They found employment.|effect"
    },
    {
      "UID": 115,
      "original_id": 864,
      "premise": "The immigrants were caught illegally residing in the country.",
      "hypothesis": "They were deported.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The immigrants were caught illegally residing in the country.|They were deported.|effect"
    },
    {
      "UID": 116,
      "original_id": 579,
      "premise": "The kayakers paddled their oars.",
      "hypothesis": "The kayak hit a wave.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The kayakers paddled their oars.|The kayak hit a wave.|effect"
    },
    {
      "UID": 117,
      "original_id": 579,
      "premise": "The kayakers paddled their oars.",
      "hypothesis": "The kayak reached the shore.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The kayakers paddled their oars.|The kayak reached the shore.|effect"
    },
    {
      "UID": 124,
      "original_id": 856,
      "premise": "The man ate the ice cream in the sun.",
      "hypothesis": "The ice cream dripped from the cone.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man ate the ice cream in the sun.|The ice cream dripped from the cone.|effect"
    },
    {
      "UID": 125,
      "original_id": 856,
      "premise": "The man ate the ice cream in the sun.",
      "hypothesis": "The ice cream lost its flavor.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man ate the ice cream in the sun.|The ice cream lost its flavor.|effect"
    },
    {
      "UID": 126,
      "original_id": 723,
      "premise": "The man extended his hand to me.",
      "hypothesis": "I shook his hand.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man extended his hand to me.|I shook his hand.|effect"
    },
    {
      "UID": 127,
      "original_id": 723,
      "premise": "The man extended his hand to me.",
      "hypothesis": "I slapped him.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man extended his hand to me.|I slapped him.|effect"
    },
    {
      "UID": 128,
      "original_id": 512,
      "premise": "The man hit his head.",
      "hypothesis": "He got a concussion.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man hit his head.|He got a concussion.|effect"
    },
    {
      "UID": 129,
      "original_id": 512,
      "premise": "The man hit his head.",
      "hypothesis": "He got lost in thought.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man hit his head.|He got lost in thought.|effect"
    },
    {
      "UID": 136,
      "original_id": 739,
      "premise": "The man shuffled through the papers.",
      "hypothesis": "He got a paper cut.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man shuffled through the papers.|He got a paper cut.|effect"
    },
    {
      "UID": 137,
      "original_id": 739,
      "premise": "The man shuffled through the papers.",
      "hypothesis": "He shredded the papers.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man shuffled through the papers.|He shredded the papers.|effect"
    },
    {
      "UID": 138,
      "original_id": 709,
      "premise": "The man stained his suit.",
      "hypothesis": "He got it dry-cleaned.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man stained his suit.|He got it dry-cleaned.|effect"
    },
    {
      "UID": 139,
      "original_id": 709,
      "premise": "The man stained his suit.",
      "hypothesis": "He hung it in his closet.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man stained his suit.|He hung it in his closet.|effect"
    },
    {
      "UID": 140,
      "original_id": 994,
      "premise": "The man swatted at the fly.",
      "hypothesis": "The fly buzzed away.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The man swatted at the fly.|The fly buzzed away.|effect"
    },
    {
      "UID": 141,
      "original_id": 994,
      "premise": "The man swatted at the fly.",
      "hypothesis": "The fly stayed still.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The man swatted at the fly.|The fly stayed still.|effect"
    },
    {
      "UID": 146,
      "original_id": 787,
      "premise": "The nation endured a natural disaster.",
      "hypothesis": "Leaders of other countries formed an alliance.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The nation endured a natural disaster.|Leaders of other countries formed an alliance.|effect"
    },
    {
      "UID": 147,
      "original_id": 787,
      "premise": "The nation endured a natural disaster.",
      "hypothesis": "Leaders of other countries sent emergency relief.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The nation endured a natural disaster.|Leaders of other countries sent emergency relief.|effect"
    },
    {
      "UID": 148,
      "original_id": 988,
      "premise": "The parents wanted their children to go to college.",
      "hypothesis": "They encouraged their children to play outside.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The parents wanted their children to go to college.|They encouraged their children to play outside.|effect"
    },
    {
      "UID": 149,
      "original_id": 988,
      "premise": "The parents wanted their children to go to college.",
      "hypothesis": "They set aside a savings fund for tuition.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The parents wanted their children to go to college.|They set aside a savings fund for tuition.|effect"
    }
  ],
  [
    {
      "UID": 154,
      "original_id": 974,
      "premise": "The phone rang.",
      "hypothesis": "The man hung up the phone.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The phone rang.|The man hung up the phone.|effect"
    },
    {
      "UID": 155,
      "original_id": 974,
      "premise": "The phone rang.",
      "hypothesis": "The man picked up the phone.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The phone rang.|The man picked up the phone.|effect"
    },
    {
      "UID": 156,
      "original_id": 684,
      "premise": "The photographer forgot to use the flash on the camera.",
      "hypothesis": "Everyone in the photos refused to smile.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The photographer forgot to use the flash on the camera.|Everyone in the photos refused to smile.|effect"
    },
    {
      "UID": 157,
      "original_id": 684,
      "premise": "The photographer forgot to use the flash on the camera.",
      "hypothesis": "The photos turned out blurry.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The photographer forgot to use the flash on the camera.|The photos turned out blurry.|effect"
    },
    {
      "UID": 162,
      "original_id": 526,
      "premise": "The player won five games in a row.",
      "hypothesis": "Her opponent accused her of cheating.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The player won five games in a row.|Her opponent accused her of cheating.|effect"
    },
    {
      "UID": 163,
      "original_id": 526,
      "premise": "The player won five games in a row.",
      "hypothesis": "Her opponent felt sorry for her.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The player won five games in a row.|Her opponent felt sorry for her.|effect"
    },
    {
      "UID": 166,
      "original_id": 906,
      "premise": "The public figure got out of the limousine.",
      "hypothesis": "Cameras flashed in his direction.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The public figure got out of the limousine.|Cameras flashed in his direction.|effect"
    },
    {
      "UID": 167,
      "original_id": 906,
      "premise": "The public figure got out of the limousine.",
      "hypothesis": "His family attended the press conference.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The public figure got out of the limousine.|His family attended the press conference.|effect"
    },
    {
      "UID": 170,
      "original_id": 643,
      "premise": "The scratch in my skin was deep.",
      "hypothesis": "It healed quickly.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The scratch in my skin was deep.|It healed quickly.|effect"
    },
    {
      "UID": 171,
      "original_id": 643,
      "premise": "The scratch in my skin was deep.",
      "hypothesis": "It left a scar.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The scratch in my skin was deep.|It left a scar.|effect"
    },
    {
      "UID": 174,
      "original_id": 681,
      "premise": "The student tried to do the math in his head.",
      "hypothesis": "He got confused.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The student tried to do the math in his head.|He got confused.|effect"
    },
    {
      "UID": 175,
      "original_id": 681,
      "premise": "The student tried to do the math in his head.",
      "hypothesis": "He got out a calculator.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The student tried to do the math in his head.|He got out a calculator.|effect"
    },
    {
      "UID": 182,
      "original_id": 998,
      "premise": "The traveler walked on the shaky suspension bridge.",
      "hypothesis": "He felt ecstatic.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The traveler walked on the shaky suspension bridge.|He felt ecstatic.|effect"
    },
    {
      "UID": 183,
      "original_id": 998,
      "premise": "The traveler walked on the shaky suspension bridge.",
      "hypothesis": "He felt terrified.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The traveler walked on the shaky suspension bridge.|He felt terrified.|effect"
    },
    {
      "UID": 188,
      "original_id": 639,
      "premise": "The two children simultaneously reached down to retrieve the ball.",
      "hypothesis": "The ball rolled away.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The two children simultaneously reached down to retrieve the ball.|The ball rolled away.|effect"
    },
    {
      "UID": 189,
      "original_id": 639,
      "premise": "The two children simultaneously reached down to retrieve the ball.",
      "hypothesis": "Their heads collided.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The two children simultaneously reached down to retrieve the ball.|Their heads collided.|effect"
    },
    {
      "UID": 190,
      "original_id": 537,
      "premise": "The warring countries wanted peace.",
      "hypothesis": "They developed nuclear weapons.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The warring countries wanted peace.|They developed nuclear weapons.|effect"
    },
    {
      "UID": 191,
      "original_id": 537,
      "premise": "The warring countries wanted peace.",
      "hypothesis": "They negotiated a treaty.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The warring countries wanted peace.|They negotiated a treaty.|effect"
    },
    {
      "UID": 196,
      "original_id": 839,
      "premise": "The woman punched her attacker in the nose.",
      "hypothesis": "The attacker started to bleed.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The woman punched her attacker in the nose.|The attacker started to bleed.|effect"
    },
    {
      "UID": 197,
      "original_id": 839,
      "premise": "The woman punched her attacker in the nose.",
      "hypothesis": "The attacker's body went lifeless.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The woman punched her attacker in the nose.|The attacker's body went lifeless.|effect"
    },
    {
      "UID": 198,
      "original_id": 901,
      "premise": "The woman set an ambitious goal.",
      "hypothesis": "She slacked off.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The woman set an ambitious goal.|She slacked off.|effect"
    },
    {
      "UID": 199,
      "original_id": 901,
      "premise": "The woman set an ambitious goal.",
      "hypothesis": "She worked hard.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The woman set an ambitious goal.|She worked hard.|effect"
    },
    {
      "UID": 200,
      "original_id": 885,
      "premise": "The woman was interrupted in the midst of reading her book.",
      "hypothesis": "She bookmarked her page.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The woman was interrupted in the midst of reading her book.|She bookmarked her page.|effect"
    },
    {
      "UID": 201,
      "original_id": 885,
      "premise": "The woman was interrupted in the midst of reading her book.",
      "hypothesis": "She reread the book.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The woman was interrupted in the midst of reading her book.|She reread the book.|effect"
    },
    {
      "UID": 202,
      "original_id": 844,
      "premise": "The woman was short on money for rent.",
      "hypothesis": "She quit her job.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The woman was short on money for rent.|She quit her job.|effect"
    },
    {
      "UID": 203,
      "original_id": 844,
      "premise": "The woman was short on money for rent.",
      "hypothesis": "She worked overtime.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The woman was short on money for rent.|She worked overtime.|effect"
    },
    {
      "UID": 204,
      "original_id": 975,
      "premise": "The woman was staring at me.",
      "hypothesis": "I felt uncomfortable.",
      "asks-for": "effect",
      "hard_label": 1,
      "identifier": "The woman was staring at me.|I felt uncomfortable.|effect"
    },
    {
      "UID": 205,
      "original_id": 975,
      "premise": "The woman was staring at me.",
      "hypothesis": "I hugged her.",
      "asks-for": "effect",
      "hard_label": 0,
      "identifier": "The woman was staring at me.|I hugged her.|effect"
    }
  ]
];
