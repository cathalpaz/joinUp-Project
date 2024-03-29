"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Events";
    await queryInterface.bulkInsert(options, [
      {
        venueId: 1,
        groupId: 1,
        name: "a/A Graduation",
        description: "Join us as we celebrate the resilient spirit of struggling engineers. Get ready to cry your eyes out as they present their projects that survived countless bugs, crashes, and coffee spills. Prepare to be inspired by their ability to turn coding mishaps into moments of genius, proving that even struggling engineers can conquer the coding battlefield.",
        type: "In person",
        capacity: 10,
        price: 1,
        startDate: "2023-09-01 18:00:00",
        endDate: "2023-09-01 19:00:00",
      },
      {
        venueId: 2,
        groupId: 1,
        name: "EOD",
        description: "The captivating 'End of Day' event, where we gather at the twilight hour to share the coding conquests and discoveries of the day. Get ready to embrace the camaraderie of like-minded learners and celebrate the triumphs, puzzles, and 'aha' coding moments that filled our day.",
        type: "In person",
        capacity: 10,
        price: 1,
        startDate: "2024-11-01 18:00:00",
        endDate: "2024-11-01 19:00:00",
      },
      {
        venueId: 1,
        groupId: 2,
        name: "NeetCode Tutoring Session",
        description: " A virtual gathering where aspiring developers dive into the world of coding through engaging YouTube tutorials.  From beginner-friendly basics to advanced techniques, this event promises to unlock the secrets of coding success, leaving you inspired and ready to conquer the next coding challenge with confidence.",
        type: "In person",
        capacity: 50,
        price: 25,
        startDate: "2024-01-01 14:30:00",
        endDate: "2024-01-02 15:00:00",
      },
      {
        venueId: 2,
        groupId: 2,
        name: "JavaScript 101",
        description: "An event where we embark on a lively journey into the world of basic JavaScript. Whether you're a seasoned coder or just starting your coding adventure, this event is designed to make learning JavaScript a fun and engaging experience. Get ready to unlock the power of JavaScript!",
        type: "Online",
        capacity: 10,
        price: 0,
        startDate: "2023-02-11 16:00:00",
        endDate: "2023-02-11 17:00:00",
      },
      {
        venueId: 2,
        groupId: 3,
        name: "Error Message",
        description: "Join us for an evening of delightful ChatGPT failures, where even errors become a source of entertainment and a reminder that technology is not always as perfect as we expect. Witness the AI chaos unfold as Chat GPT, the star of the show, throws a tantrum by generating nonsensical responses and hilarious errors.",
        type: "Online",
        capacity: 40,
        price: 50,
        startDate: "2024-10-10 16:00:00",
        endDate: "2024-10-10 17:00:00",
      },
      {
        venueId: 3,
        groupId: 3,
        name: "AI Roast Battle",
        description: "A night of fiery debates and witty banter as the Chat GPT haters group gathers to hilariously roast the limitations and quirks of AI language models. Watch as participants unleash their best verbal jabs, exposing the humorous side of AI-generated responses and sharing anecdotes of quirky encounters with Chat GPT.",
        type: "Online",
        capacity: 5,
        price: 0,
        startDate: "2023-08-24 16:00:00",
        endDate: "2023-08-24 17:00:00",
      },
      {
        venueId: 4,
        groupId: 4,
        name: 'How To: "Change it up a bit"',
        description: "The creative copy and pasters of the tech industry gather to showcase their artistry in giving code a fresh twist. Prepare to be amazed as participants take existing code snippets and remix them into something entirely new and unexpected. Join us for a showcase of the most ingenious copycat creations in the tech world.",
        type: "Online",
        capacity: 5,
        price: 0,
        startDate: "2023-08-24 16:00:00",
        endDate: "2023-08-24 17:00:00",
      },
      {
        venueId: 6,
        groupId: 5,
        name: '"Hello World" Demonstration',
        description: "Why type print('Hello World'), when you can type section .data hello db 'Hello, World!', 0 section .text global _start _start: ; Write the string to stdout mov eax, 4 mov ebx, 1 mov ecx, hello mov edx, 13 int 0x80.",
        type: "Online",
        capacity: 5,
        price: 0,
        startDate: "2024-10-11 16:00:00",
        endDate: "2024-10-11 17:00:00",
      },
      {
        venueId: 7,
        groupId: 6,
        name: "Don't forget the ';'!",
        description: "An event dedicated to embracing the occasional omission of semicolons. From interactive workshops on the significance of semicolons to friendly coding challenges that test your meticulousness in adding them, we'll embrace the joy of perfectly punctuated code.",
        type: "In person",
        capacity: 8,
        price: 15,
        startDate: "2024-11-11 16:00:00",
        endDate: "2024-11-11 17:00:00",
      },
      {
        venueId: 5,
        groupId: 7,
        name: "Demo Event",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare lectus sit amet est. Tempus egestas sed sed risus pretium quam vulputate dignissim.",
        type: "In person",
        capacity: 10,
        price: 5,
        startDate: "2023-10-11 16:00:00",
        endDate: "2023-10-11 17:00:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Events";
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      name: {
        [Op.in]: ["a/A Graduation", "EOD", "NeetCode Tutoring Session", "JavaScript 101", "Error Message", "AI Roast Battle", 'How To: "Change it up a bit"', '"Hello World" Demonstration', "Don't forget the ';'!",  "Demo Event"],
      },
    });
  },
};
