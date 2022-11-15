//모달 팝업---------------------------------------------------------------------------
function show() {
    document.querySelector(".background").className = "background show";
  }
  
  function close() {
    document.querySelector(".background").className = "background";
  }
  
  document.querySelector(".tr_modal").addEventListener("click", show);
  document.querySelector("#close").addEventListener("click", close);