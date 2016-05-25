/**
 * Created by Bright on 5/22/2016.
 */

function findCustomer(query, searchBy, callback, form){

    if(form === undefined || !form){
        form = $('.finder-form');
    }

    if(query.length > 0){
        var processElement = form.find('.btn-submit');
        setProcess(processElement, '<i class="fa fa-spin fa-spinner"></i>');

        ajax({
            type: 'get',
            url: baseUrl() + '/finder',
            data: {
                model: 'customer',
                query: query,
                by: searchBy,
                like: 1
            },
            dataType: 'json',
            encode: true
        }, function(data){

            $('.search-results').removeClass('v-cloak--hidden');

            callback(data);

            cancelProcess(processElement, 'Search');
        }, function(response){
            //alert(response.responseText, 'danger');
        });
    }

}