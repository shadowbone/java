/**
 * @copyright Rekrutan.com
 */
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
var rekrutan = {
    ajax : function ($e, content) {
    }
}

/**
 * [rekrutanForm Helper Save Global]
 * @param {object} [content] [Config After Save]
 * @return void
 */
$.fn.rekrutanForm = function(content) {
    var $e       = $(this);
    /** Ini Untuk Extensi Keperluan before = BeforeSend Semua Sama Kaya Ajax Jquery */
    $('span.help-block.error', $e).remove();
    $('.form-group', $e).removeClass('has-error');
    var _default = {
        confirmMessage : typeof $e.attr('data-confirm-message') !== 'undefined' ?  
        $e.attr('data-confirm-message') : null,
        confirmTitle   : typeof $e.attr('data-confirm-title') !== 'undefined' ?
        $e.attr('data-confirm-title') : null,
        url            : typeof $e.attr('action') !== 'undefined' ? $e.attr('action') : null,
        method         : typeof $e.attr('method') !== 'undefined' ? $e.attr('method') : 'POST' ,
        target         : typeof $e.attr('target-event') !== 'undefined' ? $e.attr('target-event') : null,
        model          : typeof $e.attr('target-model') !== 'undefined' ? $e.attr('target-model') : null,
        data           : $e.serializeArray(),
        async          : true,
        contentType    : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData    : true,
        formInput      : $e,
        success        : function (event, data) {},
        error          : function (event, data) {},
        before         : function (event) {}
    };
    var options = $.extend({},_default, content);
    var header = 'Konfirmasi !!!';
    var message = 'Apakah Ada Yakin ?';
    var opt = { 
        buttons: {
            'No': 'btn btn-danger',
            'Yes': 'btn btn-success'
        }
    };
    
    $.showQuestionDialog(header, message, opt, function(reaction) {
        if (reaction === 'Yes') {
            $.ajax({
                url: options.url,
                type: options.method,
                dataType : 'json',
                async: options.async,
                data: options.data,
                contentType : options.contentType,
                processData:options.processData,
                beforeSend : function() {

                },
                success : function(data) {
                    $.gritter.add({
                        title     : '<span class="ace-icon fa fa-check bigger-150" aria-hidden="true"></span> &nbsp; Proses Berhasil!',
                        text      : 'Data Berhasil Tersimpan',
                        sticky    : false,
                        class_name: 'gritter-success'
                    });
                    options.success(data);
                },
                error : function(data) {
                    var response = data.responseJSON;
                    $.each(response, function(index, val) {
                        var field = $('[name="'+ index +'"]',$e);
                        var _div = $('.error_' + index, $e);
                        var _group = field.closest('.form-group').find('div.input-group');
                        var _selectize = field.closest('.form-group').find('div.selectize-control');
                        var _select2 = field.closest('.form-group').find('.select2-container');
                        var manual_target = $('#error_' + index, $e);
                        field.closest('.form-group').addClass('has-error');
                        if (manual_target.length) {
                            manual_target.find('span.help-block.error').remove();
                            manual_target.html('<span class="help-block error"> ' + val[0] + ' </span>');
                        } else {
                          field.closest('.form-group').addClass('has-error').find('span.help-block.error').remove();
                          if (_group.length) {
                              _group.after('<span class="help-block error"> ' + val[0] + ' </span>');
                          } else if (_selectize.length) {
                              _selectize.after('<span class="help-block error"> ' + val[0] + ' </span>');
                          } else if (_select2.length) {
                              _select2.after('<span class="help-block error"> ' + val[0] + ' </span>');
                          } else if (_div.length) {
                              _div.after('<span class="help-block error"> ' + val[0] + ' </span>');
                          }
                          else {
                              field.after('<span class="help-block error"> ' + val[0] + ' </span>');
                          }
                        }
                    });
                    $.gritter.add({
                        title     : '<span class="ace-icon fa fa-exclamation-triangle bigger-150" aria-hidden="true"></span> &nbsp; Proses Gagal!',
                        text      : typeof response.message !== 'undefined' ? response.message :'Data Gagal Tersimpan',
                        sticky    : false,
                        class_name: 'gritter-error'
                    });
                }
            });
        }
    });
}

$.fn.delete = function (option) {
    var _this = $(this);
    var header = 'Konfirmasi !!!';
    var message = 'Apakah Ada Yakin Menghapus Data ?';
    var opt = { 
        buttons: {
            'No': 'btn btn-danger',
            'Yes': 'btn btn-success'
        }
    };
    var _default = {
        success : function (res) {
            console.log('success');
        },
        error : function (res) {
            console.log('Data Gagal di Simpan');
        }
    };
    var options = $.extend({}, _default, option);
    
    $.showQuestionDialog(header, message, opt, function(reaction) {
        if (reaction === 'Yes') {
            $.ajax({
                url: _this.data('url'),
                type: 'DELETE',
                dataType: 'json'
            })
            .success(function(response) {
                  $.gritter.add({
                      title     : '<span class="ace-icon fa fa-check bigger-150" aria-hidden="true"></span> &nbsp; Proses Berhasil!',
                      text      : response.message,
                      sticky    : false,
                      class_name: 'gritter-success'
                  });
                  options.success(response);
            })
            .error(function(response) {
              $.gritter.add({
                  title     : '<span class="ace-icon fa fa-exclamation-triangle bigger-150" aria-hidden="true"></span> &nbsp; Proses Gagal!',
                  text      : 'Data Tidak Dapat Di Hapus',
                  sticky    : false,
                  class_name: 'gritter-error'
              });
              options.error(error);
            });
        }
    });
}

//REMOTE MODAL
$(document).on('click', '[data-toggle="modal"]', function (event) {
    event.preventDefault();
    _this = $(this);
    url = _this.attr('href');

    if (typeof _this.data('url') != 'undefined')
        url = _this.data('url');

    modal = $(_this.data('target'));

    if (backdrop = _this.data('backdrop'))
        modal.data('backdrop', backdrop);
    if (width = _this.data('width'))
        modal.data('width', width);

    $('.modal-content', modal).empty();
    if (url) {
        if (url.charAt(0) != '#') {

            modal.removeClass('fade');
            modal.modal('show');

            $('body').modalmanager('loading');
            modal.load(url, null, function () {
                modal.modal();
                //modal.find('input').eq(1).focus();
                modal.modal('show');
            });
        }
    }
});