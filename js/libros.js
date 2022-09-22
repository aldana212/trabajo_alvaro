$(document).ready(function(){
   
    //agregando clase activa al primer enlace
    
    $('.categoria .categoria_Items[category="all"]').addClass('parado');
    
    //Filtrando productos

    $('.categoria_Items').click(function(){
        var catproduct = $(this).attr('category');
        
        //agregando clase activa al enlace seleccionado

        $('.categoria_Items').removeClass('parado');
        $(this).addClass('parado');

        //ocultando libros

        $('.card').css('transform', 'scale(0)');
     function hideProduct(){
           $('.card').hide();
     } setTimeout(hideProduct,400);
        

        //mostrando libros
        function showProduct(){
            $('.card[category="'+catproduct+'"]').show();
         $('.card[category="'+catproduct+'"]').css('transform', 'scale(1)');

        } setTimeout(showProduct,400)
       


    });
    
    //mostrando todos los libros

    $('.categoria_Items[category="all"]').click(function(){
        function showall(){ 
        $('.card').show();
        $('.card').css('transform', 'scale(1)');
        }setTimeout(showall,400);
        
    });

    
});