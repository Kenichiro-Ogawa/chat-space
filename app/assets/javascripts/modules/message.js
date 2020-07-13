$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = `<div class="tweet-block" data-message-id=${message.id}>
          <div class="tweet-block__content">
            <div class="tweet-block__content--name">
              ${message.user_name}
            </div>
            <div class="tweet-block__content--date">
              ${message.created_at}
            </div>
          </div>
          <div class="tweet-block__message">
            <p class="message__content">
              ${message.content}
            </p>
            <img class="message__img" src="${message.image}">
          </div>
        </div>`;
      return html;
    } else {
      let html = `<div class="tweet-block" data-message-id=${message.id}>
          <div class="tweet-block__content">
            <div class="tweet-block__content--name">
              ${message.user_name}
            </div>
            <div class="tweet-block__content--date">
              ${message.created_at}
            </div>
          </div>
          <div class="tweet-block__message">
            <p class="message__content">
              ${message.content}
            </p>
          </div>
        </div>`;
      return html;
    }
  }

  $(".form__contents").on("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data) {
        let html = buildHTML(data);
        $(".Chat-main__message-list").append(html);
        $(".Chat-main__message-list").animate({
          scrollTop: $(".Chat-main__message-list")[0].scrollHeight,
        });
        $("form")[0].reset();
        $(".form__submit--btn").prop("disabled", false);
      })
      .fail(function () {
        alert("メッセージ送信に失敗しました");
      });
  });
});
