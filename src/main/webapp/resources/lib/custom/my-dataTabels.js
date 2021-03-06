$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner =
        '<div class="loading-spinner" style="width: 200px; margin-left: -100px;">' +
        '<div class="progress progress-striped active">' +
        '<div class="progress-bar" style="width: 100%;"></div>' +
        '</div>' +
        '</div>';
// Setting DataTabels
$.fn.myTabel = function(option) {
    var _this       = $(this);
    // Setings Data Tabels
    var _dataFilter = typeof _this.data('filter') !== 'undefined' ? _this.data('filter') : true;
    var _order      = typeof _this.data('order') !== 'undefined' ? _this.data('order') : false;
    var _process    = typeof _this.data('process') !== 'undefined' ? _this.data('process') : true;
    var _ajax       = typeof _this.data('ajax-proces') !== 'undefined' ?  _this.data('ajax-proces') : true; 
    var _pagination = typeof _this.data('pagination') !== 'undefined' ? _this.data('pagination') : false;
    var _url        = typeof _this.data('source') !== 'undefined' ? _this.data('source') : null;

    var _default = {
        bProcessing    : _process,
        bServerSide    : _ajax,
        bFilter        : false,
        bLengthChange  : false,
        columns        : null,
        oLanguage      : {
            sEmptyTable  : '<div style="text-align:center;"> <b>Data Kosong</b> </div>',
            sZeroRecords : '<div style="text-align:center;"> <b>Data Kosong</b> </div>',
        },
        ajax           : {
            url    : _url,
            type   : 'POST',
            data   : function(data) {
                var formData = {};
                var filter = $(_dataFilter).serializeArray();
                $.each(filter,function(index, el) {
                    formData[el.name] = el.value;
                });
                var setting  = $.extend( {}, data, formData);
                return setting;
            }
        }   
    };

    // Merge Objeck
    var options = $.extend(true, _default, option);
    // Render DataTabel Bray
    var myTabel = _this.DataTable(options);
    return {
        reload : function(bool) {
            if(typeof bool !== 'undefined' || bool === 'false') {
                myTabel.draw(false);
            } else {
                myTabel.draw();
            }
        },
        reset : function() {
            var form = $(_dataFilter);
            form[0].reset();

            if($('.select2', form).length > 0) {
                $('.select2', form).select2('val', '');
            }
            this.reload();
        }
    }
}
