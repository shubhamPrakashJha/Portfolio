/**
 * Created by sjonl on 25-07-2018.
 */
$(function () {
    var model = {
        init: function () {
            console.log("model Started");
        }

    };
    var controller = {
        init: function () {
            model.init();
            view.init();
        }
    };
    var view = {
        init: function () {
            console.log("view Started");
        },
        render: function () {

        }
    };
    controller.init();
});