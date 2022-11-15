function login() {
  $.ajax({
    type:"POST",                
    url:"user_db_matching",
    async: false,    
    dataType:"json",
    data: {
      id: $("#user_id").val(),
      pass: $("#user_password").val()
    },
    success:function(data){
      if(data.length!=0){
        location.href='/main';
      } else {
        alert("입력하신 정보가 일치하지 않습니다.");
      }
    },
    error : function(e) {
        console.info(e);
        console.info("Error");
    },
    done : function(e) {
        console.info("DONE");
    }
  })
}

$("#login_btn").click(function(){
  login();
});