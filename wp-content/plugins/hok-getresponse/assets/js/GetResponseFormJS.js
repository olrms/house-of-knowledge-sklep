var showResponseMsg = function (responseMsgEl, Msg) {
    responseMsgEl.fadeIn();
    responseMsgEl.text(Msg);
    window.setTimeout(function () {
        responseMsgEl.fadeOut();
    }, 5000);
};

$(document).ready(function () {

    $(window).on('GetResponseSucces', function (e, formName) {
        var form = $('form[data-name="'+formnName+'"]');
        var formParent = $(form.parent());
        var responseMsg = $(formParent.find('#getGetResponseMsg'));
        showResponseMsg(responseMsg, 'Zostałeś poprawnie zapisany do naszego newslettera, dziękujemy!');
    });

    $(window).on('GetResponseError', function (e, formName) {
        var form = $('form[data-name="'+formnName+'"]');
        var formParent = $(form.parent());
        var responseMsg = $(formParent.find('#getGetResponseMsg'));
        showResponseMsg(responseMsg, 'Wystąpił problem podczas zapisywania Cię do naszego newslettera, spórbuj ponownie!');
    });


    $('.getGetResponseForm form').on('submit', function (e) {
        e.preventDefault();
        var thisForm = $(e.currentTarget);
        var email = $(thisForm.find('input[type="email"]')).val().trim();
        var formName = thisForm.attr('data-name');
        var callback = window[formName + '_callback'];
        var postdata = { email: email, func: callback };

        $.ajax({
            type: "POST",
            url: (GetResponseHomeURL + GetResponseAddEndpoint),
            data: postdata,
            success: function (data) {
                if (data == 'true' || data == true) {
                    $(window).trigger('GetResponseSucces', [formName]);
                }
            },
            failure: function (errMsg) {
                console.log(errMsg);
                $(window).trigger('GetResponseError', [formName]);
            }
        });
    });

});
