const COPA_DATA = [
  [
    {
      "id": 782,
      "asks-for": "effect",
      "p": "The charity made a goal to raise money.",
      "a": "They fed the homeless.",
      "hard_label": 0
    },
    {
      "id": 782,
      "asks-for": "effect",
      "p": "The charity made a goal to raise money.",
      "a": "They held an auction.",
      "hard_label": 1
    },
    {
      "id": 609,
      "asks-for": "cause",
      "p": "The puppy stayed near its owner.",
      "a": "The owner put a collar on the puppy.",
      "hard_label": 0
    },
    {
      "id": 609,
      "asks-for": "cause",
      "p": "The puppy stayed near its owner.",
      "a": "The owner kept the puppy on a leash.",
      "hard_label": 1
    },
    {
      "id": 725,
      "asks-for": "cause",
      "p": "The girl bit her nails.",
      "a": "She was worried.",
      "hard_label": 1
    },
    {
      "id": 725,
      "asks-for": "cause",
      "p": "The girl bit her nails.",
      "a": "She was surprised.",
      "hard_label": 0
    },
    {
      "id": 519,
      "asks-for": "effect",
      "p": "The accident was my fault.",
      "a": "I felt guilty.",
      "hard_label": 1
    },
    {
      "id": 519,
      "asks-for": "effect",
      "p": "The accident was my fault.",
      "a": "I pressed charges.",
      "hard_label": 0
    },
    {
      "id": 936,
      "asks-for": "effect",
      "p": "The hiker encountered a poisonous snake.",
      "a": "She became dehydrated.",
      "hard_label": 0
    },
    {
      "id": 936,
      "asks-for": "effect",
      "p": "The hiker encountered a poisonous snake.",
      "a": "She panicked.",
      "hard_label": 1
    },
    {
      "id": 679,
      "asks-for": "cause",
      "p": "The electricity in my house shut off.",
      "a": "I unplugged the lamp.",
      "hard_label": 0
    },
    {
      "id": 679,
      "asks-for": "cause",
      "p": "The electricity in my house shut off.",
      "a": "I blew a fuse.",
      "hard_label": 1
    },
    {
      "id": 930,
      "asks-for": "cause",
      "p": "I bought my mother a present.",
      "a": "I baked her a cake.",
      "hard_label": 0
    },
    {
      "id": 930,
      "asks-for": "cause",
      "p": "I bought my mother a present.",
      "a": "It was her birthday.",
      "hard_label": 1
    },
    {
      "id": 948,
      "asks-for": "effect",
      "p": "The dog eyed the juicy steak on the table.",
      "a": "It drooled.",
      "hard_label": 1
    },
    {
      "id": 948,
      "asks-for": "effect",
      "p": "The dog eyed the juicy steak on the table.",
      "a": "It laid down.",
      "hard_label": 0
    },
    {
      "id": 970,
      "asks-for": "cause",
      "p": "I refilled my water bottle.",
      "a": "I drank all the water in it.",
      "hard_label": 1
    },
    {
      "id": 970,
      "asks-for": "cause",
      "p": "I refilled my water bottle.",
      "a": "I kept it in the fridge.",
      "hard_label": 0
    },
    {
      "id": 868,
      "asks-for": "cause",
      "p": "The steak was difficult to cut.",
      "a": "The knife was dull.",
      "hard_label": 1
    },
    {
      "id": 868,
      "asks-for": "cause",
      "p": "The steak was difficult to cut.",
      "a": "The steak was raw.",
      "hard_label": 0
    },
    {
      "id": 866,
      "asks-for": "effect",
      "p": "I looked into the sun.",
      "a": "The sun blinded me.",
      "hard_label": 1
    },
    {
      "id": 866,
      "asks-for": "effect",
      "p": "I looked into the sun.",
      "a": "The sun tanned my skin.",
      "hard_label": 0
    },
    {
      "id": 552,
      "asks-for": "effect",
      "p": "The pilot's radar detected a storm.",
      "a": "The pilot navigated away from the storm.",
      "hard_label": 1
    },
    {
      "id": 552,
      "asks-for": "effect",
      "p": "The pilot's radar detected a storm.",
      "a": "The pilot flew through the storm.",
      "hard_label": 0
    },
    {
      "id": 612,
      "asks-for": "cause",
      "p": "The family searched the neighborhood.",
      "a": "Their dog ran away from home.",
      "hard_label": 1
    },
    {
      "id": 612,
      "asks-for": "cause",
      "p": "The family searched the neighborhood.",
      "a": "Expensive jewelry was missing from their home.",
      "hard_label": 0
    },
    {
      "id": 511,
      "asks-for": "cause",
      "p": "The young campers felt scared.",
      "a": "Their camp counselor told them a ghost story.",
      "hard_label": 1
    },
    {
      "id": 511,
      "asks-for": "cause",
      "p": "The young campers felt scared.",
      "a": "They toasted marshmallows on the campfire.",
      "hard_label": 0
    },
    {
      "id": 674,
      "asks-for": "effect",
      "p": "It began to rain.",
      "a": "The driver turned on the headlights.",
      "hard_label": 1
    },
    {
      "id": 674,
      "asks-for": "effect",
      "p": "It began to rain.",
      "a": "The driver shifted the car into reverse.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 978,
      "asks-for": "effect",
      "p": "The tire on my bike was flat.",
      "a": "I pumped air into the tire.",
      "hard_label": 1
    },
    {
      "id": 978,
      "asks-for": "effect",
      "p": "The tire on my bike was flat.",
      "a": "I switched gears on the bike.",
      "hard_label": 0
    },
    {
      "id": 914,
      "asks-for": "effect",
      "p": "The criminal ran away from the police.",
      "a": "The police attended to the victim.",
      "hard_label": 0
    },
    {
      "id": 914,
      "asks-for": "effect",
      "p": "The criminal ran away from the police.",
      "a": "The police chased the criminal.",
      "hard_label": 1
    },
    {
      "id": 689,
      "asks-for": "cause",
      "p": "The teenager got a tattoo.",
      "a": "She was afraid of needles.",
      "hard_label": 0
    },
    {
      "id": 689,
      "asks-for": "cause",
      "p": "The teenager got a tattoo.",
      "a": "She wanted to rebel.",
      "hard_label": 1
    },
    {
      "id": 737,
      "asks-for": "effect",
      "p": "I polished the stone.",
      "a": "It became slippery.",
      "hard_label": 0
    },
    {
      "id": 737,
      "asks-for": "effect",
      "p": "I polished the stone.",
      "a": "It became shiny.",
      "hard_label": 1
    },
    {
      "id": 838,
      "asks-for": "effect",
      "p": "The man quit smoking.",
      "a": "He began exercising more.",
      "hard_label": 1
    },
    {
      "id": 838,
      "asks-for": "effect",
      "p": "The man quit smoking.",
      "a": "He started waking up earlier.",
      "hard_label": 0
    },
    {
      "id": 571,
      "asks-for": "cause",
      "p": "The lawn was muddy.",
      "a": "It poured overnight.",
      "hard_label": 1
    },
    {
      "id": 571,
      "asks-for": "cause",
      "p": "The lawn was muddy.",
      "a": "It was full of weeds.",
      "hard_label": 0
    },
    {
      "id": 788,
      "asks-for": "cause",
      "p": "The boy's clothes got soaked.",
      "a": "He climbed out of the pool.",
      "hard_label": 0
    },
    {
      "id": 788,
      "asks-for": "cause",
      "p": "The boy's clothes got soaked.",
      "a": "He fell into the pool.",
      "hard_label": 1
    },
    {
      "id": 904,
      "asks-for": "cause",
      "p": "The woman's car was in the shop.",
      "a": "Her driver's license was revoked.",
      "hard_label": 0
    },
    {
      "id": 904,
      "asks-for": "cause",
      "p": "The woman's car was in the shop.",
      "a": "She got in a car accident.",
      "hard_label": 1
    },
    {
      "id": 671,
      "asks-for": "cause",
      "p": "The man went to the barber.",
      "a": "He was growing out his hair.",
      "hard_label": 0
    },
    {
      "id": 671,
      "asks-for": "cause",
      "p": "The man went to the barber.",
      "a": "His hair was getting long.",
      "hard_label": 1
    },
    {
      "id": 999,
      "asks-for": "effect",
      "p": "The man anticipated the team's victory.",
      "a": "He met his friends to watch the game.",
      "hard_label": 0
    },
    {
      "id": 999,
      "asks-for": "effect",
      "p": "The man anticipated the team's victory.",
      "a": "He made a bet with his friends.",
      "hard_label": 1
    },
    {
      "id": 541,
      "asks-for": "effect",
      "p": "They travelers checked into their hotel room.",
      "a": "They unpacked their suitcases.",
      "hard_label": 1
    },
    {
      "id": 541,
      "asks-for": "effect",
      "p": "They travelers checked into their hotel room.",
      "a": "They went to the airport.",
      "hard_label": 0
    },
    {
      "id": 513,
      "asks-for": "cause",
      "p": "The check I wrote bounced.",
      "a": "My bank account was empty.",
      "hard_label": 1
    },
    {
      "id": 513,
      "asks-for": "cause",
      "p": "The check I wrote bounced.",
      "a": "I earned a pay raise.",
      "hard_label": 0
    },
    {
      "id": 717,
      "asks-for": "cause",
      "p": "The child burped.",
      "a": "He took a swig of soda.",
      "hard_label": 1
    },
    {
      "id": 717,
      "asks-for": "cause",
      "p": "The child burped.",
      "a": "He opened the soda can.",
      "hard_label": 0
    },
    {
      "id": 870,
      "asks-for": "effect",
      "p": "The lights in my friend's apartment were on.",
      "a": "I wondered if he was out.",
      "hard_label": 0
    },
    {
      "id": 870,
      "asks-for": "effect",
      "p": "The lights in my friend's apartment were on.",
      "a": "I decided to pay him a visit.",
      "hard_label": 1
    },
    {
      "id": 659,
      "asks-for": "cause",
      "p": "The woman sighed with frustration.",
      "a": "Her husband misunderstood her concerns.",
      "hard_label": 1
    },
    {
      "id": 659,
      "asks-for": "cause",
      "p": "The woman sighed with frustration.",
      "a": "Her husband kissed her goodbye.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 923,
      "asks-for": "cause",
      "p": "The store cashier called security.",
      "a": "The customer used counterfeit money.",
      "hard_label": 1
    },
    {
      "id": 923,
      "asks-for": "cause",
      "p": "The store cashier called security.",
      "a": "The customer left his headlights on.",
      "hard_label": 0
    },
    {
      "id": 688,
      "asks-for": "cause",
      "p": "The vacationers took a ferry to the resort.",
      "a": "The resort was booked.",
      "hard_label": 0
    },
    {
      "id": 688,
      "asks-for": "cause",
      "p": "The vacationers took a ferry to the resort.",
      "a": "The resort was on an island.",
      "hard_label": 1
    },
    {
      "id": 522,
      "asks-for": "effect",
      "p": "The woman decided to run for public office.",
      "a": "She hired a campaign manager.",
      "hard_label": 1
    },
    {
      "id": 522,
      "asks-for": "effect",
      "p": "The woman decided to run for public office.",
      "a": "She testified in court.",
      "hard_label": 0
    },
    {
      "id": 692,
      "asks-for": "effect",
      "p": "The heavyset man decided to lose weight.",
      "a": "He cut out sweets.",
      "hard_label": 1
    },
    {
      "id": 692,
      "asks-for": "effect",
      "p": "The heavyset man decided to lose weight.",
      "a": "He avoided caffeine.",
      "hard_label": 0
    },
    {
      "id": 662,
      "asks-for": "effect",
      "p": "I encountered an old friend.",
      "a": "I revealed a secret to him.",
      "hard_label": 0
    },
    {
      "id": 662,
      "asks-for": "effect",
      "p": "I encountered an old friend.",
      "a": "I gave him a hug.",
      "hard_label": 1
    },
    {
      "id": 567,
      "asks-for": "cause",
      "p": "The woman sat outside on the porch.",
      "a": "She wanted to watch the sunset.",
      "hard_label": 1
    },
    {
      "id": 567,
      "asks-for": "cause",
      "p": "The woman sat outside on the porch.",
      "a": "She thought she saw lightning.",
      "hard_label": 0
    },
    {
      "id": 558,
      "asks-for": "effect",
      "p": "The bathroom sink was clogged.",
      "a": "I turned on the faucet.",
      "hard_label": 0
    },
    {
      "id": 558,
      "asks-for": "effect",
      "p": "The bathroom sink was clogged.",
      "a": "I poured drain cleaner into it.",
      "hard_label": 1
    },
    {
      "id": 551,
      "asks-for": "cause",
      "p": "The little boy cried to his babysitter.",
      "a": "He missed his parents.",
      "hard_label": 1
    },
    {
      "id": 551,
      "asks-for": "cause",
      "p": "The little boy cried to his babysitter.",
      "a": "It was snack time.",
      "hard_label": 0
    },
    {
      "id": 919,
      "asks-for": "cause",
      "p": "The man's voice projected clearly throughout the auditorium.",
      "a": "He greeted the audience.",
      "hard_label": 0
    },
    {
      "id": 919,
      "asks-for": "cause",
      "p": "The man's voice projected clearly throughout the auditorium.",
      "a": "He spoke into the microphone.",
      "hard_label": 1
    },
    {
      "id": 958,
      "asks-for": "effect",
      "p": "The traffic light turned yellow.",
      "a": "The driver pushed the brake.",
      "hard_label": 1
    },
    {
      "id": 958,
      "asks-for": "effect",
      "p": "The traffic light turned yellow.",
      "a": "The driver honked his horn.",
      "hard_label": 0
    },
    {
      "id": 736,
      "asks-for": "cause",
      "p": "I felt comfortable.",
      "a": "I kneeled down on the ground.",
      "hard_label": 0
    },
    {
      "id": 736,
      "asks-for": "cause",
      "p": "I felt comfortable.",
      "a": "I wrapped myself in a blanket.",
      "hard_label": 1
    },
    {
      "id": 600,
      "asks-for": "cause",
      "p": "The bag of popcorn began to pop.",
      "a": "I poured butter into the bag.",
      "hard_label": 0
    },
    {
      "id": 600,
      "asks-for": "cause",
      "p": "The bag of popcorn began to pop.",
      "a": "I heated it in the microwave.",
      "hard_label": 1
    },
    {
      "id": 883,
      "asks-for": "effect",
      "p": "The dip tasted bland.",
      "a": "I served it.",
      "hard_label": 0
    },
    {
      "id": 883,
      "asks-for": "effect",
      "p": "The dip tasted bland.",
      "a": "I put salt in it.",
      "hard_label": 1
    },
    {
      "id": 704,
      "asks-for": "effect",
      "p": "The truck collided with the car.",
      "a": "The truck sped up.",
      "hard_label": 0
    },
    {
      "id": 704,
      "asks-for": "effect",
      "p": "The truck collided with the car.",
      "a": "The car got smashed.",
      "hard_label": 1
    },
    {
      "id": 836,
      "asks-for": "cause",
      "p": "The man raised his eyebrows.",
      "a": "He was surprised.",
      "hard_label": 1
    },
    {
      "id": 836,
      "asks-for": "cause",
      "p": "The man raised his eyebrows.",
      "a": "He felt discouraged.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 872,
      "asks-for": "cause",
      "p": "The woman felt nostalgic.",
      "a": "She ran into a childhood friend.",
      "hard_label": 1
    },
    {
      "id": 872,
      "asks-for": "cause",
      "p": "The woman felt nostalgic.",
      "a": "She yelled at her children.",
      "hard_label": 0
    },
    {
      "id": 954,
      "asks-for": "cause",
      "p": "The man lost his ability to speak.",
      "a": "He had a stroke.",
      "hard_label": 1
    },
    {
      "id": 954,
      "asks-for": "cause",
      "p": "The man lost his ability to speak.",
      "a": "He took a deep breath.",
      "hard_label": 0
    },
    {
      "id": 955,
      "asks-for": "cause",
      "p": "The woman tripped on the sidewalk.",
      "a": "There was a crack in the cement.",
      "hard_label": 1
    },
    {
      "id": 955,
      "asks-for": "cause",
      "p": "The woman tripped on the sidewalk.",
      "a": "She heard her name being called.",
      "hard_label": 0
    },
    {
      "id": 928,
      "asks-for": "effect",
      "p": "The air conditioner in the house broke.",
      "a": "I brought out blankets.",
      "hard_label": 0
    },
    {
      "id": 928,
      "asks-for": "effect",
      "p": "The air conditioner in the house broke.",
      "a": "I opened the windows.",
      "hard_label": 1
    },
    {
      "id": 559,
      "asks-for": "cause",
      "p": "The passengers got off the train.",
      "a": "The train arrived at the station.",
      "hard_label": 1
    },
    {
      "id": 559,
      "asks-for": "cause",
      "p": "The passengers got off the train.",
      "a": "The train blared its whistle.",
      "hard_label": 0
    },
    {
      "id": 592,
      "asks-for": "cause",
      "p": "The man was jealous of his coworker.",
      "a": "His coworker got a promotion.",
      "hard_label": 1
    },
    {
      "id": 592,
      "asks-for": "cause",
      "p": "The man was jealous of his coworker.",
      "a": "His coworker worked late.",
      "hard_label": 0
    },
    {
      "id": 565,
      "asks-for": "cause",
      "p": "The bolt tightened.",
      "a": "I replaced the bolt.",
      "hard_label": 0
    },
    {
      "id": 565,
      "asks-for": "cause",
      "p": "The bolt tightened.",
      "a": "I twisted the wrench.",
      "hard_label": 1
    },
    {
      "id": 961,
      "asks-for": "effect",
      "p": "The boy studied all night.",
      "a": "He skipped the exam.",
      "hard_label": 0
    },
    {
      "id": 961,
      "asks-for": "effect",
      "p": "The boy studied all night.",
      "a": "He passed the exam.",
      "hard_label": 1
    },
    {
      "id": 742,
      "asks-for": "cause",
      "p": "The teenager was embarrassed to go to school.",
      "a": "She got a pimple.",
      "hard_label": 1
    },
    {
      "id": 742,
      "asks-for": "cause",
      "p": "The teenager was embarrassed to go to school.",
      "a": "She got her braces off.",
      "hard_label": 0
    },
    {
      "id": 638,
      "asks-for": "effect",
      "p": "The man's girlfriend broke up with him.",
      "a": "He begged her to take him back.",
      "hard_label": 1
    },
    {
      "id": 638,
      "asks-for": "effect",
      "p": "The man's girlfriend broke up with him.",
      "a": "She introduced him to her parents.",
      "hard_label": 0
    },
    {
      "id": 667,
      "asks-for": "effect",
      "p": "I hung the wet linen on the outdoor clothesline.",
      "a": "The linen dried.",
      "hard_label": 1
    },
    {
      "id": 667,
      "asks-for": "effect",
      "p": "I hung the wet linen on the outdoor clothesline.",
      "a": "The linen stained.",
      "hard_label": 0
    },
    {
      "id": 682,
      "asks-for": "cause",
      "p": "The baby fell asleep.",
      "a": "The father changed the baby's diaper.",
      "hard_label": 0
    },
    {
      "id": 682,
      "asks-for": "cause",
      "p": "The baby fell asleep.",
      "a": "The father gently rocked the baby.",
      "hard_label": 1
    },
    {
      "id": 814,
      "asks-for": "effect",
      "p": "The factory owner refused to raise employees' wages.",
      "a": "The owner appointed a new manager.",
      "hard_label": 0
    },
    {
      "id": 814,
      "asks-for": "effect",
      "p": "The factory owner refused to raise employees' wages.",
      "a": "The employees went on strike.",
      "hard_label": 1
    },
    {
      "id": 762,
      "asks-for": "cause",
      "p": "The man sprayed himself with cologne.",
      "a": "He wanted to impress his date.",
      "hard_label": 1
    },
    {
      "id": 762,
      "asks-for": "cause",
      "p": "The man sprayed himself with cologne.",
      "a": "He put gel in his hair.",
      "hard_label": 0
    },
    {
      "id": 865,
      "asks-for": "effect",
      "p": "The public speaker cracked a joke.",
      "a": "The audience laughed.",
      "hard_label": 1
    },
    {
      "id": 865,
      "asks-for": "effect",
      "p": "The public speaker cracked a joke.",
      "a": "The audience stood up.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 601,
      "asks-for": "effect",
      "p": "A tree fell on the power line.",
      "a": "The electricity in the neighborhood went out.",
      "hard_label": 1
    },
    {
      "id": 601,
      "asks-for": "effect",
      "p": "A tree fell on the power line.",
      "a": "The forecast predicted heavy winds.",
      "hard_label": 0
    },
    {
      "id": 654,
      "asks-for": "cause",
      "p": "The car broke down.",
      "a": "I turned the ignition.",
      "hard_label": 0
    },
    {
      "id": 654,
      "asks-for": "cause",
      "p": "The car broke down.",
      "a": "The engine overheated.",
      "hard_label": 1
    },
    {
      "id": 505,
      "asks-for": "cause",
      "p": "The office was closed.",
      "a": "It was a holiday.",
      "hard_label": 1
    },
    {
      "id": 505,
      "asks-for": "cause",
      "p": "The office was closed.",
      "a": "It was summer.",
      "hard_label": 0
    },
    {
      "id": 746,
      "asks-for": "cause",
      "p": "The teammates directed blame at each other.",
      "a": "They lost their game.",
      "hard_label": 1
    },
    {
      "id": 746,
      "asks-for": "cause",
      "p": "The teammates directed blame at each other.",
      "a": "Their coach cancelled practice.",
      "hard_label": 0
    },
    {
      "id": 822,
      "asks-for": "effect",
      "p": "The girl whispered back and forth to each other at the lunch table.",
      "a": "Other students sat down at the lunch table.",
      "hard_label": 0
    },
    {
      "id": 822,
      "asks-for": "effect",
      "p": "The girl whispered back and forth to each other at the lunch table.",
      "a": "Other students at the lunch table felt left out.",
      "hard_label": 1
    },
    {
      "id": 549,
      "asks-for": "cause",
      "p": "The cashier opened the cash register.",
      "a": "The customer searched his wallet.",
      "hard_label": 0
    },
    {
      "id": 549,
      "asks-for": "cause",
      "p": "The cashier opened the cash register.",
      "a": "The customer handed her money.",
      "hard_label": 1
    },
    {
      "id": 699,
      "asks-for": "cause",
      "p": "The man went to the doctor.",
      "a": "The doctor was on leave.",
      "hard_label": 0
    },
    {
      "id": 699,
      "asks-for": "cause",
      "p": "The man went to the doctor.",
      "a": "The man felt ill.",
      "hard_label": 1
    },
    {
      "id": 842,
      "asks-for": "cause",
      "p": "I suggested to my houseguest that we go out to dinner.",
      "a": "I was too tired to prepare anything.",
      "hard_label": 1
    },
    {
      "id": 842,
      "asks-for": "cause",
      "p": "I suggested to my houseguest that we go out to dinner.",
      "a": "My houseguest overstayed her welcome.",
      "hard_label": 0
    },
    {
      "id": 896,
      "asks-for": "cause",
      "p": "The family congratulated the couple.",
      "a": "The couple announced that they were separating.",
      "hard_label": 0
    },
    {
      "id": 896,
      "asks-for": "cause",
      "p": "The family congratulated the couple.",
      "a": "The couple announced that they were having a baby.",
      "hard_label": 1
    },
    {
      "id": 691,
      "asks-for": "cause",
      "p": "The criminal turned himself in.",
      "a": "The evidence implicated him.",
      "hard_label": 1
    },
    {
      "id": 691,
      "asks-for": "cause",
      "p": "The criminal turned himself in.",
      "a": " There was no evidence against him.",
      "hard_label": 0
    },
    {
      "id": 828,
      "asks-for": "cause",
      "p": "The man survived the deadly illness.",
      "a": "He signed his will.",
      "hard_label": 0
    },
    {
      "id": 828,
      "asks-for": "cause",
      "p": "The man survived the deadly illness.",
      "a": "He received an organ transplant.",
      "hard_label": 1
    },
    {
      "id": 884,
      "asks-for": "effect",
      "p": "I set the paper towel on the spill.",
      "a": "The towel absorbed the liquid.",
      "hard_label": 1
    },
    {
      "id": 884,
      "asks-for": "effect",
      "p": "I set the paper towel on the spill.",
      "a": "The spill left a sticky residue.",
      "hard_label": 0
    },
    {
      "id": 976,
      "asks-for": "cause",
      "p": "The group left the museum.",
      "a": "They took pictures of the exhibits.",
      "hard_label": 0
    },
    {
      "id": 976,
      "asks-for": "cause",
      "p": "The group left the museum.",
      "a": "They viewed all the exhibits.",
      "hard_label": 1
    },
    {
      "id": 760,
      "asks-for": "cause",
      "p": "The girl attended her classmate's birthday party.",
      "a": "She received an invitation.",
      "hard_label": 1
    },
    {
      "id": 760,
      "asks-for": "cause",
      "p": "The girl attended her classmate's birthday party.",
      "a": "She bought a gift.",
      "hard_label": 0
    },
    {
      "id": 918,
      "asks-for": "effect",
      "p": "The man obtained a degree.",
      "a": "He became qualified for the job he wanted.",
      "hard_label": 1
    },
    {
      "id": 918,
      "asks-for": "effect",
      "p": "The man obtained a degree.",
      "a": "His job offer was rescinded.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 517,
      "asks-for": "effect",
      "p": "I poured the water into the glass.",
      "a": "The water quenched my thirst.",
      "hard_label": 0
    },
    {
      "id": 517,
      "asks-for": "effect",
      "p": "I poured the water into the glass.",
      "a": "The glass became full.",
      "hard_label": 1
    },
    {
      "id": 753,
      "asks-for": "effect",
      "p": "There was a lot of traffic on the highway.",
      "a": "I took a detour.",
      "hard_label": 1
    },
    {
      "id": 753,
      "asks-for": "effect",
      "p": "There was a lot of traffic on the highway.",
      "a": "I asked for a ride.",
      "hard_label": 0
    },
    {
      "id": 833,
      "asks-for": "cause",
      "p": "I scratched my skin.",
      "a": "It was sweaty.",
      "hard_label": 0
    },
    {
      "id": 833,
      "asks-for": "cause",
      "p": "I scratched my skin.",
      "a": "It felt itchy.",
      "hard_label": 1
    },
    {
      "id": 882,
      "asks-for": "effect",
      "p": "The stadium played the national anthem.",
      "a": "The fans turned to the flag.",
      "hard_label": 1
    },
    {
      "id": 882,
      "asks-for": "effect",
      "p": "The stadium played the national anthem.",
      "a": "The fans rushed the field.",
      "hard_label": 0
    },
    {
      "id": 926,
      "asks-for": "cause",
      "p": "The man's breathing was loud.",
      "a": "His kidneys were failing.",
      "hard_label": 0
    },
    {
      "id": 926,
      "asks-for": "cause",
      "p": "The man's breathing was loud.",
      "a": "His lungs were congested.",
      "hard_label": 1
    },
    {
      "id": 980,
      "asks-for": "effect",
      "p": "The pen ran out of ink.",
      "a": "I used a pencil.",
      "hard_label": 1
    },
    {
      "id": 980,
      "asks-for": "effect",
      "p": "The pen ran out of ink.",
      "a": "I signed my name.",
      "hard_label": 0
    },
    {
      "id": 503,
      "asks-for": "effect",
      "p": "Termites invaded the house.",
      "a": "The termites disappeared from the house.",
      "hard_label": 0
    },
    {
      "id": 503,
      "asks-for": "effect",
      "p": "Termites invaded the house.",
      "a": "The termites ate through the wood in the house.",
      "hard_label": 1
    },
    {
      "id": 807,
      "asks-for": "cause",
      "p": "The hostage submitted to the kidnapper's mandates.",
      "a": "The kidnapper threatened to hurt the hostage.",
      "hard_label": 1
    },
    {
      "id": 807,
      "asks-for": "cause",
      "p": "The hostage submitted to the kidnapper's mandates.",
      "a": "The kidnapper left the hostage by himself.",
      "hard_label": 0
    },
    {
      "id": 832,
      "asks-for": "cause",
      "p": "The physician diagnosed the patient.",
      "a": "She identified the patient's symptoms.",
      "hard_label": 1
    },
    {
      "id": 832,
      "asks-for": "cause",
      "p": "The physician diagnosed the patient.",
      "a": "She prescribed pills to the patient.",
      "hard_label": 0
    },
    {
      "id": 969,
      "asks-for": "cause",
      "p": "The woman put earplugs in.",
      "a": "She was distracted by noise.",
      "hard_label": 1
    },
    {
      "id": 969,
      "asks-for": "cause",
      "p": "The woman put earplugs in.",
      "a": "She got her ears pierced.",
      "hard_label": 0
    },
    {
      "id": 504,
      "asks-for": "effect",
      "p": "The travelers reached the border.",
      "a": "The patrol agent checked their passports.",
      "hard_label": 1
    },
    {
      "id": 504,
      "asks-for": "effect",
      "p": "The travelers reached the border.",
      "a": "The patrol agent accused them of smuggling.",
      "hard_label": 0
    },
    {
      "id": 655,
      "asks-for": "effect",
      "p": "The man hurt his back.",
      "a": "He went to see a psychiatrist.",
      "hard_label": 0
    },
    {
      "id": 655,
      "asks-for": "effect",
      "p": "The man hurt his back.",
      "a": "He stayed in bed for several days.",
      "hard_label": 1
    },
    {
      "id": 727,
      "asks-for": "effect",
      "p": "The husband discovered that his wife was having an affair.",
      "a": "He fired his lawyer.",
      "hard_label": 0
    },
    {
      "id": 727,
      "asks-for": "effect",
      "p": "The husband discovered that his wife was having an affair.",
      "a": "He filed for divorce.",
      "hard_label": 1
    },
    {
      "id": 705,
      "asks-for": "effect",
      "p": "The team rigged the contest in their favor.",
      "a": "They won.",
      "hard_label": 1
    },
    {
      "id": 705,
      "asks-for": "effect",
      "p": "The team rigged the contest in their favor.",
      "a": " They dropped out.",
      "hard_label": 0
    },
    {
      "id": 700,
      "asks-for": "cause",
      "p": "I exited my bedroom through the window.",
      "a": "The house was on fire.",
      "hard_label": 1
    },
    {
      "id": 700,
      "asks-for": "cause",
      "p": "I exited my bedroom through the window.",
      "a": "The house was empty.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 861,
      "asks-for": "cause",
      "p": "The man stood out in the crowd.",
      "a": "He carried a backpack.",
      "hard_label": 0
    },
    {
      "id": 861,
      "asks-for": "cause",
      "p": "The man stood out in the crowd.",
      "a": "He wore a neon vest.",
      "hard_label": 1
    },
    {
      "id": 715,
      "asks-for": "effect",
      "p": "The prisoner starved.",
      "a": "He died.",
      "hard_label": 1
    },
    {
      "id": 715,
      "asks-for": "effect",
      "p": "The prisoner starved.",
      "a": "He fled.",
      "hard_label": 0
    },
    {
      "id": 536,
      "asks-for": "cause",
      "p": "I lost my patience.",
      "a": "My friend kept me waiting.",
      "hard_label": 1
    },
    {
      "id": 536,
      "asks-for": "cause",
      "p": "I lost my patience.",
      "a": "My friend arrived on time.",
      "hard_label": 0
    },
    {
      "id": 811,
      "asks-for": "effect",
      "p": "A drought occurred in the region.",
      "a": "The water became contaminated.",
      "hard_label": 0
    },
    {
      "id": 811,
      "asks-for": "effect",
      "p": "A drought occurred in the region.",
      "a": "The crops perished.",
      "hard_label": 1
    },
    {
      "id": 944,
      "asks-for": "cause",
      "p": "The train slowed down.",
      "a": "It was approaching the station.",
      "hard_label": 1
    },
    {
      "id": 944,
      "asks-for": "cause",
      "p": "The train slowed down.",
      "a": "It was running behind schedule.",
      "hard_label": 0
    },
    {
      "id": 768,
      "asks-for": "effect",
      "p": "The businessman's credit card got declined.",
      "a": "He wrote an IOU.",
      "hard_label": 0
    },
    {
      "id": 768,
      "asks-for": "effect",
      "p": "The businessman's credit card got declined.",
      "a": "He paid with cash.",
      "hard_label": 1
    },
    {
      "id": 837,
      "asks-for": "cause",
      "p": "I excused my colleague's blunder.",
      "a": "I believed his intentions were good.",
      "hard_label": 1
    },
    {
      "id": 837,
      "asks-for": "cause",
      "p": "I excused my colleague's blunder.",
      "a": "I believed that he knew better.",
      "hard_label": 0
    },
    {
      "id": 886,
      "asks-for": "effect",
      "p": "The plane hit some turbulence.",
      "a": "The man tightened his seatbelt.",
      "hard_label": 1
    },
    {
      "id": 886,
      "asks-for": "effect",
      "p": "The plane hit some turbulence.",
      "a": "The man looked out the window.",
      "hard_label": 0
    },
    {
      "id": 529,
      "asks-for": "cause",
      "p": "The frozen food thawed.",
      "a": "I put it in the microwave.",
      "hard_label": 1
    },
    {
      "id": 529,
      "asks-for": "cause",
      "p": "The frozen food thawed.",
      "a": "I covered it with plastic wrap.",
      "hard_label": 0
    },
    {
      "id": 815,
      "asks-for": "effect",
      "p": "The leader antagonized the extremists among his country.",
      "a": "The extremists influenced him.",
      "hard_label": 0
    },
    {
      "id": 815,
      "asks-for": "effect",
      "p": "The leader antagonized the extremists among his country.",
      "a": "The extremists assassinated him.",
      "hard_label": 1
    },
    {
      "id": 514,
      "asks-for": "effect",
      "p": "The man's email inbox was full of spam.",
      "a": "He deleted the spam.",
      "hard_label": 1
    },
    {
      "id": 514,
      "asks-for": "effect",
      "p": "The man's email inbox was full of spam.",
      "a": "He sent out a mass email.",
      "hard_label": 0
    },
    {
      "id": 581,
      "asks-for": "effect",
      "p": "I turned on the fan.",
      "a": "Water sprinkled onto my skin.",
      "hard_label": 0
    },
    {
      "id": 581,
      "asks-for": "effect",
      "p": "I turned on the fan.",
      "a": "I felt cool air pass over me.",
      "hard_label": 1
    },
    {
      "id": 902,
      "asks-for": "effect",
      "p": "The wealthy man died of old age.",
      "a": "His son got into legal trouble.",
      "hard_label": 0
    },
    {
      "id": 902,
      "asks-for": "effect",
      "p": "The wealthy man died of old age.",
      "a": "His son inherited his fortune.",
      "hard_label": 1
    },
    {
      "id": 751,
      "asks-for": "cause",
      "p": "The man punctured his foot.",
      "a": "He walked into a puddle.",
      "hard_label": 0
    },
    {
      "id": 751,
      "asks-for": "cause",
      "p": "The man punctured his foot.",
      "a": "He stepped on broken glass.",
      "hard_label": 1
    },
    {
      "id": 675,
      "asks-for": "effect",
      "p": "The parking lot of the building was empty.",
      "a": "I parked across the street.",
      "hard_label": 0
    },
    {
      "id": 675,
      "asks-for": "effect",
      "p": "The parking lot of the building was empty.",
      "a": "I parked near the entrance.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 538,
      "asks-for": "effect",
      "p": "The man took sleeping medication.",
      "a": "He became drowsy.",
      "hard_label": 1
    },
    {
      "id": 538,
      "asks-for": "effect",
      "p": "The man took sleeping medication.",
      "a": "He ran a fever.",
      "hard_label": 0
    },
    {
      "id": 933,
      "asks-for": "cause",
      "p": "The disputing parties reached a settlement.",
      "a": "They didn't want to debate in court.",
      "hard_label": 1
    },
    {
      "id": 933,
      "asks-for": "cause",
      "p": "The disputing parties reached a settlement.",
      "a": "They wanted to repair their personal relationship.",
      "hard_label": 0
    },
    {
      "id": 766,
      "asks-for": "cause",
      "p": "The boy kicked the vending machine.",
      "a": "The machine spit out the change.",
      "hard_label": 0
    },
    {
      "id": 766,
      "asks-for": "cause",
      "p": "The boy kicked the vending machine.",
      "a": "The bag of chips was stuck.",
      "hard_label": 1
    },
    {
      "id": 953,
      "asks-for": "effect",
      "p": "The child let go of the balloon string.",
      "a": "The balloon deflated.",
      "hard_label": 0
    },
    {
      "id": 953,
      "asks-for": "effect",
      "p": "The child let go of the balloon string.",
      "a": "The balloon rose into the air.",
      "hard_label": 1
    },
    {
      "id": 572,
      "asks-for": "cause",
      "p": "The woman overslept.",
      "a": "She stayed the night in a hotel.",
      "hard_label": 0
    },
    {
      "id": 572,
      "asks-for": "cause",
      "p": "The woman overslept.",
      "a": "She forgot to set her alarm clock.",
      "hard_label": 1
    },
    {
      "id": 994,
      "asks-for": "effect",
      "p": "The man swatted at the fly.",
      "a": "The fly buzzed away.",
      "hard_label": 1
    },
    {
      "id": 994,
      "asks-for": "effect",
      "p": "The man swatted at the fly.",
      "a": "The fly stayed still.",
      "hard_label": 0
    },
    {
      "id": 650,
      "asks-for": "cause",
      "p": "The man signed the activists' petition.",
      "a": "He supported their cause.",
      "hard_label": 1
    },
    {
      "id": 650,
      "asks-for": "cause",
      "p": "The man signed the activists' petition.",
      "a": "He denounced them as crazy.",
      "hard_label": 0
    },
    {
      "id": 593,
      "asks-for": "cause",
      "p": "The man witnessed aliens.",
      "a": "He was hallucinating.",
      "hard_label": 1
    },
    {
      "id": 593,
      "asks-for": "cause",
      "p": "The man witnessed aliens.",
      "a": "He was meditating.",
      "hard_label": 0
    },
    {
      "id": 563,
      "asks-for": "cause",
      "p": "I looked at the clock.",
      "a": "I heard the clock tick.",
      "hard_label": 0
    },
    {
      "id": 563,
      "asks-for": "cause",
      "p": "I looked at the clock.",
      "a": "I wanted to check the time.",
      "hard_label": 1
    },
    {
      "id": 787,
      "asks-for": "effect",
      "p": "The nation endured a natural disaster.",
      "a": "Leaders of other countries formed an alliance.",
      "hard_label": 0
    },
    {
      "id": 787,
      "asks-for": "effect",
      "p": "The nation endured a natural disaster.",
      "a": "Leaders of other countries sent emergency relief.",
      "hard_label": 1
    },
    {
      "id": 937,
      "asks-for": "cause",
      "p": "The oven became hot.",
      "a": "I turned the oven on.",
      "hard_label": 1
    },
    {
      "id": 937,
      "asks-for": "cause",
      "p": "The oven became hot.",
      "a": "I put the dish in the oven.",
      "hard_label": 0
    },
    {
      "id": 752,
      "asks-for": "effect",
      "p": "The detectives dusted the crime scene for fingerprints.",
      "a": "They discovered the identity of the murderer.",
      "hard_label": 1
    },
    {
      "id": 752,
      "asks-for": "effect",
      "p": "The detectives dusted the crime scene for fingerprints.",
      "a": "They found the weapon at the crime scene.",
      "hard_label": 0
    },
    {
      "id": 909,
      "asks-for": "cause",
      "p": "I lifted up the couch cushions.",
      "a": "I was looking for loose change.",
      "hard_label": 1
    },
    {
      "id": 909,
      "asks-for": "cause",
      "p": "I lifted up the couch cushions.",
      "a": "I was rearranging the living room.",
      "hard_label": 0
    },
    {
      "id": 785,
      "asks-for": "effect",
      "p": "The man wanted to watch the sunrise.",
      "a": "He travelled north.",
      "hard_label": 0
    },
    {
      "id": 785,
      "asks-for": "effect",
      "p": "The man wanted to watch the sunrise.",
      "a": "He got up early.",
      "hard_label": 1
    },
    {
      "id": 734,
      "asks-for": "effect",
      "p": "A tornado came through the town.",
      "a": "The roof of the courthouse blew off.",
      "hard_label": 1
    },
    {
      "id": 734,
      "asks-for": "effect",
      "p": "A tornado came through the town.",
      "a": "The highway became dangerously icy.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 629,
      "asks-for": "cause",
      "p": "The lawyer took the stairs up to her office.",
      "a": "The secretary went home for the day.",
      "hard_label": 0
    },
    {
      "id": 629,
      "asks-for": "cause",
      "p": "The lawyer took the stairs up to her office.",
      "a": "The elevator was out of order.",
      "hard_label": 1
    },
    {
      "id": 906,
      "asks-for": "effect",
      "p": "The public figure got out of the limousine.",
      "a": "Cameras flashed in his direction.",
      "hard_label": 1
    },
    {
      "id": 906,
      "asks-for": "effect",
      "p": "The public figure got out of the limousine.",
      "a": "His family attended the press conference.",
      "hard_label": 0
    },
    {
      "id": 706,
      "asks-for": "cause",
      "p": "The soda bottle hissed.",
      "a": "I turned over the bottle.",
      "hard_label": 0
    },
    {
      "id": 706,
      "asks-for": "cause",
      "p": "The soda bottle hissed.",
      "a": "I twisted off the cap.",
      "hard_label": 1
    },
    {
      "id": 935,
      "asks-for": "effect",
      "p": "A meteorite landed in the ocean.",
      "a": "A tsunami occurred.",
      "hard_label": 1
    },
    {
      "id": 935,
      "asks-for": "effect",
      "p": "A meteorite landed in the ocean.",
      "a": "It began to hail.",
      "hard_label": 0
    },
    {
      "id": 639,
      "asks-for": "effect",
      "p": "The two children simultaneously reached down to retrieve the ball.",
      "a": "The ball rolled away.",
      "hard_label": 0
    },
    {
      "id": 639,
      "asks-for": "effect",
      "p": "The two children simultaneously reached down to retrieve the ball.",
      "a": "Their heads collided.",
      "hard_label": 1
    },
    {
      "id": 873,
      "asks-for": "effect",
      "p": "The student procrastinated on the paper.",
      "a": "He submitted the paper early.",
      "hard_label": 0
    },
    {
      "id": 873,
      "asks-for": "effect",
      "p": "The student procrastinated on the paper.",
      "a": "He submitted the paper incomplete.",
      "hard_label": 1
    },
    {
      "id": 546,
      "asks-for": "effect",
      "p": "I drilled a hole in the wall.",
      "a": "A mouse crawled out of the hole.",
      "hard_label": 0
    },
    {
      "id": 546,
      "asks-for": "effect",
      "p": "I drilled a hole in the wall.",
      "a": "Dust blew out of the hole.",
      "hard_label": 1
    },
    {
      "id": 670,
      "asks-for": "effect",
      "p": "I felt exhausted.",
      "a": "I went to bed early.",
      "hard_label": 1
    },
    {
      "id": 670,
      "asks-for": "effect",
      "p": "I felt exhausted.",
      "a": "I stayed up all night.",
      "hard_label": 0
    },
    {
      "id": 853,
      "asks-for": "effect",
      "p": "I became enthralled in the book.",
      "a": "I returned the book.",
      "hard_label": 0
    },
    {
      "id": 853,
      "asks-for": "effect",
      "p": "I became enthralled in the book.",
      "a": "I lost track of time.",
      "hard_label": 1
    },
    {
      "id": 743,
      "asks-for": "cause",
      "p": "My facial expression lit up.",
      "a": "I received good news.",
      "hard_label": 1
    },
    {
      "id": 743,
      "asks-for": "cause",
      "p": "My facial expression lit up.",
      "a": "I lost my patience.",
      "hard_label": 0
    },
    {
      "id": 620,
      "asks-for": "effect",
      "p": "Everyone disapproved of the couple's engagement.",
      "a": "The couple got pregnant.",
      "hard_label": 0
    },
    {
      "id": 620,
      "asks-for": "effect",
      "p": "Everyone disapproved of the couple's engagement.",
      "a": "The couple eloped.",
      "hard_label": 1
    },
    {
      "id": 647,
      "asks-for": "cause",
      "p": "The man took a mint.",
      "a": "His lips were chapped.",
      "hard_label": 0
    },
    {
      "id": 647,
      "asks-for": "cause",
      "p": "The man took a mint.",
      "a": "He worried about bad breath.",
      "hard_label": 1
    },
    {
      "id": 774,
      "asks-for": "cause",
      "p": "The man dropped his spoon.",
      "a": "His hand was shaking.",
      "hard_label": 1
    },
    {
      "id": 774,
      "asks-for": "cause",
      "p": "The man dropped his spoon.",
      "a": "He licked the spoon.",
      "hard_label": 0
    },
    {
      "id": 810,
      "asks-for": "cause",
      "p": "The woman communicated with sign language.",
      "a": "She was born premature.",
      "hard_label": 0
    },
    {
      "id": 810,
      "asks-for": "cause",
      "p": "The woman communicated with sign language.",
      "a": "She was born deaf.",
      "hard_label": 1
    },
    {
      "id": 798,
      "asks-for": "cause",
      "p": "The bug got squashed.",
      "a": "I sprayed myself with bug repellent.",
      "hard_label": 0
    },
    {
      "id": 798,
      "asks-for": "cause",
      "p": "The bug got squashed.",
      "a": "I stepped on the bug.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 653,
      "asks-for": "effect",
      "p": "The ripe fruit lingered in the sun.",
      "a": "It was eaten.",
      "hard_label": 0
    },
    {
      "id": 653,
      "asks-for": "effect",
      "p": "The ripe fruit lingered in the sun.",
      "a": "It shriveled up.",
      "hard_label": 1
    },
    {
      "id": 871,
      "asks-for": "effect",
      "p": "I put the flower under my nose.",
      "a": "The petals came off the flower.",
      "hard_label": 0
    },
    {
      "id": 871,
      "asks-for": "effect",
      "p": "I put the flower under my nose.",
      "a": "I picked up the flower's scent.",
      "hard_label": 1
    },
    {
      "id": 687,
      "asks-for": "effect",
      "p": "I squeezed the damp sponge.",
      "a": "It soaked up water.",
      "hard_label": 0
    },
    {
      "id": 687,
      "asks-for": "effect",
      "p": "I squeezed the damp sponge.",
      "a": "Water seeped out of it.",
      "hard_label": 1
    },
    {
      "id": 843,
      "asks-for": "effect",
      "p": "The girl caught her brother reading her diary.",
      "a": "She started hiding the diary.",
      "hard_label": 1
    },
    {
      "id": 843,
      "asks-for": "effect",
      "p": "The girl caught her brother reading her diary.",
      "a": "She got a new diary.",
      "hard_label": 0
    },
    {
      "id": 635,
      "asks-for": "effect",
      "p": "My friend pointed out that I had food stuck in my teeth.",
      "a": "I felt embarrassed.",
      "hard_label": 1
    },
    {
      "id": 635,
      "asks-for": "effect",
      "p": "My friend pointed out that I had food stuck in my teeth.",
      "a": "I felt proud.",
      "hard_label": 0
    },
    {
      "id": 630,
      "asks-for": "cause",
      "p": "The man became annoyed with his friend.",
      "a": "His friend interrupted him.",
      "hard_label": 1
    },
    {
      "id": 630,
      "asks-for": "cause",
      "p": "The man became annoyed with his friend.",
      "a": "His friend bought him lunch.",
      "hard_label": 0
    },
    {
      "id": 640,
      "asks-for": "cause",
      "p": "The raccoon ransacked the garbage can.",
      "a": "There was cardboard in the garbage can.",
      "hard_label": 0
    },
    {
      "id": 640,
      "asks-for": "cause",
      "p": "The raccoon ransacked the garbage can.",
      "a": "The lid was off the garbage can.",
      "hard_label": 1
    },
    {
      "id": 729,
      "asks-for": "effect",
      "p": "The girl made a mistake on her exam.",
      "a": "She guessed at the answer.",
      "hard_label": 0
    },
    {
      "id": 729,
      "asks-for": "effect",
      "p": "The girl made a mistake on her exam.",
      "a": "She erased her answer.",
      "hard_label": 1
    },
    {
      "id": 716,
      "asks-for": "effect",
      "p": "The man lost his balance on the ladder.",
      "a": "He climbed up the ladder.",
      "hard_label": 0
    },
    {
      "id": 716,
      "asks-for": "effect",
      "p": "The man lost his balance on the ladder.",
      "a": "He fell off the ladder.",
      "hard_label": 1
    },
    {
      "id": 599,
      "asks-for": "cause",
      "p": "We rode the roller coaster.",
      "a": "It looked scary.",
      "hard_label": 0
    },
    {
      "id": 599,
      "asks-for": "cause",
      "p": "We rode the roller coaster.",
      "a": "It looked fun.",
      "hard_label": 1
    },
    {
      "id": 981,
      "asks-for": "cause",
      "p": "The man was denied for a loan.",
      "a": "He was in debt.",
      "hard_label": 1
    },
    {
      "id": 981,
      "asks-for": "cause",
      "p": "The man was denied for a loan.",
      "a": "He started a business.",
      "hard_label": 0
    },
    {
      "id": 993,
      "asks-for": "effect",
      "p": "I had to wait in line.",
      "a": "I took a seat.",
      "hard_label": 0
    },
    {
      "id": 993,
      "asks-for": "effect",
      "p": "I had to wait in line.",
      "a": "I skimmed a magazine.",
      "hard_label": 1
    },
    {
      "id": 1000,
      "asks-for": "effect",
      "p": "The boy couldn't fall asleep.",
      "a": "He set his alarm clock.",
      "hard_label": 0
    },
    {
      "id": 1000,
      "asks-for": "effect",
      "p": "The boy couldn't fall asleep.",
      "a": "He counted sheep.",
      "hard_label": 1
    },
    {
      "id": 516,
      "asks-for": "cause",
      "p": "The girl memorized the code.",
      "a": "She recited it to herself.",
      "hard_label": 1
    },
    {
      "id": 516,
      "asks-for": "cause",
      "p": "The girl memorized the code.",
      "a": "She forgot to write it down.",
      "hard_label": 0
    },
    {
      "id": 730,
      "asks-for": "effect",
      "p": "The player tackled his opponent.",
      "a": "His opponent caught the pass.",
      "hard_label": 0
    },
    {
      "id": 730,
      "asks-for": "effect",
      "p": "The player tackled his opponent.",
      "a": "His opponent hit the ground.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 907,
      "asks-for": "effect",
      "p": "The woman lingered in the bathtub.",
      "a": "The bathwater became lukewarm.",
      "hard_label": 1
    },
    {
      "id": 907,
      "asks-for": "effect",
      "p": "The woman lingered in the bathtub.",
      "a": "The bathwater drained out of the tub.",
      "hard_label": 0
    },
    {
      "id": 897,
      "asks-for": "cause",
      "p": "The girl sent the boy a valentine.",
      "a": "She liked him.",
      "hard_label": 1
    },
    {
      "id": 897,
      "asks-for": "cause",
      "p": "The girl sent the boy a valentine.",
      "a": "She kissed him.",
      "hard_label": 0
    },
    {
      "id": 658,
      "asks-for": "effect",
      "p": "I knocked on my neighbor's door.",
      "a": "My neighbor invited me in.",
      "hard_label": 1
    },
    {
      "id": 658,
      "asks-for": "effect",
      "p": "I knocked on my neighbor's door.",
      "a": "My neighbor left her house.",
      "hard_label": 0
    },
    {
      "id": 526,
      "asks-for": "effect",
      "p": "The player won five games in a row.",
      "a": "Her opponent accused her of cheating.",
      "hard_label": 1
    },
    {
      "id": 526,
      "asks-for": "effect",
      "p": "The player won five games in a row.",
      "a": "Her opponent felt sorry for her.",
      "hard_label": 0
    },
    {
      "id": 556,
      "asks-for": "effect",
      "p": "The child sprinkled fish food into the tank.",
      "a": "The fish leapt out of the tank.",
      "hard_label": 0
    },
    {
      "id": 556,
      "asks-for": "effect",
      "p": "The child sprinkled fish food into the tank.",
      "a": "The fish swam towards the food.",
      "hard_label": 1
    },
    {
      "id": 874,
      "asks-for": "effect",
      "p": "My car broke down.",
      "a": "I went to the mall.",
      "hard_label": 0
    },
    {
      "id": 874,
      "asks-for": "effect",
      "p": "My car broke down.",
      "a": "I called a mechanic.",
      "hard_label": 1
    },
    {
      "id": 797,
      "asks-for": "cause",
      "p": "The boy's hair was sticking up.",
      "a": "The girl ruffled it.",
      "hard_label": 1
    },
    {
      "id": 797,
      "asks-for": "cause",
      "p": "The boy's hair was sticking up.",
      "a": "The girl pulled it.",
      "hard_label": 0
    },
    {
      "id": 899,
      "asks-for": "cause",
      "p": "The friends flipped a coin.",
      "a": "They wanted to find a compromise.",
      "hard_label": 0
    },
    {
      "id": 899,
      "asks-for": "cause",
      "p": "The friends flipped a coin.",
      "a": "They wanted to make a fair decision.",
      "hard_label": 1
    },
    {
      "id": 576,
      "asks-for": "effect",
      "p": "I entered my combination on the lock.",
      "a": "I shut the lock.",
      "hard_label": 0
    },
    {
      "id": 576,
      "asks-for": "effect",
      "p": "I entered my combination on the lock.",
      "a": "The lock popped open.",
      "hard_label": 1
    },
    {
      "id": 578,
      "asks-for": "effect",
      "p": "The snow was blocking the driveway.",
      "a": "I gathered the snow into a snowball.",
      "hard_label": 0
    },
    {
      "id": 578,
      "asks-for": "effect",
      "p": "The snow was blocking the driveway.",
      "a": "I shoveled the snow out of the way.",
      "hard_label": 1
    },
    {
      "id": 624,
      "asks-for": "effect",
      "p": "The court upheld the controversial ruling.",
      "a": "A riot broke loose in front of the courthouse.",
      "hard_label": 1
    },
    {
      "id": 624,
      "asks-for": "effect",
      "p": "The court upheld the controversial ruling.",
      "a": "A couple exchanged vows in front of the courthouse.",
      "hard_label": 0
    },
    {
      "id": 544,
      "asks-for": "effect",
      "p": "I pushed the door.",
      "a": "The door opened.",
      "hard_label": 1
    },
    {
      "id": 544,
      "asks-for": "effect",
      "p": "I pushed the door.",
      "a": "The door locked.",
      "hard_label": 0
    },
    {
      "id": 862,
      "asks-for": "effect",
      "p": "The witness lied under oath.",
      "a": "He completed his testimony.",
      "hard_label": 0
    },
    {
      "id": 862,
      "asks-for": "effect",
      "p": "The witness lied under oath.",
      "a": "He was charged with perjury.",
      "hard_label": 1
    },
    {
      "id": 792,
      "asks-for": "effect",
      "p": "I yanked the imposter's hair.",
      "a": "Her wig came off.",
      "hard_label": 1
    },
    {
      "id": 792,
      "asks-for": "effect",
      "p": "I yanked the imposter's hair.",
      "a": "She went bald.",
      "hard_label": 0
    },
    {
      "id": 986,
      "asks-for": "effect",
      "p": "The girl threw a twig into the campfire.",
      "a": "The twig burned.",
      "hard_label": 1
    },
    {
      "id": 986,
      "asks-for": "effect",
      "p": "The girl threw a twig into the campfire.",
      "a": "The fire went out.",
      "hard_label": 0
    }
  ],
  [
    {
      "id": 922,
      "asks-for": "effect",
      "p": "I breathed in the dust in the attic.",
      "a": "I hiccupped.",
      "hard_label": 0
    },
    {
      "id": 922,
      "asks-for": "effect",
      "p": "I breathed in the dust in the attic.",
      "a": "I sneezed.",
      "hard_label": 1
    },
    {
      "id": 962,
      "asks-for": "cause",
      "p": "The young boy clung to the ledge of the pool.",
      "a": "He feared learning to swim.",
      "hard_label": 1
    },
    {
      "id": 962,
      "asks-for": "cause",
      "p": "The young boy clung to the ledge of the pool.",
      "a": "The lifeguard was on duty.",
      "hard_label": 0
    },
    {
      "id": 562,
      "asks-for": "effect",
      "p": "The accountant mismanaged the company's funds.",
      "a": "She was fired from her position.",
      "hard_label": 1
    },
    {
      "id": 562,
      "asks-for": "effect",
      "p": "The accountant mismanaged the company's funds.",
      "a": "She went on maternity leave.",
      "hard_label": 0
    },
    {
      "id": 823,
      "asks-for": "effect",
      "p": "The child landed on the trampoline.",
      "a": "She sprung back up into the air.",
      "hard_label": 1
    },
    {
      "id": 823,
      "asks-for": "effect",
      "p": "The child landed on the trampoline.",
      "a": "She decided to try to do a flip.",
      "hard_label": 0
    },
    {
      "id": 666,
      "asks-for": "cause",
      "p": "The driver took a detour.",
      "a": "An accident occurred on the main road.",
      "hard_label": 1
    },
    {
      "id": 666,
      "asks-for": "cause",
      "p": "The driver took a detour.",
      "a": "She followed the truck in front of her.",
      "hard_label": 0
    },
    {
      "id": 995,
      "asks-for": "cause",
      "p": "The man wrote a will.",
      "a": "He was dying.",
      "hard_label": 1
    },
    {
      "id": 995,
      "asks-for": "cause",
      "p": "The man wrote a will.",
      "a": "He was a widower.",
      "hard_label": 0
    },
    {
      "id": 977,
      "asks-for": "effect",
      "p": "The man started an argument with me.",
      "a": "My friend introduced me to the man.",
      "hard_label": 0
    },
    {
      "id": 977,
      "asks-for": "effect",
      "p": "The man started an argument with me.",
      "a": "My friend stood up for me.",
      "hard_label": 1
    },
    {
      "id": 989,
      "asks-for": "effect",
      "p": "The man unlaced his shoes.",
      "a": "The shoes loosened.",
      "hard_label": 1
    },
    {
      "id": 989,
      "asks-for": "effect",
      "p": "The man unlaced his shoes.",
      "a": "The shoes became worn.",
      "hard_label": 0
    },
    {
      "id": 520,
      "asks-for": "cause",
      "p": "The chain came apart.",
      "a": "The chain was wrapped around a tire.",
      "hard_label": 0
    },
    {
      "id": 520,
      "asks-for": "cause",
      "p": "The chain came apart.",
      "a": "There was a broken link in the chain.",
      "hard_label": 1
    },
    {
      "id": 892,
      "asks-for": "effect",
      "p": "The town received several inches of snow.",
      "a": "Schools shut down.",
      "hard_label": 1
    },
    {
      "id": 892,
      "asks-for": "effect",
      "p": "The town received several inches of snow.",
      "a": "People hid underground.",
      "hard_label": 0
    },
    {
      "id": 625,
      "asks-for": "cause",
      "p": "The girl smelled something burning.",
      "a": "She took the cookies out of the jar.",
      "hard_label": 0
    },
    {
      "id": 625,
      "asks-for": "cause",
      "p": "The girl smelled something burning.",
      "a": "She left the cookies in the oven.",
      "hard_label": 1
    },
    {
      "id": 996,
      "asks-for": "effect",
      "p": "The runner sensed his competitor gaining on him.",
      "a": "He dropped out of the race.",
      "hard_label": 0
    },
    {
      "id": 996,
      "asks-for": "effect",
      "p": "The runner sensed his competitor gaining on him.",
      "a": "He sped up his pace.",
      "hard_label": 1
    },
    {
      "id": 509,
      "asks-for": "effect",
      "p": "The band played their hit song.",
      "a": "The audience clapped along to the music.",
      "hard_label": 1
    },
    {
      "id": 509,
      "asks-for": "effect",
      "p": "The band played their hit song.",
      "a": "The audience politely listened in silence.",
      "hard_label": 0
    },
    {
      "id": 614,
      "asks-for": "cause",
      "p": "The employees formed a union.",
      "a": "They wanted better working conditions.",
      "hard_label": 1
    },
    {
      "id": 614,
      "asks-for": "cause",
      "p": "The employees formed a union.",
      "a": "Their employer raised their wages.",
      "hard_label": 0
    },
    {
      "id": 678,
      "asks-for": "effect",
      "p": "The wind blew through the open window.",
      "a": "The doorbell rang.",
      "hard_label": 0
    },
    {
      "id": 678,
      "asks-for": "effect",
      "p": "The wind blew through the open window.",
      "a": "The curtains shuddered.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 756,
      "asks-for": "cause",
      "p": "I rolled my eyes at my friend.",
      "a": "He told me the truth.",
      "hard_label": 0
    },
    {
      "id": 756,
      "asks-for": "cause",
      "p": "I rolled my eyes at my friend.",
      "a": "He made a sarcastic remark.",
      "hard_label": 1
    },
    {
      "id": 982,
      "asks-for": "cause",
      "p": "The girl stayed home from school.",
      "a": "She had chicken pox.",
      "hard_label": 1
    },
    {
      "id": 982,
      "asks-for": "cause",
      "p": "The girl stayed home from school.",
      "a": "She enjoyed learning math.",
      "hard_label": 0
    },
    {
      "id": 983,
      "asks-for": "effect",
      "p": "The trash bag was full.",
      "a": "I took it to the dumpster.",
      "hard_label": 1
    },
    {
      "id": 983,
      "asks-for": "effect",
      "p": "The trash bag was full.",
      "a": "I dumped it down the sink.",
      "hard_label": 0
    },
    {
      "id": 876,
      "asks-for": "effect",
      "p": "The bird flapped its wings.",
      "a": "It laid eggs.",
      "hard_label": 0
    },
    {
      "id": 876,
      "asks-for": "effect",
      "p": "The bird flapped its wings.",
      "a": "It ascended upwards.",
      "hard_label": 1
    },
    {
      "id": 668,
      "asks-for": "cause",
      "p": "The woman put on her shades.",
      "a": "The sunlight was bright.",
      "hard_label": 1
    },
    {
      "id": 668,
      "asks-for": "cause",
      "p": "The woman put on her shades.",
      "a": "She hailed a cab.",
      "hard_label": 0
    },
    {
      "id": 512,
      "asks-for": "effect",
      "p": "The man hit his head.",
      "a": "He got lost in thought.",
      "hard_label": 0
    },
    {
      "id": 512,
      "asks-for": "effect",
      "p": "The man hit his head.",
      "a": "He got a concussion.",
      "hard_label": 1
    },
    {
      "id": 627,
      "asks-for": "cause",
      "p": "The building was evacuated.",
      "a": "The elevator stopped functioning.",
      "hard_label": 0
    },
    {
      "id": 627,
      "asks-for": "cause",
      "p": "The building was evacuated.",
      "a": "The fire alarm went off.",
      "hard_label": 1
    },
    {
      "id": 913,
      "asks-for": "cause",
      "p": "The veteran walked with a limp.",
      "a": "He was drafted for the war.",
      "hard_label": 0
    },
    {
      "id": 913,
      "asks-for": "cause",
      "p": "The veteran walked with a limp.",
      "a": "He was injured in battle.",
      "hard_label": 1
    },
    {
      "id": 568,
      "asks-for": "cause",
      "p": "The man wore a lifejacket in the water.",
      "a": "He couldn't swim.",
      "hard_label": 1
    },
    {
      "id": 568,
      "asks-for": "cause",
      "p": "The man wore a lifejacket in the water.",
      "a": "The water was shallow.",
      "hard_label": 0
    },
    {
      "id": 796,
      "asks-for": "effect",
      "p": "The music was too faint to hear.",
      "a": "I turned up the volume.",
      "hard_label": 1
    },
    {
      "id": 796,
      "asks-for": "effect",
      "p": "The music was too faint to hear.",
      "a": "I composed my own song.",
      "hard_label": 0
    },
    {
      "id": 501,
      "asks-for": "cause",
      "p": "The item was packaged in bubble wrap.",
      "a": "It was fragile.",
      "hard_label": 1
    },
    {
      "id": 501,
      "asks-for": "cause",
      "p": "The item was packaged in bubble wrap.",
      "a": "It was small.",
      "hard_label": 0
    },
    {
      "id": 645,
      "asks-for": "effect",
      "p": "The child left crumbs on the floor.",
      "a": "Ants crawled to the crumbs.",
      "hard_label": 1
    },
    {
      "id": 645,
      "asks-for": "effect",
      "p": "The child left crumbs on the floor.",
      "a": "The child put the bread away.",
      "hard_label": 0
    },
    {
      "id": 772,
      "asks-for": "cause",
      "p": "The poster stuck to the wall.",
      "a": "I positioned the poster above the door.",
      "hard_label": 0
    },
    {
      "id": 772,
      "asks-for": "cause",
      "p": "The poster stuck to the wall.",
      "a": "I put tape on the back of the poster.",
      "hard_label": 1
    },
    {
      "id": 775,
      "asks-for": "effect",
      "p": "The CEO of the company resigned.",
      "a": "The board of directors dissolved the company.",
      "hard_label": 0
    },
    {
      "id": 775,
      "asks-for": "effect",
      "p": "The CEO of the company resigned.",
      "a": "The board of directors found his replacement.",
      "hard_label": 1
    },
    {
      "id": 879,
      "asks-for": "cause",
      "p": "I looked forward to the weekend.",
      "a": "I planned to attend my uncle's funeral.",
      "hard_label": 0
    },
    {
      "id": 879,
      "asks-for": "cause",
      "p": "I looked forward to the weekend.",
      "a": "I planned to attend my friend's wedding.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 757,
      "asks-for": "effect",
      "p": "The car ran out of gas.",
      "a": "The driver was stranded on the road.",
      "hard_label": 1
    },
    {
      "id": 757,
      "asks-for": "effect",
      "p": "The car ran out of gas.",
      "a": "The driver picked up a hitchhiker.",
      "hard_label": 0
    },
    {
      "id": 580,
      "asks-for": "effect",
      "p": "The girl lost control of her bike.",
      "a": "She let go of the handlebars.",
      "hard_label": 0
    },
    {
      "id": 580,
      "asks-for": "effect",
      "p": "The girl lost control of her bike.",
      "a": "She crashed into a fence.",
      "hard_label": 1
    },
    {
      "id": 596,
      "asks-for": "cause",
      "p": "The son moved away from home.",
      "a": "He was discharged from the military.",
      "hard_label": 0
    },
    {
      "id": 596,
      "asks-for": "cause",
      "p": "The son moved away from home.",
      "a": "He was going to college.",
      "hard_label": 1
    },
    {
      "id": 794,
      "asks-for": "cause",
      "p": "The woman cancelled her credit card account.",
      "a": "She realized the card was missing.",
      "hard_label": 1
    },
    {
      "id": 794,
      "asks-for": "cause",
      "p": "The woman cancelled her credit card account.",
      "a": "She realized the card was expired.",
      "hard_label": 0
    },
    {
      "id": 789,
      "asks-for": "cause",
      "p": "The student rushed to finish the book.",
      "a": "It was due to be returned to the library.",
      "hard_label": 1
    },
    {
      "id": 789,
      "asks-for": "cause",
      "p": "The student rushed to finish the book.",
      "a": "He borrowed it from a friend.",
      "hard_label": 0
    },
    {
      "id": 841,
      "asks-for": "cause",
      "p": "The homeowner requested that an exterminator come to his house.",
      "a": "He discovered rats in the basement.",
      "hard_label": 1
    },
    {
      "id": 841,
      "asks-for": "cause",
      "p": "The homeowner requested that an exterminator come to his house.",
      "a": "He kept an ant farm in his room.",
      "hard_label": 0
    },
    {
      "id": 835,
      "asks-for": "cause",
      "p": "The man's arm muscles bulged.",
      "a": "He flexed his arms.",
      "hard_label": 1
    },
    {
      "id": 835,
      "asks-for": "cause",
      "p": "The man's arm muscles bulged.",
      "a": "He rubbed his arms.",
      "hard_label": 0
    },
    {
      "id": 827,
      "asks-for": "effect",
      "p": "The child skinned his knee.",
      "a": "His mother sent him to his room.",
      "hard_label": 0
    },
    {
      "id": 827,
      "asks-for": "effect",
      "p": "The child skinned his knee.",
      "a": "His mother put a bandage on the wound.",
      "hard_label": 1
    },
    {
      "id": 795,
      "asks-for": "effect",
      "p": "The man and woman fell in love.",
      "a": "They attended college.",
      "hard_label": 0
    },
    {
      "id": 795,
      "asks-for": "effect",
      "p": "The man and woman fell in love.",
      "a": "They got married.",
      "hard_label": 1
    },
    {
      "id": 818,
      "asks-for": "cause",
      "p": "The mother hushed her son.",
      "a": "Her son smirked.",
      "hard_label": 0
    },
    {
      "id": 818,
      "asks-for": "cause",
      "p": "The mother hushed her son.",
      "a": "Her son whined.",
      "hard_label": 1
    },
    {
      "id": 808,
      "asks-for": "cause",
      "p": "A boom reverberated across the stage.",
      "a": "The musician tapped his foot.",
      "hard_label": 0
    },
    {
      "id": 808,
      "asks-for": "cause",
      "p": "A boom reverberated across the stage.",
      "a": "The musician pounded the drum.",
      "hard_label": 1
    },
    {
      "id": 684,
      "asks-for": "effect",
      "p": "The photographer forgot to use the flash on the camera.",
      "a": "The photos turned out blurry.",
      "hard_label": 1
    },
    {
      "id": 684,
      "asks-for": "effect",
      "p": "The photographer forgot to use the flash on the camera.",
      "a": "Everyone in the photos refused to smile.",
      "hard_label": 0
    },
    {
      "id": 535,
      "asks-for": "effect",
      "p": "The circus performer juggled while riding a unicycle.",
      "a": "The audience cheered in astonishment.",
      "hard_label": 1
    },
    {
      "id": 535,
      "asks-for": "effect",
      "p": "The circus performer juggled while riding a unicycle.",
      "a": "The acrobat swung from a trapeze.",
      "hard_label": 0
    },
    {
      "id": 632,
      "asks-for": "cause",
      "p": "The woman was put in a wheelchair.",
      "a": "She was paralyzed in an accident.",
      "hard_label": 1
    },
    {
      "id": 632,
      "asks-for": "cause",
      "p": "The woman was put in a wheelchair.",
      "a": "She entered the hospital in a stretcher.",
      "hard_label": 0
    },
    {
      "id": 721,
      "asks-for": "cause",
      "p": "The hungry vagrant stole food.",
      "a": "He incited pity.",
      "hard_label": 0
    },
    {
      "id": 721,
      "asks-for": "cause",
      "p": "The hungry vagrant stole food.",
      "a": "He had no money.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 708,
      "asks-for": "effect",
      "p": "The doorbell rang.",
      "a": "The visitor tapped the knocker on the door.",
      "hard_label": 0
    },
    {
      "id": 708,
      "asks-for": "effect",
      "p": "The doorbell rang.",
      "a": "The woman peered through the keyhole in the door.",
      "hard_label": 1
    },
    {
      "id": 771,
      "asks-for": "effect",
      "p": "The girl wanted to learn about the solar system.",
      "a": "She went to the library.",
      "hard_label": 1
    },
    {
      "id": 771,
      "asks-for": "effect",
      "p": "The girl wanted to learn about the solar system.",
      "a": "She looked at the stars.",
      "hard_label": 0
    },
    {
      "id": 598,
      "asks-for": "effect",
      "p": "The electricity in my house shut off.",
      "a": "I turned on a light.",
      "hard_label": 0
    },
    {
      "id": 598,
      "asks-for": "effect",
      "p": "The electricity in my house shut off.",
      "a": "I reset the circuit breaker.",
      "hard_label": 1
    },
    {
      "id": 839,
      "asks-for": "effect",
      "p": "The woman punched her attacker in the nose.",
      "a": "The attacker's body went lifeless.",
      "hard_label": 0
    },
    {
      "id": 839,
      "asks-for": "effect",
      "p": "The woman punched her attacker in the nose.",
      "a": "The attacker started to bleed.",
      "hard_label": 1
    },
    {
      "id": 611,
      "asks-for": "effect",
      "p": "I missed my girlfriend's phone call.",
      "a": "I called her back.",
      "hard_label": 1
    },
    {
      "id": 611,
      "asks-for": "effect",
      "p": "I missed my girlfriend's phone call.",
      "a": "I met her for dinner.",
      "hard_label": 0
    },
    {
      "id": 805,
      "asks-for": "effect",
      "p": "My brother was released from the hospital.",
      "a": "I welcomed him back home.",
      "hard_label": 1
    },
    {
      "id": 805,
      "asks-for": "effect",
      "p": "My brother was released from the hospital.",
      "a": "I gave him the cold shoulder.",
      "hard_label": 0
    },
    {
      "id": 710,
      "asks-for": "effect",
      "p": "The girl squeezed the tube of toothpaste.",
      "a": "The toothpaste squirted out of the tube.",
      "hard_label": 1
    },
    {
      "id": 710,
      "asks-for": "effect",
      "p": "The girl squeezed the tube of toothpaste.",
      "a": "The girl spit out the toothpaste.",
      "hard_label": 0
    },
    {
      "id": 557,
      "asks-for": "effect",
      "p": "The woman's political views changed.",
      "a": "She switched her party affiliation.",
      "hard_label": 1
    },
    {
      "id": 557,
      "asks-for": "effect",
      "p": "The woman's political views changed.",
      "a": "She engaged in a protest.",
      "hard_label": 0
    },
    {
      "id": 770,
      "asks-for": "cause",
      "p": "The man felt proud of his brother.",
      "a": "His brother got in an argument with their parents.",
      "hard_label": 0
    },
    {
      "id": 770,
      "asks-for": "cause",
      "p": "The man felt proud of his brother.",
      "a": "His brother got accepted into law school.",
      "hard_label": 1
    },
    {
      "id": 925,
      "asks-for": "effect",
      "p": "The family went to the zoo.",
      "a": "The children admired the animals.",
      "hard_label": 1
    },
    {
      "id": 925,
      "asks-for": "effect",
      "p": "The family went to the zoo.",
      "a": "The children chased the animals.",
      "hard_label": 0
    },
    {
      "id": 776,
      "asks-for": "effect",
      "p": "I arrived late to the lecture.",
      "a": "I took a seat in the back row.",
      "hard_label": 1
    },
    {
      "id": 776,
      "asks-for": "effect",
      "p": "I arrived late to the lecture.",
      "a": "I approached the podium.",
      "hard_label": 0
    },
    {
      "id": 657,
      "asks-for": "cause",
      "p": "The woman stopped jogging.",
      "a": "She got a cramp in her side.",
      "hard_label": 1
    },
    {
      "id": 657,
      "asks-for": "cause",
      "p": "The woman stopped jogging.",
      "a": "She got a second wind.",
      "hard_label": 0
    },
    {
      "id": 945,
      "asks-for": "cause",
      "p": "The man went through therapy.",
      "a": "Mental illness ran in his family.",
      "hard_label": 0
    },
    {
      "id": 945,
      "asks-for": "cause",
      "p": "The man went through therapy.",
      "a": "He was diagnosed with depression.",
      "hard_label": 1
    },
    {
      "id": 951,
      "asks-for": "effect",
      "p": "The woman claimed she saw a ghost.",
      "a": "Her acquaintances expressed skepticism.",
      "hard_label": 1
    },
    {
      "id": 951,
      "asks-for": "effect",
      "p": "The woman claimed she saw a ghost.",
      "a": "Her acquaintances related to her.",
      "hard_label": 0
    },
    {
      "id": 719,
      "asks-for": "cause",
      "p": "The student received a scholarship to go to college.",
      "a": "Her classmates respected her.",
      "hard_label": 0
    },
    {
      "id": 719,
      "asks-for": "cause",
      "p": "The student received a scholarship to go to college.",
      "a": "She made good grades.",
      "hard_label": 1
    }
  ],
  [
    {
      "id": 858,
      "asks-for": "cause",
      "p": "I left work early.",
      "a": "I had a headache.",
      "hard_label": 1
    },
    {
      "id": 858,
      "asks-for": "cause",
      "p": "I left work early.",
      "a": "My boss held a meeting.",
      "hard_label": 0
    },
    {
      "id": 693,
      "asks-for": "effect",
      "p": "The girl stepped on the ice.",
      "a": "She slid.",
      "hard_label": 1
    },
    {
      "id": 693,
      "asks-for": "effect",
      "p": "The girl stepped on the ice.",
      "a": "She shivered.",
      "hard_label": 0
    },
    {
      "id": 540,
      "asks-for": "effect",
      "p": "The boy squeezed the balloon.",
      "a": "The balloon popped.",
      "hard_label": 1
    },
    {
      "id": 540,
      "asks-for": "effect",
      "p": "The boy squeezed the balloon.",
      "a": "The balloon flew away.",
      "hard_label": 0
    },
    {
      "id": 971,
      "asks-for": "cause",
      "p": "The television show was censored.",
      "a": "It contained vulgar language.",
      "hard_label": 1
    },
    {
      "id": 971,
      "asks-for": "cause",
      "p": "The television show was censored.",
      "a": "It had a complicated plot.",
      "hard_label": 0
    },
    {
      "id": 781,
      "asks-for": "cause",
      "p": "My mood improved.",
      "a": "I listened to music.",
      "hard_label": 1
    },
    {
      "id": 781,
      "asks-for": "cause",
      "p": "My mood improved.",
      "a": "I did the dishes.",
      "hard_label": 0
    },
    {
      "id": 990,
      "asks-for": "effect",
      "p": "The man ate half of the entree.",
      "a": "He refrigerated the leftovers.",
      "hard_label": 1
    },
    {
      "id": 990,
      "asks-for": "effect",
      "p": "The man ate half of the entree.",
      "a": "He saved the recipe.",
      "hard_label": 0
    },
    {
      "id": 676,
      "asks-for": "cause",
      "p": "The writer missed her deadline for the draft submission.",
      "a": "She had writer's block.",
      "hard_label": 1
    },
    {
      "id": 676,
      "asks-for": "cause",
      "p": "The writer missed her deadline for the draft submission.",
      "a": "She edited the draft.",
      "hard_label": 0
    },
    {
      "id": 531,
      "asks-for": "cause",
      "p": "The girl landed in the pool.",
      "a": "She ran on the pool deck.",
      "hard_label": 0
    },
    {
      "id": 531,
      "asks-for": "cause",
      "p": "The girl landed in the pool.",
      "a": "She jumped off the diving board.",
      "hard_label": 1
    },
    {
      "id": 966,
      "asks-for": "cause",
      "p": "Water splashed up from the pool.",
      "a": "The swimmer dove into the pool.",
      "hard_label": 1
    },
    {
      "id": 966,
      "asks-for": "cause",
      "p": "Water splashed up from the pool.",
      "a": "The swimmer floated in the pool.",
      "hard_label": 0
    },
    {
      "id": 712,
      "asks-for": "cause",
      "p": "The girl yanked the ribbon out of her hair.",
      "a": "She tied the ribbon.",
      "hard_label": 0
    },
    {
      "id": 712,
      "asks-for": "cause",
      "p": "The girl yanked the ribbon out of her hair.",
      "a": "The ribbon looked babyish.",
      "hard_label": 1
    },
    {
      "id": 585,
      "asks-for": "cause",
      "p": "The ink on the poster smeared.",
      "a": "I waited for the ink to dry.",
      "hard_label": 0
    },
    {
      "id": 585,
      "asks-for": "cause",
      "p": "The ink on the poster smeared.",
      "a": "I spilled water on the poster.",
      "hard_label": 1
    },
    {
      "id": 917,
      "asks-for": "cause",
      "p": "The man was heartbroken.",
      "a": "His wife gave birth.",
      "hard_label": 0
    },
    {
      "id": 917,
      "asks-for": "cause",
      "p": "The man was heartbroken.",
      "a": "His wife left him.",
      "hard_label": 1
    },
    {
      "id": 819,
      "asks-for": "cause",
      "p": "A hole ripped in my jeans.",
      "a": "I zipped up the jeans.",
      "hard_label": 0
    },
    {
      "id": 819,
      "asks-for": "cause",
      "p": "A hole ripped in my jeans.",
      "a": "I tripped on the pavement.",
      "hard_label": 1
    },
    {
      "id": 631,
      "asks-for": "effect",
      "p": "The girl handed her money to the cashier.",
      "a": "The cashier gave the girl her change.",
      "hard_label": 1
    },
    {
      "id": 631,
      "asks-for": "effect",
      "p": "The girl handed her money to the cashier.",
      "a": "The cashier forgot to give the girl a receipt.",
      "hard_label": 0
    },
    {
      "id": 615,
      "asks-for": "effect",
      "p": "I baked an apple pie.",
      "a": "A rotting smell filled the kitchen.",
      "hard_label": 0
    },
    {
      "id": 615,
      "asks-for": "effect",
      "p": "I baked an apple pie.",
      "a": "A warm aroma filled the kitchen.",
      "hard_label": 1
    }
  ]
];
