/// <reference path="jquery-2.1.4.min.js" />

(function () {
    var app = {};
    var baseurl = 'http://localhost:5353/api/Todoes';
    var spanStyle = "float: right;margin-top: -28px; padding-right: 9px;";
    var spanStyle2 = "float: right;margin-top: -28px; padding-right: 29px;";

    app.CreateBeitrag = function (beitrag) {
        $.ajax({
            type: 'POST',
            url: baseurl,
            accept: 'application/json',
            contentType: 'application/json',
            data: JSON.stringify(beitrag),
            statusCode: {
                201: function (element) {
                    $("section>ul.list-group").append('<li class="list-group-item" aria-label="Left Align" data-id="' + element.ID + '" data-status ="' + element.Done + '">"' +
                                                       element.Text + '"</li><span class="glyphicon glyphicon-ok" style="' + spanStyle2 + '" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" style="' + spanStyle + '" aria-hidden="true"></span>');
                }
            }
        });
    }

    app.UpdateTodoes = function (id) {
        $.ajax({
            type: "PUT",
            url: baseurl + '/' + id,
            accept: 'application/json',
            data: {
                todo: {
                    ID: 0,
                    Text: '',
                    Datum: new Date().toJSON().slice(0, 10),
                    Done: 'true'
                }
            },
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
            }

        });

    }
    app.DeleteTodoes = function (id) {
        $.ajax({
            url: baseurl + '/' + id,
            type: 'DELETE',
            accept: 'application/json',
            contentType: 'application/json',
            succes: function (data) {
                $('li[data-id=' + id + ']').remove();
            }
        });
    }
    app.GetById = function (id) {
        $.ajax({
            type: 'GET',
            url: baseurl,
            accept: 'application/json',
            success: function (data) {
                console.log(data)
                //return data.ID;
            }
        });
    }
    app.GetTodoes = function () {
        $.ajax({
            type: 'GET',
            url: baseurl,
            accept: 'application/json',
            success: function (data) {
                $(data).each(function (index, element) {
                    $("section>ul.list-group").append('<li class="list-group-item" aria-label="Left Align" data-id="' + element.ID + '" data-status ="' + element.Done + '">"' +
                                                       element.Text + '"</li><span class="glyphicon glyphicon-ok" style="' + spanStyle2 + '" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" style="' + spanStyle + '" aria-hidden="true"></span>');
                });
            }
        });
    };

    app.Alle = function () {
        $.ajax({
            type: 'GET',
            url: baseurl,
            accept: 'application/json',
            success: function (data) {
                $("section>ul.list-group >:gt(0)").remove();
                setTimeout(function () {
                    $(data).each(function (index, element) {
                        $("section>ul.list-group").append('<li class="list-group-item fadeInDown animated" aria-label="Left Align" data-id="' + element.ID + '" data-status ="' + element.Done + '">"' +
                                                           element.Text + '"</li><span class="glyphicon glyphicon-ok" style="' + spanStyle2 + '" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" style="' + spanStyle + '" aria-hidden="true"></span>');
                    });
                }, 200);
            }
        });
    };


    app.Offene = function () {
        $.ajax({
            type: 'GET',
            url: baseurl,
            accept: 'application/json',
            success: function (data) {
                $("section>ul.list-group >:gt(0)").remove()
                setTimeout(function () {
                    $(data).each(function (index, element) {
                        if (element.Done == false) {
                            $("section>ul.list-group").append('<li class="list-group-item fadeInDown animated" aria-label="Left Align" data-id="' + element.ID + '" data-status ="' + element.Done + '">"' +
                                                          element.Text + '"</li><span class="glyphicon glyphicon-ok" style="' + spanStyle2 + '" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" style="' + spanStyle + '" aria-hidden="true"></span>');
                        }
                    });
                }, 200);

            }
        });

    };

    app.Erledigte = function () {
        $.ajax({
            type: 'GET',
            url: baseurl,
            accept: 'application/json',
            success: function (data) {
                $("section>ul.list-group >:gt(0)").remove()

                setTimeout(function () {
                    $(data).each(function (index, element) {
                        if (element.Done == true) {
                            $("section>ul.list-group").append('<li class="list-group-item fadeInDown animated" aria-label="Left Align" data-id="' + element.ID + '" data-status ="' + element.Done + '">"' +
                                                          element.Text + '"</li><span class="glyphicon glyphicon-ok" style="' + spanStyle2 + '" aria-hidden="true"></span><span class="glyphicon glyphicon-remove" style="' + spanStyle + '" aria-hidden="true"></span>');
                        }
                    });
                }, 200);

            }
        });

    };

    $(document).ready(function () {
        $("#hinzufügen").on('click', function () {
            var beitrag = $("#Text").val();
            var datum = new Date().toJSON().slice(0, 10);
            app.CreateBeitrag({
                ID: 0,
                Text: beitrag,
                Datum: datum,
                Done: 'false'
            });
        });

        $(document).on('click', '.glyphicon-remove', function () {
            console.log($(this).prev().prev().data('id'));
            app.DeleteTodoes($(this).prev().prev().data('id'));
            location.reload();
        });

        $(document).on('click', '.glyphicon-ok', function () {
            console.log($(this).prev().data('id'));
            app.UpdateTodoes($(this).prev().data('id'));
            location.reload();

        });


        $("input:radio[id='offene']").change(function () {
            if ($(this).is(':checked')) {
                app.Offene();
            }
        });

        $("input:radio[id='erledigte']").change(function () {
            if ($(this).is(':checked')) {
                app.Erledigte();
            }
        });

        $("input:radio[id='alle']").change(function () {
            if ($(this).is(':checked')) {
                app.Alle();
            }
        });


    });

    app.GetTodoes();



})(jQuery || null);

