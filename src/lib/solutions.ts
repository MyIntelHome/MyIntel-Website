export const solutionPolicy = {
  professionalMonitoringReady: false,
  advancedVitalsVerified: false,
  partnerLogosApproved: false,
};

export const positioning = {
  principle: "MyIntel recommends the least intrusive technology that fits the person, the home and the risks we find.",
  privacy: "Our core monitoring doesn't require cameras.",
  personalProtection: "No wearable required. Personal protection may be an option if you want it.",
  response: solutionPolicy.professionalMonitoringReady
    ? "Ask about 24/7 professional monitoring. Availability, coverage and response arrangements are confirmed for your configuration."
    : "We agree who should receive alerts and what to do next. Response arrangements, coverage and availability are confirmed before installation.",
};

export const journey = [
  { label: "Assess", title: "Understand the person and home", body: "Start with HomeCheck. When a professional visit is appropriate, a specialist reviews the home, daily routines and the concerns that matter to you." },
  { label: "Improve", title: "Make everyday life safer", body: "Address physical and environmental risks first, from loose rugs and poor lighting to grab bars and easier access. We discuss the changes and costs before work begins." },
  { label: "Protect", title: "Choose the right ongoing support", body: "Recommend technology and support that fit your needs and preferences. Your plan sets out the installed features, who receives updates and how concerns should be handled." },
];

export const solutions = [
  { id: "homeaware", name: "MyIntel HomeAware", focus: "Greater awareness", audience: "Independent older adults and families who want a clearer view of changing routines.", scope: "A practical starting point for noticing changes and deciding when to check in.", options: ["Ambient motion and routine sensing", "Door and activity sensing", "Updates for agreed family members or caregivers"], growth: "Review whether added fall protection or home changes would help." },
  { id: "homeprotect", name: "MyIntel HomeProtect", focus: "Falls and personal protection", audience: "People and families for whom falls or asking for help are a greater concern.", scope: "A plan for protection in the home, with an agreed approach to alerts and follow-up.", options: ["Room-level non-camera fall sensing, where appropriate", "Optional wearable fall detection or personal alarm, subject to availability", "Agreed alert contacts and response arrangements"], growth: "Review coverage and support as mobility or daily routines change." },
  { id: "homecomplete", name: "MyIntel HomeComplete", focus: "A broader plan for staying at home", audience: "People who need professional assessment, home improvements and a more complete view of everyday wellbeing.", scope: "Bring physical changes, monitoring and practical follow-up together.", options: ["Professional assessment and home safety improvements", "Monitoring chosen for the person and home", "Optional sleep sensing, reminders or home automation with supported equipment"], growth: "Revisit the home and care plan with the people you choose." },
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
