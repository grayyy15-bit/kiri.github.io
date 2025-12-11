// ハンバーガーボタンとドロワー

$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});
// jQueryを書いた後、CSSを追加する。
// 初期画面でドロワーが閉じている状態にする。display:none;
// bodyにis-fixedクラスを付与して、overflow:hidden;でスクロールを固定する。
// ボタンにis-checkedクラスを付与して、ボタンの見た目を変える。background:url(閉じるアイコン); center center no-repeat;とbackground-size: 100% auto;を指定する。
// もう一度押されたら、ドロワーがスライドアップして閉じる。

