window.onload = function() {
    var scrollBtn = document.getElementById("scrollBtn");

    window.addEventListener("scroll", function() {
        if (document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};


new DataTable('#example', {
    info: false,
    ordering: false,
    paging: false,

    "language": {
        "lengthMenu": "Display _MENU_ records per page",
        "zeroRecords": "Resultado no encontrado",
        "info": "Showing page _PAGE_ of _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search": "Buscar:",
    }
    
});

new DataTable('#myTable', {
    info: false,
    ordering: false,
    paging: false,

    "language": {
        "lengthMenu": "Display _MENU_ records per page",
        "zeroRecords": "Resultado no encontrado",
        "info": "Showing page _PAGE_ of _PAGES_",
        "infoEmpty": "No records available",
        "infoFiltered": "(filtered from _MAX_ total records)",
        "search": "Buscar:",
    }
    
});