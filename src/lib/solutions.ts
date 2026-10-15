export const solutionPolicy = {
  professionalMonitoringReady: true,
  advancedVitalsVerified: false,
  partnerLogosApproved: false,
};

export const positioning = {
  principle: "We choose help that fits you and your home.",
  privacy: "The room sensors do not need cameras.",
  personalProtection: "Each plan has a help button. Room sensors work without wearing it.",
  response: solutionPolicy.professionalMonitoringReady
    ? "Help button calls go to a 24/7 professional monitoring center. They talk with you, send help and call your family."
    : "We choose who gets calls and alerts with you. We agree who will help and how before setup.",
};

export const solutions = [
  {
    "id": "homeaware",
    "name": "MyIntel HomeAware",
    "shortName": "HomeAware",
    "focus": "A morning check",
    "title": "Start your day with a little help.",
    "audience": "For a morning check and a way to call for help.",
    "scope": "A room sensor checks for moves in one key spot.",
    "image": "/photos/packages/homeaware.webp",
    "imageAlt": "MyIntel HomeAware product lineup showing an Essence hub, standard emergency pendant with wrist strap, and one motion sensor.",
    "deviceCount": 3,
    "options": [
      "A morning check in one key spot",
      "Press a button to call for help"
    ],
    "growth": "We agree when to check back with you.",
    "limits": "One room sensor cannot check the whole home. Press the help button to call for help. The button does not sense falls.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Home hub",
        "model": "Essence",
        "detail": "Links the sensors and lets you call for help."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Help button",
        "model": "Standard emergency pendant",
        "detail": "Press to ask for help. It does not sense falls."
      },
      {
        "key": "motion",
        "count": 1,
        "label": "Room sensor",
        "model": "Motion sensor",
        "detail": "Notes moves in one spot you use each morning."
      }
    ],
    "services": {
      "installationIncluded": true,
      "followUpIncluded": true,
      "assessmentIncluded": false,
      "homePlanIncluded": false
    }
  },
  {
    "id": "homeprotect",
    "name": "MyIntel HomeProtect",
    "shortName": "HomeProtect",
    "focus": "More help at home",
    "title": "More help in the rooms you use.",
    "audience": "For more room checks and fall sensing in one spot.",
    "scope": "More room and door sensors add a fuller view.",
    "image": "/photos/packages/homeprotect.webp",
    "imageAlt": "MyIntel HomeProtect lineup showing one Essence hub, one standard emergency pendant, five motion sensors, three door sensor pairs, one MDsense and one VPD2 communicator.",
    "deviceCount": 12,
    "options": [
      "Room checks in more places",
      "Fall sensing in one set spot",
      "Use your voice to ask for help"
    ],
    "growth": "We agree when to check back with you.",
    "limits": "The fall sensor works in one set spot. The voice unit helps you call. It does not sense falls.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Home hub",
        "model": "Essence",
        "detail": "Links the sensors and lets you call for help."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Help button",
        "model": "Standard emergency pendant",
        "detail": "Press to ask for help. It does not sense falls."
      },
      {
        "key": "motion",
        "count": 5,
        "label": "Room sensors",
        "model": "Motion sensor",
        "detail": "Notes moves in the rooms you use most."
      },
      {
        "key": "door",
        "count": 3,
        "label": "Door sensors",
        "model": "Door/window sensor",
        "detail": "Notes when a door or window is opened."
      },
      {
        "key": "radar",
        "count": 1,
        "label": "Fall sensor",
        "model": "MDsense",
        "detail": "Can sense a fall in a spot we check first."
      },
      {
        "key": "voice",
        "count": 1,
        "label": "Voice help unit",
        "model": "VPD2",
        "detail": "Use your voice to ask for help. This unit does not sense falls."
      }
    ],
    "services": {
      "installationIncluded": true,
      "followUpIncluded": true,
      "assessmentIncluded": true,
      "homePlanIncluded": true
    }
  },
  {
    "id": "homecomplete",
    "name": "MyIntel HomeComplete",
    "shortName": "HomeComplete",
    "focus": "Help for day and night",
    "title": "More help for sleep and key rooms.",
    "audience": "For help at night and fall sensing in two spots.",
    "scope": "All of HomeProtect, plus a bed sensor and one more fall sensor.",
    "image": "/photos/packages/homecomplete.webp",
    "imageAlt": "MyIntel HomeComplete lineup showing one Essence hub, one standard emergency pendant, five motion sensors, three door sensor pairs, two MDsense detectors, one VPD2 communicator and one SleepSense.",
    "deviceCount": 14,
    "options": [
      "Fall sensing in two set spots",
      "A bed sensor for sleep details",
      "All the help in HomeProtect"
    ],
    "growth": "We agree when to check back with you.",
    "limits": "Each fall sensor works in a set spot. The bed sensor needs a bed that works with it. Home changes and health tools cost extra.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Home hub",
        "model": "Essence",
        "detail": "Links the sensors and lets you call for help."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Help button",
        "model": "Standard emergency pendant",
        "detail": "Press to ask for help. It does not sense falls."
      },
      {
        "key": "motion",
        "count": 5,
        "label": "Room sensors",
        "model": "Motion sensor",
        "detail": "Notes moves in the rooms you use most."
      },
      {
        "key": "door",
        "count": 3,
        "label": "Door sensors",
        "model": "Door/window sensor",
        "detail": "Notes when a door or window is opened."
      },
      {
        "key": "radar",
        "count": 2,
        "label": "Fall sensors",
        "model": "MDsense",
        "detail": "Can sense a fall in a spot we check first."
      },
      {
        "key": "voice",
        "count": 1,
        "label": "Voice help unit",
        "model": "VPD2",
        "detail": "Use your voice to ask for help. This unit does not sense falls."
      },
      {
        "key": "sleep",
        "count": 1,
        "label": "Bed sensor",
        "model": "SleepSense",
        "detail": "With the right bed, it can show bed use and sleep details."
      }
    ],
    "services": {
      "installationIncluded": true,
      "followUpIncluded": true,
      "assessmentIncluded": true,
      "homePlanIncluded": true
    }
  }
];

export const capabilities = [
  { id: "falls", title: "Falls", body: "Some sensors can sense a fall in a set spot. They can miss falls. A help button lets you call for help." },
  { id: "sleep", title: "Sleep", body: "Sleep details need a bed sensor and a bed that works with it. A room sensor cannot measure sleep." },
  { id: "kitchen", title: "Moves in the kitchen", body: "A room sensor may note moves in the kitchen. It cannot tell if you ate." },
  { id: "movement", title: "Moves at home", body: "Room sensors can note moves near them. A change may be a reason to call." },
  { id: "routines", title: "Room and door checks", body: "What you see depends on where the sensors are. One sensor cannot check the whole home." },
  { id: "reminders", title: "Help with calls", body: "Each plan has a help button. Some plans also let you use your voice to ask for help." },
];
