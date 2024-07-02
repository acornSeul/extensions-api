$(document).ready(function(){

    $("#initializeButton").click(function(){
        // 버튼 선택 후 해당 버튼 disabled 처리
        $("#initializeButton").prop('disabled', true);

        tableau.extensions.initializeAsync().then(function(){
            
            // 초기화 성공하면 대시보드 정보 get
            var dashboard = tableau.extensions.dashboardContent.dashboard;

            $("#resultBox").html("I'm running in dashboard named <strong>" + dashboard.name + "</strong>");
        }, function (err){
            
            // 초기화 에러나면 나올 문구
            $("resultBox").html("Error while Initializing: " + err.toString());
        })
    })
})