// Plain-language answer pages. Each one answers a real question in its first lines,
// so search engines and AI answer tools can quote it. Keep every claim checkable:
// MyIntel facts must match site.ts, outside facts need a source below.

export type Guide = {
  slug: string;
  question: string; // the H1, written the way people ask it
  title: string; // the browser tab and search result title
  description: string;
  answer: string; // the short, direct answer shown first
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  updated: string; // ISO date, shown on the page
};

export const guides: Guide[] = [
  {
    slug: "home-safety-assessment",
    question: "What does a home safety assessment include?",
    title: "What a Home Safety Assessment Includes",
    description: "What happens during a home safety assessment for an older adult, what a licensed occupational therapist looks for room by room, and what you get at the end.",
    answer:
      "A home safety assessment is a visit where a trained professional walks through the home with the person who lives there and points out what could cause a fall or make daily life harder. They look at entrances, stairs, the bathroom, the bedroom, the kitchen, lighting and floors. They also see how the person gets in and out of a chair, the bed and the shower. At the end you get a list of changes, from simple fixes like moving a rug to bigger ones like grab bars.",
    sections: [
      {
        heading: "Who does the visit",
        paragraphs: [
          "At MyIntel, home safety visits are done by licensed, insured occupational therapists (OTs) with CAPS (Certified Aging-in-Place Specialist) certification. An OT is trained to look at how a person moves and does everyday tasks, not just at the house itself. That matters, because the right fix depends on the person as much as the home.",
        ],
      },
      {
        heading: "What they look at, room by room",
        bullets: [
          "Entrances: steps, railings, the threshold, outdoor lighting and where packages get set down.",
          "Stairs: railings on both sides, lighting at the top and bottom, and loose or worn treads.",
          "Bathroom: getting in and out of the tub or shower, the height of the toilet, slippery floors and where to hold on.",
          "Bedroom: the height of the bed, a clear path to the bathroom and light for getting up at night.",
          "Kitchen: items stored too high or too low, and how far the person reaches or bends.",
          "Living areas: rugs, cords, clutter, chairs that are hard to get out of and dark spots.",
        ],
      },
      {
        heading: "What you get at the end",
        paragraphs: [
          "You get a plan made for the home and the person. It lists what to change first. Many fixes cost little or nothing, like moving a rug, adding a night light or putting everyday items within easy reach. Others, like grab bars or a raised toilet seat, cost more, and we go over any cost with you before any work is done.",
        ],
      },
      {
        heading: "How to start",
        paragraphs: [
          "You can start with our free online home check. It takes a few minutes and shows what may need a closer look. A home safety visit by a licensed OT is included with our HomeProtect and HomeComplete plans, and we set up homes in the Denver metro area.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a home safety assessment take?", a: "It depends on the size of the home and how many rooms need a close look. We will tell you how long to plan for when we schedule the visit." },
      { q: "Do I need to be there?", a: "Yes, it works best when the person who lives there is home, and family is welcome too. The OT sees how everyday tasks are done, which is a big part of finding the right fixes." },
      { q: "Is a home safety assessment included with MyIntel?", a: "Yes. A home safety visit by a licensed, insured occupational therapist is included with the HomeProtect and HomeComplete plans. Call us for a quote." },
    ],
    updated: "2026-10-26",
  },
  {
    slug: "medical-alert-vs-fall-sensors",
    question: "Medical alert button or fall sensors: what is the difference?",
    title: "Medical Alert Button vs. Fall Sensors",
    description: "A plain comparison of medical alert help buttons and in-home fall sensors for older adults: how each one gets help, where each falls short, and why many families use both.",
    answer:
      "A medical alert button gets help when the person presses it. Fall sensors in the room can send an alert even when the person cannot press anything. The button works anywhere they wear it, as long as they can press it. Room sensors only work in the rooms where they are set up, but they do not need to be worn or remembered. Many families use both, so there are two ways to get help fast.",
    sections: [
      {
        heading: "How a help button works",
        paragraphs: [
          "The person wears a small button on the wrist or around the neck. When they press it, a trained person at a response center answers, talks with them, sends help if needed and calls family. It is simple and works well, but only when it is worn and only when the person is able to press it.",
        ],
      },
      {
        heading: "How fall sensors work",
        paragraphs: [
          "Fall sensors are small devices placed in a room, like the bathroom or bedroom, where falls are most likely. They notice when someone has fallen and send an alert on their own. Nothing has to be worn or pressed. The trade-off is that they only cover the rooms where they are installed.",
        ],
      },
      {
        heading: "Side by side",
        bullets: [
          "Help button: works anywhere it is worn, but needs a press, and only helps if it is on.",
          "Fall sensors: nothing to wear or remember, but only cover the rooms where they are set up.",
          "Both together: a fall in the bathroom can still get help even if the button is on the nightstand.",
        ],
      },
      {
        heading: "Noticing changes before a fall",
        paragraphs: [
          "Some systems also learn a person's usual day, like when they get up and how they move around the home. If something changes, such as a late start or more trips to the bathroom at night, family hears about it early. That can mean help comes before a small problem turns into a fall.",
        ],
      },
      {
        heading: "How MyIntel does it",
        paragraphs: [
          "Every MyIntel plan includes a help button answered 24/7 by a trained person at a UL-listed response center. HomeProtect and HomeComplete add fall sensing in key rooms and sensors that learn the usual day and notice when it changes. There are no cameras. No system can promise to catch every fall, which is why we use more than one way to get help.",
        ],
      },
    ],
    faqs: [
      { q: "Do fall sensors use cameras?", a: "Ours do not. MyIntel room sensors notice movement, not faces, and nobody can see into the home." },
      { q: "Do I still need a help button if I have fall sensors?", a: "We recommend both. The button works anywhere it is worn, and the sensors cover key rooms even when the button is not within reach." },
      { q: "Will every fall be found?", a: "No system can promise that. Fall sensors work in the rooms where they are set up, and the help button works when it is pressed. Together they give two ways to get help fast." },
    ],
    updated: "2026-10-26",
  },
  {
    slug: "help-aging-parent-live-alone",
    question: "How can I help my aging parent live alone safely?",
    title: "How to Help an Aging Parent Live Alone Safely",
    description: "Practical steps to help an older parent keep living alone safely: make the home safer, set up a way to get help, stay in touch without hovering and know when to add more support. For families in Denver and beyond.",
    answer:
      "Start with the home, since falls are the biggest risk for older adults who live alone. Fix the easy things first: loose rugs, dark stairs and a slippery shower. Then make sure your parent can always get help, even if they fall and cannot reach a phone. Agree on a simple way to stay in touch, and talk about what would mean it is time for more support. Most of all, make the plan with your parent, not for them.",
    sections: [
      {
        heading: "1. Make the home safer",
        paragraphs: ["About 1 in 4 adults 65 and older falls each year, according to the CDC. Most falls happen at home, and many can be prevented with simple changes."],
        bullets: [
          "Remove or tape down loose rugs and move cords out of walkways.",
          "Add light: bright bulbs on stairs and night lights from the bed to the bathroom.",
          "Put grab bars by the toilet and in the shower, and a non-slip mat in the tub.",
          "Keep everyday items between waist and shoulder height so there is no climbing or bending.",
          "Get a home safety assessment so a professional can spot what you might miss.",
        ],
      },
      {
        heading: "2. Make sure help is always within reach",
        paragraphs: [
          "A phone across the room does not help after a fall. A help button worn on the wrist or neck connects your parent to a trained person any time, day or night. Fall sensors in the bathroom and bedroom can get help even if the button is not being worn.",
        ],
      },
      {
        heading: "3. Stay in touch without hovering",
        paragraphs: [
          "Many parents do not want to feel checked on. A daily call at the same time is a simple start. Some families use sensors that learn the usual day and send a gentle heads-up only when something is different, so there is no need to call five times a day.",
        ],
      },
      {
        heading: "4. Know the signs it is time for more help",
        paragraphs: ["Look for changes like missed meals, unopened mail, new bruises, a messier home or trouble getting up from a chair. These can mean it is time to add support, not that your parent must move."],
      },
      {
        heading: "5. Make the plan together",
        paragraphs: [
          "Your parent should help choose what changes and who gets updates. People stick with a plan they helped make. MyIntel can help with the home safety visit, setup and a help button answered 24/7 in the Denver metro area, and family can get updates wherever they live.",
        ],
      },
    ],
    faqs: [
      { q: "What if I live far from my parent?", a: "That is common. Choose help that does not depend on you being nearby: a help button answered 24/7, sensors that send updates to your phone and a local team for setup and visits." },
      { q: "How do I bring this up without upsetting my parent?", a: "Lead with what they want, which is usually to stay in their own home. Frame safety changes as the way to make that happen, and let them make the choices." },
      { q: "Does MyIntel work outside Denver?", a: "We set up homes and do home safety visits in the Denver metro area. Our free online home check works anywhere." },
    ],
    sources: [{ label: "CDC: Older Adult Falls", url: "https://www.cdc.gov/falls/data-research/index.html" }],
    updated: "2026-10-26",
  },
  {
    slug: "medicare-home-safety-colorado",
    question: "Does Medicare pay for home safety changes in Colorado?",
    title: "Does Medicare Pay for Home Safety Changes in Colorado?",
    description: "What Medicare, Medicare Advantage, Health First Colorado (Medicaid) and VA programs may cover for grab bars, bathroom safety and home changes for older adults in Colorado.",
    answer:
      "Usually not. Original Medicare does not generally pay for grab bars, raised toilet seats, bath seats or changes to the home. It can cover some medical equipment, like walkers, canes and commode chairs, when a doctor orders it. Some Medicare Advantage plans offer extra benefits for bathroom safety items. In Colorado, people on certain Health First Colorado (Medicaid) waivers may qualify for a home modification benefit. Always check with your plan before you buy.",
    sections: [
      {
        heading: "Original Medicare",
        paragraphs: [
          "Medicare Part B covers durable medical equipment that a doctor or other provider orders for use at home, such as canes, walkers and commode chairs. Items seen as comfort or convenience, like grab bars, bath seats and raised toilet seats, are generally not covered. Changes to the home itself, like ramps or a walk-in shower, are not covered.",
        ],
      },
      {
        heading: "Medicare Advantage plans",
        paragraphs: [
          "Medicare Advantage plans can offer extra benefits that Original Medicare does not. Some include bathroom safety items or a home safety inspection. Benefits are different for every plan and can change each year, so call the number on the member card and ask what is covered.",
        ],
      },
      {
        heading: "Health First Colorado (Medicaid)",
        paragraphs: [
          "Colorado's Medicaid program has a Home Modification benefit for people enrolled in certain waivers, including the Elderly, Blind and Disabled (EBD) waiver. It can pay for things like ramps, bathroom changes and grab bars as part of a larger project. The state lists a $14,000 limit for the EBD waiver. A case manager handles the request, so start there.",
        ],
      },
      {
        heading: "Other places to look",
        bullets: [
          "Veterans: the VA has home improvement grants for eligible veterans. Ask the VA about the HISA grant.",
          "Denver area: the Denver Regional Council of Governments (DRCOG) Area Agency on Aging can point you to local help at 303-480-6700, at no cost.",
          "HSA or FSA: some home safety items may qualify with a letter of medical necessity. Check with your plan administrator.",
        ],
      },
      {
        heading: "What MyIntel does and does not do",
        paragraphs: [
          "MyIntel does not bill insurance or Medicare right now. We are happy to talk through your options, and our free online home check is a good way to see what may need attention first. Many of the most helpful changes cost little.",
        ],
      },
    ],
    faqs: [
      { q: "Does Medicare cover grab bars?", a: "Original Medicare generally does not, because grab bars are treated as a convenience item or a home change. Some Medicare Advantage plans include bathroom safety items, so check your plan." },
      { q: "Does Medicare cover a home safety assessment?", a: "Coverage depends on your situation. Medicare can cover occupational therapy when it is medically necessary and ordered by a provider. Ask your doctor and your plan before you schedule." },
      { q: "Does MyIntel take Medicare?", a: "No. MyIntel does not bill insurance or Medicare right now. Call us and we will talk through your options." },
    ],
    sources: [
      { label: "Medicare.gov: Durable medical equipment coverage", url: "https://www.medicare.gov/coverage/durable-medical-equipment-dme-coverage" },
      { label: "AARP: Does Medicare cover home safety equipment?", url: "https://www.aarp.org/medicare/faq/does-medicare-cover-home-safety-equipment/" },
      { label: "Colorado HCPF: Home Modification Benefit", url: "https://hcpf.colorado.gov/home-modification-benefit" },
      { label: "DRCOG: Aging and Disability Resource Center", url: "https://drcog.org/programs/area-agency-aging/aging-and-disability-resource-center" },
    ],
    updated: "2026-10-26",
  },
  {
    slug: "signs-parent-needs-help-at-home",
    question: "What are the signs a parent needs more help at home?",
    title: "Signs a Parent Needs More Help at Home",
    description: "Common signs an older parent needs more help at home, from missed meals and unopened mail to falls and trouble getting up, and what to do next without taking over.",
    answer:
      "Look for changes, not one bad day. Common signs include missed meals or spoiled food, unopened mail or unpaid bills, a home that is less tidy than usual, new bruises or a fall, trouble getting up from a chair, wearing the same clothes, missed medicines and pulling away from friends or activities. One sign is a reason to talk. Several together usually mean it is time to add support.",
    sections: [
      {
        heading: "Signs around the home",
        bullets: [
          "Spoiled food in the fridge or very little food in the house.",
          "Piles of unopened mail, late notices or unpaid bills.",
          "A home that is much messier than it used to be.",
          "Burned pots, dents on the car or scorch marks.",
        ],
      },
      {
        heading: "Signs in how they move and feel",
        bullets: [
          "New bruises, a fall or a near fall they mention in passing.",
          "Holding on to furniture to get around, or trouble getting up from a chair.",
          "Weight loss, wearing the same clothes or less care with bathing.",
          "Missed medicines or confusion about when to take them.",
          "Less interest in friends, church, hobbies or getting out of the house.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "Talk with your parent first, and listen. Ask what feels harder than it used to. Small steps often help a lot: a home safety check, grab bars in the bathroom, a help button answered 24/7 and a regular time to talk. If you see big changes in memory, weight or mood, talk with their doctor.",
          "More help at home does not have to mean moving. Many people stay safely in their own homes for years with the right changes and support.",
        ],
      },
      {
        heading: "How MyIntel can help",
        paragraphs: [
          "MyIntel helps older adults in the Denver metro area stay safely at home. A licensed occupational therapist can check the home for fall risks, we set up sensors and a help button for free, the sensors learn the usual day and notice when something changes, and a trained person answers the help button 24/7.",
        ],
      },
    ],
    faqs: [
      { q: "Does needing help mean my parent has to move?", a: "Not usually. With the right changes to the home and a way to get help fast, many people keep living safely in their own homes." },
      { q: "How can I tell if my parent is falling when I am not there?", a: "Ask directly, and look for bruises or new caution when walking. Fall sensors and a help button can make sure help comes even when nobody is around." },
      { q: "When should I talk to their doctor?", a: "If you notice big changes in memory, weight, mood or balance, or a fall, let their doctor know." },
    ],
    updated: "2026-10-26",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
