$(document).ready(function () {
    
    $('.addFilmbtn').on('click', function () {
        $('#LabelfilmModal').html('Form Tambah Film');
        $('.footer-film button[type=submit]').html('Tambah');
        $('#idFilm').val("");
        $('#JudulFilm').val("");
        $('#Durasi').val("");
        $('#Sinopsis').val("");
        $('#FilmForm').attr('action', 'http://localhost/Cinematix/Film/addFilm');
    });
    
    $('.EditFilmModal').on('click', function () {
        $('#LabelfilmModal').html('Form Edit Film');
        $('.footer-film button[type=submit]').html('Update');
        $('#FilmForm').attr('action', 'http://localhost/Cinematix/Film/editFilm');

        const idFilm = $(this).data('id');

        $.ajax({
            url: 'http://localhost/Cinematix/Film/getEdit',
            data: { idFilm: idFilm },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#idFilm').val(data.idFilm);
                $('#JudulFilm').val(data.JudulFilm);
                $('#Durasi').val(data.Durasi);
                $('#Sinopsis').val(data.Sinopsis);
                $('#idlama').val(data.idFilm);
            }
        });
    });

    $('.addTeaterbtn').on('click', function () {
        $('#LabelteaterModal').html('Form Tambah Teater');
        $('.footer-teater button[type=submit]').html('Tambah');
        $('#idTeater').val("");
        $('#NamaTeater').val("");
        $('#TeaterForm').attr('action', 'http://localhost/Cinematix/Teater/addTeater');
    });

    $('.EditTeaterbtn').on('click', function () {
        $('#LabelteaterModal').html('Form Edit Teater');
        $('.footer-teater button[type=submit]').html('Update');
        $('#TeaterForm').attr('action', 'http://localhost/Cinematix/Teater/editTeater');

        const idTeater = $(this).data('teater_id');

        $.ajax({
            url: 'http://localhost/Cinematix/Teater/getEdit',
            data: { idTeater: idTeater },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#idTeater').val(data.idTeater);
                $('#NamaTeater').val(data.NamaTeater);
                $('#idlama').val(data.idTeater);
                console.log(data);
            }
        });
    });

    $('.addStudiobtn').on('click', function () {
        $('#LabelstudioModal').html('Form Tambah Studio');
        $('.footer-studio button[type=submit]').html('Tambah');
        $('#idStudio').val("");
        $('#NomorStudio').val("");
        $('#TipeStudio').val("");
        $('#StudioForm').attr('action', 'http://localhost/Cinematix/Studio/addStudio');
    });

    $('.EditStudiobtn').on('click', function () {
        $('#LabelstudioModal').html('Form Edit Studio');
        $('.footer-studio button[type=submit]').html('Update');
        $('#StudioForm').attr('action', 'http://localhost/Cinematix/Studio/editStudio');

        const idStudio = $(this).data('id');

        $.ajax({
            url: 'http://localhost/Cinematix/Studio/getEdit',
            data: { idStudio: idStudio },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#idStudio').val(data.idStudio);
                $('#NomorStudio').val(data.NomorStudio);
                $('#TipeStudio').val(data.TipeStudio);
                $('#NamaTeater').val(data.idTeater);
                $('#idlama').val(data.idStudio);
                console.log(data);
            }
        });
    });

});