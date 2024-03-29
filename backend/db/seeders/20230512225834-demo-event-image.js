"use strict";

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "EventImages";
    await queryInterface.bulkInsert(options, [
      {
        eventId: 1,
        url: "https://carteret.edu/wp-content/uploads/2020/06/graduation.jpg",
        preview: true,
      },
      {
        eventId: 2,
        url: "https://www.bu.edu/ctl/files/2020/09/shutterstock_1683622786-scaled.jpg",
        preview: true,
      },
      {
        eventId: 3,
        url: "https://courseclub.me/wp-content/uploads/2022/10/NeetCode.jpg",
        preview: true,
      },
      {
        eventId: 4,
        url: "https://www.codespot.org/assets/java-script-101-logo.png",
        preview: true,
      },
      {
        eventId: 5,
        url: "https://openaimaster.com/wp-content/uploads/2023/05/Chat-GPT-Error-Generating-Response.png",
        preview: true,
      },
      {
        eventId: 6,
        url: "https://ares.decipherzone.com/blog-manager/uploads/ckeditor_Chat%20Gpt%20Memes%201.png",
        preview: true,
      },
      {
        eventId: 7,
        url: "https://img.devrant.com/devrant/rant/r_1868941_2H94H.jpg",
        preview: true,
      },
      {
        eventId: 8,
        url: "https://bryceautomation.com/wp-content/uploads/2022/12/image-63.png",
        preview: true,
      },
      {
        eventId: 9,
        url: "https://res.cloudinary.com/practicaldev/image/fetch/s--cckIEayI--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/0nereq40zo31446tgr85.png",
        preview: true,
      },
      {
        eventId: 10,
        url: "https://media.istockphoto.com/id/1147516791/vector/man-stands-walk-and-run-icon-set-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=DFYrR3p5iXAfw24HmVA-4ldCRDyf3TYAzwZ4HbKat34=",
        preview: true,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "EventImages";
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options, {
      eventId: {
        [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8],
      },
    });
  },
};
