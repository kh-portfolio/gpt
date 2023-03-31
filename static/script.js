$("#gpt-button").click(function(){
    let title = $("#title").val();
    let category = $("#category").val();
    let word = parseInt($("#word").val());
    let question = `you are a professional novelist. Write a really short novel story with the following conditionsin japanese:
    タイトル: ${title}
    カテゴリー: ${category}
    文字数: ${word}`
    let loading= '作成中・・・';
   
    $("#chat-input").val('');
    $("#list-group").append(loading);

    $.ajax({
        type: "POST",
        url: "/",
        data: {'prompt':question},
        success: function(data){
            let gpt_data = '';
            gpt_data += `
            <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3">
                <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <p class="mb-0 opacity-75">${data.answer}</p>
                    </div>
                </div>
            </a>
            `;
            $("#list-group").append(gpt_data);
        } 
    });
});    
