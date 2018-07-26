/**
 * Created by sjonl on 25-07-2018.
 */
$(function () {
    var model = {
        bio: {
            name: "Shubham Prakash",
            role: "Full-Stack Web Developer",
            contacts: {
                mobile: "+918553188013",
                email: "prakash.shubhamjha@gmail.com",
                github: "https://github.com/shubhamPrakashJha",
                twitter: "@shubhamjha47",
                location: "Bangalore"
            },
            welcomeMessage: "Hey There",
            skills: "Web Development",
            display: function () {

            }

        },
        education: {
            school: [
                {
                    name: "Dayananda Sagar College Of Engineering",
                    location: "Bangalore",
                    degree: "B.E",
                    majors: "Information Science",
                    dates: "2014-2018"
                }
            ],
            onlineCourses: [
                {
                    title: "FULL-STACK WEB DEVELOPMENT NANODEGREE",
                    school: "UDACITY",
                    dates: "SEP 2017 - AUG 2018",
                    url: ""
                }
            ],
            display: function () {

            }
        },
        work: {
            jobs: [
                {
                    employer: "NTT DATA",
                    title: "System Support Associate",
                    location: "Bangalore",
                    dates: "in Progress",
                    description: ""
                }
            ],
            display: function () {

            }
        },
        projects: {
            projects: [
                {
                    title: "MOVIE TRAILER WEBSITE",
                    dates: "Sep 2017",
                    description: "",
                    images: "image/Trailerdb.png"
                }
            ],
            display: function () {

            }
        }


    };
    var controller = {
        init: function () {
            view.init();
        }
    };
    var view = {
        init: function () {
            this.render();
        },
        render: function () {
            console.log("View Started");
        }
    };
    controller.init();
});