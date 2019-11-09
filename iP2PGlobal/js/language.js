var language={
    eng: {
        TRF: "Takaful Reserve Fund"

        },
    vie: {
        TRF : "Quỹ dự trữ Takaful"
    }    
};

if (windows.location.hash){
    if (window.location.hash === "#vie"){
        Takaful.textContent = language.vie.TRF;
    }
};
