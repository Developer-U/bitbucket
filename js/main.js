'use strict';
$(document).ready(function(){    

    const addButton = $('#file')
         ,fileContain = $('.js-file')
         ,noFiles = $('.js-fileText')
         ,escapeButton = $('.js-escapeButton')
         ,popupOpen = $('.js-popupOpen')
         ,popupContainer = $('.js-popupContainer')
         ,popup = $('.js-popup');

    addButton.on('change', function(e){
        e.preventDefault();
        const fileName = $(this).val(); 
             
        noFiles.fadeOut(600);

        fileContain.append(`
            <div class="file__contain js-oneFile flex-start-between">
                <p class = "file__name">${fileName}</p>

                <button type = "submit" aria-label ="Удалить файл" class="file__delete js-fileDelete"></button>
            </div>
        `)       

    });

    fileContain.on('click', '.js-fileDelete', function(e){
        event.preventDefault();

        const item = $(this).closest('.js-oneFile');       

        $(item).remove();

        const items = fileContain.children('.js-oneFile')
             ,quantity = items.length;

        if(quantity == 0) {
            noFiles.fadeIn(600);
        }
        
    });   
    
    
    popupOpen.on('click', function(e){
        e.preventDefault();               

        $(popupContainer).fadeIn(800);
        $(popup).fadeIn(800);

    });

    popupContainer.on('click', function(e){
      if(e.target == this) {
        $(this).fadeOut(600);
      }
    });

    escapeButton.on('click', function(e){
        e.preventDefault();

        $(popupContainer).fadeOut(600);
    });




    // Логика смены страницы

    const changePageButton = $('.js-buttonChange')
    ,changeText = $('.js-text')
    ,pagePrivate = $('.js-page1')
    ,pagebusiness = $('.js-page2');

    changePageButton.add('.js-buttonChange2').on('click', function(e){
        e.preventDefault();

        function appearanceBusinessPage() {
            $(pagebusiness).fadeIn(800);
        }

        function appearancePrivatePage() {
            $(pagePrivate).fadeIn(800);
        }

        if($(changeText).attr('data-click') == 'private') {
            $(changeText).attr('data-click', 'business');

            $('.js-buttonChange2').html(`<p class="header__text js-text"
                        title = "Можно кликнуть"
                        data-click = "private">К СПИСКУ ФИЗИЧЕСКИХ ЛИЦ
                        <small class = "additional">(кликабельно)</small></p>`);

            $(pagePrivate).slideToggle(600, appearanceBusinessPage);
        }

        else {
            $(changeText).attr('data-click', 'private');

            $('.js-buttonChange2').html(`<p class="header__text js-text"
                         title = "Можно кликнуть"
                         data-click = "private">К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
                         <small class = "additional">(кликабельно)</small></p>`);

            $(pagebusiness).slideToggle(600, appearancePrivatePage);         
        }
    });

});