$(function(){
    //送信ボタンを押したタイミングで各入力項目の文字数をカウント
    //「0文字」の項目が存在していた場合は送信処理を中断してエラーを表示
      const nameErrorHtml = `<p>お名前が入力されていません</p>`;
      const emailErrorHtml = `<p>メールアドレスが入力されていません</p>`;
      const contentErrorHtml = `<p>内容が入力されていません</p>`;
  

  $("#contact-form").on('submit',function(e){
      e.preventDefault();
      const name = $("#name").val();
      if (name.length == 0){
        $("#name-error").append(nameErrorHtml);
        $("#name").css("border-color","red");
      }
  });

  $("#contact-form").on('submit',function(e){
    e.preventDefault();
    const email = $("#email").val();
    if (email.length==0){
    $("#email-error").append(emailErrorHtml);
    $("#email").css("border-color","red");
    }
  });

  $("#contact-form").on('submit',function(e){
    e.preventDefault();
    const content = $("#content").val();
    if (content.length==0){
    $("#content-error").append(contentErrorHtml);
    $("#content").css("border-color","red");
    }
  });

//=====================================================================================
//最初はチェックボックスにチェックが入っていないのでdisabledを有効にしておく
  $('#submit').prop('disabled', true);
  // プライバシーポリシーに同意するのチェックボックスにチェックが入ったら、
  // 送信ボタンを有効化する(disabled属性を外す)
  $("input[type='checkbox']").on('click',function() {
    if ( $(this).prop('checked') == true ) {  //チェックがついたら
      $('#submit').prop('disabled', false);   //送信ボタンのdisabledを解除にする(有効化)
    } else {                                  //チェックが外れたら
      $('#submit').prop('disabled', true);    //送信ボタンのdisabledを有効にする(無効化)
    }
  });

//====================================================================================
//非同期でお問い合わせが保存されるようにする
  $("#contact-form").on("submit",function(e){
    e.preventDefault();
    const formData = new FormData(this);
    const url = $(this).attr('action');       //イベントが発生した要素のaction属性の値(フォーム先のurl)を取得
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      datatype: "json",
      processData: false,                    //dataに指定したオブジェクトをクエリ文字列に変換する役割。FormDataの時は適切な状態で送ることができるのでfalseにする
      contentType: false                     //サーバーにデータのファイル形式を伝えるヘッダ。こちらもFormDataの時は適切な状態で送ることができるのでfalseにする
    })
  });
});
