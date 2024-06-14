$(document).ready(function(){
    var personas=[
        { id: 1, nombre: 'Alberto Rodríguez', descripcion: 'Arquitecto', imagen: 'https://img.freepik.com/fotos-premium/retrato-hombre-negocios-expresion-cara-seria-fondo-estudio-espacio-copia-bengala-persona-corporativa-enfoque-pensamiento-duda-mirada-facial-dilema-o-concentracion_590464-84924.jpg' },
        { id: 2, nombre: 'Jorge Martínez', descripcion: 'Programador', imagen: 'https://img.freepik.com/foto-gratis/disparo-cabeza-hombre-atractivo-sonriendo-complacido-mirando-intrigado-pie-sobre-fondo-azul_1258-65468.jpg' },
        { id: 3, nombre: 'Fernando Alonso', descripcion: 'Piloto de F1', imagen: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/02/fernando-alonso-2955486.jpg?tf=3840x' },
        { id: 4, nombre: 'Leo Messi', descripcion: 'Jugador de futbol', imagen: 'https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png' },
        { id: 5, nombre: 'Leonardo DiCaprio', descripcion: 'Actor', imagen: 'https://cdn.milenio.com/uploads/media/2020/11/11/una-de-las-polemicas-mas.jpg' },
        { id: 6, nombre: 'Adrian Mateos', descripcion: 'Jugador de póker', imagen: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/01/23/15167127243872.jpg' },
        { id: 7, nombre: 'Elon Musk', descripcion: 'Empresario', imagen: 'https://media.revistavanityfair.es/photos/60e83445c0a99700e552a30d/1:1/w_354%2Cc_limit/167010.jpg' },
        { id: 8, nombre: 'Novak Djokovic', descripcion: 'Jugador de tenis', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsG6_XYyd-OkbyDqwlNl5OECRFGALuOQo28kBz-avWSQ&s' },
        { id: 9, nombre: 'David Muñoz', descripcion: 'Chef', imagen: 'https://hips.hearstapps.com/hmg-prod/images/david-munoz-chef-1588934917.jpg' },
    ];

    function filtrarPersonas(personas) {
        var cartasContainer = $('.cartas');
        cartasContainer.empty(); 
        personas.forEach(function(persona) {
            var card = `
                <div class="card">
                    <img src="${persona.imagen}" width="50px">
                    <div class="container" id="${persona.id}">
                        <h3><b>${persona.nombre}</b></h3>
                        <p>${persona.descripcion}</p>
                    </div>
                    <button class="deletebutton" data-id="${persona.id}">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg==" alt="Eliminar">
                    </button>
                </div>
            `;
            cartasContainer.append(card);
        });
    }

    filtrarPersonas(personas);
    $('#searchButton').click(function() {
        var searchText = $('#searchInput').val().toLowerCase();
        var filteredPersonas = personas.filter(function(persona) {
            return persona.nombre.toLowerCase().includes(searchText);
        });
        filtrarPersonas(filteredPersonas);
    });

    $(document).on('click', '.deletebutton', function() {
        var id = $(this).data('id');
        personas = personas.filter(function(persona) {
            return persona.id !== id;
        });
        filtrarPersonas(personas);
    });

    $('#addButton').click(function(){
        $('#agregar').toggle();
    });

    $('#submitAdd').click(function(){
        var nombre = $('#nombre').val();
        var descripcion = $('#descripcion').val();
        var imagen = $('#imagen').val();
        var id = personas.length ? personas[personas.length - 1].id + 1 : 1;
        
        if (nombre && descripcion && imagen){
            personas.push({ id, nombre, descripcion, imagen });
            filtrarPersonas(personas);
            $('#nombre').val('');
            $('#descripcion').val('');
            $('#imagen').val('');
            $('#agregar').hide();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
 