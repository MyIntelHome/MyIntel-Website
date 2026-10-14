export const solutionPolicy = {
  professionalMonitoringReady: false,
  advancedVitalsVerified: false,
  partnerLogosApproved: false,
};

export const positioning = {
  principle: "MyIntel recommends the least intrusive technology that fits the person, the home and the risks we find.",
  privacy: "Our core monitoring doesn't require cameras.",
  personalProtection: "Each package includes a standard emergency pendant for manual help. Room sensors work without needing to wear it.",
  response: solutionPolicy.professionalMonitoringReady
    ? "Ask about 24/7 professional monitoring. Availability, coverage and response arrangements are confirmed for your configuration."
    : "We agree who should receive alerts and what to do next. Response arrangements, coverage and availability are confirmed before installation.",
};

export const journey = [
  { label: "Assess", title: "Understand the person and home", body: "Start with HomeCheck. A professional visit, when needed, helps us understand your home, routines and concerns." },
  { label: "Improve", title: "Make everyday life safer", body: "Start with practical changes, such as better lighting or grab bars. Agree on the work and costs before anything begins." },
  { label: "Protect", title: "Choose the right ongoing support", body: "Choose suitable technology and support. Agree who gets updates and what happens when a concern is raised." },
];

export const solutions = [
  {
    "id": "homeaware",
    "name": "MyIntel HomeAware",
    "shortName": "HomeAware",
    "focus": "Morning reassurance",
    "title": "A reassuring start to the morning.",
    "audience": "For someone living independently who wants a simple morning activity check and a way to request help.",
    "scope": "Basic Wake & Well support, with a motion sensor placed where morning activity is likely to be noticed.",
    "image": "/photos/packages/homeaware.webp",
    "imageAlt": "MyIntel HomeAware product lineup showing an Essence hub, standard emergency pendant with wrist strap, and one motion sensor.",
    "deviceCount": 3,
    "options": [
      "Morning activity reassurance",
      "Manual emergency activation",
      "A simple starting point"
    ],
    "growth": "Consider HomeProtect when broader activity information or room fall sensing would help.",
    "limits": "One motion sensor does not show routines throughout the home. The standard pendant must be pressed to request help and does not automatically detect falls.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Essence hub",
        "detail": "Connects the system and provides its supported emergency communication functions."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Standard emergency pendant",
        "detail": "Lets the resident manually request help. Shown with a wrist strap in the product image."
      },
      {
        "key": "motion",
        "count": 1,
        "label": "Motion sensor",
        "detail": "Placed where morning activity is likely to be detected."
      }
    ]
  },
  {
    "id": "homeprotect",
    "name": "MyIntel HomeProtect",
    "shortName": "HomeProtect",
    "focus": "Broader awareness and fall protection",
    "title": "More awareness. Another layer of help.",
    "audience": "For a home that needs activity information from more rooms and dedicated fall sensing in one priority area.",
    "scope": "Adds more motion and door sensors, room fall sensing and voice-activated help.",
    "image": "/photos/packages/homeprotect.webp",
    "imageAlt": "MyIntel HomeProtect lineup showing one Essence hub, one standard emergency pendant, five motion sensors, three door sensor pairs, one MDsense and one VPD2 communicator.",
    "deviceCount": 12,
    "options": [
      "Activity information from more rooms",
      "Fall sensing in one selected area",
      "Voice-activated help"
    ],
    "growth": "Consider HomeComplete when nighttime information or a second area of fall sensing would help.",
    "limits": "The single MDsense detector covers its approved area, not the entire home. The VPD2 adds voice help and emergency communication, not additional fall detection.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Essence hub",
        "detail": "Connects the system and provides supported emergency communication."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Standard emergency pendant",
        "detail": "A manual way to request help. It does not automatically detect falls."
      },
      {
        "key": "motion",
        "count": 5,
        "label": "Motion sensors",
        "detail": "Proposed areas include the bedroom, hallway, living room, kitchen and another frequently used area."
      },
      {
        "key": "door",
        "count": 3,
        "label": "Door/window sensors",
        "detail": "For relevant entrances or other locations agreed with you."
      },
      {
        "key": "radar",
        "count": 1,
        "label": "MDsense fall detector",
        "detail": "Installed in a priority room after checking placement and coverage."
      },
      {
        "key": "voice",
        "count": 1,
        "label": "VPD2 communicator",
        "detail": "Adds voice-activated help and extends emergency communication."
      }
    ]
  },
  {
    "id": "homecomplete",
    "name": "MyIntel HomeComplete",
    "shortName": "HomeComplete",
    "focus": "Added nighttime and room coverage",
    "title": "A closer look at day and night.",
    "audience": "For a home that needs a second area of fall sensing, bed information and a more detailed safety plan.",
    "scope": "Everything in HomeProtect, with a second MDsense and SleepSense for one compatible bed.",
    "image": "/photos/packages/homecomplete.webp",
    "imageAlt": "MyIntel HomeComplete lineup showing one Essence hub, one standard emergency pendant, five motion sensors, three door sensor pairs, two MDsense detectors, one VPD2 communicator and one SleepSense.",
    "deviceCount": 14,
    "options": [
      "Fall sensing in two selected areas",
      "Bed occupancy and supported sleep information",
      "Detailed safety plan and scheduled follow-up"
    ],
    "growth": "Review the safety plan and support at scheduled follow-ups. We agree the timing together.",
    "limits": "Two MDsense detectors cover two selected areas. SleepSense is for one resident's compatible bed. Physical modifications and remote-vitals equipment are separately scoped.",
    "devices": [
      {
        "key": "hub",
        "count": 1,
        "label": "Essence hub",
        "detail": "Connects the system and provides supported emergency communication."
      },
      {
        "key": "pendant",
        "count": 1,
        "label": "Standard emergency pendant",
        "detail": "A manual way to request help. It does not automatically detect falls."
      },
      {
        "key": "motion",
        "count": 5,
        "label": "Motion sensors",
        "detail": "Placed in agreed, frequently used areas."
      },
      {
        "key": "door",
        "count": 3,
        "label": "Door/window sensors",
        "detail": "For relevant entrances or other agreed locations."
      },
      {
        "key": "radar",
        "count": 2,
        "label": "MDsense fall detectors",
        "detail": "Cover two selected areas, with placement and coverage checked."
      },
      {
        "key": "voice",
        "count": 1,
        "label": "VPD2 communicator",
        "detail": "Adds voice-activated help and extends emergency communication."
      },
      {
        "key": "sleep",
        "count": 1,
        "label": "SleepSense",
        "detail": "Adds bed occupancy and supported sleep-related information for one resident's compatible bed."
      }
    ]
  }
];

export const capabilities = [
  { id: "falls", title: "Fall protection", body: "Room-level non-camera sensing, optional wearable detection and personal emergency activation are different approaches. We discuss coverage and availability before recommending one." },
  { id: "sleep", title: "Sleep-related patterns", body: "Sleep information needs a supported sleep sensor. Without it, movement at night is a routine signal, not a measurement of sleep." },
  { id: "kitchen", title: "Kitchen activity", body: "Changes in kitchen activity or meal-related routines can prompt a check-in. Kitchen movement does not tell us whether someone ate." },
  { id: "movement", title: "Movement at home", body: "Supported motion and activity sensors can highlight changes in how rooms are used. They do not explain the cause of a change." },
  { id: "routines", title: "Everyday routines", body: "Door and room activity can help agreed contacts notice a change. The information available depends on the sensors and coverage selected." },
  { id: "reminders", title: "Reminders and communication", body: "A supported hub or reminder device may help with everyday prompts or contacting family. A reminder does not confirm that medication was taken." },
];

export const followUp = [
  { title: "Notice a change", body: "A supported sensor or a person raises a concern." },
  { title: "Understand the concern", body: "Check the context with the person and the agreed contacts." },
  { title: "Inform the right person", body: "Use the contacts and response arrangements in the plan." },
  { title: "Choose an action", body: "Discuss practical help, a home change or a review of the care plan." },
  { title: "Follow up", body: "Agree who will check back and whether the plan needs to change." },
];
