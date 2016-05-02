$('#btn_prueba').click(function(ev){
              ev.preventDefault();

              var nombre = $('input[name="nombre_usuario"]').val();
              if(nombre.length < 1 || nombre.length >15){
                $('input[name="nombre_usuario"]').prev().show();
                $('input[name="nombre_usuario"]').addClass('error');
                $('input[name="nombre_usuario"]').focus();
              }else{
                $('input[name="nombre_usuario"]').prev().hide();
                $('input[name="nombre_usuario"]').removeClass('error');
              }

              var email_usuario = $('input[name="email_usuario"]').val();
              if(email_usuario.length == 0 ){
                $('input[name="email_usuario"]').prev().show();
                $('input[name="email_usuario"]').addClass('error');
              }

              var mobil = $('input[name="mobil"]').val();
              if(nombre.length < 9){
                $('input[name="mobil"]').prev().show();
                $('input[name="mobil"]').addClass('error');
              }
          });