// ＊ドロワーメニュを作ろう
  // 「Menu」をクリックすると
  // 新発売・おすすめ・期間限定のドロワーメニューを表示
  // 開閉時間の指定は不要
  // 「Menu」は、リンクとしての役割は不要

  // jQuery(".js-menu-toggle > .header-nav-link").on('click', function(e) {
  //   e.preventDefault(); // 「#menu」へのリンク動作を止める
  //   jQuery(this).next("#js-drawer-menu").toggle(); // 即時開閉（アニメーションなし）
  // });
//   要素の特定:
// jQuery(".js-menu-toggle > .header-nav-link")
// ：これは、.js-menu-toggleクラスを持つ要素の子要素で、.header-nav-linkクラスを持つ要素（つまり、メニューを開くためのリンク）を選択しています。

// クリックイベントの監視:
// .on('click', function(e) { ... })
// ：これは、選択した要素がクリックされたときに実行される処理を定義しています。

// デフォルト動作の停止:
// e.preventDefault();
// ：これは、クリックされた要素のデフォルトの動作をキャンセルします。
// このコードの場合、リンクをクリックしたときに、通常であればページが #menu にスクロールしたり、#menuというIDを持つ要素に移動したりするはずですが、preventDefault()を使うことで、その動きを止めています。



// ＊ページトップへ戻るボタンを付ける
  // トップから80pxスクロールしたら
  // 300ms（0.3秒）かけて
  // フェードイン・フェードアウトで表示・非表示
  // 表示してる間はボタンはページ右下に固定
  // ボタンを押したら500ms（0.5秒）かけてページトップへ戻る

//   スクロールイベントの監視
// jQuery(window).scroll(function() { ... });
// : これは、ウィンドウがスクロールされるたびに実行される処理を定義しています。

// 表示/非表示の制御
// if (jQuery(this).scrollTop() > 80) { ... } else { ... }
// : これは、スクロール量に応じて「トップに戻る」ボタンの表示/非表示を切り替えるための条件分岐です。
// jQuery(this).scrollTop(): 現在のスクロール位置（ページのトップからの距離）を取得します。
// 80: 80pxスクロールしたら、ボタンを表示します。
// jQuery("#backToTopBtn").fadeIn(300): #backToTopBtnというIDを持つ要素を300ミリ秒かけてフェードイン（表示）させます。
// jQuery("#backToTopBtn").fadeOut(300): #backToTopBtnというIDを持つ要素を300ミリ秒かけてフェードアウト（非表示）させます。

// クリックイベントの制御
// jQuery("#backToTopBtn").click(function() { ... });: これは、「トップに戻る」ボタンがクリックされたときに実行される処理を定義しています。
// jQuery('html, body').animate({ scrollTop: 0 }, 500);: これは、500ミリ秒かけてページを上部（scrollTop: 0）までアニメーションスクロールさせる処理です。
  jQuery(document).ready(function() {
  // スクロールイベント
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 80) { // 80pxスクロールしたら
      jQuery("#backToTopBtn").fadeIn(300); // フェードイン (300ms)
    } else {
      jQuery("#backToTopBtn").fadeOut(300); // フェードアウト (300ms)
    }
  });
  // クリックイベント
  jQuery("#backToTopBtn").click(function() {
    jQuery('html, body').animate({
      scrollTop: 0 // ページトップへ
    }, 500); // アニメーション時間 (500ms)
  });
});


// ＊モーダルで画像の拡大表示
  // メニュー一覧の画像をクリックすると
  // 縦横画面いっぱいに薄いグレーの背景ボックスを表示
  // その枠の中心に拡大されたメニュー写真を表示
  // 画面のどこかをクリックすると拡大写真と背景ボックスを非表示
  // アニメーションはフェードイン・フェードアウト
  // jQuery(".js-menu-img img").on("click", function() {
  //   const imgSrc = jQuery(this).attr("src"); // クリックした画像のパスを取得する
  //   jQuery(".js-modal-img").attr("src", imgSrc); // モーダルの画像にパスをセットさせる
  //   jQuery(".js-modal").fadeIn(200); // モーダルをふわっと表示させる
  // });

  // jQuery(".js-modal-close").on("click", function() {
  //   jQuery(".js-modal").fadeOut(200); // モーダルをふわっと非表示にする
  // });
